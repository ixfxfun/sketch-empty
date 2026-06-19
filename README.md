# sketch-empty

This is an empty Typescript-based ixfx sketch.

[Open as a Codespace](https://github.com/codespaces/new?template_repository=ixfxfun/sketch-empty)

Place and edit your sketches in the `sketches` folder. Compiled code is automatically placed in `public`, so don't edit anything in there directly as it will get overwritten.

The initial sketch is simply `index.html` and `script.ts`


# Running on you local computer?

Need to install Node.js? [Here's a guide](https://ixfx.fun/reference/installing-node/).

First install the dependencies:
```js
npm install
```

And later on, use the following to start the Vite server
```js
npm start
```

You can also build the sketch to static files, for example to deploy to GitHub pages:
```js
npm build
```

## Creating a new sketch

This will make a copy of the repository.

Assuming you have Node.js installed:

```
npx degit git@github.com:ixfxfun/sketch-empty.git
cd sketch-empty
npm install
```

And then boot up the Vite server:
```js
npm start
```

# Running on Codespaces?

When opening this repo as a Codespace, it will take a few minutes the first time. When everything has settled, open a terminal in the Codespace and run:

```js
npm start
```

# Websockets

The provide `ws-*` demos show how to use the in-built websocket server. This works when you're running the server on your machine.

With the server running, open `http://localhost:5123/ws-index.html`.


