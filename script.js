const quizData = [
    {
        question: 'Qual a estação das flores?',
        a: 'Verão',
        b: 'Outono',
        c: 'Inverno',
        d: 'Primavera',
        correct: 'd'
    }, {
        question: 'Em que ano o Brasil se tornou independente?',
        a: '1822',
        b: '2015',
        c: '1912',
        d: '1825',
        correct: 'a',
    }, {
        question: 'Qual o maior país em extensão no planeta?',
        a: 'China',
        b: 'Guiana',
        c: 'Russia',
        d: 'Estados Unidos',
        correct: 'c',
    }, {
        question: 'Qual desses boxeadores é invicto em seu cartel?',
        a: 'Marvin Hagler',
        b: 'Muhammad Ali',
        c: 'LeBron James',
        d: 'Andre Ward',
        correct: 'd',
    }, {
        question: 'O que significa a sigla TBT?',
        a: 'The Best Trip',
        b: 'Throwback Thursday',
        c: 'Brazilian Currency',
        d: 'Hypertext Markup Language',
        correct: 'b',
    }, {
        question: 'Quem fundou a SpaceX?',
        a: 'Elon Musk',
        b: 'Jeff Bezos',
        c: 'Bill Gates',
        d: 'Sergey Brin',
        correct: 'a',
    }, {
        question: 'Qual serviço de streaming produziu a série Bridgerton?',
        a: 'HBO Max',
        b: 'Prime Video',
        c: 'Netflix',
        d: 'Globoplay',
        correct: 'c',
    }, {
        question: 'Qual foi o primeiro homem a pisar na lua?',
        a: 'Chris Webber',
        b: 'Neil Armstrong',
        c: 'Eugene Cernan',
        d: 'Iuri Gagarin',
        correct: 'b',
    }, {
        question: 'De quem é a famosa frase “Penso, logo existo”?',
        a: 'Platão',
        b: 'Socrates',
        c: 'Descartes',
        d: 'Galileu Galilei',
        correct: 'c',
    }, {
        question: 'Qual a nacionalidade de Che Guevara?',
        a: 'Argentina',
        b: 'Cubana',
        c: 'Peruana',
        d: 'Brasileira',
        correct: 'a',
    }
    
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2> Você respondeu corretamente ${score}/${quizData.length} questões.</h2>
                
                <button onclick="location.reload()">Recarregar</button>
            `;
        }
    }
});