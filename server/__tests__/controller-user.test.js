require('dotenv').config();
const { registerUser, loginUser, findById } = require('../controller/user.js');

describe("resgisterUser", () => {
    it("is a function", () => {
        expect(registerUser).toBeDefined();
        expect(registerUser instanceof Function).toEqual(true);
    });
});

describe("loginUser", () => {
    it("is a function", () => {
        expect(loginUser).toBeDefined();
        expect(loginUser instanceof Function).toEqual(true);
    });
});

describe("findById", () => {
    it("is a function", () => {
        expect(findById).toBeDefined();
        expect(findById instanceof Function).toEqual(true);
    });
});
