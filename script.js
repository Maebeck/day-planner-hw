

var taskHour = document.getElementById('')
var timeofDay = [ 9, 10, 11, 12, 13, 14, 15, 16, 17]
var currentHour = moment().format('HH');

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
while (currentHour === timeofDay){
    if (timeofDay >= 9 && timeofDay <= 17){
 for (var i = 1; i < 9; i++){

 }   //end of for
}//end of if
} //end of while

}