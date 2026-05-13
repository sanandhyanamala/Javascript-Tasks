// Section 1: Variables (1–8)
        //1. What is the output?
            var a = 10;
            a = 15;
            console.log(a);
            // ANS:-15

        //2. What happens here?
            let b = 20;
            let b = 30;
            // ANS:-Error (let will not allow redeclare)

        //3. What is the output?
            const c = 50;
            console.log(c);
            // ANS:-50

        // Identify error:
            const x = 10;
            x = 20;
            // ANS:-Error (In const we can assign value only one time)

        // Output?
            var p = 5;
            var p = 10;
            console.log(p);
            // ANS:-10

        // Output?
            let q = 25;
            q = q + 10;
            console.log(q);
            // ANS:-35

        // Output?
            const r = 7;
            console.log(r + 3);
            // ANS:-10
        // Fill correct keyword:
            // ___ a = 10;
            // Note:- varibale a is already delcared with var in qn 1,
            // so we can't redclare it again using var, let, const,
            // simple we can declare as "a=10;"

// ----------------------------------------------------------------------------------------------------
    //  Section 2: Console Methods (9–12)

        // Which method prints normal output?
        //  ANS:-console.log()

        // Which method shows warning?
        // ANS:- console.warn()

        // Which method shows error?
        // ANS:- console.error()

        // What does this do?
            console.clear();
            // ANS:-it will clear  console outputs 

// -------------------------------------------------------------------------------------------------
    //  Section 3: Data Types (13–18)

        // Output?
            let a = "hello";
            console.log(typeof a);
            // ANS:- String

        // Output?
            let b = 100;
            console.log(typeof b);
            // ANS:-number

        // Output?
            let c = false;
            console.log(typeof c);  
            // ANS:-Boolean   

        // Output?
            let d;
            console.log(d);
            // ANS:-undefined

        // What is type of null?
        // ANS:-If we delcare typeofnull it will print "object"

        // Convert string to number: "25"
            // ANS:-let z="25"
            //     console.log(typeof(Number(a)))
// -------------------------------------------------------------------------------------------------
    //  Section 4: Arrays (19–24)

        // Create array of 3 fruits.
        // ANS:- let fruits =["apple","banana","mango"]

        // Output?
            let arr = ["a","b","c"];
            console.log(arr[1]);
            // ANS:-"b"

        // Output?
            let arr = ["x","y","z"];
            console.log(arr[arr.length-1]);
            // ANS:-"z"

        // How to get first element?
        // console.log(arr[0])

        // Output?
            let arr = ["apple","banana"];
            console.log(arr.length);
            // ANS:-2(length means it will start count with 1 and so on )

        // Add new element to array?
        // ANS:-
            // let name=["sai","sooraj"]
            // name.push("new element")
            // console.log(name)

// ----------------------------------------------------------------------------------------------------------
    //  Section 5: Objects (25–28)

        // Create object with name & age.
            // ANS:-
                    // let info={
                    //     name:"Anjaiah",
                    //     age:45
                    // };

        // Output?
            let obj = {name:"Naveen"};
            console.log(obj.name);
            // ANS:-"Naveen"

        // Output?
            let obj = {
            fruits: ["apple","banana"]
            };
            console.log(obj.fruits[1]);
            // ANS:-banana

        // How to access last element inside object array?

            // ANS:- obj.fruits[obj.fruits.length-1]

// ----------------------------------------------------------------------------------------------------
    //  Section 6: Arithmetic Operators (29–32)

        // Output?
            console.log(5 + 3);
            // ANS:-8
        // Output?
            console.log(10 % 3);
            // ANS:-1
        // Output?
            console.log(2 ** 3);
            // ANS:-8
        // Output?
            console.log(10 / 2);
            // ANS:-5
// --------------------------------------------------------------------------------------------------
    //  Section 7: Increment / Decrement (33–36)

        // Output?          
            let a = 5;
            a++;
            console.log(a);
            // ANS:-6

        // Output?
            let b = 5;
            let c = b++;
            console.log(b, c);
            // ANS:-6,5

        // Output?
            let x = 5;
            let y = ++x;
            console.log(x, y);
            // ANS:-6,6

        // Output?
            let m = 3;
            let n = m--;
            console.log(m, n);
            // ANS:-2,3

// ---------------------------------------------------------------------------------------------
    //  Section 8: Comparison & Logical (37–39)

        // Output?
            console.log(5 == "5");
            // ANS:-true

        // Output?
            console.log(5 === "5");
            // ANS:-false

        // Output?
            console.log(true && false || true);
            // ANS:-true

// ------------------------------------------------------------------------------------------------
    //  Section 9: Ternary (40)

        // Output?
            5 > 3 ? console.log("Yes") : console.log("No");
            // ANS:-yes