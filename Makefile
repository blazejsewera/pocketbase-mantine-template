PB_SRC=pocketbase.go
PB_EXE=pocketbase

.PHONY: pb

pb-build: $(PB_EXE)

$(PB_EXE): $(PB_SRC)
	go build -o $(PB_EXE) $(PB_SRC)

pb: pb-build
	./$(PB_EXE) serve
