describe('Автотест для TEST.QA.STUDIO', function () {
    it('Длинный автотест', function () {
         cy.visit('https://test.qa.studio/');

         cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
         cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').dblclick();
         cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
         cy.visit('https://test.qa.studio/');
         cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
         cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
         cy.get('.checkout').click();

         cy.get('#billing_first_name').type('Marat'); 
         cy.get('#billing_last_name').type('Maslov');
         cy.get('#billing_address_1').type('ул.Парашютная, д. 61');
         cy.get('#billing_city').type('г. Санкт-Петербург');
         cy.get('#billing_state').type('Приморский');
         cy.get('#billing_postcode').type('000000');
         cy.get('#billing_phone').type('+79879877777');
         cy.get('#billing_email').type('anymail@gmail.com')
         cy.get('#place_order').click();
     })
    })