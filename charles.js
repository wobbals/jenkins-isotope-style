function charles() {
    // create a TreeWalker of all text nodes
    var allTextNodes = document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT),
    // some temp references for performance
    tmptxt,
    tmpnode,
    // compile the RE and cache the replace string, for performance
    charlesRE = /Jenkins/g
    replaceValue = "Charles";

    // iterate through all text nodes
    while (allTextNodes.nextNode()) {
        tmpnode = allTextNodes.currentNode;
        tmptxt = tmpnode.nodeValue;
        tmpnode.nodeValue = tmptxt.replace(charlesRE,replaceValue);
    }
    
    document.title = document.title.replace(charlesRE,replaceValue);
}

window.onload = charles;