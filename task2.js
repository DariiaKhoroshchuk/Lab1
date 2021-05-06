function addStr(str1, str2, idx){
    return str1.substring(0, idx) + str2 + str1.substring(idx)
}

console.log(addStr('1234', 'abcd', 2))