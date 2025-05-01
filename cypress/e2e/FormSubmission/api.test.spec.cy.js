describe('Using Custom Commands for URL Navigation', () => {
    const baseUrl = Cypress.env('api_URL');

    it('should visit the API base URL', () => {
        cy.goToApiurl(); 
        cy.url().should('include', 'jsonplaceholder'); 
    });
    it('GET - should fetch all posts', () => {
        cy.request(`${baseUrl}/posts`).then((response) => {
          expect(response.status).to.eq(200); // Status should be 200 OK
          expect(response.body).to.be.an('array'); // Ensure response is an array
          expect(response.body.length).to.be.greaterThan(0); // Ensure posts exist
        });
    });
    it('POST - should create a new post', () => {
        const newPost = {
          title: 'New Post',
          body: 'This is a new post created for testing',
          userId: 1
        };
    
        cy.request('POST', `${baseUrl}/posts`, newPost).then((response) => {
          expect(response.status).to.eq(201); // Status should be 201 Created
          expect(response.body).to.have.property('id'); // Ensure post has ID
          expect(response.body.title).to.equal(newPost.title); // Ensure title matches
        });
      });
});
