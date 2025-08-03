import { Remote } from "@clinth/remote/dist/index.mjs";

const settings = Object.freeze({
  remote: new Remote({
    allowNetwork: true,
    websocket: `wss://${window.location.host.replace(`8080`, `8081`)}/ws`,
  }),
});

// Called when there is a pointermove event
const onPointerMove = (event) => {
  event.preventDefault();

  const { remote } = settings;
  // Data to broadcast
  const d = {
    x: event.x / window.innerWidth,
    y: event.y / window.innerHeight,
    pointerId: event.pointerId,
    movementX: event.movementX / window.innerWidth,
    movementY: event.movementY / window.innerHeight,
    pressure: event.pressure,
  };
  remote.broadcast(d);
};

const setup = () => {
  // Listen for pointermove events
  document.addEventListener(`pointermove`, onPointerMove);

  // Prevent zoom gestures
  document.addEventListener(`wheel`, (event) => {
    event.preventDefault();
  }, { passive: false });
};
setup();
