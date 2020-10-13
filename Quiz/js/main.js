"use strist"

{

 const question = document.getElementById("question");
 const choices = document.getElementById("choices");
 const btn = document.getElementById("btn");
 
 const result = document.getElementById("result");
 const scoreLabel = document.querySelector("#result > p");

 


 const quizSet =[
    {q:"What is the biggest lake in the world?", c:["Caspian ", "Caribbean", "Biwako"]},
    {q:"What clab did I join in firstly when I was a middle shool student ?", c:["table tennis", "track and field", "badminton"]},
    {q:"What is my favorite food?", c:["ice cream", "soy milk", "natto"]},

  ];
  let currentNumber = 0;
  let isAnswered;
  let score = 0 ;
  


 function shuffle(arr){
    for(let i =arr.length -1; i > 0; i--){
      const j = Math.floor(Math.random() * (i +1));
     [arr[j], arr[i]] =[arr[i], arr[j]];
    }
  return arr;
 }

 function checkAnswer (li){
  //  if (isAnswered === true){
   if (isAnswered){
     return;
   }
   isAnswered = true;

  if (li.textContent === quizSet[currentNumber].c[0]) {
   li.classList.add("correct");
   score++;
   } else {
    li.classList.add("wrong");
   }

   btn.classList.remove("disabled");
 }

 function setQuiz(){
   isAnswered = false;
   question.textContent = quizSet[currentNumber].q;

   while(choices.firstChild){
     choices.removeChild(choices.firstChild);
   }


   const shuffledchoices = shuffle([...quizSet[currentNumber].c]);
    shuffledchoices.forEach(choice => {
     const li = document.createElement("li");
     li.textContent = choice;
     li.addEventListener("click",() => {
      checkAnswer(li);
    });
      choices.appendChild(li);
   });


   if(currentNumber === quizSet.length -1){
      btn.textContent = "Show Score";

   }
 }
  setQuiz();

  btn.addEventListener("click",()=>{
    if (btn.classList.contains("disabled")){
      return;
    }
    btn.classList.add("disabled");

    if(currentNumber === quizSet.length - 1) {
      // console.log(`Score:${score} / ${quizSet.length}`);
      scoreLabel.textContent =`Score: ${score} / ${quizSet.length}`;
      result.classList.remove("hidden");
    } else {
      currentNumber++;
      setQuiz();
    }
  });
  
}
