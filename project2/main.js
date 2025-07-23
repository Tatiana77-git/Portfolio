let open_modal = document.querySelectorAll('.open_modal');
let close_modal = document.getElementById('close_modal');
let modal = document.getElementById('modal');
let body = document.getElementsByTagName('body')[0];
for (let i = 0; i < open_modal.length; i++) {
    open_modal[i].onclick = function() { 
        modal.classList.add('modal_vis'); 
        modal.classList.remove('bounceOutDown'); 
        body.classList.add('body_block'); 
    };
}
close_modal.onclick = function() { 
    modal.classList.add('bounceOutDown'); 
    window.setTimeout(function() { 
        modal.classList.remove('modal_vis');
        body.classList.remove('body_block'); 
    }, 500);
};




const buttonCalculate = document.querySelector(".btn-calc");
buttonCalculate.addEventListener("click", calculateAmount);

const buttonReset = document.querySelector(".reset");
buttonReset.addEventListener("click", reloadPage);

function reloadPage() {
    location. reload();
}

function calculateAmount (e) {
    e.preventDefault();

    const country = document.querySelector("#country").value*1;
    const hotel = document.querySelector("#hotel").value*1;
    const food = document.querySelector("#food").value*1;

    const adult = document.querySelector("#adult").value*1;
    const children = document.querySelector("#children").value*1;

    if (adult === "" || children === "") { 
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Please enter your information!',
          })
    }

    const check = document.querySelector("#check");
    const checkPrice = check.checked ? Number(check.value) : 0;

    const days = document.querySelector("#days").value*1;

    let amountAdult = ((hotel+food)*adult)*days;
    let amountChildren = (((hotel+food)*children)*days)/2;
    let totalAmount = (amountAdult+amountChildren+country)+checkPrice;

    amountAdult = amountAdult.toFixed(2);
    amountChildren = amountChildren.toFixed(2);
    totalAmount = totalAmount.toFixed(2);

    document.querySelector("#dividedAdult").textContent =  amountAdult;
    document.querySelector("#dividedChildren").textContent = amountChildren;
    document.querySelector("#familyTotal").textContent = totalAmount;

}




const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('click', () => {
    removeFocus();
    item.classList.add('active');
    })

    removeFocus = () => {
        items.forEach(item => {
        item.classList.remove('active');
        })
    }
})
