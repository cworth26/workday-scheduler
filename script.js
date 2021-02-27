let saveBtn = localStorage.getItem('textarea') ? JSON.parse(localStorage.getItem('textarea')) : [];

localStorage.setItem('textarea', JSON.stringify(saveBtn));
const data = JSON.parse(localStorage.getItem('textarea'));

$("#currentDay").text(moment().format("dddd, MMMM Do"))

function pastPresentFuture() {
    var currnetT = moment().hours();

    $(".time-block").each(function() {
    
        var blockT;

        if(blockT < currnetT) {
            // add class "past"
            $(this).addClass("past")
        } else if (blockT === currnetT) {
            // add class present
        } else {
            // add class of future
        }

// add ID to tell what time it is 

    })

}
$(".saveBtn").on('click', function() {
var value = $(this).siblings('.description').val();
var time = $(this).siblings('.description').attr("id");
localStorage.setItem(time, value);
});



// localStorage.setItem('textarea');