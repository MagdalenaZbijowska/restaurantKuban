
        $(document).ready(function () {
            $("#sidebar").mCustomScrollbar({
                theme: "minimal"
            });

            $('#dismiss, .overlay').on('click', function () {
                $('#sidebar').removeClass('active');
                $('.overlay').removeClass('active');
            });

            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').addClass('active');
                $('.overlay').addClass('active');
                $('.collapse.in').toggleClass('in');
                $('a[aria-expanded=true]').attr('aria-expanded', 'false');
            });
        });


        $(function() {
            $('a[href*=#]').on('click', function(e) {
              e.preventDefault();
              $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
            });
          });

          ScrollReveal().reveal('.scrollreveal', { delay: 200});
          ScrollReveal().reveal('.scrollreveal1', { delay: 400});
          ScrollReveal().reveal('.scrollreveal2', { delay: 600});
          ScrollReveal().reveal('.scrollreveal3', { delay: 800});
          ScrollReveal().reveal('.scrollreveal4', { delay: 1000});
          ScrollReveal().reveal('.scrollreveal5', { delay: 1200});
          ScrollReveal().reveal('.scrollreveal6', { delay: 1400});
          ScrollReveal().reveal('.scrollreveal7', { delay: 1600});

          
          
          function scroll(e) {

            var href = $(this).attr('href');
        
            e.preventDefault();
        
            $('html, body').animate({
                scrollTop: $(href).offset().top
            }, 800);
        
            location.hash = href;
        
        };
        
        $('a[href^="#"]').click(scroll);

     