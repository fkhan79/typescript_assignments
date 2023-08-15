import inquirer from "inquirer";

class Question {
    question?: string;
    answerList?: string[];
    isAsked?: boolean;
    correctAnswer?: string
}
//Create an array to hold questions 
let questionList: Question[] = [];

//lets add some question in the list
let question1 = new Question();
question1.question = "What is the Capital of Pakistan?"
question1.answerList = ["Islamabad", "Karachi", "Lahore", "Quetta", "Peshawar", "Gilgit"];
question1.correctAnswer = "Islamabad";
question1.isAsked = false;
questionList.push(question1);

let question2 = new Question();
question2.question = "What is the National Game of Pakistan?"
question2.answerList = ["Cricket", "Hockey", "Soccer"];
question2.correctAnswer = "Hockey";
question2.isAsked = false;
questionList.push(question2);

let question3 = new Question();
question3.question = "What is the National Animal of Pakistan?"
question3.answerList = ["Panther", "Lion", "Ibex"];
question3.correctAnswer = "Ibex";
question3.isAsked = false;
questionList.push(question3);

let question4 = new Question();
question4.question = "What is the National Dress of Pakistan?"
question4.answerList = ["Shalwar Kameez", "Jeans and Tees", "Blazers"];
question4.correctAnswer = "Shalwar Kameez";
question4.isAsked = false;
questionList.push(question4);

let question5 = new Question();
question5.question = "What is the National Flower of Pakistan?"
question5.answerList = ["Jasmine", "Rose", "Tulip"];
question5.correctAnswer = "Jasmine";
question5.isAsked = false;
questionList.push(question5);

let question6 = new Question();
question6.question = "What is the National Food of Pakistan?"
question6.answerList = ["Biryani", "Chicken Karahi", "Haleem","Nihari","Daal Chawal"];
question6.correctAnswer = "Nihari";
question6.isAsked = false;
questionList.push(question6);

//Scoring System Variables
let score = 0;
let scoreObtained = 0;
let marksPerQuestion = 100/questionList.length;
let totalScore = 100;
let questionAsked = 0;
console.log("##############################")
console.log("#Welcome to the Pakistan Quiz#")
console.log("##############################")
while (true) {
    let numberGuess = Math.floor(Math.random() * ((questionList.length-1) - 0 + 1)) + 0;
    // console.log(numberGuess);
    let questionToAsk = questionList[numberGuess]
    //  console.log(questionList);
    if (questionList[numberGuess].isAsked == true) {
        continue;
    }
    console.log(questionToAsk.question);
    let choicesSelected = await inquirer.prompt([
        {
            name: "choicesSelected",
            type: "list",
            choices: questionToAsk.answerList,
            message: "Select your Answer:"
        }
    ]);
    console.log(choicesSelected.choicesSelected);
    if (choicesSelected.choicesSelected == questionToAsk.correctAnswer) {
        console.log("Correct Answer!!!")
        scoreObtained += marksPerQuestion;

    } else {
        console.log("Wrong Answer!!!")
    }
    questionList[numberGuess].isAsked = true;
    questionAsked++;
    if (questionAsked == questionList.length) {
        break;
    }

}
//Do and Show the Grading
let percentile=Math.round((scoreObtained/totalScore)*100);
//console.log(`Your score is ${scoreObtained}`);
if (scoreObtained >= 75) {
    console.log(`Your Score % is ${percentile}%`);
    console.log(`Congratulations!!!! You have passed the quiz.`);
}
else {
    console.log(`Your Score is ${percentile}%`);
    console.log(`Sorry, You have failed the quiz.`);
}





