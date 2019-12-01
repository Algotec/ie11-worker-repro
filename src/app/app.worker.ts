/// <reference lib="webworker" />
import 'core-js';
addEventListener('message', ({ data }) => {
  const response = `worker response to ${data}`;
  postMessage(response);
});
