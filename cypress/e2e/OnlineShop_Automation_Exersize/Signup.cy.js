import { signup } from "../../PageObjects/AutomationExersizes/SignUp" 

describe ('onlineshop', () => {
it ('register', () => {
    cy.visit ('https://www.automationexercise.com/login')  
    signup.getUserName('')
    signup.getEmail('')
    signup.getUpButton()
    cy.contains('Enter Account Information').should('be.visible')
    cy.get('#uniform-id_gender2').click()
    signup.getPassword('testpass')
    signup.getBirthday(2, 6, 23)
    cy.get('#newsletter').click()
    signup.getFirstName()
    signup.getLastName()
    signup.getCompany()
    signup.getAddress1()
    signup.getAddress2()
    signup.getCountry()
    signup.getState()
    signup.getCity()
    signup.getZip()
    signup.getPhoneNumber()
    signup.getSignUpButton()
        .should('have.css', 'background', 'rgb(254, 152, 15) none repeat scroll 0% 0% / auto padding-box border-box')
        .and('have.css', 'color', 'rgb(255, 255, 255)')
        .and('have.css', 'padding', '6px 25px')
        .click()
    signup.GetSignupMessage()
    })
})