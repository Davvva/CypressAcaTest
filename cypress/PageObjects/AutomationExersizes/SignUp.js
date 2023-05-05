import { AddressInfo } from "../../Utils/ValidAccountData"
import { randomname } from "../../Utils/ValidAccountData"
import { randomemail } from "../../Utils/ValidAccountData"
import {ultimateqasignup} from "../../Utils/ValidAccountData"
class signUP {

    visit () {
        cy.visit (Cypress.env('globalUrl'))
    }
    
    getUserName (){
        cy.get ('[data-qa="signup-name"]').type(randomname.randomName(7))
    }

    getEmail (){
        cy.get ('[data-qa="signup-email"]').type(randomemail.randomEmail(4))
    }
    getUpButton (){
        cy.get ('[data-qa="signup-button"]').click()
    }

    getPassword (value){
      cy.get('[type="password"]').type(value)
    }

    getBirthday (day, month, year) {
        cy.get('#days').select(day)
        cy.get('#months').select(month)
        cy.get('#years').select(year)
    }

    getFirstName (){
        cy.get('[data-qa="first_name"]').type(AddressInfo.firstName)
    }

    getLastName () {
        cy.get('[data-qa="last_name"]').type (AddressInfo.lastName)
    }

    getCompany() {
        cy.get ('[data-qa="company"]').type(AddressInfo.company)
    }

    getAddress1 () {
        cy.get ('[data-qa="address"]').type(AddressInfo.address)
    }

    getAddress2 () {
        cy.get('[data-qa="address2"]').type(AddressInfo.address2)
}

    getCountry(){
        cy.get('#country').select(AddressInfo.country)
    }
    
    getState () {
        cy.get ('[data-qa="state"]').type (AddressInfo.state)
    }

    getCity (){
        cy.get ('[data-qa="city"]').type(AddressInfo.city)
    }
    
    getZip() {
        cy.get('[data-qa="zipcode"]').type(AddressInfo.zip)
    }

    getPhoneNumber() {
        cy.get('[data-qa="mobile_number"]').type(AddressInfo.phone)
    }

    getSignUpButton (){
       return  cy.get('[data-qa="create-account"]')
    }

