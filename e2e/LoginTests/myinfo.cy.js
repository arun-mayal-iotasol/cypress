/// <reference types="Cypress" />

import MyInfo from "../../Pages/my_info"
import MenuTab from "../../Pages/menu"
import LoginPage from "../../Pages/Login/login"
import DashboardPage from "../../Pages/Dashboard/dashboardpage"


describe('My info tests',()=>{

    before(()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        LoginPage.login_with_valid_credentials()
        DashboardPage.dashboard_element.dashboard_text_locator().should("have.text","Dashboard")
        MenuTab.go_to_menu("My Info")
        
    })

    it("enter Valid Employee name",()=>{
        cy.contains("Personal Details").should("be.visible");
        MyInfo.enter_employee_name("Pratanjli","Himani","Thakur");
        MyInfo.personal_detail_elements.emp_first_name().invoke("val").then(($data)=>{
            cy.writeFile("cypress/fixtures/myjsonfile.json",{"username":$data.valueOf()})
        })
        MyInfo.save_personal_details_locator().click({force:true});
        cy.scrollTo('top');
        MyInfo.personal_detail_elements.emp_first_name().should('have.value','Pratanjli') && MyInfo.personal_detail_elements.emp_middle_name().should('have.value','Himani') && MyInfo.personal_detail_elements.emp_last_name().should('have.value','Thakur')     
    })

})