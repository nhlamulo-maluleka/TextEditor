import { newLine } from './modules.js'
import { styleHTML, container } from './htmlStyle.js';
import { getRootFiles } from "./api.js"

const treeNode = document.getElementById('rootTreeNode')
const newFile = document.getElementById("newFile")
const newFolder = document.getElementById("newFolder")

// Add initial Line!
newLine()()();

getRootFiles()
    .then(res => res.json())
    .then(files => {
        files.forEach(file => {
            const list = document.createElement('li')
            list.innerHTML = file;
            treeNode.appendChild(list);
        })
    })

container.addEventListener("keyup", (e) => {
    if (e.code === "Enter") newLine()()();
    // styleHTML(document.querySelector(".active"));
});

container.addEventListener('click', ({ path }) => {
    const lastActiveLine = document.querySelector(".active")
    lastActiveLine.classList.remove("active");
    const node = path[0];
    node.parentNode.classList.add('active');
    // styleHTML(node.parentNode);
})

newFile.addEventListener("click", async (e) => {
    console.log([await window.showDirectoryPicker()]);
    // let [fileHandler] = await window.showOpenFilePicker();
    // const file = await fileHandler.getFile();
    // console.log(file)
})