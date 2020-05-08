//parameters is way to have a function take in information. It's a placeholder variable for a value we don't know yet.

//      keyword        name    parameter(s)
        function        hi      (name) { //name is now the parameter
            console.log(`Hi, ${name}`); //use backticks with $ to call the parameter 
        }

        hi('Mikaela');
        hi(800);


        function hello (firstName, lastName){ //multiple paratmeters seperated by a comma
            console.log(`Hello, my name is ${firstName} ${lastName}`);
        }
        hello('Mikaela', 'Wade'); //seperated by comma