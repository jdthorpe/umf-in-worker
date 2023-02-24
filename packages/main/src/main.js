import react from "react";

console.log("main says: typeof react", typeof react);

new Worker(new URL("./worker.js", import.meta.url));
