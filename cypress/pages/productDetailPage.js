const SELECTORS = {
  ADD_TO_CART: "#add-to-cart-button-19",
};

export const productDetailPage = {
  addProductToCart: () => {
    cy.allure().step("Add product to the cart", false);
    cy.get(SELECTORS.ADD_TO_CART).click();
  },
};
