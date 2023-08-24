const request = require('supertest');
const app = require('../app'); // Replace with the path to your Express app

const appearedNums = []

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function toAppearInArray(received, expectedArray) {
    const pass = expectedArray.includes(received);
    if (pass) {
        return {
        message: () => `expected ${received} not to appear in the array`,
        pass: true,
        };
    } else {
        return {
        message: () => `expected ${received} to appear in the array`,
        pass: false,
        };
    }
}
  
expect.extend({
    toAppearInArray,
});
  

describe('Unique number API test', () => {
  it('Should return a 200 status code and a unique number', async () => {
    const appearedNums = []
    for (let i = 0; i < 100; i++) {
        const num = getRandomInt(1000); // Generate a random integer
        const response = await request(app).get(`/api/get?number=${num}`);
  
        expect(response.status).toBe(200);
  
        const output = response.body.output;
        expect(output).toBeGreaterThanOrEqual(num);
        expect(output).not.toAppearInArray(appearedNums)
        appearedNums.push(output)
      }
  });

  
});
