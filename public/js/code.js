import { newLine } from './modules.js'
import { container } from './htmlStyle.js';
import { getRootFiles } from "./api.js"

const treeNode = document.getElementById('rootTreeNode')
const newFile = document.getElementById("newFile")
// const newFolder = document.getElementById("newFolder")

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
});

container.addEventListener('click', ({ path }) => {
    const currentLine = document.querySelector(".active");
    currentLine.classList.remove("active");
    const node = path[0];
    node.parentNode.classList.add('active');
})

newFile.addEventListener("click", async (e) => {
    // console.log([await window.showDirectoryPicker()]);
    // let [fileHandler] = await window.showOpenFilePicker();
    // const file = await fileHandler.getFile();
    // console.log(file)
})