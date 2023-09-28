let bt = document.querySelector('.bt');
let next = document.getElementById('next');
const mail =document.getElementById('mmail')

var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


function transfer(){
  var val = mail.value

  var isValidEmail = emailRegex.test(val);
  
  
  if (isValidEmail) {
    localStorage.setItem('value',val)

  next.href = 'pag2.html';
    } else {
      alert('Error');
    }
  
}



