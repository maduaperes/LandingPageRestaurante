$(document).ready(function () {
    // Menu Mobile
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    // Scroll e Active Menu
    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

        let activeSectionIndex = 0;
        sections.each(function (i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        });

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    // WhatsApp (Corrigido)
    $('.btn-whatsapp').on('click', function (e) {
        // Se o elemento clicado (ou o link pai) for o botão de telefone, não faz nada
        if ($(this).closest('#phone_button').length > 0) return;

        e.preventDefault();
        const tel = "5515996514120";
        const msg = encodeURIComponent("Olá! Tenho interesse na Landing Page de Restaurante.");
        const url = `https://wa.me/${tel}?text=${msg}`;
        window.open(url, '_blank');
    });

    // ScrollReveal
    const revealConfig = { origin: 'left', duration: 2000, distance: '20%' };
    ScrollReveal().reveal('#cta', revealConfig);
    ScrollReveal().reveal('.dish', revealConfig);
    ScrollReveal().reveal('#testimonial_chef', { ...revealConfig, duration: 1000 });
    ScrollReveal().reveal('.feedback', { origin: 'right', duration: 1000, distance: '20%' });
});