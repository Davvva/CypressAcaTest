import { signup } from "../../PageObjects/AutomationExersizes/SignUp"
import {ultimateqasignup} from "../../Utils/ValidAccountData"

describe ('ultimate qa page test', () => {
    it ('Big page with many elements check', () => {
        cy.visit('https://ultimateqa.com/automation');
        cy.viewport(1920 * 1, 1080 * 1);
         signup.GetCheckloginautomation().should('contain', 'Login automation');
         signup.GetBigpagewithmanyelements().should('contain','Big page with many elements');
         signup.GetBigpagewithmanyelements().click();
         signup.GetCHecksectionofbuttonwriting().should('contain', 'Section of Buttons');
         signup.GetCheckbackroundcolorbtn().should('be.visible');
         cy.get(".et_pb_button").eq(1).realHover().then(($element)=>{
             cy.wrap($element)
             .invoke('css', 'background-color')
             .then(background => {
                 cy.log(background)
                 expect($element).to.have.css("background-color",background)
             })
     })
         signup.GetHidecontentonpage().click();
         signup.GetShowcontetntonpage().click();
         signup.GetClicksectionofbtn().click();
         signup.GetClickselectionsocialmedia().click();
         signup.GetClickloginbtn().click();
         signup.GetWritenameformathexercise().type(ultimateqasignup.firstName);
         signup.GetWriteemailformathexercise().type(ultimateqasignup.email);
         signup.GetWritemassage().type(ultimateqasignup.massage);    
         const captchaInput = cy.get('#et_pb_contact_form_0 > .et_pb_contact > .et_pb_contact_form > .et_contact_bottom_container > .et_pb_contact_right > .clearfix > .input')
         cy.get('#et_pb_contact_form_0 > .et_pb_contact > .et_pb_contact_form > .et_contact_bottom_container > .et_pb_contact_right > .clearfix > .et_pb_contact_captcha_question').invoke('text').then((captchaText) => {
           const numbers = captchaText.split('+');
           const num1 = parseInt(numbers[0].trim());
           cy.log(num1)
           const num2 = parseInt(numbers[1].trim());
           cy.log(num2)
           const expectedSum = num1 + num2;
           captchaInput.type(expectedSum);
           signup.GetClicksudmitbtn().click(); 
 })
 signup.GetWritenameforsecondexcercize().type(ultimateqasignup.firstName);
 signup.GetWriteemailforsecondexcersize().type(ultimateqasignup.email);
 signup.GetWritemassageforsecondexcersize().type(ultimateqasignup.massage);
//  const captchaInput2 = cy.get('#et_pb_contact_form_1 > .et_pb_contact > .et_pb_contact_form > .et_contact_bottom_container > .et_pb_contact_right > .clearfix > .input');
//  cy.get('#et_pb_contact_form_1 > .et_pb_contact > .et_pb_contact_form > .et_contact_bottom_container > .et_pb_contact_right > .clearfix > .input').invoke('text').then((captchaText) =>{
//      const numbers = captchaText.split('+');
//      const num3 = parseInt(numbers[0].trim());
//      const num4 = parseInt(numbers[1].trim());
//      const expectedSum = num3 + num4;
//      captchaInput.type(expectedSum);
//      signup.GetClicksudmitbtn().click(); 
 })
 it ('Fake Landing page check', () => {
    cy.visit('https://ultimateqa.com/automation');
    cy.viewport(1920 * 1, 1080 * 1);
    signup.GetCheckfakelandingpage().should('contain', 'Fake Landing Page');
    signup.GetCheckfakelandingpage().click();
    signup.GetCheckcoursebtnclick().click();
    signup.GetCheckcourceswebdevelopment().should('contain', 'Web Development');
    signup.GetCheckcourcespithon().should('contain', 'Python');
    signup.GetCheckcourcesuxdesign().should('contain', 'UX Design');
    signup.GetCheckcourcesdatabasedesign().should('contain', 'Database Design');
    signup.GetCheckcourcesjavascript().should('contain', 'Javascript');
    signup.GetCheckcourceshtmlcss().should('contain', 'HTML & CSS');
    signup.GetCheckcourcesintrotocoding().should('contain',  'Intro to Coding');
    signup.GetCheckcourcesappsandgames().should('contain', 'Apps & Games');
    signup.GetClickvievallcourses().click();
    signup.GetClickcreateaccount().click();
})
it('Fake Pricing page check', () => {
    cy.visit('https://ultimateqa.com/automation');
    cy.viewport(1920 * 1, 1080 * 1);
    signup.GetClickfakepricingpage().click();
    signup.GetCheckfreeworkplanname().should('contain', 'Free Trial');
    signup.GetCheckbasicworkplanname().should('contain', 'Basic');
    signup.GetCheckenterpriseworkplanname().should('contain', 'Enterprise');
    signup.Getcheckafreeworkplanprice().should('be.visible');
    signup.Getcheckabasicworkplanprice().should('be.visible');
    signup.Getcheckaenterpriceworkplanprice().should('be.visible');
    signup.GetPurchasefreeworkplan().click();
    signup.GetPurchasebasicworkplan().click();
    signup.GetPurchaseenterprise().click();
    signup.GetClickbrowsedocs().click();
    signup.GetClicksignuptoday().click();
})
it('Fiill out forms page check', ()=>{
    cy.visit('https://ultimateqa.com/automation');
    cy.viewport(1920 * 1, 1080 * 1);
    signup.GetCLickfilloutpage().click();
    signup.GetWritenameforoutforms().type(ultimateqasignup.firstName);
    signup.GetWritemassageforoutforms().type(ultimateqasignup.massage);
    signup.GetClicksubmit().click();
    signup.GetWritenameforoutformssecond().type(ultimateqasignup.firstName);
    signup.GetWritemassageforoutformssecond().type(ultimateqasignup.massage);
    signup.getCaptchainput().invoke('text').then(question => {
        const regex = /(\d)\s*\+\s*(\d)/;
        const match = question.match(regex);        
        if (match) {
          const firstDigit = match[1];
          const secondDigit = match[2];
          const sum = parseInt(firstDigit) + parseInt(secondDigit);       
         signup.getCaptchainput().type(sum);
        } else {
          cy.log('Failed to extract captcha digits');
        }
      });
      });
      it.only('Auto application page  check', ()=>{
        cy.visit('https://ultimateqa.com/automation');
        cy.viewport(1920 * 1, 1080 * 1);
        signup.GetClickautomationaplication().click();
        signup.Getgotosprinttwo().click();
        signup.Getgotosprintthree().click();
        signup.Getgotosprintfour().click();
        signup.Getgotosprintfive().click();
        signup.GetWritename().type(ultimateqasignup.firstName);
        signup.GetWritesurname().type(ultimateqasignup.surname);
        signup.GetChooseemergenecycontactgender().click();
        signup.GetWriteemergenecyname().type(ultimateqasignup. emergenecyname);
        signup.GetWriteemergenecysurname().type(ultimateqasignup. emergenecysurname);
        signup.GetSenddata().click();
        signup.GetChoosecrocodile().click();
        signup.GetSUbmit().click();
      });
})



