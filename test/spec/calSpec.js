describe ("My Calculator", function() {
    it("should add the two parameters", function() {
        expect (Cal.add(2,2)).toBe(4);
    })
    it("should handle strings", function(){
        expect (function(){Cal.add("string",3)}).toThrow(new Error("This is not a number"))
    })
    it("should subtract the two parameters", function(){
        expect (Cal.sub(6,3)).toBe(3);
    })
    it("should handle strings", function(){
        expect (function(){Cal.add(2,"string")}).toThrow(new Error("This is not a number"))
    })
    it("should multiply the two parameters", function(){
        expect (Cal.multiply(3,3)).toBe(9);
    })
    it("should handle strings", function(){
        expect (function(){Cal.add("foo",3)}).toThrow(new Error("This is not a number"))
    })
    it("should divide the two parameters", function(){
        expect (Cal.divide(6,3)).toBe(2);
    })
    it("should handle strings", function(){
        expect (function(){Cal.add("bar",3)}).toThrow(new Error("This is not a number"))
    })
})