///<reference types="Cypress" />

class DashboardPage{
    dashboard_element = {
        dashboard_text_locator : ()=>{return cy.get("h6.oxd-topbar-header-breadcrumb-module")},
        user_getoptions_locator : ()=>{return cy.get("span.oxd-userdropdown-tab")},
        user_logout_locator :() =>{return cy.get("a[href='/web/index.php/auth/logout']")},
        user_detail_locator : () =>{return cy.get("span.oxd-userdropdown-tab")},
        all_user_dropdown_locators : ()=>{return cy.get("ul.oxd-dropdown-menu>li")}  
    }

    logout_user(){
        this.dashboard_element.user_logout_locator().click()
    }

    click_on_user_dropdown(dropdown)
    {
        this.dashboard_element.user_detail_locator().click();
        this.dashboard_element.all_user_dropdown_locators().each(($item)=>{
            if($item.text()==dropdown){
                expect($item.text()).to.be.eq(dropdown)
                cy.wrap($item).click()
            }
        })
    }
    
}

module.exports = new DashboardPage();