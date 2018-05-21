$( document ).ready(

    $("button").on("click", function(e) {
        console.log($(this).data("id"));
        $.ajax({
            type: "POST",
            url: "/devour/"+$(this).data("id")
        });
    })

)