
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuItems = document.querySelectorAll('.menu-item');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    document.getElementById('satu').addEventListener('click', function() {
        document.getElementById('Home').scrollIntoView({
            behavior: 'smooth'
        });
    });

    document.getElementById('dua').addEventListener('click', function() {
        document.getElementById('Features').scrollIntoView({
            behavior: 'smooth'
        });
    });

    document.getElementById('tiga').addEventListener('click', function() {
        document.getElementById('testimonial').scrollIntoView({
            behavior: 'smooth'
        });
    });

    function activateButton(button) {
        document.querySelectorAll('.menu-button').forEach(btn => {
            btn.classList.remove('active');
            btn.style.cursor = "pointer";
        });
        button.classList.add('active');
        button.style.cursor = "pointer";
    }


    

