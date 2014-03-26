var Cal = function (){
    return {
        add: function (num1, num2) {
            var a = parseInt(num1);
            var b = parseInt(num2);

            if (isNaN(a) == true || isNaN(b) == true) {
                throw new Error ("This is not a number");
            }
            return a + b;

        },
        sub: function (num1, num2) {
            var a = parseInt(num1);
            var b = parseInt(num2);

            if (isNaN(a) == true || isNaN(b) == true) {
                throw new Error ("This is not a number");
            }
            return a - b;

    },
        multiply: function (num1, num2) {
            var a = parseInt(num1);
            var b = parseInt(num2);

            if (isNaN(a) == true || isNaN(b) == true) {
                throw new Error ("This is not a number");
            }
            return a * b;
        },
        divide: function (num1, num2) {
            var a = parseInt(num1);
            var b = parseInt(num2);

            if (isNaN(a) == true || isNaN(b) == true) {
                throw new Error ("This is not a number");
            }
            return a / b;
        }
    }
}();