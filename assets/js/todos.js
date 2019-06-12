

//Check off specific by clicking
$("ul").on("click","li", function() {
    $(this).toggleClass("completed");
});

//click on X to cross out toto
$("ul").on("click","span", function(event) {
    $(this).parent().fadeOut(500,function() {
        $(this).remove();
    });
    event.stopPropagation();
});

//add in new todo
$("input[type='text']").keypress(function(event) {
    if(event.which === 13) {
        //grab todo text
        var newToDo =  $(this).val();
        $(this).val("");
        //create new todo
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+ newToDo + "</li>")
    }
})

$("#toggleBtn").click(function() {
    $("input[type='text']").fadeToggle();
})

