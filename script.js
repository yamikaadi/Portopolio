document.addEventListener('DOMContentLoaded', function () {
    // Seleksi elemen
    const menuIcon = document.querySelector('.menu-icon');
    const navbar = document.querySelector('.navbar');
    const viewMyWorkButton = document.querySelector('.cta-button'); // Seleksi tombol View My Work

    // Event listener untuk hamburger menu
    menuIcon.addEventListener('click', function () {
        menuIcon.classList.toggle('active');
        navbar.classList.toggle('active');
    });

    // Inisialisasi animasi mengetik menggunakan Typed.js
    if (document.querySelector('#typed-text')) {
        new Typed('#typed-text', {
            strings: ["Hi, I'm Adi Yamika"], // Kalimat yang akan diketik
            typeSpeed: 100, // Kecepatan mengetik (dalam milidetik)
            backSpeed: 50, // Kecepatan menghapus
            loop: false // Apakah animasi akan mengulang
        });
    }

    // Intersection Observer untuk animasi scroll
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Menangkap semua tautan navigasi
    const navLinks = document.querySelectorAll('.navbar ul li a');

    // Menambahkan event listener untuk animasi scroll halus pada navigasi
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Mencegah perilaku default klik tautan
            const targetId = link.getAttribute('href').substring(1); // Mendapatkan ID target dari href tanpa #
            const targetElement = document.getElementById(targetId); // Menangkap elemen target

            // Animasi scroll halus ke elemen target
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });

            // Tutup menu hamburger setelah klik tautan
            if (menuIcon.classList.contains('active')) {
                menuIcon.classList.remove('active');
                navbar.classList.remove('active');
            }
        });
    });

    // Menambahkan event listener untuk tombol View My Work
    if (viewMyWorkButton) {
        viewMyWorkButton.addEventListener('click', function(e) {
            e.preventDefault(); // Mencegah perilaku default klik tautan
            const targetId = 'todo'; // ID section yang dituju
            const targetElement = document.getElementById(targetId); // Menangkap elemen target

            // Animasi scroll halus ke elemen target
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });

            // Tutup menu hamburger jika aktif
            if (menuIcon.classList.contains('active')) {
                menuIcon.classList.remove('active');
                navbar.classList.remove('active');
            }
        });
    }
});


// Blured Image
// scripts.js

// script.js

