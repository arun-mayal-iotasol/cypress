/// <reference types="Cypress" />
import LoginPage from "../../Pages/Login/login"
import DashboardPage from "../../Pages/Dashboard/dashboardpage";
import ChangePassword from "../../Pages/changepassword"




describe("Login test suites",()=>{
    beforeEach(()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/");
    })

    it.only("login with valid credentials",()=>{       
        LoginPage.login_with_valid_credentials()
        DashboardPage.dashboard_element.dashboard_text_locator().should("have.text","Dashboard")
        DashboardPage.click_on_user_dropdown("Change Password")
        // ChangePassword.go_to_change_password_page()
    })

    it("login with invalid credentials",()=>{
        LoginPage.login_with_invalid_credentials()
        cy.contains("Invalid credentials")
    })

    it("Skip username required fields",()=>{
        LoginPage.skip_required_fields(true);
        let required_text = LoginPage.login_elements.required_field_locator();
        required_text.should("be.visible");
        required_text.contains("Required");
        
    })

    it("skip password required fields",()=>{
        LoginPage.skip_required_fields(false);
        let password_required_text = LoginPage.login_elements.required_field_locator();
        password_required_text.should("be.visible");
        password_required_text.contains("Required");
    })

    it("go to change password page",()=>{
        DashboardPage.click_on_user_dropdown()
    })
    
})

