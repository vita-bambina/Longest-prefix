function longestcommonprefix(text){
    if(!text.length) 
        return"";
    let prefix = text[0];
    for (let i=1;i<text.length;i++){
        while(text[i].indexOf(prefix)!==0){
            prefix=prefix.slice(0,-1);
            if(prefix ==="")
                return"";

        }
}
return prefix
}

console.log(longestcommonprefix(["flower","flow","flight"]));