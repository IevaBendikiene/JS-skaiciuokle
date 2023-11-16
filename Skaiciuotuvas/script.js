let firstNumber = 0
let secondNumber = 0
let action = '+'
let answer = 0


let input = document.getElementById('calc-input')
let calculationSpan = document.getElementById('calculation')

let history = []

function onNumberClick (number){
    input.value += number
}
function onDotClick(symbol){
    if(!input.value.includes(symbol)){
 input.value += symbol}
}

function onActionClick(clickedAction){
    input.value += ' ' + clickedAction + ' '
    action = clickedAction
    if(input.value.contains(clickedAction)){
        alert('negalima det dvieju veiksmu')
    }
}
function onDelClick(){
    let lastNumber = input.value.split(' ')
    console.log(lastNumber)
}

function onCountClick(){
    let splitted = input.value.split(' ')
    //const lastNumber = input.value.split(' ').slice(-1)[0]
    firstNumber = parseFloat(splitted[0])
    if( firstNumber !== 0){
    action = splitted[1]
    secondNumber = parseFloat(splitted[2])
   
    calculateAnswer();
    input.value = answer;

    calculationSpan.innerText = `${firstNumber} ${action} ${secondNumber}`

    addToHistory()
  }else {
    alert("Pirmas skaicius negali buti 0")
  }
}
function calculateAnswer(){
    switch(action){
        case '+': answer = firstNumber + secondNumber; break;
        case '-': answer = firstNumber - secondNumber; break;
        case 'x': answer = firstNumber * secondNumber; break;
        case '/': answer = firstNumber / secondNumber; break;
    }
}
function onCleanClick(){
    firstNumber = 0;
    secondNumber = 0;
    action = '+';
    input.value = '';
    calculationSpan.innerText = '';
}

function addToHistory(){
    let historyItem = {
        firstNumber,
        action,
        secondNumber,
        answer
    };
    history.push(historyItem);
}
document.getElementById('show-history').onclick = function(){
 let formatted = history.map(x =>`<p>${x.firstNumber} ${x.action} ${x.secondNumber} = ${x.answer}</p>`);
 let historyBlock = document.querySelector('.calculator .history-items');
 historyBlock.innerHTML = formatted.join('')
}
document.getElementById('clear-history').addEventListener('click',function(){
    document.querySelector('.calculator .history-items').innerHTML = ""
})


// parseInt teksta pavercia skaicium
//const lastNumber = input.value.split(' ').slice(-1)[0]