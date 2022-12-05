const num1 = document.querySelector('.num-1');
const num2 = document.querySelector('.num-2');
const num3 = document.querySelector('.num-3');
const num4 = document.querySelector('.num-4');
const num5 = document.querySelector('.num-5');
const btn = document.querySelector('.btn');
const rating = document.querySelector('.rating');
const greeting = document.querySelector('.greeting');
const ratingNum = document.querySelector('.rating-number');
let boolen = true;
let number;
num1.addEventListener('click', nums(num1));
num2.addEventListener('click', nums(num2));
num3.addEventListener('click', nums(num3));
num4.addEventListener('click', nums(num4));
num5.addEventListener('click', nums(num5));

function nums(num) {
  num.addEventListener('click', function (e) {
    e.preventDefault();
    if (boolen) {
      num.style.backgroundColor = '#fb7413';
      num.style.color = '#fff';
      num.style.fontWeight = "700";
      number = num.textContent;
      boolen = false;
    }
  });
}

btn.addEventListener('click', function (e) {
  e.preventDefault();
  if (boolen == false) {
    ratingNum.innerHTML = number;
    rating.style.display = 'none';
    greeting.style.display = 'flex';
  }

})
