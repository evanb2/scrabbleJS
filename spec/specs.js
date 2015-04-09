describe("scrabbleScore", function() {
    it("returns score of 1 if user enters A", function() {
        expect(scrabbleScore("A")).to.equal(1);
    });

    it("returns score of 3 if user enters b", function() {
        expect(scrabbleScore("b")).to.equal(3);
    });

    it("returns score of 2 if user enters AE", function() {
        expect(scrabbleScore("AE")).to.equal(2);
    });

    it("returns score of 14 if user enters scrabble", function() {
        expect(scrabbleScore("scrabble")).to.equal(14);
    });
});
