
// This is for Dot management, One allows use and zero no
let ControlNumberDot = 1;

//  This is for Zero management, One and more allows use and zero no
let userNumber = 1;

//  This is for percentage management, One allows use and zero no
let ControlPercentage = 1;

// Counts the numbers and helps the percentage operation according to the number of numbers
let countNumberForPercentage = 0;





document.addEventListener("keydown", mangeKeyPhsical);




// mangement input key

function mangeKeyPhsical(e) {
    
    e.preventDefault();

    if (e.key === "0") {
        
        writeNumberOh(e.key);
    
    } else if (e.key === "." ) {

        writeNumberDot(e.key);

    } else if (e.key === "1" || e.key === "2" || e.key === "3" || e.key === "4" || e.key === "5" || e.key === "6" || e.key === "7" || e.key === "8" || e.key === "9") {

      writeNumber(e.key);

    } else if (e.key === "+" ) {

        plus();

    } else if (e.key === "-") {

        minus();

    } else if (e.key === "/") {

        divide();

    } else if (e.key === "*") {

        times();

    } else if (e.key === "%") {

        percentage();

    } else if (e.key === "Enter") {

        result();

    }

    if (e.key === "Backspace") {
        clearOneLetter();
    } else if (e.key === "c") {
        clearAll();
    }

}


// clear all charactor

function clearAll() {

    document.getElementById("shower").textContent = "";


    ControlNumberDot = 1;

    countNumberForPercentage = 0;

    // allow you use %
    ControlPercentage = 1;

}


// remove last charactor

function clearOneLetter() {

    let content = document.getElementById("shower").textContent;

    let myarray = content.split("");
  

    if ( myarray[myarray.length - 1] == "+" || myarray[myarray.length - 1] == "-" || myarray[myarray.length - 1] == "*" || myarray[myarray.length - 1] == "/") {

        ControlNumberDot = 0;

    }

    if (content != "Result") {
        
        myarray.pop();

        var rslt = myarray.toString();

        rslt = myarray.join('');

        ControlNumberDot = 1;

        countNumberForPercentage--;
        
        document.getElementById("shower").textContent = rslt;
    } 

    var textarea = document.getElementById('shower');
    textarea.scrollTop = textarea.scrollHeight;
}



// enter verey number

function writeNumber(val) {

    const newDiv = document.createElement("span").textContent = val;

    let content = document.getElementById("shower").textContent;


    if (content == "Result" || content == "0") {

        content = document.getElementById("shower").textContent = "";
 
    }

    let recontnet = content.split("");


    if (recontnet[recontnet.length-1] == 0 && ( recontnet[recontnet.length-2] == '+' || recontnet[recontnet.length-2] == '-' || 
        recontnet[recontnet.length-2] == '*' || recontnet[recontnet.length-2] == '/') ) {

        recontnet.pop();

        content = recontnet.toString();
        content = recontnet.join('');


        content += val;

        userNumber += val;

        countNumberForPercentage++; 

        document.getElementById("shower").textContent = content; 

    } else {

        content += val;

        userNumber += val;

        countNumberForPercentage++;

        document.getElementById("shower").textContent = content;  
    }

    var textarea = document.getElementById('shower');
    textarea.scrollTop = textarea.scrollHeight;
}



// enter zero and prevent double zero continuously

function writeNumberOh(val) {

    let content = document.getElementById("shower").textContent;


    if (content == "Result") {

        content = document.getElementById("shower").textContent = "";

    }

    let lastLetter = content.charAt(content.length - 1);

    let a = content.length - 1;

    let recontnet = content.split("");


    if (recontnet[recontnet.length-1] == 0 && ( recontnet[recontnet.length-2] == '+' || recontnet[recontnet.length-2] == '-' || 
        recontnet[recontnet.length-2] == '*' || recontnet[recontnet.length-2] == '/') ) {
           
            recontnet.pop();
    
            content = recontnet.toString();
            content = recontnet.join('');

            content += "0";


            userNumber += val;

    } else {

    if (userNumber > 0) {

        if (content.length == 1 && content[0] == 0) {

            let myarray = content.split("");

            myarray.pop();
            myarray.push("0");

            content = myarray.toString();
            content = myarray.join('');


        } else {

            content += "0";
  
            userNumber += val;

            countNumberForPercentage++;

        }
    }

    document.getElementById("shower").textContent = content; 
}

var textarea = document.getElementById('shower');
textarea.scrollTop = textarea.scrollHeight;
  
}



// enter dot and prevent double dot continuously 

function writeNumberDot(val) {

    let content = document.getElementById("shower").textContent;

    let lastContent = content.charAt(content.length - 1);


    if ( content == "Result" || content == "") {

        content = "0.";

        ControlNumberDot = 0;

    } else if (lastContent == "+" || lastContent == "-" || lastContent == "*" || lastContent == "/") {

        content += "0.";

        ControlNumberDot = 0;

    }
    else if ( ControlNumberDot === 1) {
        
        content += '.';

        ControlNumberDot = 0;

    }

    document.getElementById("shower").textContent = content;


}



