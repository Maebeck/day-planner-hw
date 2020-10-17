//var storageInput = document.querySelector('.time-block');
//var text = document.querySelector('.text');
//var saveBtn = document.querySelector('.saveBtn');
//var storedInput = localStorage.getItem('textinput');
 
$('.time-block').each(function(index){
var saveID = $(this).attr("id");
$(this).val(localStorage.getItem(saveID));
})


$('.saveBtn').on("click", function(){
var saveID = $ (this).siblings(".text").attr("id");
var save = $(this).siblings(".text").val();
localStorage.setItem(saveID, save);
console.log(saveID);
})

