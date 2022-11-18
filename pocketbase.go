package main

import (
	"errors"
	"log"
	"os"

	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/cmd"
	"github.com/pocketbase/pocketbase/core"
	"github.com/spf13/cobra"
)

func main() {
	app := pocketbase.New()
	app.RootCmd.AddCommand(serveWithAddrFromJSONCommand(app))

	setLogger()
	serveStatic(app)

	if err := app.Start(); err != nil {
		log.Fatal(err)
	}
}

func serveWithAddrFromJSONCommand(app *pocketbase.PocketBase) *cobra.Command {
	serve := cmd.NewServeCommand(app, true)
	serve.PersistentFlags().Set("http", "localhost:8090") // get from config JSON
	return serve
}

func setLogger() {
	log.Default().SetFlags(0)
}

func serveStatic(app *pocketbase.PocketBase) {
	staticServePath := "/"
	uiDist := "ui/dist"
	app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
		if err := checkForUIDist(uiDist); err != nil {
			logWarn("ui: " + err.Error())
			return nil
		}
		logInfo("ui: serving at " + staticServePath)
		e.Router.Static(staticServePath, uiDist)
		return nil
	})
}

func checkForUIDist(path string) error {
	if _, err := os.Stat(path); errors.Is(err, os.ErrNotExist) {
		return errors.New("not compiled: " + path + " directory not found (try to run `make build`)")
	}
	return nil
}

func logWarn(msg string) {
	log.Default().Println(">> warn: " + msg)
}

func logInfo(msg string) {
	log.Default().Println(">> info: " + msg)
}
