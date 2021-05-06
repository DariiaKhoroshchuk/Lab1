function random_number(){
    return Math.floor(Math.random()*16**6).toString(16).padStart(6, '0')
}
console.log(random_number())

