document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.categories button');
    const products = document.querySelectorAll('.product-card');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const category = button.getAttribute('data-category');

            products.forEach(product => {
                const productCategory = product.getAttribute('data-category');

                if (category === 'all' || category === productCategory) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    });
});
