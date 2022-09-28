var nextLineNode = null;

const changeActiveLine = () => {
    const prevLine = document.querySelector(".active");

    if (prevLine) {
        nextLineNode = prevLine.lastChild;
        prevLine.lastChild.remove();
        prevLine.classList.remove("active");
    }
    return prevLine;
}

const updateLineNumbers = node => {
    while (node) {
        const updateNumber = parseInt(node.dataset.line) + 1;
        node.dataset.line = updateNumber;
        node.firstChild.innerText = updateNumber;
        node = node.nextSibling;
    }
}

const createNewLine = () => {
    const container = document.querySelector(".container");

    return () => {
        const node = changeActiveLine();
        const line = document.createElement("div");
        line.classList.add("line");
        line.classList.add("active");

        // Line numbering handler...
        if (!node) line.dataset.line = 1;
        else line.dataset.line = parseInt(node.dataset.line) + 1;

        const lineNumber = document.createElement("div");
        lineNumber.classList.add("lineNumber");
        lineNumber.contentEditable = false;
        lineNumber.innerText = line.dataset.line;

        return () => {
            const lineContent = document.createElement("div");
            lineContent.classList.add("lineContent");
            if(nextLineNode) lineContent.innerText = nextLineNode.innerText;

            return () => {
                line.appendChild(lineNumber);
                line.appendChild(lineContent);

                if (node?.nextSibling) {
                    container.insertBefore(line, node.nextSibling);

                    /**
                     * Using LinkedList to update line numbers
                     * --------------------------------------------------------------
                     * I was able to solve this challenge using javascript's hoisting,
                     * As my first attempt with this approach was not successful!!  
                     * --------------------------------------------------------------
                     */
                    updateLineNumbers(line.nextSibling);
                }
                else container.appendChild(line);
            };
        };
    };
};

// Instantiating the closure function | method
const newLine = createNewLine();

export { newLine, changeActiveLine };