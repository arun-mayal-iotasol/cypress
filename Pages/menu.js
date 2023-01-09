/// <reference types="Cypress" />


class MenuTab{

    all_tabs = ()=>{
        return cy.get("ul.oxd-main-menu>li>a")
    }

    go_to_menu(menu_name){

        this.all_tabs().each(($item)=>{

            if($item.text()==menu_name)
            {
                cy.wrap($item).click()
                
            }
        })
    }









}

module.exports = new MenuTab();