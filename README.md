# Pocketbase + Mantine template

Full-stack application template using pocketbase as backend
and mantine as frontend.

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

## Pocketbase

### Launch

```sh
make pb
```

### Credentials

| Field | Value               |
| ----- | ------------------- |
| Email | `admin@sewera.dev`  |
| Pass  | `panda-blog-scorer` |

### URLs

- REST API: <http://localhost:8090/api/>
- Admin UI: <http://localhost:8090/_/>
