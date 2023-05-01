/// <reference types ="Cypress" />

describe("API testing", () => {
  it("Post requests", () => {
    cy.request({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts",
      body: {
        "id": 1,
        "title": "created",
        "body": "new bidy",
      }
    }).then((response) => {
        cy.log(JSON.stringify(response));
        expect(response.status).to.eq(201),
          expect(response.body).has.property("title", "created"),
          //   expect(response.body).has.property("userId", 1),
          expect(response.body).to.have.property("id", 101),
          expect(response.body).has.property("body", "new bidy")
      }).then((response) => {
        const usernumber = response.body[0].userId
        cy.log("user ID is" + usernumber)

        cy.request({
          method: "PUT",
          url: "https://jsonplaceholder.typicode.com/posts/",

          body: {
            "id": 1,
            "title": "updated",
            "body": "new bidy updated",
          }

        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).has.property("title", "updated"),
            expect(response.body).has.property("userId", usernumber),
            expect(response.body).to.have.property("id", 1),
            expect(response.body).has.property("body", "new bidy updated");
        });
      });
  });
})
