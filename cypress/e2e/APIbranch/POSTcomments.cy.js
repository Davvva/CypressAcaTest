/// <reference types ="Cypress" />

describe("API testing", () => {
  it("Postcomments requests", () => {
    cy.fixture("createusers").then((payload) => {
      cy.request({
          method: "GET",
          url: `${Cypress.env("globalApiUrl")}posts/1`/jsonplaceholder.typicode.com/comments,

        body : {
          postId: payload.postId,
          //   "id": payload.id,
          name: payload.name,
          email: payload.email,
          body: payload.body,
        },
      })
        .then((response) => {
          cy.log(JSON.stringify(response));
          expect(response.status).to.eq(201),
            expect(response.body).has.property("postId", payload.postId),
            //   expect(response.body).has.property("id", payload.id),
            expect(response.body).has.property("name", payload.name),
            expect(response.body).has.property("email", payload.email),
            expect(response.body).has.property("body", payload.body)
        }).then((response) => {
          const eachID = response.body[0].id

          cy.log("user id is: " + eachID)

          //after create the user get the usrr
          cy.request({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/comments/" + eachID,
          }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).has.property("id", eachID),
              expect(response.body).has.property("postID", payload.postId);
            expect(response.body).has.property("name", payload.name),
              expect(response.body).has.property("email", usermail),
              expect(response.body).has.property("body", payload.body);
          });
        });
    });
  });
});
