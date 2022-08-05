var currentDayEl = $('#currentDay');
var textArea9AMEl = $('#textArea9AM');
var saveBtn9AMEl = $('#saveBtn9AM');
var textArea10AMEl = $('#textArea10AM');
var saveBtn10AMEl = $('#saveBtn10AM');
var textArea11AMEl = $('#textArea11AM');
var saveBtn11AMEl = $('#saveBtn11AM');
var textArea12PMEl = $('#textArea12PM');
var saveBtn12PMEl = $('#saveBtn12PM');
var textArea1PMEl = $('#textArea1PM');
var saveBtn1PMEl = $('#saveBtn1PM');
var textArea2PMEl = $('#textArea2PM');
var saveBtn2PMEl = $('#saveBtn2PM');
var textArea3PMEl = $('#textArea3PM');
var saveBtn3PMEl = $('#saveBtn3PM');
var textArea4PMEl = $('#textArea4PM');
var saveBtn4PMEl = $('#saveBtn4PM');
var textArea5PMEl = $('#textArea5PM');
var saveBtn5PMEl = $('#saveBtn5PM');

function setCurrentDate() {
    // gets the current date
    var currentDay = moment().format("dddd, MMMM Do");
    currentDayEl.text(currentDay);
}

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


saveBtn9AMEl.on('click', function () {

    localStorage.setItem("textArea9AM", textArea9AMEl.val());
    console.log(textArea9AMEl.val());
    // var newPassword = passwordGenerator(15);
    // passwordDisplayEl.text(newPassword);
  });
  
saveBtn10AMEl.on('click', function () {

    localStorage.setItem("textArea10AM", textArea10AMEl.val());
    console.log(textArea9AMEl.val());
    // var newPassword = passwordGenerator(15);
    // passwordDisplayEl.text(newPassword);
  });
  
saveBtn11AMEl.on('click', function () {

    localStorage.setItem("textArea11AM", textArea11AMEl.val());
    console.log(textArea9AMEl.val());
    // var newPassword = passwordGenerator(15);
    // passwordDisplayEl.text(newPassword);
  });
  
saveBtn12PMEl.on('click', function () {

    localStorage.setItem("textArea12PM", textArea12PMEl.val());
    console.log(textArea9AMEl.val());
    // var newPassword = passwordGenerator(15);
    // passwordDisplayEl.text(newPassword);
  });
  
saveBtn1PMEl.on('click', function () {

    localStorage.setItem("textArea1PM", textArea1PMEl.val());
    console.log(textArea9AMEl.val());
    // var newPassword = passwordGenerator(15);
    // passwordDisplayEl.text(newPassword);
  });
  
saveBtn2PMEl.on('click', function () {

    localStorage.setItem("textArea2PM", textArea2PMEl.val());
    console.log(textArea9AMEl.val());
    // var newPassword = passwordGenerator(15);
    // passwordDisplayEl.text(newPassword);
  });
  
saveBtn3PMEl.on('click', function () {

    localStorage.setItem("textArea3PM", textArea3PMEl.val());
    console.log(textArea9AMEl.val());
    // var newPassword = passwordGenerator(15);
    // passwordDisplayEl.text(newPassword);
  });
  
saveBtn4PMEl.on('click', function () {

    localStorage.setItem("textArea4PM", textArea4PMEl.val());
    console.log(textArea9AMEl.val());
    // var newPassword = passwordGenerator(15);
    // passwordDisplayEl.text(newPassword);
  });
  
saveBtn5PMEl.on('click', function () {

    localStorage.setItem("textArea5PM", textArea5PMEl.val());
    console.log(textArea9AMEl.val());
    // var newPassword = passwordGenerator(15);
    // passwordDisplayEl.text(newPassword);
  });


setCurrentDate();
setTextAreasFromLocal();