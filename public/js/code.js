import { newLine } from './modules.js'
import { styleHTML, container } from './htmlStyle.js';

// Add initial Line!
newLine()()();

container.addEventListener("keyup", (e) => {
    if (e.code === "Enter") {
        newLine()()();
    }
    styleHTML(document.querySelector(".active"));
});

container.addEventListener('click', ({path}) => {
    const lastActiveLine = document.querySelector(".active")
    lastActiveLine.classList.remove("active");
    const node = path[0];
    node.parentNode.classList.add('active');
    styleHTML(node.parentNode);
})
