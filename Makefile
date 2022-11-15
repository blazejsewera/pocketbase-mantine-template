PB_SRC=pocketbase.go
PB_EXE=pocketbase

.PHONY: pb

pb-build: $(PB_EXE)

$(PB_EXE): $(PB_SRC)
	@go build -o $(PB_EXE) $(PB_SRC)
	@echo "> $(PB_EXE) built"

pb: $(PB_EXE)
	@echo "> starting $(PB_EXE)"
	@./$(PB_EXE) serve
