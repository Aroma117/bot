function getBotResponse(input) {


    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }



    // Simple responses
    if (input == "podaa") {
        return "nee podaa!";
    } else if (input == "podii") {
        return "nee podii";
    }else if (input == "hi") {
        return "Hai";
    } else if (input == "Hey") {
        return "yup";
    } else if (input == "sadhanam kayyil undoo") {
        return "sadhanam kayyil unddd";
    } else if (input == "project set aayii") {
        return "Aromal poliii";
    } 



 else {
        return "Try asking something else!";
    }
    
}