function plus() {

    let content = document.getElementById("shower").textContent;

    let lastLetter = content.charAt(content.length - 1);

    let a = content.length - 1;

    if (content == "Result") {

        content = document.getElementById("shower").textContent = "";

    }


    if (content[a] == "-" || content[a] == "*" || content[a] == "/") {

        let myarray = content.split("");

        myarray.pop();

        myarray.push("+");

        var rslt = myarray.toString();
        rslt = myarray.join('');
        content = rslt;

        countNumberForPercentage = 0;

    } else if (content[a] != "+") {

        content += "+";

        countNumberForPercentage = 0;
    }

        

    ControlNumberDot = 1;

    // allow you use %
    ControlPercentage = 1;

    document.getElementById("shower").textContent = content;


}


function minus() {

    let content = document.getElementById("shower").textContent;

    let lastLetter = content.charAt(content.length - 1);

    let a = content.length - 1;

    if (content == "Result") {

        content = document.getElementById("shower").textContent = "";

    }

 
    if (content[a] == "+" || content[a] == "*" || content[a] == "/") {

        let myarray = content.split("");

        myarray.pop();

        myarray.push("-");

        var rslt = myarray.toString();
        rslt = myarray.join('');
        content = rslt;

        countNumberForPercentage = 0;

    } else if (content[a] != "-") {

        content += "-";
        countNumberForPercentage = 0;

    }

  
    ControlNumberDot = 1;


    // allow you use %
    ControlPercentage = 1;

    document.getElementById("shower").textContent = content;
}



function times() {

    let content = document.getElementById("shower").textContent;

    let lastLetter = content.charAt(content.length - 1);

    let a = content.length - 1;

    if (content == "Result" || content == "") {

        content = document.getElementById("shower").textContent = "";

    } else {


    if (content[a] == "+" || content[a] == "-" || content[a] == "/") {

        let myarray = content.split("");

        myarray.pop();

        if (myarray != "") {

            myarray.push("*");

            var rslt = myarray.toString();
            rslt = myarray.join('');
            content = rslt;

            countNumberForPercentage = 0;
        } 

    } else if (content[a] != "*") {

        content += "*";
        countNumberForPercentage = 0;
    }

   
    ControlNumberDot = 1;

    // allow you use %
    ControlPercentage = 1;

    document.getElementById("shower").textContent = content;
}
}



function divide() {

    let content = document.getElementById("shower").textContent;

    let lastLetter = content.charAt(content.length - 1);

    let a = content.length - 1;

    if (content == "Result" || content == "") {

        content = document.getElementById("shower").textContent = "";

    } else {


    if (content[a] == "+" || content[a] == "-" || content[a] == "*" ) {

        let myarray = content.split("");

        myarray.pop();

        if (myarray != "") {

            myarray.push("/");

            var rslt = myarray.toString();
            rslt = myarray.join('');
            content = rslt;

            countNumberForPercentage = 0;
        } 

    } else if (content[a] != "/") {

        content += "/";
        countNumberForPercentage = 0;
        
    }


    ControlNumberDot = 1;


    // allow you use %
    ControlPercentage = 1;

    document.getElementById("shower").textContent = content;
}
}


function percentage() {

    let content = document.getElementById("shower").textContent;

    let lastLetter = content.charAt(content.length - 1);

    let a = content.length - 1;


    if (content == "Result" || content == "") {

        content = document.getElementById("shower").textContent = "";

    } else {


        
        let myarray = content.split("");

        console.log(content[a], myarray[a]);

        if (content[a] == "%" || content[a] == "/" || content[a] == "+" || content[a] == "-" || content[a] == "*") {

            console.log("this work right");

        } else if ( ControlPercentage === 1) {

                if (countNumberForPercentage >= 1) {
                    
                    let number = "";

                    for (let i = 1; i <= countNumberForPercentage; i++) {
                        
                         number += content[content.length-i];
                        
                    }

                    number = number.split("").reverse().join('');

                    number = number.toString();

                    number = Number(number);

                    number = number / 100;


                    for (let i = 0; i < countNumberForPercentage; i++) {
                        
                        myarray.pop();
                        
                    }

                    myarray.push(number);
   
            
                    var rslt = myarray.toString();
                    rslt = myarray.join('');
            
                    ControlPercentage = 0;
            
                    content = rslt;
                    document.getElementById("shower").textContent = content;


                } 

        } 


    }
}



function result() {

    res = document.getElementById("shower").textContent;

    let cheak = res.split("");
    
    if (cheak[cheak.length - 1] == '+' || cheak[cheak.length - 1] == '-' || cheak[cheak.length - 1] == '*' || cheak[cheak.length - 1] == '/') {

        cheak.pop();

        let Total = cheak.toString();
        Total = cheak.join('');


        let contentRes = eval(Total || null);

        document.getElementById("shower").textContent = contentRes;

    } else {

        let contentRes = eval(res || null);
        document.getElementById("shower").textContent = contentRes;
    }


    ControlPercentage = 0;

}













