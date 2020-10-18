
var timeofDay = [ '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM']

var clock = document.getElementById("currentDay");
setInterval(() => {
    var now = moment();
    var currentTime = now.format('MMMM Do YYYY, h:mm:ss A');
    $('#currentDay').text(currentTime);
}, 1000);


$('.time-block').each(function(){
var saveID = $(this).attr("id");
$(this).val(localStorage.getItem(saveID));
})


$('.saveBtn').on("click", function(){
var saveID = $ (this).siblings(".text").attr("id");
var save = $(this).siblings(".text").val();
localStorage.setItem(saveID, save);
console.log(saveID);
})

