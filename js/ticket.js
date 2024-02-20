document.getElementById("BuyTicketBtn").addEventListener("click", function () {
  document.getElementById("greenLine").scrollIntoView({ behavior: "smooth" });
});

let countLeft = 40;
let seatCount = 0;

function li(seatName, seatPrice) {
  let ul = document.getElementById("seatSelected");
  let li = document.createElement("li");
  let p1 = document.createElement("p");
  p1.innerText = seatName.innerText;
  let p2 = document.createElement("p");
  p2.innerText = "Economy";

  let p3 = document.createElement("p");
  p3.innerText = seatPrice;

  li.appendChild(p1);
  li.appendChild(p2);
  li.appendChild(p3);
  ul.appendChild(li);
}
const cheakSeat = [];
let priceCount = 0;
const allBtn = document.getElementsByClassName("kbd");

for (const btn of allBtn) {
  btn.addEventListener("click", function (e) {
        cheakSeat.push(btn.innerText);
        btn.style.color = "white";
        btn.disabled = true;
    if (cheakSeat.length <= 4) {
      seatCount = seatCount + 1;
      document.getElementById("seatCount").innerText = seatCount;
      countLeft = countLeft - 1;
      document.getElementById("seatsLeft").innerText = countLeft;

      const selectedBtn = document.getElementsByClassName("kbd");
      e.target.style.backgroundColor = "green";
    
     

      let price = document.getElementById("ticketPrice").innerText;
      li(btn, price);
      priceCount = priceCount + parseInt(price);

      document.getElementById("totalPrice").innerText = priceCount;
      document.getElementById("grandTotal").innerText = priceCount;
    } else {
      alert("You can't select more than seat");
    }
  });
}

function applyCoupon() {
  let inputField = document.getElementById("inputField").value;
  let new15 = document.getElementById("new15").innerText;
  let couple20 = document.getElementById("couple20").innerText;
  let different = 0;
if(priceCount === 2200){
 if (inputField === new15 ) {
    different = priceCount * 0.15;
    console.log(different);
    document.getElementById("grandTotal").innerText = parseInt(priceCount - different);
    document.getElementById("couponSection").classList.add("hidden");
  } else if (inputField === couple20) {
    different = priceCount * 0.2;
    console.log(different);
    document.getElementById("grandTotal").innerText = parseInt(priceCount - different);
    document.getElementById("couponSection").classList.add("hidden");
  } else if (inputField !== new15 || couple20) {
    alert("Please right coupon!!");
  }
  }else{
    alert("Please select 4 seats")
  }
}
  

document.getElementById("phoneNumber").addEventListener("click", function () {
  document.getElementById("nextBtn").removeAttribute("disabled");
  
});

document.getElementById("continueBtn").addEventListener("click", function () {
  document.getElementById("my_modal_1").classList.add("hidden");
});


