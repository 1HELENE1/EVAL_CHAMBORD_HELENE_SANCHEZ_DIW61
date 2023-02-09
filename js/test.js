{/* <form>
  <input type="text" id="search-input">
  <button type="submit" id="search-button">Search</button>
</form>

<script>
  const searchButton = document.querySelector('#search-button');
  const searchInput = document.querySelector('#search-input');

  searchButton.addEventListener('click', function(event) {
    event.preventDefault();
    const searchTerm = searchInput.value;

    // Dans cet exemple, nous utilisons une liste de produits prédéfinis
    const products = [
      { name: 'product1', url: 'https://www.example.com/product1' },
      { name: 'product2', url: 'https://www.example.com/product2' },
      { name: 'product3', url: 'https://www.example.com/product3' }
    ];

    const product = products.find(function(product) {
      return product.name === searchTerm;
    });

    if (product) {
      window.location.href = product.url;
    } else {
      alert('Product not found');
    }
  });
</script> */}
