import {bodyData} from "../fixtures/bodyDataPosts.json"
import "cypress-real-events";
import 'cypress-file-upload';


Cypress.Commands.add(
  "addNewPost",
  (newBodyData=bodyData) => {
    cy.fixture("bodyDataPosts").then(() => {
        cy.request({
        method: "POST",
        url: "https://jsonplaceholder.typicode.com/posts",
        failOnStatusCode: false,
         body: newBodyData,
      }).then((resp) => {
        cy.log(resp)
      });
    });
  }
);



Cypress.Commands.add ('randomName', (length) => {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  let count=0
  while (count < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
    count +=1
  }
  return result
}) 
  