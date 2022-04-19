import { writeToDoc } from "./otherfile.js";
const textNode = document.createTextNode("Hello from entry.ts");
document.body.appendChild(textNode);
writeToDoc();
