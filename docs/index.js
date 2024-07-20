window.onload = function() {
const button = document.getElementById('submit');
button.addEventListener('click', (event) => {

    const name = document.getElementById('name');
    var point = 0;
    const q1 = document.getElementById('q1');
    if(q1.value === 'answer'){
       point = point + 20;
       console.log(point);
    }
    const q2 = document.getElementById('q2');
    if(q2.value === 'answer'){
       point = point + 20;
       console.log(point);
    }
    const q3 = document.getElementById('q3');
    if(q3.value === 'answer'){
       point = point + 20;
       console.log(point);
    }
    const q4 = document.getElementById('q4');
    if(q4.value === 'answer'){
       point = point + 20;
       console.log(point);
    }
    const q5 = document.getElementById('q5');
    if(q5.value === 'answer'){
       point = point + 20;
       console.log(point);
    }
    alert(`Hello, ${name.value}! Your score is ${point}`);
   });
};