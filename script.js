//write first method
function sleep_in(weekday,vacation) {
    var week = !weekday || vacation;


    return week;

}

//write second method
function monkey_trouble(a_smile, b_smile) {
        var Introuble = a_smile&&b_smile||!a_smile && !b_smile

    return Introuble;
}

//add 2-10 below here...
function string_times(string,number){
    var start = "";
    for (var i=0; i<number ; i++);
        start+=string
}
function front_times(string,number){
    var start = "";
    for(var i=0; i<number; i++){
        start += string.substring(0,3);
    }
    return start;
}

function string_bits(string){
    var start = "";
    for(var i = 0 ; i<string.length; i= i+2){
        if (i%2==0){
            start += string.substring(i , i+1);
        }
    }
    return start;
}

function caughtSpeeding(speed,birthday){
    if(birthday==true){
        speed = speed-5;
    }
    if(speed<=60){
        var x = 0;

    }
    if(speed>60 && speed<=80){
        var x=1;

    }
    if(speed>=81){
        var x=2;

    }
    return x;

}



function fizz_buzz(number,word){
    if(number%3 != 0 && number%5!=0){
        word=number+"!";

    }


    if(number % 3 == 0){
        word="Fizz";
    }
    if(number % 5 == 0){
        word="Buzz";
    }
    if(number % 5==0 && number % 3==0){
        word="FizzBuzz";

    }
    return word;
}


function teaParty(tea,candy){

    if(tea<5 || candy<5){
        return 0;
    }

    if(tea>=candy*2 || candy>=tea*2){
        return 2;
    }
    if(tea>=5 && candy>=5){
        return 1;
    }


}

function blackjack(valuea,valueb){
    if(valueb>21&&valuea>21){
        return 0;
    }

    if(valuea > 21){
        return valueb;
    }
    if(valueb>21){
        return valuea;
    }
    if(valuea>valueb){
        return valuea;
    }
    if(valueb>valuea){
        return valueb;
    }
}



function loneSum(valuea,valueb,valuec){
    if(valuea==valueb&&valueb==valuec&&valuec&&valuea){
        return 0;
    }

    if(valuea==valueb){
        return valuec;
    }
    if(valuec==valueb){
        return valuea;
    }
    if(valuea==valuec){
        return valueb;
    }
    if(valuea!=valueb&&valueb!=valuec&&valuea!=valuec){
        return valuec+valueb+valuea;
    }
}




//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleep_in(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    //test third method, etc
}

