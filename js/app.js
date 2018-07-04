var middleColumn = document.getElementById('list')

//column variables

var firstColumn = document.querySelector('.first-column')
var secondColumn = document.querySelector('.second-column')
var thirdColumn = document.querySelector('.third-column')

var pinButton = document.createElement('p')
pinButton.classList.add('pin-button')

var traitMemory = "";


function addTrait(newTrait){
  var arrowLeft = document.createElement('i')
  arrowLeft.classList.add('fas','fa-angle-left', 'fa-lg')
  var arrowRight = document.createElement('i')
  arrowRight.classList.add('fas','fa-angle-right', 'fa-lg')
  var newRow = document.createElement('div')
  var trait = document.createElement('p')
  trait.classList.add('trait')
  trait.textContent = newTrait;
  middleColumn.appendChild(newRow)
  newRow.classList.add('item-row')
  var lastRow = document.querySelectorAll('#list .item-row')
  lastRow[lastRow.length - 1].appendChild(arrowLeft)
  lastRow[lastRow.length - 1].appendChild(trait)
  lastRow[lastRow.length - 1].appendChild(arrowRight)  
}

function moveLeft(event){
  refreshTrait()
  var arrowRight = document.createElement('i')
  arrowRight.classList.add('fas','fa-angle-right', 'fa-lg')
  var targetColumn = event.target.closest('.column').previousElementSibling
  targetColumn.querySelector('.column__container').insertBefore(event.target.closest('.item-row'), targetColumn.querySelectorAll('.item-row')[0]);
  if(targetColumn === firstColumn){
    event.target.parentNode.removeChild(event.target)
  } else if (event.target.closest('.column') === document.querySelector('.second-column')) {
    event.target.parentNode.appendChild(arrowRight, event.target.parentNode)
  } else {
    return;
  }
}

function moveRight(event){
  refreshTrait()
  var arrowLeft = document.createElement('i')
  arrowLeft.classList.add('fas','fa-angle-left', 'fa-lg')
  var targetColumn = event.target.closest('.column').nextElementSibling
  targetColumn.querySelector('.column__container').insertBefore(event.target.closest('.item-row'), targetColumn.querySelectorAll('.item-row')[0]);
  if (targetColumn === thirdColumn){
    event.target.parentNode.removeChild(event.target)
  } else if (event.target.closest('.column') === document.querySelectorAll('.column')[1]) {
    event.target.parentNode.insertBefore(arrowLeft, event.target.parentNode.firstChild)
  }
}

function changeTrait(event){
    refreshTrait()
    traitMemory = event.target.textContent;
    // event.target.parentNode.style = 'visibility: hidden;'
    event.target.parentNode.innerHTML = "<p class='delete-button'>Delete</p> <p class='pin-button'> Pin</p> <p class='cancel-button'> Cancel</p>";  
}

function pin (event){
  var currentColumn = event.target.closest('.column__container')
  currentColumn.insertBefore(event.target.parentElement, currentColumn.firstElementChild)
  event.target.parentNode.className = 'pinned';
  event.target.parentNode.classList.add('are')
  event.target.parentNode.innerHTML = "<p class='pinned-button'>" + traitMemory + "</p>";  
}

function insertTrait(){
  var trait = document.getElementById('input').value
  addTrait(trait)
  middleColumn.insertBefore(middleColumn.querySelectorAll('.item-row')[middleColumn.querySelectorAll('.item-row').length -1], middleColumn.querySelector('.item-row'));
  document.getElementById('input').value = '';
}



