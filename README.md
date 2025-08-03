# sketch-empty

This is an empty Typescript-based ixfx sketch.


# Running on Codespaces?

When opening this repo as a Codespace, everything should run after a few moments.

## Websockets

To use websockets, open a terminal in the Codespace and run:

```js
npm run ws
```

This will open another port (8081), make sure you set that to 'Public' under the Ports section at the bottom.

Test it's working using the provided 'ws-demo' sketch.

# Running on you local computer?

## Creating a new sketch

Assuming you have Node.js installed:

```
npx degit git@github.com:ixfxfun/sketch-empty.git
cd sketch-empty
npm install
```

## Running

To run a dev server that automatically compiles:
```
npm run start
```

Open up `http://localhost:6600`

## Building

Files will be built to `dist/`. These can be served using a Five/Live-Server or uploaded to a web-host.

```
npm run build
```


