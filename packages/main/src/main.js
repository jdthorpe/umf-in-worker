import remixRunRouter from "@remix-run/router";
console.log("main: typeof remixRunRouter", typeof remixRunRouter);

new Worker(new URL("./worker.js", import.meta.url));
