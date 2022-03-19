const elements = {
    productsArray: Array.from(document.querySelectorAll('.category-wrapper .product-cont')),
};

const callbacks = {
    showProductsCount() {
        alert(`Number of products per page: ${elements.productsArray.length}`);
    },
    showProductsIds() {
        const { productsArray } = elements;

        if (productsArray.length === 0) {
            return;
        }

        const ids = productsArray.map((product) => {
            return product.dataset.id;
        });

        const resultWindow = window.open('about:blank', 'Products ids', 'width=500,height=500');
        resultWindow.document.write(ids.join(','));
    },
    showProductsSku() {
        const { productsArray } = elements;

        if (productsArray.length === 0) {
            return;
        }

        const skus = productsArray.map((product) => {
            return product.dataset.sku;
        });

        const resultWindow = window.open('about:blank', 'Products SKU', 'width=500,height=500');
        resultWindow.document.write(skus.join(','));
    }
};

chrome.runtime.onMessage.addListener((request) =>  {
    const { callbackName } = request;
    const callback = callbacks[callbackName];

    if (callback && typeof(callback) === 'function') {
        callback();
    }
});