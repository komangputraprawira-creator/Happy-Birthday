document.addEventListener("DOMContentLoaded", function() {
  // --- 1. LOGIKA PINDAH HALAMAN ---
  const menuItems = document.querySelectorAll('.menu-item');
  const mainMenu = document.getElementById('main-menu');
  const contentPages = document.getElementById('content-pages');
  const sections = document.querySelectorAll('.page-section');
  const backBtn = document.getElementById('back-btn');

  // Saat menu diklik
  menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault(); 
      const targetId = item.getAttribute('data-target'); // Ambil ID halaman tujuan
      
      mainMenu.classList.add('hidden'); // Sembunyikan menu
      contentPages.classList.remove('hidden'); // Munculkan wadah konten
      
      // Sembunyikan semua section konten dulu
      sections.forEach(sec => sec.classList.add('hidden')); 
      
      // Munculkan hanya section yang dipilih
      document.getElementById(targetId).classList.remove('hidden');
    });
  });

  // Saat tombol kembali diklik
  backBtn.addEventListener('click', () => {
    contentPages.classList.add('hidden'); // Sembunyikan konten
    mainMenu.classList.remove('hidden'); // Munculkan menu kembali
  });

  // --- 2. ANIMASI BUNGA JATUH ---
  const flowerContainer = document.getElementById("bg-flowers");
  const flowers = ['🌻', '🌷', '✨', '🌻'];
  const totalFlowers = 35;

  for (let i = 0; i < totalFlowers; i++) {
    createFlower();
  }

  function createFlower() {
    const flower = document.createElement("div");
    flower.classList.add("flower");
    flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.fontSize = Math.random() * 20 + 15 + "px";
    flower.style.animationDuration = Math.random() * 7 + 5 + "s";
    flower.style.animationDelay = Math.random() * 5 + "s";
    
    flowerContainer.appendChild(flower);
    
    flower.addEventListener("animationend", () => {
      flower.remove();
      createFlower();
    });
  }
});
document.addEventListener("DOMContentLoaded", function() {
  
  // 1. KODE YANG SUDAH ADA (Logika pindah halaman & animasi bunga)
  // ... (semua kode lama Anda di sini) ...

  // 2. KODE BARU (Logika Autoplay Musik)
  // Taruh di sini, tepat sebelum tanda kurung kurawal penutup ini:
  const welcomeScreen = document.getElementById('welcome-screen');
  const startBtn = document.getElementById('start-btn');
  const audio = document.querySelector('audio');

  startBtn.addEventListener('click', function() {
    if (audio) {
      audio.play();
    }
    welcomeScreen.style.opacity = '0';
    setTimeout(() => {
      welcomeScreen.style.display = 'none';
    }, 500);
  });

}); // <--- Tanda kurung kurawal penutup ini harus ada di baris paling terakhir!
