/// <reference types="cypress" />

describe('example test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays two todo items by default', () => {
    cy.get('[data-cy="click-counter"]').contains('0');
    cy.get('[data-cy="button"]').click();
    cy.get('[data-cy="click-counter"]').contains('1');
  });
});
