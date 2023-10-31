const hi = 'Labas rytas, Lietuva!'
console.log(hi);

const titleDOM = document.getElementById('title');
console.log(titleDOM);

titleDOM.innerText = hi;

console.log(titleDOM.classList.add('red'))