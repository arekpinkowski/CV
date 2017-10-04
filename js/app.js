$(document).ready(function(){
    console.log("ok");

    $('.hamburger').on('click', function(e) {
      e.preventDefault();
      $('.menu').toggleClass('slide-down');
    });




//on click small screen
$('#menu1').click(function() {
$('html, body').animate({
    scrollTop: $("#bio").offset().top
}, 700);
})

$('#menu2').click(function() {
$('html, body').animate({
    scrollTop: $("#skills").offset().top
}, 1000);
})

$('#menu3').click(function() {
$('html, body').animate({
    scrollTop: $("#work").offset().top
}, 1000);
})

$('#menu4').click(function() {
$('html, body').animate({
    scrollTop: $("#form").offset().top
}, 1000);
})

//on click big screen

$('#WhoIam').click(function() {
$('html, body').animate({
    scrollTop: $("#bio").offset().top
}, 700);
})

$('#Front-end').click(function() {
$('html, body').animate({
    scrollTop: $("#skills").offset().top
}, 1000);
})

$('#MyProjects').click(function() {
$('html, body').animate({
    scrollTop: $("#work").offset().top
}, 1000);
})

$('#ContactMe').click(function() {
$('html, body').animate({
    scrollTop: $("#form").offset().top
}, 1000);
})

//on mouseover

$("#Front-end").mouseenter(function(){
    $(".img").css("background-image", "url(./images/up.jpg)")
}).mouseleave(function(){
    $(".img").css("background-image", "url(./images/blink.gif)")
});

$("#WhoIam").mouseenter(function(){
    $(".img").css("background-image", "url(./images/left1.1.jpg)")
}).mouseleave(function(){
    $(".img").css("background-image", "url(./images/blink.gif)")
});

$("#MyProjects").mouseenter(function(){
    $(".img").css("background-image", "url(./images/right1.1.jpg)")
}).mouseleave(function(){
    $(".img").css("background-image", "url(./images/blink.gif)")
});

$("#ContactMe").mouseenter(function(){
    $(".img").css("background-image", "url(./images/down.jpg)")
}).mouseleave(function(){
    $(".img").css("background-image", "url(./images/blink.gif)")
});


//Blink

// setInterval(function(){
//     setTimeout(()=>{
//     $(".img").css("background-image", "url(../projekt/images/open_kopia.jpg)")
//     clearTimeout();
// },80);
//     setTimeout(()=>{
//     $(".img").css("background-image", "url(../projekt/images/closed_kopia.jpg)")
//     clearTimeout();
// },2000);
// },2080)


// $(".image").mouseenter(function(){
//     $(".project_title").css("opacity", "0.3")
// }).mouseleave(function(){
//     $(".project_title").css("opacity", "0")
// });

// email

$('#contact-form').submit(function(e) {
  var name    = document.getElementById('inputName')
  var email   = document.getElementById('inputEmail')
  var message = document.getElementById('inputMessage')

  if (!name.value || !email.value || !message.value) {
    alertify.error("Please check your entries");
    return false;
  } else {
    $.ajax({
      method: 'POST',
      url: '//formspree.io/arek.pinkowski@gmail.com',
      data: $('#contact-form').serialize(),
      datatype: 'json'
    });
    e.preventDefault();
    $(this).get(0).reset();
    alertify.success("Message sent");
  }
});


});
