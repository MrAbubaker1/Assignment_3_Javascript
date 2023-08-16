/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let Fullcost = 35;
let Halfcost = 20;
let TheDaysSelected= new Set();
let TheDaysSelectedElement = document.querySelectorAll('.day-selector li');
let FulldayButton = document.getElementById('full');
let HalfdayButton = document.getElementById('half');
let CleardayButton = document.getElementById('clear-button');
let CalculatedCost = document.getElementById('calculated-cost');

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function toggleDaySelection(dayElement) {
    let dayId = dayElement.id;
    let isSelected = TheDaysSelected.has(dayId);

    if (isSelected) {
        TheDaysSelected.delete(dayId);
    } else {
        TheDaysSelected.add(dayId);
    }
    dayElement.classList.toggle('clicked', !isSelected);
    
    calculateCost();
}

document.querySelector('.day-selector').addEventListener('click', function(event) {
    var target = event.target;
    if (target.tagName === 'LI') {
        toggleDaySelection(target);
    }
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
CleardayButton.addEventListener('click', function(){
    TheDaysSelected.clear();
    TheDaysSelectedElement.forEach(function(dayElement){
        dayElement.classList.remove('clicked');
    });
    changeRate('full');
    calculateCost();
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
function changeRate(daytype) {
    FulldayButton.classList.toggle('clicked', daytype === 'full');
    HalfdayButton.classList.toggle('clicked', daytype === 'half');
    calculateCost();
}
FulldayButton.addEventListener('click', function(){
    changeRate('full');
});
HalfdayButton.addEventListener('click', function(){
    changeRate('half');
});
// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculateCost(){
    let days = TheDaysSelected.size;
    let cost = FulldayButton.classList.contains('clicked') ? Fullcost : Halfcost;
    let totalCost = days * cost;
    CalculatedCost.innerHTML = totalCost;
}