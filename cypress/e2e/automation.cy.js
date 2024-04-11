var el
describe ("Project work for cypress class", ()=>{
    before(()=>{
    cy.visit("/")
    cy.fixture("autoLocators").then ((sel)=>{
        el = sel
    })
})

it.only("User can register user with an existing email", ()=>{
    cy.xpath(el.signupLogin).click()
    cy.autoAssert("autoLocators", el.usernameField,el.username)
    cy.autoAssert("autoLocators",el.emailField, el.existingEmail)
    cy.xpath(el.signup).click()
    cy.screenshot("Existing Email Signup")
    cy.get(el.errormessage2).should("be.visible")
})
it("User can register user", ()=>{
    cy.xpath(el.signupLogin).click()
    cy.autoAssert("autoLocators", el.usernameField,el.username)
    cy.autoAssert("autoLocators",el.emailField, el.email)
    cy.xpath(el.signup).click()
})
it("User should be able to fill the personal information ", ()=>{
    cy.get(el.gender).click()
    cy.autoAssert("autoLocators",el.passwordField, el.password)
    cy.xpath(el.dayfield).contains(el.day).click({force:true})
    cy.xpath(el.monthField).contains(el.month).click({force:true})
    cy.xpath(el.yearField).contains(el.year).click({force:true})
    cy.get(el.newsletter).click()
    cy.get(el.offers).click()
    cy.autoAssert("autoLocators",el.firstnameField, el.firstname)
    cy.autoAssert("autoLocators",el.lastnameField, el.lastname)
    cy.autoAssert("autoLocators",el.companyField, el.company)
    cy.autoAssert("autoLocators",el.addressField, el.address)
    cy.xpath(el.countryField).contains(el.country).click({force:true})
    cy.autoAssert("autoLocators",el.stateField, el.state)
    cy.autoAssert("autoLocators",el.cityField, el.city)
    cy.autoAssert("autoLocators",el.zipcodeField, el.zipcode)
    cy.autoAssert("autoLocators",el.mobilenumberField, el.mobilenumber)
    cy.xpath(el.createaccount).click()
    cy.screenshot("Registration Complete")
    cy.xpath(el.continue).click()
    cy.get(el.log).click()
})

it("User logging in with invalid credentials",() =>{
    cy.xpath(el.signupLogin).click()
    cy.autoAssert("autoLocators", el.loginEmailfield, el.invalidemail)
    cy.autoAssert("autoLocators", el.loginPasswordfield, el.invalidpassword)
    cy.xpath(el.login).click()
    cy.get(el.errorMessage1).should("be.visible")
    
})
it("Usershould be able to login with valid credentials",()=>{
    
    cy.login()
})
it("User should be able to logout",()=>{
    cy.get(el.logout).click()
})
it("User should be able to use the contact form", ()=>{
    cy.get(el.contactus).click()
    cy.autoAssert("autoLocators", el.cName, el.name)
    cy.autoAssert("autoLocators", el.cemailfield, el.cemail)
    cy.autoAssert("autoLocators", el.subjectfield, el.subject)
    cy.autoAssert("autoLocators", el.body, el.message)
    cy.get(el.upload).attachFile("face.jpeg")
    cy.xpath(el.submit).click()
    cy.screenshot("Upload")
})

it("User should be able to add products to the cart",()=>{
    cy.login()
    cy.get(el.product).click()
    cy.get(el.viewproduct1).click()
    cy.get(el.addCart).click()
    cy.get(el.added).click()
    cy.get(el.product).click()
    cy.get(el.viewproduct2).click()
     cy.get(el.addCart).click()
})
it("User should be able to view cart and Checkout", ()=>{
    cy.get(el.viewcart).click()
    cy.get(el.proceedCheckout).click()
    cy.screenshot("Order summary")
    cy.get(el.checkout).click()
})
it("User should be able to pay for the order", ()=>{
    cy.autoAssert("autoLocators",el.nameCardField, el.cardname)
    cy.autoAssert("autoLocators",el.cardnoField, el.cardno)
    cy.autoAssert("autoLocators",el.cvcField, el.cvc)
    cy.autoAssert("autoLocators",el.expirationM, el.m)
    cy.autoAssert("autoLocators",el.expirationY, el.y)
    cy.xpath(el.pay).click()
    cy.screenshot("Payment Confirmation")

})
it("User can download the invoice", ()=>{
    cy.get(el.download).click()
})
})
