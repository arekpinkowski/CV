$(document).ready(function(){

    $('.hamburger').on('click', function(e) {
        e.preventDefault();
        $('.menu').toggleClass('slide-down');
    });

//on click small screen

var bio =$("#bio");
var skills = $("#skills");
var work = $("#work");
var form = $("#form");

$('#menu1').click(function() {
$('html, body').animate({
    scrollTop: bio.offset().top
}, 700);
})

$('#menu2').click(function() {
$('html, body').animate({
    scrollTop: skills.offset().top
}, 1000);
})

$('#menu3').click(function() {
$('html, body').animate({
    scrollTop: work.offset().top
}, 1000);
})

$('#menu4').click(function() {
$('html, body').animate({
    scrollTop: form.offset().top
}, 1000);
})

//on click big screen
var Front_end = $('#Front-end');
var WhoIam = $('#WhoIam');
var MyProjects = $('#MyProjects');
var ContactMe = $('#ContactMe');


WhoIam.click(function() {
$('html, body').animate({
    scrollTop: bio.offset().top
}, 700);
})

Front_end.click(function() {
$('html, body').animate({
    scrollTop: skills.offset().top
}, 1000);
})

MyProjects.click(function() {
$('html, body').animate({
    scrollTop: work.offset().top
}, 1000);
})

ContactMe.click(function() {
$('html, body').animate({
    scrollTop: form.offset().top
}, 1000);
})

//on mouseover
var top_picture = $(".top_picture");
var left_picture = $(".left_picture");
var right_picture = $(".right_picture");
var bottom_picture = $(".bottom_picture");

Front_end.mouseenter(function(){
    top_picture.css("z-index", "11")
}).mouseleave(function(){
    top_picture.css("z-index", "9")
});

WhoIam.mouseenter(function(){
    left_picture.css("z-index", "11")
}).mouseleave(function(){
    left_picture.css("z-index", "8")
});

MyProjects.mouseenter(function(){
    right_picture.css("z-index", "11")
}).mouseleave(function(){
    right_picture.css("z-index", "7")
});

ContactMe.mouseenter(function(){
    bottom_picture.css("z-index", "11")
}).mouseleave(function(){
    bottom_picture.css("z-index", "6")
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
