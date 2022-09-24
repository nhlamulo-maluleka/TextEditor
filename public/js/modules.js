const changeActiveLine = () => {
    const prevLine = document.querySelector(".active");
    if (prevLine) {
        const last = prevLine.children.length;
        prevLine.children[last - 1].remove();
        prevLine.classList.remove("active");
    }
    return prevLine;
}

const createNewLine = () => {
    let count = 0;
    const container = document.querySelector(".container");
    return () => {
        changeActiveLine();

        const line = document.createElement("div");
        line.classList.add("line");
        line.classList.add("active");

        ++count;
        const lineNumber = document.createElement("div");
        lineNumber.classList.add("lineNumber");
        lineNumber.contentEditable = false;
        lineNumber.innerText = count;

        return () => {
            const lineContent = document.createElement("div");
            lineContent.classList.add("lineContent");

            return () => {
                line.append(lineNumber);
                line.append(lineContent);
                container.appendChild(line);
            };
        };
    };
};

// Instantiating the closure function | method
const newLine = createNewLine();

export { newLine, changeActiveLine };