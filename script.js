var ans = document.querySelector('.ans');
var ans1 = document.querySelector('.a1');
var ans2 = document.querySelector('.a2');
var ans3 = document.querySelector('.a3');
var ans4 = document.querySelector('.a4');
var ans6 = document.querySelector('.a6');

var button = document.querySelector('#btn')

var correct = '2px solid rgba(0,128,0,0.75)';
var wrong = '2px solid rgba(255,0,0,0.75)';


button.addEventListener('click', function() {
  if (ans1.value === '15') {
    ans1.style.border = correct;
  } else {
    ans1.style.border = wrong;
  }

  if (ans2.value === '23') {
    ans2.style.border = correct;
  } else {
    ans2.style.border = wrong;
  }

  if (ans3.value === '16') {
    ans3.style.border = correct;
  } else {
    ans3.style.border = wrong;
  }

  if (ans4.value === '77') {
    ans4.style.border = correct;
  } else {
    ans4.style.border = wrong;
  }

  if (ans6.value === '12') {
    ans6.style.border = correct;
  } else {
    ans6.style.border = wrong;
  }
})
