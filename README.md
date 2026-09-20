# sketch-empty

This is an (almost) empty Typescript-based ixfx sketch.

The initial sketch is found under `sketches`.
* `index.html`: HTML page
* `script.ts`: Main behaviour
* `state.ts`: State type, initialisation and updating
* `style.css`: Styling for HTML

[Edit your browser](https://github.com/codespaces/new?template_repository=ixfxfun/sketch-empty)

Place and edit your sketches in the `sketches` folder. Compiled code is automatically placed in `public`, so don't edit anything in there directly as it will get overwritten.


# Running on you local computer?

Need to install Node.js? [Here's a guide](https://ixfx.fun/reference/installing-node/).

First install the dependencies:

```
npm install
```

And later on, use the following to start the Vite server

```
npm start
```

You can also build the sketch to static files, for example to deploy to GitHub pages. This builds the sketch to the `public/` folder.

```
npm run build
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

```
npm start
```

# Running on Codespaces?

There's a [guide here](https://ixfx.fun/guides/online/codespace/)

# Websockets

The provide `ws/ws-*` demos show how to use the in-built websocket server. This works when you're running the server on your machine. Copy the contents of the `ws` folder to `sketches` to try it out.

With the server running, open `http://localhost:5123/ws-index.html`.

(if you're running on something like Codespaces, use the public URL it generates for you)


