
Cypress.Commands.add("clAssert", (pomFile,element)=>{
cy.fixture(pomFile).then(()=>{
cy.get(element).should("be.visible").click()

})
})
Cypress.Commands.add("typeAirport", (element,word)=>{
    cy.fixture("projectLocators").then((sel)=>{
        cy.get(element).type(word)
    })
})
Cypress.Commands.add("searchFlight", ()=>{
    cy.fixture("projectLocators").then((el)=>{
        cy.get(el.traveler).forceClick()
        cy.xpath(el.adultCount).clear({force: true}).type(1,  {force: true}) .wait(3000)
        cy.xpath(el.childCount).scrollIntoView().clear({force: true}).type(0, {force: true}) .wait(3000)
        cy.xpath(el.from).type("LOS")
        cy.xpath(el.countrySelector).click()
        cy.xpath(el.to).type("LHR")
        cy.xpath(el.countrySelector).click()
        cy.get(el.departureDate).fill(el.departureDateSelection)
        cy.get(el.arrivalDate).fill(el.arrivalDateSelection)
        cy.get(el.search).click()
        cy.screenshot("flights")
    })
})
Cypress.Commands.add("bookFlight", ()=>{
    cy.fixture("projectLocators").then((el)=>{
    cy.xpath(el.selectFlight).click()
    cy.get(el.firstNamefield).fill(el.firstname)
    cy.get(el.lastNamefield).fill(el.lastname)
    cy.get(el.emailfield).fill(el.email)
    cy.get(el.phone).fill(el.phoneno)
    cy.get(el.addressfield).fill(el.address)
    cy.get(el.nationality).type(el.nig)
    cy.xpath(el.nationalitySelection).click()
    cy.get(el.currentCountry).type(el.nig)
    cy.xpath(el.nationalitySelection2).click()
    cy.get(el.title).select(["Mrs"])
    cy.get(el.firstnameTI).fill(el.firstname)
    cy.get(el.lastnameTI).fill (el.lastname)
    cy.get(el.nationalityTI).select(["NG"])
    cy.get(el.monthTI).select(["5"])
    cy.get(el.dayTI).select(["05"])
    cy.get(el.yearTI).select(["2000"])
    cy.get(el.passportIdNo).fill(el.pass)
    cy.get(el.issuanceMonthTI).select(["5"])
    cy.get(el.issuanceDayTI).select(["04"])
    cy.get(el.issuanceYearTI).select(["2023"])
    cy.get(el.expiryTI).select(["8"])
    cy.get(el.expiryDayTI).select(["20"])
    cy.get(el.expiryYearTI).select(["2030"])
    cy.get(el.terms).click()
    cy.get(el.submit).click()
    cy.screenshot("booking details")



    })
})