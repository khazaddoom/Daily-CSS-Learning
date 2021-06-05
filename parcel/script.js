import sayHello from './helper'

const elem = document.getElementById('time')

setTimeout(() => {
    elem.innerHTML = sayHello()  
}, 1000);

