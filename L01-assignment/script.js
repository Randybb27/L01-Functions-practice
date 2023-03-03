function stringCounter(sentence){
    var result = sentence.split(" "); 
    var num = sentence.length;
    var str = sentence.toString();
    var words = str.split(" "). length ;

    console.log(`No. of Words:${words}`);
    console.log(`No. of Characters:${num}`);
   
   }




// TEST CASE 1
let sentence1 = "The largest living thing on earth is a giant sequoia named General Sherman";
stringCounter(sentence1);

// TEST CASE 2
let sentence2 = "A sunset on Mars is blue";
stringCounter(sentence2);