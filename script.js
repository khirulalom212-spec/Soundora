const yearEl = document.getElementById('year');
const selectedProductEl = document.getElementById('selected-product');
const orderButtons = document.querySelectorAll('.order-btn');

yearEl.textContent = new Date().getFullYear();

orderButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const product = button.dataset.product;
    selectedProductEl.textContent = `আপনি নির্বাচন করেছেন: ${product}. অর্ডার কনফার্ম করতে Email/Call/WhatsApp এ যোগাযোগ করুন।`;
  });
});
