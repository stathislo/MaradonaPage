//menu toggle
$(document).ready(function(){
    $(".menu").on("click",function(){
        $("ul").slideToggle(300);
    });
    //photo animation
    $("#maradona").on({

    mouseenter:function(){
        $(this).animate({
            width:"100%",
            height:"1000px"
        },300)
    },
    mouseleave:function(){
        $(this).animate({
            width:"70%",
            height:"900px"
        })
    }

});
$("#hand").on({

    mouseenter:function(){
        $(this).animate({
            width:"100%",
            height:"1000px"
        },300)
    },
    mouseleave:function(){
        $(this).animate({
            width:"80%",
            height:"900px"
        })
    }

});
$("#adios").on({

    mouseenter:function(){
        $(this).animate({
            width:"100%",
            height:"1000px"
        },300)
    },
    mouseleave:function(){
        $(this).animate({
            width:"80%",
            height:"900px"
        })
    }

})
//menu change colors
$("li[class$='b'").on({
    mouseenter:function(){
    $(this).css("background-color","white",)
},
})
$("li[class$='a'").on("mouseenter",function(){
    $(this).css("background-color","lightblue")
})
//change main 
$(document).ready(function(){
$("img*").click(function(){
    $("img*").hide();
    $(".ripText").show();
    $(".image").prepend("<img src=images/smoke.jpg>")    
})
$(".ripText").css("font-size","10em")
})
 $(".image").click(function(){
  $(this).hide();
  $(".ripText").hide();
  $("img*").show()
 })
 $("h2").on("mouseenter",function(){
     $(this).css("background-color","white")
 })
 $("h1").on("mouseenter",function(){
     $(this).css("background-color","lightblue")
 })
})

