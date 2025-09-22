$(document).ready(function() {
  $('#mobile_btn').on('click', function() {
    $('#mobile_menu').toggleClass('active');
    $('#mobile_btn').find('i').toggleClass('fa-bars fa-times');  // Alterna entre fa-bars e fa-times
  });
});

