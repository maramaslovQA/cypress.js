describe('Автотест для формы логина и пароля', function () {
    it('1.1 Проверка авторизации по верному логину и паролю', function () {
         cy.visit('https://login.qa.studio/');

         cy.get("#mail").type('german@dolnikov.ru');
         cy.get("#pass").type('iLoveqastudio1').type('{enter}');

         cy.contains('Авторизация прошла успешно').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 
     })

     it('1.2 Проверка логики восстановления пароля', function (){
        cy.reload();
        cy.visit('https://login.qa.studio/');

        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('anymail@mail.ru');
        cy.get('#restoreEmailButton').click();  

        cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })

     it('1.3 Проверка на негативный кейс авторизации', function (){
        cy.reload();
        cy.visit('https://login.qa.studio/');

        cy.get("#mail").type('german@dolnikov.ru');
        cy.get("#pass").type('iLoveqastudio222');
        cy.get('#loginButton').click();

        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 
     })


     it('1.4 Проверка на негативный кейс авторизации(2)', function (){
        cy.reload();
        cy.visit('https://login.qa.studio/');

        cy.get("#mail").type('tintin@gmail.com');
        cy.get("#pass").type('iLoveqastudio1');
        cy.get('#loginButton').click();

        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 
     })

     it('1.5 Проверка на негативный кейс валидации', function (){
        cy.reload();
        cy.visit('https://login.qa.studio/');

        cy.get("#mail").type('germandolnikov.ru');
        cy.get("#pass").type('iLoveqastudio1');
        cy.get('#loginButton').click();

        cy.contains('Нужно исправить проблему валидации').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 
     })


     it('1.6 Проверка на привидение к строчным буквам в логине', function (){
        cy.reload();
        cy.visit('https://login.qa.studio/');

        cy.get("#mail").type('GerMan@Dolnikov.ru');
        cy.get("#pass").type('iLoveqastudio1');
        cy.get('#loginButton').click();

        cy.contains('Авторизация прошла успешно').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 
     })

    })