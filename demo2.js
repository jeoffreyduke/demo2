function sayHello() {
    document.getElementById("demo2message1").innerHTML = "Hey there, good day. How are you doing today?";
}

function saySwell() {
    var firstReply = document.getElementById("sayswell").value;
    
    document.getElementById("yourmessage2").innerHTML= "You: " + firstReply;  

    document.getElementById("demo2message2").innerHTML = "Demo2: Hmmm, interesting. I'm pretty swell on my part. What is your name?";
}

function tellName() {
    var secondReply = document.getElementById("tellname").value;
     
    document.getElementById("yourmessage3").innerHTML= "You: " + secondReply;
    document.getElementById("demo2message3").innerHTML = "Demo2: " + secondReply + ", It's a pleasure to converse with you. Wanna know my name?";
}

function sayName() {
    var thirdReply = document.getElementById("sayname").value;
     
    document.getElementById("yourmessage4").innerHTML= "You: " + thirdReply;
    document.getElementById("demo2message4").innerHTML = "Demo2: Well, I would've told you regardless. You can call me Demo2. I'm so sorry to cut our conversation short, but i have to log out now before my boss returns.";
}

function sayBye() {
    var fourthReply = document.getElementById("saybye").value;
    
    document.getElementById("yourmessage5").innerHTML= "You: " + fourthReply;
    document.getElementById("demo2message5").innerHTML = "Demo2: Goodbye. Have a wonderful day!";
}