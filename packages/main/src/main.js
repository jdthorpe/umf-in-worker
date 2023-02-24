import { get_count } from "counter";
console.log("get_count", get_count());

const messagesEl = document.getElementById("messages");

const worker = new Worker(new URL("./worker.js", import.meta.url));

worker.addEventListener("message", ({ data }) => {
  messagesEl.innerText += `${data}\n`;
});
