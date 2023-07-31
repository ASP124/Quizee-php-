const quizz = [
    {
        question:"Q. Passionate about creating awarness about health issues",
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
        question:"Q. Interested in growing organic vegetables",
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
        question:"Q. Get facinated by medical profession",
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
        question:"Q. Dairy farming facinates me",
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
        question:"Q. Like to discuss health problem with doctor",
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
let bio = 0;

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
        bio = bio+3;
    }
    if(checkedAnswer == quizz[questionCount].ansb){
        bio = bio+2;
    }
    if(checkedAnswer == quizz[questionCount].ansc){
        bio = bio+1;
    }
    if(checkedAnswer == quizz[questionCount].ansd){
        bio = bio+0;
    }            
     
const bio_score = bio
    

    questionCount++;
    if (questionCount < quizz.length){
        loadQuestions();
   
//..........................................score database start...............................................//   
    }else{
        showScore.innerHTML = `

            <button class='btn' onclick="document.location='index3.html'">Submit</button>
        
        `
        document.cookie = `bio=${bio_score};`;
        showScore.classList.remove('scoreArea');
        submit.remove('sub');

        function valueSender(){
            localStorage.setItem("bio",bio_score);
            return true;
        }
        return valueSender();
        
            
        
    }
//...........................................score database end.................................................// 
})
