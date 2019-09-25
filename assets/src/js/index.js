import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import {reactLocale, Api, wcApi} from 'react-component-library/src/utils.js';
import Emitter from 'react-component-library/src/eventemitter';
import Filter from 'react-component-library/src/components/filter/filter';
import Store from 'react-component-library/src/store';
import Engine from 'react-component-library/src/components/cart/engine.jsx';
import Navigation from 'react-component-library/src/components/navigation/navigation';
import ImageGallery from 'react-component-library/src/components/product/ImageGallery/ImageGallery';
import Modal from 'react-component-library/src/components/modal/modal';
import Search from 'react-component-library/src/components/search/search';
import GDPR from 'react-component-library/src/components/gdpr/gdpr';



const { __, _x, _n, sprintf } = wp.i18n;

//  Production flag
if ( !process.env.NODE_ENV || process.env.NODE_ENV === 'production' ) {
    // Disable dev tools
    if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === "object") {
        for (let [key, value] of Object.entries(window.__REACT_DEVTOOLS_GLOBAL_HOOK__)) {
            window.__REACT_DEVTOOLS_GLOBAL_HOOK__[key] = typeof value == "function"
                ? () => {
                }
                : null;
        }
    }
}


// Globals
window.Store = Store;
window.cart_data = {
    "version": "1.3.29",
    "epay_merchant_number": "5989981",
    "show_total_weight": true,
    "mailchimp_api_key": "",
    "mailchimp_server": "",
    "total_quantity": 0,
    "total_price": 0,
    "price": 0,
    "tax": 25,
    "discount": 0,
    "show_mini": 1,
    "cart_route": "\/kurv\/",
    "customer_groups": [
        {
            "customer_group_id": "1",
            "sort_order": "1",
            "language_id": "2",
            "name": "Privat",
            "description": "",
            "custom_fields": []
        }, {
            "customer_group_id": "2",
            "sort_order": "2",
            "language_id": "2",
            "name": "Erhverv",
            "description": "",
            "custom_fields": [
                {
                    "custom_field_id": "3",
                    "custom_field_value": [],
                    "name": "CVR",
                    "type": "text",
                    "value": "",
                    "location": "address",
                    "required": true,
                    "sort_order": "99"
                }, {
                    "custom_field_id": "4",
                    "custom_field_value": [],
                    "name": "Kontaktperson",
                    "type": "text",
                    "value": "",
                    "location": "address",
                    "required": true,
                    "sort_order": "99"
                }
            ]
        }
    ],
    "products": [],
    "shipping_methods": [
        {
            "code": "simpleshipping.method_1",
            "type": "flat",
            "subtype": null,
            "text": "",
            "name": "Default shipping",
            "price": 0,
            "min": 0,
            "free": "",
            "country": ["57"],
            "logo": "images\/gls.svg",
            "droppoints": "",
            "selected": 1,
            "weight": null,
            "weight_min": "",
            "weight_max": "",
            "pricecalcs": 0,
            "pricecalcs_min": "",
            "pricecalcs_max": ""
        }
    ],
    "payment_methods": [
        {
            "code": "simplepayment.method_1",
            "name": "Betalingskort",
            "logo": "payment-cards.svg",
            "selected": 1,
            "settings": {
                "group": "",
                "mailreceipt": "",
                "windowstate": "1",
                "instantcapture": "1",
                "ownreceipt": "1",
                "md5key": "",
                "paymentcollection": "1",
                "paymenttype": "0",
                "cssurl": "",
                "mobilecssurl": "",
                "splitpayment": "0"
            }
        }
    ],
    "countries": [
        {
            "country_id": "57",
            "name": "Danmark"
        },
    ]
};

// Globals
window.Emitter = Emitter;
window.reactLocale = reactLocale;
window.classNames = classNames;
window.wcApi = wcApi;
window.Api = Api;
window.reactLocale = reactLocale;
window.classNames = classNames;



// on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    /**
     * Fetches products
     */
    function fetchProductsAsync() {
        // Fetches products
        if (!sessionStorage.getItem('hasDoneLoadingMoreProducts')) {
            loadMoreProduct([], sessionStorage.getItem('productNextPage') && sessionStorage.getItem('productNextPage') != 0 ? sessionStorage.getItem('productNextPage') : 1);
        }
    }

    function loadMoreProduct(allProducts, page) {

        // Fetches products
        wcApi.get(`products?per_page=100&page=${page}`, (error, data, resp) => {
            const response = JSON.parse(resp);
            const currentUrl = window.location.pathname;
            const result = currentUrl.split('/');
            let products = response;

            allProducts = [...allProducts, ...products]
            sessionStorage.setItem("allProducts", JSON.stringify(allProducts));
            sessionStorage.setItem("productNextPage", parseInt(page) + 1);

            //    this.setState({
            //        productsLoading: false,
            //        products: allProducts,
            //    }, () => this.filterProducts());

            if (products.length == 100) {
                Emitter.broadcast('productHaveLoaded');
                loadMoreProduct(allProducts, sessionStorage.getItem('productNextPage'));
            } else {
                sessionStorage.setItem("hasDoneLoadingMoreProducts", true);
                Emitter.broadcast('jobsDone');
            }
        });
    }
    fetchProductsAsync();

    localStorage.setItem('favoritlist', '[]')

