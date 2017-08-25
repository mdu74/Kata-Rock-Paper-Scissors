describe("RockPaperScissors", function() {
    it("Given I have chosen Rock, when opponent chooses Scissors, should return Win", function() {
        //---------------Set up test pack-------------------
        var opponent = {
            getResult: function() {
                return "Scissors";
            }
        }
        var choose = "Rock";
        //---------------Execute Test ----------------------
        var result = RockPaperScissors(choose, opponent);
        //---------------Test Result -----------------------
        expect(result).toBe("Win");
    });
    it("Given I have chosen Scissors, when opponent chooses Rock, should return Loose", function() {
        //---------------Set up test pack-------------------
        var opponent = new RandomResultOpponent();
        spyOn(opponent, 'getResult')
            .and.returnValue("Rock");
        var choose = "Scissors";
        //---------------Execute Test ----------------------
        var result = RockPaperScissors(choose, opponent);
        //---------------Test Result -----------------------
        expect(result).toBe("Loose");
    });
    it("Given I have chosen Scissors, when opponent chooses Rock, should call GetOptionsFor(opponent)", function() {
        //---------------Set up test pack-------------------        
        var opponent = {
            getResult: function() {
                return "Rock";
            }
        }
        var choose = "Scissors";
        //---------------Execute Test ----------------------
        var result = RockPaperScissors(choose, opponent);
        //---------------Test Result -----------------------
        expect(result).toBe("Loose");
    });
    it("Given I have chosen Scissors, when opponent chooses Paper, should return Win", function() {
        //---------------Set up test pack-------------------        
        var opponent = {
            getResult: function() {
                return "Paper";
            }
        }
        var choose = "Scissors";
        //---------------Execute Test ----------------------
        var result = RockPaperScissors(choose, opponent);
        //---------------Test Result -----------------------
        expect(result).toBe("Win");
    });
    it("Given I have chosen Paper, when opponent chooses Scissors, should return Loose", function() {
        //---------------Set up test pack-------------------        
        var opponent = {
            getResult: function() {
                return "Scissors";
            }
        }
        var choose = "Paper";
        //---------------Execute Test ----------------------
        var result = RockPaperScissors(choose, opponent);
        //---------------Test Result -----------------------
        expect(result).toBe("Loose");
    });
    it("Given I have chosen Scissors, when opponent chooses Paper, should return Loose", function() {
        //---------------Set up test pack-------------------        
        var opponent = {
            getResult: function() {
                return "Scissors";
            }
        }
        var choose = "Paper";
        //---------------Execute Test ----------------------
        var result = RockPaperScissors(choose, opponent);
        //---------------Test Result -----------------------
        expect(result).toBe("Loose");
    });
    it("Given I have chosen Scissors, when opponent chooses Paper, should return Loose", function() {
        //---------------Set up test pack-------------------        
        var opponent = {
            getResult: function() {
                return "Rock";
            }
        }
        var choose = "Paper";
        //---------------Execute Test ----------------------
        var result = RockPaperScissors(choose, opponent);
        //---------------Test Result -----------------------
        expect(result).toBe("Win");
    });
    it("Given I have chosen Rock, when opponent chooses Paper, should return Loose", function() {
        //---------------Set up test pack-------------------        
        var opponent = {
            getResult: function() {
                return "Paper";
            }
        }
        var choose = "Rock";
        //---------------Execute Test ----------------------
        var result = RockPaperScissors(choose, opponent);
        //---------------Test Result -----------------------
        expect(result).toBe("Loose");
    });
    it("Given I have chosen Rock, when opponent chooses Rock, should return Draw", function() {
        //---------------Set up test pack-------------------        
        var opponent = {
            getResult: function() {
                return "Rock";
            }
        }
        var choose = "Rock";
        //---------------Execute Test ----------------------
        var result = RockPaperScissors(choose, opponent);
        //---------------Test Result -----------------------
        expect(result).toBe("Draw");
    });
    it("Given I have chosen Paper, when opponent chooses Paper, should return Draw", function() {
        //---------------Set up test pack-------------------        
        var opponent = {
            getResult: function() {
                return "Paper";
            }
        }
        var choose = "Paper";
        //---------------Execute Test ----------------------
        var result = RockPaperScissors(choose, opponent);
        //---------------Test Result -----------------------
        expect(result).toBe("Draw");
    });
    it("Given I have chosen Scissors, when opponent chooses Scissors, should return Draw", function() {
        //---------------Set up test pack-------------------        
        var opponent = {
            getResult: function() {
                return "Scissors";
            }
        }
        var choose = "Scissors";
        //---------------Execute Test ----------------------
        var result = RockPaperScissors(choose, opponent);
        //---------------Test Result -----------------------
        expect(result).toBe("Draw");
    });
});