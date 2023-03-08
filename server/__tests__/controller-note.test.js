require('dotenv').config();
const { createPostNote, deletePostNote, returnPostNote, returnPostNoteByCategory, returnPostNoteByPublic, returnPostNoteByPrivate, returnCategoriesNumber } = require('../controller/note.js');

describe("createPostNote", () => {
    it("is a function", () => {
        expect(createPostNote).toBeDefined();
        expect(createPostNote instanceof Function).toEqual(true);
    });
});

describe("deletePostNote", () => {
    it("is a function", () => {
        expect(deletePostNote).toBeDefined();
        expect(deletePostNote instanceof Function).toEqual(true);
    });
});

describe("returnPostNote", () => {
    it("is a function", () => {
        expect(returnPostNote).toBeDefined();
        expect(returnPostNote instanceof Function).toEqual(true);
    });
});

describe("returnPostNoteByCategory", () => {
    it("is a function", () => {
        expect(returnPostNoteByCategory).toBeDefined();
        expect(returnPostNoteByCategory instanceof Function).toEqual(true);
    });
});

describe("returnPostNoteByPublic", () => {
    it("is a function", () => {
        expect(returnPostNoteByPublic).toBeDefined();
        expect(returnPostNoteByPublic instanceof Function).toEqual(true);
    });
});

describe("returnPostNoteByPrivate", () => {
    it("is a function", () => {
        expect(returnPostNoteByPrivate).toBeDefined();
        expect(returnPostNoteByPrivate instanceof Function).toEqual(true);
    });
});

describe("returnCategoriesNumber", () => {
    it("is a function", () => {
        expect(returnCategoriesNumber).toBeDefined();
        expect(returnCategoriesNumber instanceof Function).toEqual(true);
    });
});






