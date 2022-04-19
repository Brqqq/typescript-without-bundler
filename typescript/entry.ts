import { writeToDoc } from "./otherfile";

const textNode = document.createTextNode("Hello from entry.ts");
document.body.appendChild(textNode);

writeToDoc();