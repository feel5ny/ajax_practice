import square from './lib';

console.log(square(3)); // 9

let html = '';
square(3) === 9 ? html = 'Webpack is working!' : html = 'Somethig wrong!';

document.getElementById('res').innerHTML = html;