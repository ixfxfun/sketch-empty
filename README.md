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

When opening this repo as a Codespace, it will take a few minutes the first time. 

When everything has settled, open a terminal in the Codespace and run:

```
npm install
```

This will ensure the necessary packages are installed in the online virtual machine.

When you are ready to start the server:
```
npm start
```

You might see a popup in the bottom-right of your window, saying the port is available. Click 'Make public' if this appears, otherwise 'Open in browser'.

In the footer of VS Code, you'll see a radio tower icon. Click on that to open the 'Ports' panel. Find the row with port 5173. Check the visibility column and see if it says 'Private'. If so, right-click, go 'Port Visibility > Public'.

Over the URL, you'll see a globe icon. Click this, and you should see a long, random-looking URL that ends in 'github.dev'. While your server is running, this should work to open your sketch from any device.


# Websockets

The provide `ws/ws-*` demos show how to use the in-built websocket server. This works when you're running the server on your machine. Copy the contents of the `ws` folder to `sketches` to try it out.

With the server running, open `http://localhost:5123/ws-index.html`.


