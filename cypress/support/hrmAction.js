Cypress.Commands.add("login", ()=>{
    cy.fixture("hrmLocators").then((sel)=>{
        cy.get(sel.usernameField).fill(sel.username)
        cy.get(sel.passwordField).fill(sel.password)
        cy.get(sel.loginButton).click()
        cy.screenshot("HRM Dashboard")
    })
})
Cypress.Commands.add("hrmAssert", (pomFile,element)=>{
    cy.fixture(pomFile).then(()=>{
    cy.get(element).should("be.visible").click()
    
    })
})

Cypress.Commands.add('upload_file', (fileName, fileType = ' ', element) => {
cy.fixture("hrmLocators").then( () => {
cy.fixture(fileName, 'base64').then(content => {
const el = element[0];
const testFile = new File([content], fileName, { type: fileType });
const dataTransfer = new DataTransfer();
dataTransfer.items.add(testFile);
el.files = dataTransfer.files;
});
});
});
