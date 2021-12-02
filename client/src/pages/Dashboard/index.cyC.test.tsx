import React from "react";
import { mount } from "@cypress/react";
import { Dashboard } from "./index";

import { CardType } from "../../interfaces/types";

const mockData: CardType[] = [
  {
    id: "thao---a52de344-ffb0-41db-a4b8-efdd4589976c",
    startDate: 1636416000000,
    endDate: 1636761600000,
    targetImpressions: 6543,
    deliveredImpressions: 6542,
  },
  {
    id: "01ce22fa-62db-4d08-a910-1b544e3e8a42",
    startDate: 1638144000000,
    endDate: 1639094400000,
    targetImpressions: 9787978,
    deliveredImpressions: 3159904,
  },
  {
    id: "nathan-1623245249889",
    startDate: 1621863173300,
    endDate: 165477880480800,
    targetImpressions: 100,
    deliveredImpressions: 1,
  },
  {
    id: "3zc469mhhzktdgg877",
    startDate: 1631221030317,
    endDate: 1631221080317,
    targetImpressions: 5678,
    deliveredImpressions: 0,
  },
  {
    id: "f58eabc7-7bb0-4e6d-9713-88c629899ff9",
    startDate: 1621863173300,
    endDate: 1622381520000,
    targetImpressions: 1011010,
    deliveredImpressions: 0,
  },
];

describe("Test Dashboard", () => {
  beforeEach(() => {
    cy.intercept("GET", "/api/get-campaigns", mockData);

    mount(<Dashboard />);
  });

  it("Should render Dashboard", () => {
    cy.get("[data-testid=dashboardContainer]").should("exist");
    cy.get("[data-testid=cardContainer]")
      .should("exist")
      .should("have.length", mockData.length)
      .first()
      .should("contain.text", mockData[0].id);
  });
});
