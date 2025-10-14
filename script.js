// ====== SET YOUR HANDLES / CONTACTS HERE ======
// Replace the values with your real links/usernames.
const CONTACTS = {
  instagram: "https://instagram.com/Iam_omotaker", // e.g. https://instagram.com/your_handle
  tiktok: "https://www.tiktok.com/@Iam.omotaker", // e.g. https://www.tiktok.com/@your_handle
  snapchat: "https://www.snapchat.com/add/your_snap", // e.g. https://www.snapchat.com/add/your_snap
  // WhatsApp: change the 234XXXXXXXXXX to your full phone number without '+' and add a default message
  whatsapp: "https://wa.me/2348000000000?text=Hi%20OMK%2C%20I%20want%20to%20order%20—%20"
};

// ====== END CONFIG ======

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Set contact links in Contact section
document.getElementById('ig-link').href = CONTACTS.instagram;
document.getElementById('tiktok-link').href = CONTACTS.tiktok;
document.getElementById('snap-link').href = CONTACTS.snapchat;
document.getElementById('wa-link').href = CONTACTS.whatsapp;

// Drawer logic
const drawer = document.getElementById('drawer');
const closeBtn = document.querySelector('.drawer-close');
const productLabel = document.getElementById('drawer-product');
const btnIG = document.getElementById('drawer-ig');
const btnTT = document.getElementById('drawer-tiktok');
const btnSN = document.getElementById('drawer-snap');
const btnWA = document.getElementById('drawer-wa');

function openDrawer(productName, price) {
  productLabel.textContent = `Selected: ${productName} — ₦${Number(price).toLocaleString()}`;
  // Personalize WhatsApp message with the product name and price
  const waURL = CONTACTS.whatsapp + encodeURIComponent(`${productName} (₦${Number(price).toLocaleString()})`);
  btnWA.href = waURL;
  btnIG.href = CONTACTS.instagram;
  btnTT.href = CONTACTS.tiktok;
  btnSN.href = CONTACTS.snapchat;
  drawer.classList.add('active');
}

function closeDrawer() {
  drawer.classList.remove('active');
}

document.querySelectorAll('button[data-product]').forEach(btn => {
  btn.addEventListener('click', () => {
    const name = btn.getAttribute('data-product');
    const price = btn.getAttribute('data-price');
    openDrawer(name, price);
  });
});

closeBtn.addEventListener('click', closeDrawer);
drawer.addEventListener('click', (e) => {
  if (e.target === drawer) closeDrawer();
});
