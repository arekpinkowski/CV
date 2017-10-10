$(document).ready(function(){

    $('.hamburger').on('click', function(e) {
        e.preventDefault();
        $('.menu').toggleClass('slide-down');
    });


    var front_end = $('#front_end');
    var who_i_am = $('#who_i_am');
    var my_projects = $('#my_projects');
    var contact_me = $('#contact_me');

    var bio =$("#bio");
    var skills = $("#skills");
    var work = $("#work");
    var form = $("#form");

    var top_picture = $(".top_picture");
    var left_picture = $(".left_picture");
    var right_picture = $(".right_picture");
    var bottom_picture = $(".bottom_picture");

//on click small screen

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

who_i_am.click(function() {
$('html, body').animate({
    scrollTop: bio.offset().top
}, 700);
})

front_end.click(function() {
$('html, body').animate({
    scrollTop: skills.offset().top
}, 1000);
})

my_projects.click(function() {
$('html, body').animate({
    scrollTop: work.offset().top
}, 1000);
})

contact_me.click(function() {
$('html, body').animate({
    scrollTop: form.offset().top
}, 1000);
})

//on mouseover

front_end.mouseenter(function(){
    top_picture.css("z-index", "11")
}).mouseleave(function(){
    top_picture.css("z-index", "9")
});

who_i_am.mouseenter(function(){
    left_picture.css("z-index", "11")
}).mouseleave(function(){
    left_picture.css("z-index", "8")
});

my_projects.mouseenter(function(){
    right_picture.css("z-index", "11")
}).mouseleave(function(){
    right_picture.css("z-index", "7")
});

contact_me.mouseenter(function(){
    bottom_picture.css("z-index", "11")
}).mouseleave(function(){
    bottom_picture.css("z-index", "6")
});

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
