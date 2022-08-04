var currentDayEl = $('#currentDay');

function setCurrentDate() {
    // gets the current date
    var currentDay = moment().format("dddd, MMMM Do");
    currentDayEl.text(currentDay);
}

setCurrentDate();