import { Remote } from "@clinth/remote";

const websocket = `${window.location.protocol === `https:` ? `wss` : `ws`}://${window.location.host}/ws`;

const settings = Object.freeze({
  remote: new Remote({
    allowNetwork: true,
    websocket,
  }),
});

// Called when there is a pointermove event
function onPointerMove(event: PointerEvent) {
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
}

function setup() {
  // Listen for pointermove events
  document.addEventListener(`pointermove`, onPointerMove);

  // Prevent zoom gestures
  document.addEventListener(`wheel`, (event) => {
    event.preventDefault();
  }, { passive: false });
}
setup();