function refreshTrait(){
  if (document.querySelector('.pin-button') != null) {
    var arrowLeft = document.createElement('i')
    arrowLeft.classList.add('fas','fa-angle-left', 'fa-lg')
    var arrowRight = document.createElement('i')
    arrowRight.classList.add('fas','fa-angle-right', 'fa-lg')
    var newRow = document.createElement('div')
    var trait = document.createElement('p')
    trait.classList.add('trait')
    var row = document.querySelector('.pin-button').parentNode
    trait.textContent = traitMemory
    row.innerHTML = '';
    if (row.closest('.column') === firstColumn) {
      row.appendChild(trait)
      row.appendChild(arrowRight)
    } else if (row.closest('.column') === secondColumn) {
      row.appendChild(arrowLeft)
      row.appendChild(trait)
      row.appendChild(arrowRight)
    } else {
      row.appendChild(arrowLeft)
      row.appendChild(trait)
    }
  }
}

function unpin(event){
  event.target.parentNode.className = 'item-row'
  var arrowLeft = document.createElement('i')
  arrowLeft.classList.add('fas','fa-angle-left', 'fa-lg', 'fa-lg')
  var arrowRight = document.createElement('i')
  arrowRight.classList.add('fas','fa-angle-right', 'fa-lg')
  var newRow = document.createElement('div')
  var trait = document.createElement('p')
  trait.classList.add('trait')
  var row = event.target.parentNode
  trait.textContent = traitMemory
  row.innerHTML = '';
  if (row.closest('.column') === firstColumn) {
    row.appendChild(trait)
    row.appendChild(arrowRight)
  } else if (row.closest('.column') === secondColumn) {
    row.appendChild(arrowLeft)
    row.appendChild(trait)
    row.appendChild(arrowRight)
  } else {
    row.appendChild(arrowLeft)
    row.appendChild(trait)
  }
  refreshTrait()
}

function deleteTrait (event){
  event.target.closest('.column__container').removeChild(event.target.parentNode)
}


//for pinned change className to 'pinned'


var allColumns = document.querySelector('main');

allColumns.addEventListener('click', function(event){
  if (event.target.classList.contains('fa-angle-left')) {
    moveLeft(event) 
  } else if (event.target.classList.contains('fa-angle-right')) {
    moveRight(event)
  } else if (event.target.classList.contains('trait')){
    changeTrait(event)
  } else if (event.target.classList.contains('pin-button')) {
    pin(event)
  } else if (event.target.classList.contains('delete-button')){
    deleteTrait(event)
  } else if (event.target.classList.contains('cancel-button')){
    refreshTrait()
  } else if (event.target.classList.contains('pinned-button')){
    unpin(event)
  } else if (event.target.classList.contains('fa-plus')) {
    insertTrait()
  }
})

document.getElementById('input').addEventListener('keyup',function(event){
  if (event.keyCode == 13) {
    insertTrait()
  }
})



var startingTraits = ['Sincere', 'Honest', 'Loyal', 'Intelligent', 'Truthful', 'Wise', 'Dependable', 'Open-Minded', 'Reliable', 'Mature', 'Warm', 'Kind', 'Friendly', 'Happy', 'Clean', 'Good-Humored', 'Gentle', 'Honorable', 'Fun', 'Imaginative', 'Clever', 'Pleasant', 'Polite', 'Alert', 'Original', 'Versatile', 'Courageous', 'Tender', 'Active', 'Inventive', 'Cultured', 'Realist', 'Optimistic', 'Relaxed', 'Romantic', 'Vivacious', 'Rational', 'Enterprising', 'Vigorous', 'Gracious', 'Modern', 'Nice', 'Entertaining', 'Calm', 'Artistic', 'Candid', 'Fashionable', 'Serious', 'Quick', 'Sophisticated', 'Sentimental', 'Nonconforming', 'Righteous', 'Fearless', 'Subtle', 'Daring', 'Proud', 'Sensitive', 'Moralistic', 'Excited', 'Prudent', 'Reserved', 'Meticulous', 'Persistent', 'Bold', 'Suave', 'Restless', 'Extravagant', 'Eccentric', 'Silent', 'Tough', 'Crafty', 'Silly', 'Sad'];
startingTraits.sort()
startingTraits.forEach(function(trait){
  addTrait(trait)
})