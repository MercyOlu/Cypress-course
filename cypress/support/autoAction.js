Cypress.Commands.add("autoAssert", (pomFile,element,word)=>{
    cy.fixture(pomFile).then(()=>{
    cy.xpath(element).should("be.visible").fill(word)
    
    })
})

Cypress.Commands.add("login", ()=>{
    cy.fixture("autoLocators").then((sel)=>{
        cy.xpath(sel.signupLogin).click()
        cy.xpath(sel.loginEmailfield).fill(sel.email)
        cy.xpath(sel.loginPasswordfield).fill(sel.password)
        cy.xpath(sel.login).click()
        cy.screenshot("Automation Dashboard")
    })
})