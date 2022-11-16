GO:=$(shell go version 2>/dev/null)

PB_SRC=pocketbase.go
PB_EXE=pocketbase

UI=ui
DIST=dist

.DEFAULT_GOAL := workspace
.PHONY: workspace print-help-ui print-help-go start dev pb astro clean build ui-build test test-update s d a c b t tu

s: start
d: dev
a: astro
c: clean
b: build
t: test
tu: test-update

workspace: print-help-ui print-help-go deps

print-help-ui:
ifneq ($(NVM_DIR),"")
	@echo '> nvm installed, run `nvm install` and `nvm use` in your shell'
	@echo '> make sure to have yarn installed, run `npm -g i yarn`'
else ifneq ("$(wildcard $(HOME)/.nvm/nvm.sh)","")
	@echo '> nvm installed, run `nvm install` and `nvm use` in your shell'
	@echo '> make sure to have yarn installed, run `npm -g i yarn`'
else
$(error nvm not installed, consider installing it or install latest LTS node.js manually)
endif

print-help-go:
ifdef GO
	@echo "> go installed"
	@echo "> $(shell go version)"
else
$(error go not installed, install version specified in 'go.mod' or later)
endif

deps: deps-ui deps-go

deps-ui:
	@cd ui; yarn
	@echo "> deps for ui installed"

deps-go:
	@go mod download
	@echo "> deps for go installed"

start: build
	@$(MAKE) pb

dev: pb astro # remember to start with -j2 (`make -j2 dev`)

pb: $(PB_EXE)
	@echo "> starting $(PB_EXE)"
	@./$(PB_EXE) serve

astro:
	@echo "> starting Astro in dev mode"
	@cd ui; yarn dev

clean:
	@rm -f $(PB_EXE)
	@rm -rf $(UI)/$(DIST)
	@echo "> build files cleaned"

build: ui-build $(PB_EXE)

$(PB_EXE): $(PB_SRC)
	@go build -o $(PB_EXE) $(PB_SRC)
	@echo "> $(PB_EXE) built"

ui-build:
	@cd ui; yarn build
	@echo "> $(UI)/$(DIST) built"

test:
	@cd ui; yarn test

test-update:
	@cd ui; yarn test:update
