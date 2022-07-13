// Виды переменных - const, let

// let kekkk = 1
// const kek = 1

// Типы переменных - string, number, object, boolean

const str = 'Строка'
const age = 25
const isOrsenOlder = true
let Orsen = {
    name: "Orsen",
    age: 30,
    surname: "Bogach"
}
const arr = ['1', '2', '3', '4', 5]

// console.log(30Orsen.age)

// console.log(typeof str)
// console.log(typeof age)
// console.log(typeof isOrsenOlder25)
// console.log(typeof Orsen)
// console.log(typeof Orsen.name)

const str1 = "Первый"
const str2 = "Второй"
let str3 = 0
let str4 = 5 + 10


// console.log(str4)
// Orsen.age = Orsen.age + 5
// +
// -
// *
// /

// console.log(Orsen.age)

//Условия
// <, >, <=, >=
// Пустая строка или 0 приравниваются к false



// const elem = "Я элемент"
// if (elem) {
//     console.log("Реально больше")
// }
// else {
//     console.log("Реально меньше")
//     Orsen.age = 5
// }
//
// console.log(5 + 10 == "15")
// console.log(5 + 10 === "15")


// = для изменения значения переменной или для инициализации переменной (создание)
// == или === используются для сравнения, конечные результат сравнения - булевое значение (true или false)
// === Сравнение не только по значению, а еще и по типу
// != - НЕ РАВНО
// console.log("Возраст Орсена равен = " + Orsen.age)
//Тернарный оператор ?

// console.log( 5 == 10 ? "Да" : "Нет" )

// console.log( условие ? Действие если условие верно : Действие если условие неверно)
// && - и - значит по обе стороны должно быть true
// || - или

// if ((5 === "5" || 10 === 10) && (3 == "3")) {
//     console.log("Сработало")
// }
// else if (5 == "5") {
//     console.log("Сработало но в иф")
// }

// Функции
// Обычного типа и стрелочные

//1.// const Andrusha = function () {
//     console.log("Andrusha")
// }

//2.// function Andrusha() {
//     console.log("Andrusha")
//

//3.Стрелочная функция // const Andrusha = () => {
//     console.log('Andrusha')
// }

// Andrusha()

const name = "Orsen"

const printName = function (variableInFunction) {
    console.log(variableInFunction)
}

let array = [2, 3, 4, 5, 6, 7] // глобальное
// console.log(array)

function printArray (array) // локальное
{
    console.log(array) // если вне функции есть переменная array, то функция будет игнорировать ее значние (игнорировать глобальное значение)
}



printArray(10)

//глобальные переменные - переменные вне функции
// function slozhenie4Chisel (num3, num1, num2, num4) { // внутри скобок будут локальные перменные и они будут главнее глобальных
//     console.log(num1 + num2 + num3 + num4) // функция ничего не возвращает, нам дальше это значение ни к чему
// }

// function slozhenie4Chisel (num3, num1, num2, num4) { // внутри скобок будут локальные перменные и они будут главнее глобальных
//     return num1 + num2 + num3 + num4 // return - значит функция возвращает что-то и с этим что-то мы дальше планируем
// }

// let resultSlozhenia = slozhenie4Chisel(1, 2, 3, 4)
// console.log(result)
