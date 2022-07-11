import { Button } from "../../src/Button";
import { mount } from "@cypress/react";
import * as UC from "../../src/useChange";

describe("Button.jsx", () => {
  // The scenarios to be tested:
    // 1) On render, button text should be Add me
    // 2) After clicking the button, the button text should be Remove me

  // Solution tried for the above scenario, 
    // stubbed useChange to return [false, cy.stub().as("setter1")]
    // mounted <Button />
    // asserted button text to be "Add me"
    // stubbed useChange to return [true, cy.stub().as("setter2")]
    // asserted button text to be "Remove me"
  it("stub", () => {
    cy.stub(UC, "useChange").returns([true, cy.stub().as("setter1")]);
    mount(<Button />).then(() => {
      cy.get("button").should("have.text", "Add me");
    }).then(() => {
      // cy.stub(UC, "useChange").returns([false, cy.stub().as("setter2")]);
      cy.get("button").click();
      cy.get("@setter1").should("have.been.calledOnce");
      cy.get("button").should("have.text", "Remove me");
    });
  });
});