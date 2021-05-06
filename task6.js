function child_count(root=document.body){
    let count = root.childNodes.length;
    for(const el of root.childNodes){
        count += child_count(el);
    }
    return count;
}

child_count()