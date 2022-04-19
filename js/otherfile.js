export const writeToDoc = () => {
    const textNode = document.createTextNode("Hello from otherfile.ts");
    document.body.appendChild(textNode);
};
