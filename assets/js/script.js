// use jquery to get elements current day, textAreas and buttons
// current day element
var currentDayEl = $('#currentDay');
// 9 AM Text Area and Button
var textArea9AMEl = $('#textArea9AM');
var saveBtn9AMEl = $('#saveBtn9AM');
// 10 AM Text Area and Button
var textArea10AMEl = $('#textArea10AM');
var saveBtn10AMEl = $('#saveBtn10AM');
// 11 AM Text Area and Button
var textArea11AMEl = $('#textArea11AM');
var saveBtn11AMEl = $('#saveBtn11AM');
// 12 PM Text Area and Button
var textArea12PMEl = $('#textArea12PM');
var saveBtn12PMEl = $('#saveBtn12PM');
// 1 PM Text Area and Button
var textArea1PMEl = $('#textArea1PM');
var saveBtn1PMEl = $('#saveBtn1PM');
// 2 PM Text Area and Button
var textArea2PMEl = $('#textArea2PM');
var saveBtn2PMEl = $('#saveBtn2PM');
// 3 PM Text Area and Button
var textArea3PMEl = $('#textArea3PM');
var saveBtn3PMEl = $('#saveBtn3PM');
// 4 PM Text Area and Button
var textArea4PMEl = $('#textArea4PM');
var saveBtn4PMEl = $('#saveBtn4PM');
// 5 PM Text Area and Button
var textArea5PMEl = $('#textArea5PM');
var saveBtn5PMEl = $('#saveBtn5PM');

// Sets the currentDate text to the current date. requires no parameters
function setCurrentDate() {
    // gets the current date
    var currentDay = moment().format("dddd, MMMM Do");
    currentDayEl.text(currentDay);
}

// Sets the textArea text of each textArea to the local storage value if one exists
function setTextAreasFromLocal() {
    if(localStorage["textArea9AM"])
    {
        textArea9AMEl.text(localStorage["textArea9AM"]);
    }
    if(localStorage["textArea10AM"])
    {
        textArea10AMEl.text(localStorage["textArea10AM"]);
    }
    if(localStorage["textArea11AM"])
    {
        textArea11AMEl.text(localStorage["textArea11AM"]);
    }
    if(localStorage["textArea12PM"])
    {
        textArea12PMEl.text(localStorage["textArea12PM"]);
    }
    if(localStorage["textArea1PM"])
    {
        textArea1PMEl.text(localStorage["textArea1PM"]);
    }
    if(localStorage["textArea2PM"])
    {
        textArea2PMEl.text(localStorage["textArea2PM"]);
    }
    if(localStorage["textArea3PM"])
    {
        textArea3PMEl.text(localStorage["textArea3PM"]);
    }
    if(localStorage["textArea4PM"])
    {
        textArea4PMEl.text(localStorage["textArea4PM"]);
    }
    if(localStorage["textArea5PM"])
    {
        textArea5PMEl.text(localStorage["textArea5PM"]);
    }
}

function setColourCodes () {
    if (true){
        var x;
    }
}

// on button click it save the text in the textArea to local storage
saveBtn9AMEl.on('click', function () {

    localStorage.setItem("textArea9AM", textArea9AMEl.val());
  });
  
saveBtn10AMEl.on('click', function () {

    localStorage.setItem("textArea10AM", textArea10AMEl.val());
  });
  
saveBtn11AMEl.on('click', function () {

    localStorage.setItem("textArea11AM", textArea11AMEl.val());
  });
  
saveBtn12PMEl.on('click', function () {

    localStorage.setItem("textArea12PM", textArea12PMEl.val());
  });
  
saveBtn1PMEl.on('click', function () {

    localStorage.setItem("textArea1PM", textArea1PMEl.val());
  });
  
saveBtn2PMEl.on('click', function () {

    localStorage.setItem("textArea2PM", textArea2PMEl.val());
  });
  
saveBtn3PMEl.on('click', function () {

    localStorage.setItem("textArea3PM", textArea3PMEl.val());
  });
  
saveBtn4PMEl.on('click', function () {

    localStorage.setItem("textArea4PM", textArea4PMEl.val());
  });
  
saveBtn5PMEl.on('click', function () {

    localStorage.setItem("textArea5PM", textArea5PMEl.val());
  });


// run the set current date and text areas
setCurrentDate();
setTextAreasFromLocal();