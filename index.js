/* Enter the code to remove the main node element under this comment */

document.body.appendChild(element)

var ul = document.createElement('ul')

element.style.textAlign = 'center';
ul.style.textAlign = 'left'

ul.removeChild(ul.querySelector('li:nth-child(2)'))

/* Create your new element here and assign it to newHeader */
const newHeader = null;
