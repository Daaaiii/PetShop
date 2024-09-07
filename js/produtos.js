document.addEventListener('DOMContentLoaded', function() {
    fetch('./dados/produtos.json')
        .then(response => response.json())
        .then(products => {
            const container = document.getElementById('products-container');
            products.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('w-25', 'p-2');
                productDiv.innerHTML = `
                    <div class="card">
                        <img src="${product.image}" class="card-img-top" alt="${product.name}" />
                        <div class="card-body text-center">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">${product.price}</p>
                        </div>
                    </div>
                `;
                container.appendChild(productDiv);
            });
        })
        .catch(error => console.error('Erro ao carregar os produtos:', error));
});