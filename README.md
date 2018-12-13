# ncc typescript server

Using Zeit's [ncc](https://github.com/zeit/ncc) to compile a TypeScript server into a single JS file.

## Usage

### Install dependencies

```
npm i
```

### Build

```
npm run build
```

or, build from command line directly:

**Install ncc**

```
npm i -g @zeit/ncc
```

**Build**

```
ncc build index.ts -o dist
```
