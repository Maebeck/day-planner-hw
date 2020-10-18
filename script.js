

var taskHour = document.getElementById('')
var timeofDay = [ 9, 10, 11, 12, 13, 14, 15, 16, 17]
var currentHour = moment().format('HH');
var currentTime =  moment().format('MMMM Do YYYY, h:mm:ss A');
var hourNow = moment().format('h');
var hourNowInt = parseInt(hourNow);
var Timer;


console.log(currentHour);
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

$('.clearBtn').on("click", function(){
    localStorage.clear();
    window.location.reload();
})


function colorCoding () {
    TIMER = setInterval(colorCoding, 1000);
    if(currentTime >=9 && currentTime <= 17) {
        for (var i =1; i<=9; i++){
            var hourInInt = parseInt($('#time-block' + i).text());
            if (hourInInt < 9) {
                hourInInt = hourInInt + 12;
            }
            if (hourInInt == currentTime) {
                $('input' + i).addClass('.future');
            } else {
                $('input' + i).addClass('.present');
            }
        }
    }
else {
    clearInterval(TIMER);
    $('input').addClass('.past');
}
}