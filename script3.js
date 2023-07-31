const quizz = [
    {
        question:"Q. Like to know how banks earns profits and make money",
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
        question:"Q. Curious to know functioning of share market",
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
        question:"Q. Like to keep record of monthly expenses of family income",
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
        question:"Q. Like to work at cash counter",
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
        question:"Q. Enjoy studing literature and its different perspectives",
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
let commerce = 0;

const loadQuestions = () => {

    const questionList = quizz[questionCount];

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

    if(checkedAnswer == quizz[questionCount].ansa){
        commerce = commerce+3;
    }
    if(checkedAnswer == quizz[questionCount].ansb){
        commerce = commerce+2;
    }
    if(checkedAnswer == quizz[questionCount].ansc){
        commerce = commerce+1;
    }
    if(checkedAnswer == quizz[questionCount].ansd){
        commerce = commerce+0;
    }            
     
const commerce_score = commerce
    

    questionCount++;
    if (questionCount < quizz.length){
        loadQuestions();
   
//..........................................score database start...............................................//   
    }else{
        showScore.innerHTML = `
            
            <button class='btn' onclick="document.location='score.php'" onclick="document.location='exam_results.php'">Submit</button>
        
        `
        document.cookie = `commerce=${commerce_score};`;

        showScore.classList.remove('scoreArea');
        submit.remove('sub');

        function valueSender(){
            localStorage.setItem("commerce",commerce_score);
            return true;
        }
        return valueSender();
            
        
    }
//...........................................score database end.................................................// 
})
