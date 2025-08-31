const button=document.querySelector("#calculate");
button.addEventListener("click", calculateAmount);


const buttonFunMoney=document.querySelector("#addFunMoney");
buttonFunMoney.addEventListener("click", funAmount); 

function funAmount(e) {
    e.preventDefault();
    select.style.display="block";
    console.log(funAmount)
}

function calculateAmount (e){
    e.preventDefault();
const budget=document.querySelector("#budget").value;
const people=document.querySelector("#people").value;
const select=document.querySelector("#select").value;

if ( budget === ""  || people === "" || people < 1) {
    Swal.fire({
        icon: "error",
        title: "Error...",
        text: "Please enter your information!",
        
      });
}

let amountPerPerson=budget/people;
let funMoneyPerPerson=( budget * 0.20) / people; 
let totalSum= amountPerPerson+funMoneyPerPerson;

amountPerPerson=amountPerPerson.toFixed(2);
funMoneyPerPerson=funMoneyPerPerson.toFixed(2);
totalSum=totalSum.toFixed(2);

document.querySelector("#one").textContent=amountPerPerson;
document.querySelector("#two").textContent=funMoneyPerPerson;
document.querySelector("#three").textContent=totalSum;

}