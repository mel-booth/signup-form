document.getElementById('signup').addEventListener('click', function(e) {
  console.log('Sign Up tab clicked!')
  var inputs =
  document.querySelectorAll('.form-input')
  document.querySelectorAll('.tabs > li')[0].className=''
  document.querySelectorAll('.tabs > li')[1].className='active'

  for (var a = 0; a < inputs.length; a++) {
    if(a == 2){

    } else {
      document.querySelectorAll('.form-input')[a].className='form-input block'
    }
  }

  setTimeout(function() {
    for(var b = 0; b <inputs.length; b++) {
      document.querySelectorAll('.form-input')[b].className='form-input block active_input'
    }
  }, 100 )
  document.querySelector('.log-sign-btn').innerHTML = 'Sign Up'

})

document.getElementById('login').addEventListener('click', function(e) {
console.log('Log In tab clicked!');

})
