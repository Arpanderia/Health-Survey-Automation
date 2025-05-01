// const {expect} = require ('chai')

describe('Variable data check', () => {
    it('should match stored value with expected value', () => {
      const actualName = 'Alice';
  
      expect(actualName).to.equal('Alice'); // Check equality
      expect(actualName).to.be.a('string');      // Check type
      expect(actualName).to.have.lengthOf(5);    // Check string length
      expect(actualName).to.include('lic');
      expect(actualName).to.match(/^A/);
    });
    it('cheking bolean data type', ()=>{
        const isLoggedIn = true;
        expect(isLoggedIn).to.be.true;

        const isAdmin = false;
        expect(isAdmin).to.be.false;
    })
    it('cheking the Array assertion', ()=>{
        const colors = ['red', 'green', 'blue'];

        expect(colors).to.be.an('array');
        expect(colors).to.include('green');
        expect(colors).to.have.lengthOf(3);

    })
    it("Cheking Object assertion", ()=>{
        const user = {
            name: 'Alice',
            age: 25,
            isActive: true
          };
          
          expect(user).to.be.an('object');
          expect(user).to.have.property('name').that.is.a('string');
          expect(user).to.have.property('age').that.is.above(18);
          expect(user.isActive).to.be.true;
          
    })
  });