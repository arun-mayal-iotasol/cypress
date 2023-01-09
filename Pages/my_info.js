///<reference types="Cypress"/>


class MyInfo{

    personal_detail_elements={
        "emp_first_name":()=>{return cy.get("input[name='firstName']");},
        "emp_middle_name" :()=>{return cy.get("input[name='middleName']")},
        "emp_last_name":()=>{return cy.get("input[name='lastName'")},
        "emp_nick_name" :()=>{return cy.xpath("(//input[@class='oxd-input oxd-input--active'])[2]")},
        "emp_id" :() =>{return cy.xpath("(//input[@class='oxd-input oxd-input--active'])[3]")},
        "emp_driver_licence" :()=>{return cy.xpath("(//input[@class='oxd-input oxd-input--active'])[5]")},
        "emp_driver_licence_expire_date" :()=>{return cy.xpath("(//input[@class='oxd-input oxd-input--active'])[6]")},
        "is_emp_smoke" :()=>{return cy.xpath("(//input[@type='checkbox'])[1]")}
    }

    save_personal_details_locator = ()=>{return cy.xpath("(//button[@type='submit'])[2]")}
    
    all_details_tab_element_locator = ()=>{
        return cy.get("div[role='tablist']>div>a");
    }

    enter_employee_name(first_name,middle_name,last_name){
        this.personal_detail_elements.emp_first_name().should("be.visible").then(()=>{
            this.personal_detail_elements.emp_first_name().clear().type(first_name);
            this.personal_detail_elements.emp_middle_name().clear().type(middle_name);
            this.personal_detail_elements.emp_last_name().clear().type(last_name);
        })
            
    }

    is_employee_smoke_cigratte(yes_he_smoke=true)
    {
            if(yes_he_smoke){
                this.personal_detail_elements.is_emp_smoke().click()
            }
    }

    enter_employee_driving_licence_details(licence_number,expiry_date)
    {
        this.personal_detail_elements.emp_driver_licence().type(licence_number);
        this.personal_detail_elements.emp_driver_licence_expire_date().type(expiry_date);
    }

    

}

module.exports = new MyInfo();