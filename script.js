const quizDB = [
    {
        question:"Q. Understand body functions by observing models pictures of human body?",
        a: "very much",
        b: "much",
        c: "little",
        d: "not at all",
        ansa: "ans1",
        ansb: "ans2",
        ansc: "ans3",
        ansd: "ans4", 
    },
    {
        question:"Q. Like to understand the functions of solar cooker and solar heater?",
        a: "very much",
        b: "much",
        c: "little",
        d: "not at all",
        ansa: "ans1",
        ansb: "ans2",
        ansc: "ans3",
        ansd: "ans4", 
    },
    {
        question:"Q. Like to watch films on scientific inventions",
        a: "very much",
        b: "much",
        c: "little",
        d: "not at all",
        ansa: "ans1",
        ansb: "ans2",
        ansc: "ans3",
        ansd: "ans4", 
    },
    {
        question:"Q. Studing cells under microscope facinates me",
        a: "very much",
        b: "much",
        c: "little",
        d: "not at all",
        ansa: "ans1",
        ansb: "ans2",
        ansc: "ans3",
        ansd: "ans4", 
    },
    {
        question:"Q. Like to know science and technology behind magic shows",
        a: "very much",
        b: "much",
        c: "little",
        d: "not at all",
        ansa: "ans1",
        ansb: "ans2",
        ansc: "ans3",
        ansd: "ans4", 
    },
]

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

let questionCount = 0;
let science = 0;

const loadQuestions = () => {

    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestions();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElement) => {
        if (curAnsElement.checked){
            answer = curAnsElement.id;
        }
    })
    return answer;
}

submit.addEventListener('click',() => {
    const checkedAnswer = getCheckAnswer();

    console.log(checkedAnswer);

    if(checkedAnswer == quizDB[questionCount].ansa){
        science = science+3;
    }
    if(checkedAnswer == quizDB[questionCount].ansb){
        science = science+2;
    }
    if(checkedAnswer == quizDB[questionCount].ansc){
        science = science+1;
    }
    if(checkedAnswer == quizDB[questionCount].ansd){
        science = science+0;
    }            


    

    // const spanScore = document.getElementById("score");
    // spanScore.innerHTML = science_score;

    questionCount++;
    if (questionCount < quizDB.length){
        loadQuestions();
   
//..........................................score database start...............................................//   
    }else{
        const science_score = science;
        showScore.innerHTML = `
  
            <button class='btn' onclick="document.location='index2.html'">Submit</button>        
        `
        document.cookie = `science=${science_score};`;
        showScore.classList.remove('scoreArea');
        submit.remove('sub');
        // const spanScore = document.getElementById("score");
        // spanScore.innerHTML = science_score;
        function valueSender(){
            localStorage.setItem("science",science_score);
            return true;
        }
        return valueSender();
        
    }



//...........................................score database end.................................................// 
})

