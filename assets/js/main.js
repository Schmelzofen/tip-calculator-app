let billInput = document.getElementById("billInput")
let customTip = document.getElementById("customTip")
let numberPeople = document.getElementById("numberPeople")
let amountPerson = document.getElementById("amountPerPerson")
let amountTotal = document.getElementById("amountTotal")
let button = document.getElementsByName("button")
let funf = document.getElementById("fuenf")

resetCalc = () => {
    amountPerson.innerHTML = "$00.00"
    amountTotal.innerHTML = "$00.00"
    numberPeople.value = ""
    billInput.value = ""
}

tax1 = () => {
    amountPerson.innerHTML = "$"+(billInput.value * .05).toFixed(2)
    amountTotal.innerHTML = "$"+(billInput.value*1.05).toFixed(2)
}

tax2 = () => {
    amountPerson.innerHTML = "$"+(billInput.value * .10).toFixed(2)
    amountTotal.innerHTML = "$"+(billInput.value*1.1).toFixed(2)
}

tax3 = () => {
    amountPerson.innerHTML = "$"+(billInput.value * .15).toFixed(2)
    amountTotal.innerHTML = "$"+(billInput.value*1.15).toFixed(2)
}

tax4 = () => {
    amountPerson.innerHTML = "$"+(billInput.value * .25).toFixed(2)
    amountTotal.innerHTML = "$"+(billInput.value*1.25).toFixed(2)
}

tax5 = () => {
    amountPerson.innerHTML = "$"+(billInput.value *.50).toFixed(2)
    amountTotal.innerHTML = "$"+(billInput.value*1.50).toFixed(2)
}

tax6 = () => {
    amountPerson.innerHTML = "$"+(billInput.value * (customTip.value/100)).toFixed(2)
    amountTotal.innerHTML = "$"+(Number(billInput.value) + Number(((billInput.value*(customTip.value/100))))).toFixed(2)
}

persons = () => {
    let newAmount = amountPerson.innerHTML
    let newAmount2 = newAmount.substr(1)
    let finalAmount = "$"+(newAmount2/numberPeople.value).toFixed(2)
    let newAmountTotal = amountTotal.innerHTML
    let newAmountTotal2 = newAmountTotal.substr(1)
    let finalAmountTotal = "$"+(newAmountTotal2/numberPeople.value).toFixed(2)
    numberPeople.value === "" ? amountPerson.innerHTML = 0 : amountPerson.innerHTML = finalAmount ; amountTotal.innerHTML = finalAmountTotal
}