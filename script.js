// ============for navigation =========
// Function to toggle the mobile navigation menu
function toggleMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("active");
}



// ==============footer============
function loadFooter() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => console.error('ফুটার লোড করার সময় সমস্যা:', error));
}

// পেজ লোড হলে ফাংশনটি কল করুন
window.onload = loadFooter;

// ==================Login display===========
