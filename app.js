const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const times = document.getElementById('times');
const divide = document.getElementById('divide');
const point = document.getElementById('point');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');
  
one.onclick = function() {
  document.forms.display.value += 1;
};

two.onclick = function() {
  document.forms.display.value += 2;
};

three.onclick = function() {
  document.forms.display.value += 3;
};

four.onclick = function() {
  document.forms.display.value += 4;
};

five.onclick = function() {
  document.forms.display.value += 5;
};

six.onclick = function() {
  document.forms.display.value += 6;
};

seven.onclick = function() {
  document.forms.display.value += 7;
};

eight.onclick = function() {
  document.forms.display.value += 8;
};

nine.onclick = function() {
  document.forms.display.value += 9;
};

zero.onclick = function() {
  document.forms.display.value += 0;
};

plus.onclick = function() {
  document.forms.display.value += '+';
};

minus.onclick = function() {
  document.forms.display.value += '-';
};

point.onclick = function() {
  document.forms.display.value += '.';
};

times.onclick = function() {
  document.forms.display.value += '*';
};

divide.onclick = function() {
  document.forms.display.value += '/';
};

clear.onclick = function() {
  document.forms.display.value = '';
};

equals.onclick = function() { 
  if (document.forms.display.value == '') {
    alert('Please, input values to calculate!');
  } else {
    document.forms.display.value = eval(document.forms.display.value);
  }
}