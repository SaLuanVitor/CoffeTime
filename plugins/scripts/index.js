$(document).ready(function () {
  $(".menu_btn > a").click(function (e) {
    $(this).closest('.menu_btn').toggleClass("hover");
    e.stopPropagation();
  });
  $(document).on('click', function (e) {
    if (!$(e.target).closest('.hover').length) $('.menu_btn').removeClass("hover");
  });
});