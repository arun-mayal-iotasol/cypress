/// <reference types="Cypress" />

class Select_Dropdown{

    select_element = ()=>{return cy.get("select[data-test='product_sort_container']")}; 


    //function
    choose_value(){

        this.select_element().Select("hilo")
    }



}

module.exports = new Select_Dropdown()