# sketch-empty

This is an empty Typescript-based ixfx sketch.

[Open as a Codespace](https://github.com/codespaces/new?template_repository=ixfxfun/sketch-empty)

# Running on Codespaces?

When opening this repo as a Codespace, it will take a few minutes the first time. When everything has settled, open a terminal in the Codespace and run:

```js
npm start
```

Make your sketches under the 'sketches' directory. Copy 'sketch-0' as a starter. Ensure you add a link to your sketch in `sketches/index.html`.

## Websockets

To use websockets, open a terminal in the Codespace and run:

```js
npm run ws
```

This will open another port (8081). Go to the 'Ports' tab in the bottom panel of Codespaces, and make sure both have 'Visibility' set to 'Public'.

Test it's working using the provided 'ws-demo' sketch.

# Running on you local computer?

## Creating a new sketch

Assuming you have Node.js installed:

```
npx degit git@github.com:ixfxfun/sketch-empty.git
cd sketch-empty
npm install
```

and then follow the same instructions above for Codespaces.

