const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((faqItem) => {
  faqItem.addEventListener('click', () => {
    faqItem.classList.toggle('active');
  });
});
setTimeout(() => {
  document.body.classList.add('loaded'); // Add "loaded" class when page is loaded
}, 500);

function showSidebar() {
  const sidebar = document.querySelector('.sidebar ul');
  sidebar.style.transform = 'translateX(45%)';
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar ul');
  sidebar.style.transform = 'translateX(100%)';
}
