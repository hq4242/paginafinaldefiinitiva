var actualizar_svg = function () {
    $('img.pt_svg').each(function () {
        var $img = $(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        $.get(imgURL, function (data) {
            var $svg = jQuery(data).find('svg');
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }
            $svg = $svg.removeAttr('xmlns:a');
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
            }
            $img.replaceWith($svg);
        }, 'xml');
    });
};

$(document).ready(function () {

    actualizar_svg();

    var forEach = function (t, o, r) { if ("[object Object]" === Object.prototype.toString.call(t)) for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t); else for (var e = 0, l = t.length; l > e; e++)o.call(r, t[e], e, t) };

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
        forEach(hamburgers, function (hamburger) {
            hamburger.addEventListener("click", function () {
                this.classList.toggle("is-active");
                if ($(this).hasClass('is-active')) {
                    $('.HeaderMenu .Menu').addClass('MenuActivo');
                    $('.MenuDesplegado').animate({ right: '0' }, 250);
                    var aTimer = 1;
                    $('.MenuDesplegado .MenuItem .MenuItemPrincipal').each(function () {
                        var aElement = $(this);
                        setTimeout(function () {
                            aElement.addClass('activo');
                        }, 100 * aTimer);
                        aTimer++;
                    });
                } else {
                    $('.HeaderMenu .Menu').removeClass('MenuActivo');
                    $('.MenuDesplegado .MenuItem .MenuItemPrincipal').removeClass('activo');
                    var MenuWidth = $('.HeaderMenu .MenuDesplegado').width();
                    $('.MenuDesplegado').animate({ right: '-' + MenuWidth + 'px' }, 250, function () {
                        $('.MenuItem.activo').removeClass('activo').find('.MenuItemSubmenu').slideUp(500);
                    });
                }
            }, false);
        });
    };

    $('.MenuItemPrincipal.ConSubmenu').on('click', function () {
        if (!$(this).parents('.MenuItem:first').hasClass('activo')) {
            $('.MenuItem.activo').removeClass('activo').find('.MenuItemSubmenu').slideUp(500);
            $(this).parents('.MenuItem:first').addClass('activo').find('.MenuItemSubmenu').slideDown(500);
        } else {
            $('.MenuItem.activo').removeClass('activo').find('.MenuItemSubmenu').slideUp(500);
        }
    });

    $('.HeaderMenu .Menu li.Idioma').on('click', function () {
        $('.HeaderMenu .Menu li.Idioma .IdiomaSelector').toggle();
    });

    $(document).on("click", function (e) {
        var container = $('.HeaderMenu .Menu li.Idioma');
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.HeaderMenu .Menu li.Idioma .IdiomaSelector').hide();
        }
    });

    $(window).scroll(function (e) {

        if ($('.MenuInterna').length > 0) {
            if ($(window).scrollTop() > 100) { 
                $('.MenuInterna').addClass('HeaderScroll');
                $('.HeaderMenu .Menu').addClass('MenuScroll');
                $('.RedesFijas').addClass('activo');
            } else {
                $('.MenuInterna').removeClass('HeaderScroll');
                $('.HeaderMenu .Menu').removeClass('MenuScroll');
                $('.RedesFijas').removeClass('activo');
            }
        } else {
            if ($(window).width() < 1024) { 
                if ($(window).scrollTop() > $(window).height() * 0.4) {
                    $('.HeaderMenu .Menu').addClass('MenuScroll');
                    $('.RedesFijas').addClass('activo');
                } else {
                    $('.HeaderMenu .Menu').removeClass('MenuScroll');
                    $('.RedesFijas').removeClass('activo');
                }
            } else { 
                if ($(window).scrollTop() > $(window).height() * 0.95) {
                    $('.HeaderMenu .Menu').addClass('MenuScroll');
                    $('.RedesFijas').addClass('activo');
                } else {
                    $('.HeaderMenu .Menu').removeClass('MenuScroll');
                    $('.RedesFijas').removeClass('activo');
                }
            }
        }

    });

    $('.Campana').on('click', function () {
        $(this).find('img').removeClass('infinite');
    });

    ScrollReveal().reveal('.Discover .Informacion .Titulo h2', { delay: 500, distance: '2em', duration: 500, origin: 'bottom', scale: 1 });
    ScrollReveal().reveal('.Discover .Informacion .Titulo .Linea', { delay: 500, distance: '2em', duration: 500, origin: 'bottom', scale: 1 });
    ScrollReveal().reveal('.Discover .Secciones .Seccion', { delay: 500, distance: '2em', duration: 500, origin: 'bottom', scale: 1 });
    ScrollReveal().reveal('.Notas .Informacion .Titulo h2', { delay: 500, distance: '2em', duration: 500, origin: 'bottom', scale: 1 });
    ScrollReveal().reveal('.Notas .Informacion .Titulo .Linea', { delay: 500, distance: '2em', duration: 500, origin: 'bottom', scale: 1 });
    ScrollReveal().reveal('.Notas .NoticiaFlecha', { delay: 500, distance: '2em', duration: 500, origin: 'bottom', scale: 1 });
    ScrollReveal().reveal('.Notas .CarruselNoticias', { delay: 500, distance: '2em', duration: 500, origin: 'bottom', scale: 1 });
    ScrollReveal().reveal('.Noticias .Informacion .Titulo h2', { delay: 500, distance: '2em', duration: 500, origin: 'bottom', scale: 1 });
    ScrollReveal().reveal('.Noticias .Informacion .Titulo .Linea', { delay: 500, distance: '2em', duration: 500, origin: 'bottom', scale: 1 });
    if ($(window).width() >= 1024) {
        ScrollReveal().reveal('.Noticias .CarruselNoticias .ItemNoticia.activo .Imagen', { delay: 500, distance: '2em', duration: 500, origin: 'bottom', scale: 1 });
        ScrollReveal().reveal('.Noticias .CarruselNoticias .ItemNoticia.activo .Descripcion p.Seccion', { delay: 500, distance: '2em', duration: 500, origin: 'bottom', scale: 1 });
        ScrollReveal().reveal('.Noticias .CarruselNoticias .ItemNoticia.activo .Descripcion p.NotTitulo', { delay: 500, distance: '2em', duration: 500, origin: 'bottom', scale: 1 });
    } else {
        ScrollReveal().reveal('.Noticias .CarruselNoticias', { delay: 500, distance: '2em', duration: 500, origin: 'bottom', scale: 1 });
    }
    ScrollReveal().reveal('.Noticias .Boton', { delay: 500, distance: '2em', duration: 500, origin: 'bottom', scale: 1 });
    ScrollReveal().reveal('.RedesPeru .Informacion .Titulo h2', { delay: 500, distance: '2em', duration: 500, origin: 'bottom', scale: 1 });
    ScrollReveal().reveal('.RedesPeru .Informacion .Titulo .Linea', { delay: 500, distance: '2em', duration: 500, origin: 'bottom', scale: 1 });
    ScrollReveal().reveal('.RedesPeru .RpBloques', { delay: 500, distance: '2em', duration: 500, origin: 'bottom', scale: 1 });
    ScrollReveal().reveal('.RedesPeru .Boton', { delay: 500, distance: '2em', duration: 500, origin: 'bottom', scale: 1 });

});