    GetSignupMessage (){
       cy.contain ('ACCOUNT CREATED! Congratulations! Your new account has been successfully created!')
       .and('contain', 'You can now take advantage of member privileges to enhance your online shopping experience with us.')
    }
    GetBigpagewithmanyelements (){
      return  cy.get ('.et_pb_text_inner > ul > :nth-child(1) > a');
    }
    GetCHecksectionofbuttonwriting(){
        return cy.get ('#Section_of_Buttons')
    }
    GetCheckbackroundcolorbtn(){
        return cy.get ('.et_pb_button_0_wrapper > .et_pb_button')
    }
    GetChecktriggerbackroundcolorbtn(){
        return cy.get ('et_pb_button_0_wrapper > .et_pb_button')
    }
    ///Check Ultimaye Qa page
    GetClosesubscribeform (){
        return cy.get (".formkit-close");
    }
    GetCheckloginautomation(){
        return cy.get ('.et_pb_text_inner > ul > :nth-child(6) > a')
    }
    GetHidecontentonpage(){
        return cy.get (".et_pb_column_10 > .et_pb_module > #lpwtoc_widget-2 > .lwptoc > .lwptoc_i > .lwptoc_header");
    }
    GetShowcontetntonpage(){
        return cy.get (".et_pb_column_10 > .et_pb_module > #lpwtoc_widget-2 > .lwptoc > .lwptoc_i > .lwptoc_header");
    }
    GetClicksectionofbtn(){
        return cy.get (".et_pb_column_10 > .et_pb_module > #lpwtoc_widget-2 > .lwptoc > .lwptoc_i > .lwptoc_items > :nth-child(1) > :nth-child(2)")
    }
    GetClickselectionsocialmedia(){
        return cy.get (".et_pb_column_10 > .et_pb_module > #lpwtoc_widget-2 > .lwptoc > .lwptoc_i > .lwptoc_items > :nth-child(1) > :nth-child(3)")
    }
    GetClickloginbtn(){
        return cy.get ('.et_pb_column_10 > .et_pb_module > #lpwtoc_widget-2 > .lwptoc > .lwptoc_i > .lwptoc_items > :nth-child(1) > :nth-child(4) > :nth-child(2) > :nth-child(2) > [href="#Login"] > .lwptoc_item_label');
    }
    GetWritenameformathexercise(){
        return cy.get ("#et_pb_contact_name_0")
    }
    GetWriteemailformathexercise(){
        return cy.get ("#et_pb_contact_email_0");
    }
    GetWritemassage(){
        return cy.get ('#et_pb_contact_message_0');
    }
    GetWritemathanswer(){
        return cy.get ("#et_pb_contact_form_0 > .et_pb_contact > .et_pb_contact_form > .et_contact_bottom_container > .et_pb_contact_right > .clearfix > .input")
    }
    GetClicksudmitbtn(){
        return cy.get ("#et_pb_contact_form_0 > .et_pb_contact > .et_pb_contact_form > .et_contact_bottom_container > .et_pb_contact_submit");
    }
    GetWritenameforsecondexcercize(){
        return cy.get ("#et_pb_contact_name_1");
    }
    GetWriteemailforsecondexcersize(){
        return cy.get ("#et_pb_contact_email_1")
    }
    GetWritemassageforsecondexcersize(){
        return cy.get('#et_pb_contact_message_1')
    }
    GetCheckfakelandingpage(){
        return cy.get (".et_pb_text_inner > ul > :nth-child(2) > a")
    }
    //FakeLandingpage
    GetCheckcoursebtnclick(){
        return cy.get (".et_pb_column_0 > .et_pb_button_module_wrapper > .et_pb_button");
    }
    GetCheckcourceswebdevelopment(){
        return cy.get(".et_pb_blurb_0 > .et_pb_blurb_content > .et_pb_blurb_container > .et_pb_module_header > a");
    }
    GetCheckcourcespithon(){
        return cy.get (".et_pb_blurb_1 > .et_pb_blurb_content > .et_pb_blurb_container > .et_pb_module_header > a");
    }
    GetCheckcourcesuxdesign(){
    return cy.get (".et_pb_blurb_2 > .et_pb_blurb_content > .et_pb_blurb_container > .et_pb_module_header > a");
    }
    GetCheckcourcesdatabasedesign(){
        return cy.get (".et_pb_blurb_3 > .et_pb_blurb_content > .et_pb_blurb_container > .et_pb_module_header > a")
    }
    GetCheckcourcesjavascript(){
        return cy.get (".et_pb_blurb_4 > .et_pb_blurb_content > .et_pb_blurb_container > .et_pb_module_header > a")
    }
    GetCheckcourceshtmlcss(){
        return cy.get ('.et_pb_blurb_5 > .et_pb_blurb_content > .et_pb_blurb_container > .et_pb_module_header > a')
    }
    GetCheckcourcesintrotocoding(){
        return cy.get (".et_pb_blurb_6 > .et_pb_blurb_content > .et_pb_blurb_container > .et_pb_module_header > a")
    }
    GetCheckcourcesappsandgames(){
        return cy.get (".et_pb_blurb_7 > .et_pb_blurb_content > .et_pb_blurb_container > .et_pb_module_header > a")
    }
    GetClickvievallcourses(){
        return cy.get('.et_pb_column_2 > .et_pb_button_module_wrapper > .et_pb_button');
    }
    GetClickcreateaccount(){
        return cy.get(".et_pb_column_20 > .et_pb_button_module_wrapper > .et_pb_button");
    }
//FakePricing page
GetClickfakepricingpage(){
    return cy.get (".et_pb_text_inner > ul > :nth-child(3) > a");
}
GetCheckfreeworkplanname(){
    return cy.get (".et_pb_column_1 > .et_pb_with_border > .et_pb_pricing_table_wrap > .et_pb_pricing_table > .et_pb_pricing_heading > .et_pb_pricing_title");
}
GetCheckbasicworkplanname(){
    return cy.get (".et_pb_column_2 > .et_pb_with_border > .et_pb_pricing_table_wrap > .et_pb_pricing_table > .et_pb_pricing_heading > .et_pb_pricing_title");
}
GetCheckenterpriseworkplanname(){
    return cy.get (".et_pb_column_3 > .et_pb_with_border > .et_pb_pricing_table_wrap > .et_pb_pricing_table > .et_pb_pricing_heading > .et_pb_pricing_title");
}
Getcheckafreeworkplanprice(){
    return cy.get (".et_pb_column_1 > .et_pb_with_border > .et_pb_pricing_table_wrap > .et_pb_pricing_table > .et_pb_pricing_content_top")
}
Getcheckabasicworkplanprice(){
    return cy.get (".et_pb_column_2 > .et_pb_with_border > .et_pb_pricing_table_wrap > .et_pb_pricing_table > .et_pb_pricing_content_top")
}
Getcheckaenterpriceworkplanprice(){
    return cy.get (".et_pb_column_3 > .et_pb_with_border > .et_pb_pricing_table_wrap > .et_pb_pricing_table > .et_pb_pricing_content_top")
}
GetPurchasefreeworkplan(){
    return cy.get (".et_pb_column_1 > .et_pb_with_border > .et_pb_pricing_table_wrap > .et_pb_pricing_table > .et_pb_button_wrapper > .et_pb_button")
}
GetPurchasebasicworkplan(){
    return cy.get (".et_pb_column_2 > .et_pb_with_border > .et_pb_pricing_table_wrap > .et_pb_pricing_table > .et_pb_button_wrapper > .et_pb_button")
}
GetPurchaseenterprise(){
    return cy.get (".et_pb_column_3 > .et_pb_with_border > .et_pb_pricing_table_wrap > .et_pb_pricing_table > .et_pb_button_wrapper > .et_pb_button")
}
GetClickbrowsedocs(){
    return cy.get (".et_pb_row_4 > .et_pb_column > .et_pb_button_module_wrapper > .et_pb_button");
}
GetClicksignuptoday(){
    return cy.get (".et_pb_column_1_3 > .et_pb_button_module_wrapper > .et_pb_button");
}
//Fill out forms page
GetCLickfilloutpage(){
    return cy.get (".et_pb_text_inner > ul > :nth-child(4) > a");
}
GetWritenameforoutforms(){
    return cy.get ("#et_pb_contact_name_0");
}
GetWritemassageforoutforms(){
    return cy.get('#et_pb_contact_message_0');
}
GetClicksubmit(){
    return cy.get('#et_pb_contact_form_0 > .et_pb_contact > .et_pb_contact_form > .et_contact_bottom_container > .et_pb_contact_submit');
}
GetWritenameforoutformssecond(){
    return cy.get ("#et_pb_contact_name_1");
}
GetWritemassageforoutformssecond(){
    return cy.get ('#et_pb_contact_message_1');
}
GetWriteanswerforexcersise(){
    return cy.get ('.clearfix > .input');
}
getCaptchainput(){
    return cy.get (".clearfix > .input");
}
//Sampleaplicationlifestyle
GetClickautomationaplication(){
    return cy.get (".et_pb_text_inner > ul > :nth-child(5) > a");
}
Getgotosprinttwo(){
    return cy.get("form > a");
}
Getgotosprintthree(){
    return cy.get (":nth-child(9) > a");
}
Getgotosprintfour(){
    return cy.get (":nth-child(16) > a");
}
Getgotosprintfive(){
    return cy.get (':nth-child(18) > a');
}
GetChoosegender(){
    return cy.get ("#radio1-m");
}
GetWritename(){
    return cy.get("#f1")
}
GetWritesurname(){
    return cy.get ("#l1")
}
GetChooseemergenecycontactgender(){
    return cy.get ("#radio2-m");
}
GetWriteemergenecyname(){
    return cy.get ("#f2")
}
GetWriteemergenecysurname(){
    return cy.get ("#l2");
}
GetSenddata(){
    return cy.get ("#submit2");
}
GetChoosecrocodile(){
    return cy.get ('[value="crocodiles"]');
}
GetSUbmit(){
    return cy.get ('form > [type="submit"]');
}
}
export const signup = new signUP

