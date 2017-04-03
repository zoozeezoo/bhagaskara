document.addEventListener('DOMContentLoaded', function() {

    var nav = $('<nav>');
    console.log(nav);

    var menu = nav.find('.menu');
    console.log(menu);

    var everyLi = menu.find('li');
    console.log(everyLi);

    var links = everyLi.find('a');
    console.log(links);


    links.click(function(e) {
        e.preventDefault();
        var href = $this.attr('href');
        var offsetHeight = href.offset().top -100;

        // $('html, body').animate({
        //     scrollTop: $(href).offset().top - 100
        // }, 2000);

        $('html, body').animate({
            scrollTop: offsetHeight
        }, 2000);
    });

// STICKY MENU

  var stickyContainer = $('.containerMenu');
  console.log(stickyContainer);

  var stickyContainerOffsetHeight = stickyContainer.offset().top;
  console.log(stickyContainerOffsetHeight);

  $(window).on('scroll', function () {
    var scrollHeight = $(document).scrollTop();

    if (scrollHeight>stickyContainerOffsetHeight) {
      stickyContainer.addClass('sticky')
    } else {
      stickyContainer.removeClass('sticky')
    };

    // $(window).on('resize', function () {
    //   if (stickyContainer.hasClass('sticky')) {
    //     stickyContainerOffsetHeight = stickyContainer.offset().top
    //   } else {
    //     stickyContainerOffsetHeight = .offset().top
    //   };
    // });
  });





});
