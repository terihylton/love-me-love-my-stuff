$(window).scroll(function() {

    $('#footer').show();

    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
      alert("bottom!");
      $('#footer').hide();

    }
  });


