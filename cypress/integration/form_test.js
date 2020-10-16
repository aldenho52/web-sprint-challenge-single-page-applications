describe('pizz form App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    const nameInput = () => cy.get('input[name="name"]')
    const sizeInput = () => cy.get('select[name="size"]')
    const pepperoni = () => cy.get('input[name="pepperoni"]')
    const steak = () => cy.get('input[name="steak"]')
    const chicken = () => cy.get('input[name="chicken"]')
    const olives = () => cy.get('input[name="olives"]')
    const form = () => cy.get('.pizza-form')
    const button = () => cy.get('button')
    const orders = () => cy.get('.orders-section')

    it('name input text can be added', () => {
        nameInput()
            .type('Alden Ho')
            .should('have.value', 'Alden Ho')
    })
    it('select multiple toppings', () => {
        pepperoni().check().should('be.checked')
        steak().check().should('be.checked')
        chicken().check().should('be.checked')
        olives().check().should('be.checked')
    })
    it('form submit works', () => {
        nameInput()
            .type('Alden Ho')
        sizeInput()
            .select('medium')
        form()
            .submit()
        orders()
            .should('contain', 'Alden Ho')
            .should('contain', 'medium')
    })
})