console.log("hi from the worker");
// import { loadComponents } from "./utils/loadComponent";
import { get_count } from "counter";
console.log("get_count", get_count());

// (async function main() {
//   postMessage(`Hello from the main worker: (count = ${get_count()})`);
//   const [{ remoteLogger }] = await loadComponents([
//     {
//       remote: "remote",
//       sharedScope: "default",
//       module: "./remote-logger",
//       url: "http://localhost:3002/remoteEntry.js",
//     },
//   ])();

//   postMessage(`Hello from the main worker: (count = ${get_count()})`);
//   // remoteLogger();
// })();
