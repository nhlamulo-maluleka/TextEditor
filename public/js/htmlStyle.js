let prevText = null;

const styleHTML = ({ children }) => {
    const textChild = children[1];
    let text = textChild.innerText.replaceAll("\n", '');
    const open = [...text.matchAll(/(<)+(\w)+(>)/ig)]
    // const closing = [...text.matchAll(/(<\/)+\w+(>)/ig)]

    if (open.length > 0) {
        for (let node of open) {
            const tag = node[0].replace(/[<>]/g, '')
            text = text.replaceAll(node[0], `<<span style="color: blue;">${tag}</span>>`)
        }
        
        if(text !== prevText){
            prevText = text;
            textChild.innerHTML = text;
        }
        // const range = document.createRange();//Create a range (a range is a like the selection but invisible)
        // range.selectNodeContents(textChild);//Select the entire contents of the element with the range
        // range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
        // const selection = window.getSelection();//get the selection object (allows you to change selection)
        // selection.removeAllRanges();//remove any selections already made
        // selection.addRange(range);
    }

    // if (closing.length > 0) {
    //     for (let node of closing) {
    //         const tag = node[0].replace(/(<\/)|(>)/g, '')
    //         text = text.replaceAll(node[0], `</<span style="color: blue;">${tag}</span>>`)
    //     }
    // }

    // let size = textChild.innerHTML.length
    // textChild.setSelectionRange(size, size);
    // textChild.focus();
}

const container = document.querySelector('.container');
export { styleHTML, container };