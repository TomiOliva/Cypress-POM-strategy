Cypress.Commands.add("selectProduct", (productName) => { 
    cy.get('h4.card-title').each(($el, index, $list) => {
        if($el.text().includes(productName))
        {
            cy.get('button.btn.btn-info').eq(index).click()
        }
        
        })


})

Cypress.Commands.add("LoginAPI",()=> {

    cy.request("POST","https://rahulshettyacademy.com/api/ecom/auth/login",
    {"userEmail":"anshika@gmail.com","userPassword":"Iamking@000"}).
    then(function(response)
    {
        expect(response.status).to.eq(200)
       Cypress.env('token',response.body.token);
    })
})