//    If cart mount is present
    if (document.getElementsByClassName("app-cart")[0] != null) {
        let isCheckout = (document.location.pathname.includes("kurv"))
            ? 1
            : 0;

        if (isCheckout) {
            // Create the ePay script include
            let script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://ssl.ditonlinebetalingssystem.dk/integration/ewindow/paymentwindow.js';
            //  Add to head
            document.getElementsByTagName('head')[0].appendChild(script);
        }

        ReactDOM.render(<Engine state={new Store("cartAppState", cart_data)}
            render_main={isCheckout}/>, document.getElementsByClassName("app-cart")[0]);
    }

    if (document.getElementById('menu-react-mount') != null) {
        // Init
        ReactDOM.render(<Navigation/>, document.getElementById('menu-react-mount'));
    }

    if (document.getElementById('app-product-gallery') != null) {
        // Init
        ReactDOM.render(<ImageGallery/>, document.getElementById('app-product-gallery'));
    }

    if (document.getElementsByClassName('app-filter')[0] != null) {
        // Init
        ReactDOM.render(<Filter/>, document.getElementsByClassName('app-filter')[0]);
    }

    if (document.getElementsByClassName('app-search')[0] != null) {
        // Init
        ReactDOM.render(<Search/>, document.getElementsByClassName('app-search')[0]);
    }

    if (document.getElementsByClassName('entry-summary')[0] != null) {
        // Init
        ReactDOM.render(<ProductDetails />, document.getElementsByClassName('entry-summary')[0]);
    }

    if (document.getElementsByClassName("app-favoritlist-mount")[0] != null) {
        // Init
        ReactDOM.render(<Wishlist />, document.getElementsByClassName("app-favoritlist-mount")[0]
        );
    }

    // Maintanence mode.
    if (document.getElementsByClassName('maintanence-mount')[0] != undefined) {
        // Init
        ReactDOM.render(<Maintanence />, document.getElementsByClassName('maintanence-mount')[0]);
    }

    // Detection of add to cart button
    if (document.getElementsByClassName('single_add_to_cart_button')[0] != null) {

        const button = document.getElementsByClassName('single_add_to_cart_button')[0];

        // Remove class
        button.classList.remove('single_add_to_cart_button');

        // Attach listener
        button.addEventListener('click', (e) => {

            // Remove default action
            e.preventDefault();

            // Get the product id
            let parentId = document.getElementsByName('product_id')[0] != undefined
                ? document.getElementsByName('product_id')[0].value
                : null;

            // Product is an accessory
            if (parentId == null) {
                parentId = document.getElementsByName('add-to-cart')[0].value;
            }

            // Attributes
            const attributes = document.getElementById('pa_farve');

            // Qty
            const quantity = document.getElementsByClassName('qty')[0].value;

            // Attribute value
            let attributeValue = '';

            if (attributes != null) {
                attributeValue = attributes.options[attributes.selectedIndex].value;
            }

            const accessories = [...document.querySelectorAll('.wc-accessories-product-add-to-cart-checkbox')];

            // Create a holder
            const productIds = [];

            // Iterate
            accessories.forEach((accessory) => {
                if (accessory.checked) {
                    productIds.push(parseInt(accessory.id.replace('product-', '')));
                }
            });

            // Check validity
            if ((attributes != null && attributeValue == '')) {
                alert('Selecting an accessory and/or attribute is manadatory!');
                return false;
            }

            // Push the parent
            productIds.push(parentId);

            // Modal holder
            const productsToModal = [];

            // API based
            wcApi.get('products/?include=' + productIds.join(','), (error, data, response) => {

                const products = JSON.parse(response);

                products.forEach((product) => {
                    const productData = {
                        product_id: product.id,
                        name: parentId == product.id ? product.name + ' - ' + attributeValue : product.name,
                        description: product.description,
                        price: product.price,
                        special: false,
                        discounts: "",
                        sku: product.sku,
                        model: '',
                        image: (product.images.length > 0) ? window.location.origin + product.images[0].src : '/',
                        weight: product.weight,
                        stock: product.stock_quantity,
                        backorder: !product.backorders === "no",
                        url: ""
                    };

                    //Populate holder
                    productsToModal.push(productData);
                });

                // Broadcast
                Emitter.broadcast('onAddToCart', {
                    product_info: productsToModal,
                    quantity: quantity
                });

            });
        });
    }
});

window.addEventListener('scroll', function() {
    if (document.querySelector('.sticky') !== null) {
        let headerHeight = document.querySelector('#main-header').offsetHeight,
            elOffsetTop = document.querySelector('.sticky').getBoundingClientRect().top,
            padding = 30;
        if (headerHeight + padding > elOffsetTop) {
            document.querySelector('.sticky').style.top = headerHeight + padding + 'px';
        }
    }
});
