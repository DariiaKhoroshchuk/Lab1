function count_days(month, year){
    return new Date(year, month+1, 0).getDate() // возвращает последний день заданого месяца
}

function year_days(){
    const today = new Date()
    let count = today.getDate() // сколько дней прошло от начала месяца
    for (let i=0; i<today.getMonth();i++){
        count+=count_days(i, today.getFullYear())// считаем количество дней в каждом месяца от начала года до настоящего месяца
    }
    return count
}

console.log(year_days())