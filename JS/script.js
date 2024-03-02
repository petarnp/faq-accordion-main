let questions = document.querySelectorAll(".question");
let answers = document.querySelectorAll(".answer");

for (let i=0; i<answers.length; i++) {
    answers[i].style.visibility = getComputedStyle(answers[i]).getPropertyValue('visibility');
}

for (let j=0; j<questions.length; j++) {
    questions[j].addEventListener('click', ()=> {
        
        if (answers[j].style.visibility == 'hidden') {
            answers[j].style.visibility = 'visible';
            answers[j].style.height = 'auto';
            answers[j].style.width = 'auto';
            document.querySelectorAll('main .question a img')[j].src = '/assets/images/icon-minus.svg';
            document.querySelectorAll('main .question a img')[j].alt = 'Minus Icon';
        }
        else if ( answers[j].style.visibility == 'visible') {
            answers[j].style.visibility = 'hidden';
            answers[j].style.height = '0';
            answers[j].style.width = '0';
            document.querySelectorAll('main .question a img')[j].src = '/assets/images/icon-plus.svg';
            document.querySelectorAll('main .question a img')[j].alt = 'Plus Icon';
        }
        else {
            console.log("something wrong :)");
        }
    });
}