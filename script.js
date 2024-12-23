


// var element = document.getElementById('link');

// element.innerHTML = 'Click me to go to Facebook';


// var prograph = document.getElementsByClassName('prograph');


// prograph[0].innerHTML = 'This is a paragraph.';
// prograph[1].innerHTML = 'This is another paragraph 2 .';
// prograph[2].innerHTML = 'This is another paragraph 3 .';


// document.write('<p>' + 'this is prograph' + + prograph.length + '</p>');


// var prograph2 = document.querySelector('p');
// var prograph2 = document.querySelectorAll('p');

// console.log(prograph2);



// var elementP = document.createElement('p');

// var text = document.createTextNode('This is a paragraph.');

// elementP.appendChild(text);


// var divElement = document.getElementsByTagName('main')[0];


// divElement.appendChild(elementP);


// var headers = document.querySelectorAll('h1');

// for (let i = 0; i < headers.length; i++) {
//     headers[i].innerHTML = (i + 1) + ')' + headers[i].innerHTML;
// }




// var prographElement = document.createElement('p');

// var prographText = document.createTextNode('This is a paragraph created from script.js.');

// prographElement.appendChild(prographText);

// var prographElement2 = document.createElement('p');

// var prographText2 = document.createTextNode('This is a paragraph2 created from script.js.');

// prographElement2.appendChild(prographText2);
// prographElement.insertAdjacentElement('beforebegin', prographElement);
// prographElement.insertAdjacentElement('afterbegin', prographElement);
// prographElement.insertAdjacentElement('beforeend', prographElement);
// prographElement.insertAdjacentElement('afterend', prographElement);


// var mainElement = document.getElementsByTagName('main')[0];
// var mainElement2 = document.getElementsByTagName('main')[0];

// mainElement.appendChild(prographElement);
// mainElement.appendChild(prographElement2);



// let header2 = document.getElementsByClassName('h1_first');


// header2.remove();

// header2.removeChild();



let elementPragraph = document.createElement('p');

let elementText = document.createTextNode('This is a paragraph created from script.js.');

elementPragraph.appendChild(elementText);

let elementMain = document.getElementsByTagName('main')[0];

var element = document.getElementById('first');


elementMain.appendChild(elementPragraph);

elementPragraph.style.color = 'white';
elementPragraph.style.backgroundColor = '#000';
elementPragraph.style.fontFamily = 'arial';
elementPragraph.style.fontWeight = 'bold';
elementPragraph.style.padding = '20px';

// to add class
// elementPragraph.classList.add('paragraph_class-from-js', 'highlightClass', 'highlightBorader');

// to add class if not exist or remove if exist
// elementPragraph.classList.toggle('paragraph_class');

// to remove class
// elementPragraph.classList.highlightBorader('paragraph_class');

// to check if class exist and contains it 

// let result = elementPragraph.contains('paragraph_class');


// print it on the page
// document.write('result:' = `${result}`);

// elementPragraph.className = 'bg-dark';

let elementStyle = window.getComputedStyle(elementPragraph);

// console.log(elementStyle);
