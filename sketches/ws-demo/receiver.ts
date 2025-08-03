import { Remote } from "@clinth/remote/dist/index.mjs";

const settings = Object.freeze({
  remote: new Remote({
    allowNetwork: true,
    // eg if you use a Codespaces-hosted server
    websocket: `wss://${window.location.host.replace(`8080`, `8081`)}/ws`,
  }),
});

const setup = () => {
  const { remote } = settings;
  remote.onData = (d) => {
    console.log(d);
    setText(`remote-data`, JSON.stringify(d));
  };
};
setup();

function setText(id, message) {
  const element = /** @type HTMLElement */(document.querySelector(`#${id}`));
  if (element && element.textContent !== message) {
    element.textContent = message;
  }
}
