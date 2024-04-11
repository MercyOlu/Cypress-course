var el
describe ("Project work for cypress class", ()=>{
    before(()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com")
    cy.fixture("hrmLocators").then ((sel)=>{
        el = sel
    })
    Cypress.on("uncaught:exception", ()=>{
        return false
    })
    })
it("User should be able to login",()=>{
   cy.login()
})
it("User should be able to validate that dashboard has the profile image, time at work and actions", ()=>{
    cy.hrmAssert("hrmLocators",el.profileImg)
    cy.hrmAssert("hrmLocators",el.timeatWork)
    cy.hrmAssert("hrmLocators",el.actions)
    cy.hrmAssert("hrmLocators",el.usernameDashboard)
})
 it("User should be able to view the personal management screen",()=>{

    cy.get(el.myInfo).click()
    cy.hrmAssert("hrmLocators",el.employeeImg)
    cy.get(el.imgUpdate).selectFile("/Users/user/Downloads/face.jpeg")
    cy.get(el.save).click()

 })
it("User should be able to update the personal information", ()=>{
   
    cy.get(el.myInfo).click().wait(3000)
   cy.get(el.firstNamefield).fill(el.firstname).wait(3000)
   cy.get(el.middlenamefield).fill(el.middlename).wait(2000)
   cy.get(el.lastnamefield).fill(el.lastname).wait(2000)
   cy.xpath(el.nationality).click()
   cy.contains(el.nig).click({force:true})
   cy.get(el.status).click()
   cy.contains(el.mrs).click({force:true})
   cy.get(el.dobfield).fill(el.dob)
   cy.get(el.licensefield).fill(el.license)
   cy.get(el.female).click()
   cy.get(el.save1).click()

})
it("User can upload files",()=>{
    const p = "/Users/user/Downloads/face.jpeg"
    cy.get(el.attach).should('be.visible').click();
    cy.get(el.browse).click()
    cy.get('.oxd-file-input-div').attachFile('face.jpeg')
    cy.get('.orangehrm-attachment > .orangehrm-card-container > .oxd-form > :nth-child(1) > .oxd-grid-3').click()
    cy.get(el.textArea).fill(el.text)
    //cy.get(el.saveAttach).click()
 
  });
it("User should be update contact information", () =>{
    cy.get(el.contactTab).click().wait(3000)
    cy.get(el.street1field).clear().fill(el.street1).wait(3000)
    cy.get(el.street2field).clear().fill(el.street2).wait(3000)
    cy.get(el.cityfield).fill(el.city).wait(3000)
    cy.get(el.statefield).fill(el.state)
    cy.get(el.countryfield).click().wait(3000)
    cy.contains(el.nig1).click({force:true})
    cy.get(el.mobilefield).fill(el.mobile).wait(3000)
    cy.get(el.emailfield).fill(el.email).wait(3000)
    cy.get(el.save2).click()
})
it("User should be able to access the leave management module",()=>{
    cy.get(el.leave).click()
})
it("User should be able to apply for leave",()=>{
    cy.get(el.apply).click()
    cy.get(el.leavetypeApply).click()
    cy.contains(el.ltype).click({force:true}).wait(3000)
    cy.get(el.toDate).clear().fill(el.td)
    cy.get(el.fromDate).clear().fill(el.fd)
    cy.get('.oxd-grid-4').click().wait(3000)
    cy.get(el.partialday).click()
    cy.contains(el.fud).click({force:true})
    cy.get(':nth-child(3) > .oxd-grid-4').click().wait(3000)
    cy.xpath(el.durationfield).click()
    cy.contains(el.duration).click({force:true})
    cy.get(el.textfield1).fill(el.textAPPLY)
    cy.get(el.applyL).click()
})
it("User can view the applied leave", ()=>{
    cy.get(el.myLeave).click()
    cy.hrmAssert("hrmLocators",el.froD)
})
it.skip("User should be able to create an entitled leave ",()=>{
    cy.get(el.entitlement).click()
    cy.get(el.addLeave).click()
    cy.get(el.empNamefield).fill(el.emptype)
    cy.contains(el.empname).click({force:true})
    cy.get(el.leaveType).click()
    cy.contains(el.type).click({force:true})
    cy.get(el.leavePeriodfield).click()
    cy.contains(el.period).click({force:true})
    cy.get(el.entitleIdfield).fill(el.entitleid)
    cy.get(el.save3).click()
    cy.get(el.confirm).click()
    
})
it.skip("User should be able to search for employee entitlements", ()=>{
    cy.get(el.entitlement).click()
    cy.get(el.empEntitle).click()
    cy.get(el.empfield).fill(el.emptype1)
    cy.contains(el.empname2).click({force:true})
    cy.get(el.leavetype1).click()
    cy.contains(el.type).click({force:true})
    cy.get(el.periodfield).click()
    cy.contains(el.period).click({force:true})
    cy.get(el.search).click()
})


})
  