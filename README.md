# Pocketbase, Astro, React, and Mantine template

Full-stack application template using Pocketbase as backend,
and Astro + React + Mantine combo as frontend.


## Cheat sheet

- `make` — download all dependencies and set up workspace;
- `make -j2 d` — full-stack development servers;
- `make t` — ui component unit tests;
- `make tu` — ui component update Jest snapshots;
- `make -j2 b` — build `ui/dist` and Pocketbase simultaneously;
- `make s` — run Pocketbase serving `ui/dist` under `/`;
- `make a` — run only frontend Astro development server;
- `make c` — clean all dist files (`ui/dist` and `./pocketbase`).

## Prerequisites

- Make:
  - Linux — should be already installed,
    if not, install package:
    [Arch Linux](https://archlinux.org/packages/core/x86_64/make/),
    [Ubuntu](https://packages.ubuntu.com/search?keywords=make&searchon=names),
    [Any distro (pkgs.com)](https://pkgs.org/download/make),
  - macOS — should be already installed,
    an alternative would be:
    [GNU Make for macOS](https://formulae.brew.sh/formula/make),
  - [Windows](https://stackoverflow.com/questions/32127524/how-to-install-and-use-make-in-windows);
- [Go](https://go.dev/dl/) `>=1.18` (`>=1.19` on Windows);
- [Node.js](https://nodejs.org/en/download/) `16.x` or later,
  - Using a node version manager (nvm) is advised:
    - [POSIX (Linux/macOS)](https://github.com/nvm-sh/nvm),
    - [Windows](https://github.com/coreybutler/nvm-windows).


## Quick start

The following command will open a dev Astro server
with hot reload, and a Pocketbase server alongside it.

```sh
make -j2 dev
```

or `make -j2 d` for short.

The following will only build and run the Pocketbase executable.

```sh
make pb
```

The following will build the static _dist_ Astro package,
and run a Pocketbase server that serves it under the root path (`/`).

```sh
make start
```

or `make s` for short.

It is an equivalent of:

```sh
make build pb
```

or `make b pb` for short.

The following command will unit test the ui components using [Jest](https://jestjs.io/).

```sh
make test
```

or `make t` for short.

To update the snapshots when running component unit tests, run:

```sh
make test-update
```

or `make tu` for short.

To clean all dist files, i.e.: `ui/dist` and `./pocketbase`, run:

```sh
make clean
```

or `make c` for short.

### Credentials

| Field | Value               |
| ----- | ------------------- |
| Email | `admin@sewera.dev`  |
| Pass  | `panda-blog-scorer` |

### Default URLs

- Astro DEV server: <http://localhost:3000/>
- Static UI served by Pocketbase: <http://localhost:8090/>
- REST API: <http://localhost:8090/api/>
- Admin UI: <http://localhost:8090/_/>


## Further reading

- [Available recipes in Makefile](./Makefile);
- [Pocketbase documentation](https://pocketbase.io/docs);
- [Pocketbase JS/TS SDK](https://github.com/pocketbase/js-sdk);
- [Astro documentation](https://docs.astro.build/en/getting-started/), especially:
  - [Islands (partial hydration)](https://docs.astro.build/en/concepts/islands/),
  - [State sharing between islands](https://docs.astro.build/en/core-concepts/sharing-state/),
  - [Nanostores library](https://github.com/nanostores/nanostores),
  - [Routing](https://docs.astro.build/en/core-concepts/routing/),
  - [Page layouts](https://docs.astro.build/en/core-concepts/layouts/),
  - [Project structure](https://docs.astro.build/en/core-concepts/project-structure/);
- []
