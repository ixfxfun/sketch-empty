import { Remote } from "@clinth/remote";

const websocket = `${window.location.protocol === `https:` ? `wss` : `ws`}://${window.location.host}/ws`;

const settings = Object.freeze({
  remote: new Remote({
    allowNetwork: true,
    websocket,
  }),
});

function setup() {
  const { remote } = settings;
  remote.onData = (d) => {
    console.log(d);
    setText(`remote-data`, JSON.stringify(d));
  };
}
setup();

function setText(id: string, message: string) {
  const element = document.querySelector(`#${id}`);
  if (element && element.textContent !== message) {
    element.textContent = message;
  }
}
