function charles() {
    // create a TreeWalker of all text nodes
    var allTextNodes = document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT),
    // some temp references for performance
    tmptxt,
    tmpnode,
    // compile the RE and cache the replace string, for performance
    cakeRE = /cake/g
    replaceValue = "pie";

    // iterate through all text nodes
    while (allTextNodes.nextNode()) {
        tmpnode = allTextNodes.currentNode;
        tmptxt = tmpnode.nodeValue;
        tmpnode.nodeValue = tmptxt.replace(cakeRE,replaceValue);
    }
}

window.onload = charles;