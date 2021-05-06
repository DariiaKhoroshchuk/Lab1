function NumberOfMostCommonSymbol (string) {
    const myMap = new Map()
    string = string.replace(/\s/g, '' ) // regular expresion - что бы снять пробелы, и задать правило что ищем не одну, а глобально
    for (let i = 0; i < string.length; i++) {
      if (myMap.has(string[i]) === false)
        myMap.set(string[i], 1)
      else
      {
        let newNumber = myMap.get(string[i]);
        myMap.set(string[i], ++newNumber)
      }
    }
    return [...myMap.entries()].reduce((a, e ) => e[1] > a[1] ? e : a)[0] // entries - создает масив, который состоит из масивов(ключ, значение)
}
const str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget massa at elit iaculis rutrum a sed ligula. Aenean pharetra nibh nunc, nec volutpat dolor pharetra vitae. Mauris eget sem augue. Donec quis vestibulum arcu, at dignissim lectus. Maecenas sodales eget ipsum vel luctus. Vestibulum enim ex, dignissim at nunc id, lacinia lacinia risus. Sed euismod eleifend varius. Praesent hendrerit, mauris nec pulvinar pulvinar, nisl magna posuere nulla, nec dictum leo erat et enim. Vivamus venenatis nulla quis viverra tristique. Sed porta lobortis ligula ut placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
console.log(NumberOfMostCommonSymbol(str))
//module.exports.NumberOfMostUsefullSymbol = NumberOfMostUsefullSymbol;