
document.getElementById('BuyTicketBtn').addEventListener('click', function() {
  // Scroll to the P.H. Paribabahan  section
  document.getElementById('greenLine').scrollIntoView({ behavior: 'smooth' });
});

let countLess = 40;
let count = 0;

const allBtn = document.getElementsByClassName('kbd');
for (const btn of allBtn){
  btn.addEventListener('click', function(e){
    count = count + 1;
   document.getElementById('seatCount').innerText = count;
   countLess = countLess - 1;
   document.getElementById('seatsLeft').innerText = countLess;
  })
}





















//document.getElementById('buyTicket').addEventListener('click', function() {
//      var hiddenSection = document.getElementById('green-line');
//      
//      // Toggle the display property directly
//      hiddenSection.style.display = (hiddenSection.style.display === 'none' || hiddenSection.style.display === '') ? 'block' : 'none';
//    });