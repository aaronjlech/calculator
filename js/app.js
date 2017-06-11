var allBtns = document.querySelectorAll('.btns')
var display = document.querySelector('#numbers');
var str = '';
var hasOperator = str.includes('*') || str.includes('+') || str.includes('-') || str.includes('/');
var evaluated = false;
for (var i = 0; i < allBtns.length; i++) {
   allBtns[i].addEventListener('click', function(evt){
      var val = evt.currentTarget.value;
      if(val === '=') {
         display.value = eval(str);
         evaluated = true;
      }else if(val === 'C') {
         display.value = '';
      }else if(evaluated) {
         str = val;
         display.value = str;
         evaluated = false;
      }else {
         str += val;
         display.value = str;
      }
   })
}
