function filterNone() {
    return NodeFilter.FILTER_ACCEPT;
}
function log(txt) {
    console.log(txt);
}
function getAllComments(rootElem) {
    var comments = [];
    // Fourth argument, which is actually obsolete according to the DOM4 standard, is required in IE 11
    var iterator = document.createNodeIterator(rootElem, NodeFilter.SHOW_COMMENT, filterNone, false);
    var curNode;
    while (curNode = iterator.nextNode()) {
        comments.push(curNode.nodeValue.replace(/\n/g, ""));
    }
    return comments;
}

window.addEventListener("load", function() {
    let comments = getAllComments(document.body)
    log(comments)
    for (i in comments) {
        if (comments[i].startsWith("#if") && comments[i].endsWith("#endif")) {
            log("condition found! (if statement or if else statement)")
        }
    }
});