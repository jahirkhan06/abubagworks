function addToCart(productCode) {
  alert(`Product ${productCode} added to cart.`);
}

document.getElementById('searchBar')?.addEventListener('input', function() {
  const query = this.value.toLowerCase();
  document.querySelectorAll('.product').forEach(prod => {
    const name = prod.dataset.name.toLowerCase();
    prod.style.display = name.includes(query) ? 'block' : 'none';
  });
});
