/// <reference types="Cypress" />

import ChangePassword from "../changepassword"
import data from "C:\\Training\\Cypress\\cypress\\fixtures\\login_data.json"
class LoginPage{

    
    login_elements = {
        username_input_locator : () => {return cy.get("input[name='username']")},
        password_input_locator : () => {return cy.get("input[type=password]")},
        login_button_locator :() => {return cy.get("button.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button")},
        forget_password_locator :()=>{return cy.get("div.orangehrm-login-forgot")},
        orange_company_locator : ()=> {return cy.get("a[href='http://www.orangehrm.com']")},
        invalid_credentials_locator :()=>{return cy.get("p.oxd-text.oxd-text--p.oxd-alert-content-text")},
        required_field_locator :() => {return cy.get("span.oxd-input-field-error-message")},
    }

    login_with_valid_credentials()
    {
        this.login_elements.username_input_locator().type(data.Valid_data.username)
        this.login_elements.password_input_locator().type(data.Valid_data.password);
        this.login_elements.login_button_locator().click();
    }

    login_with_invalid_credentials()
    {
        this.login_elements.username_input_locator().type(data.Invalid_data.username);
        this.login_elements.password_input_locator().type(data.Invalid_data.password);
        this.login_elements.login_button_locator().click();
    }

    skip_required_fields(skip_username=true)
    {
        if(skip_username){
            this.login_elements.password_input_locator().type(data.Valid_data.password);
        }
        else
        {
            this.login_elements.username_input_locator().type(data.Invalid_data.username)
        }
        this.login_elements.login_button_locator().click()
    }

    
}
module.exports = new LoginPage();