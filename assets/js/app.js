const navigation = document.querySelector('nav');

window.addEventListener('scroll', () => {

     if(window.scrollY > 900){
         navigation.classList.add('anim-nav');
     } else {
         navigation.classList.remove('anim-nav');
     }

})

// Anim click

 window.addEventListener('click', (e) => {
//     // console.log(e);

     const rond = document.createElement('div');
     rond.className = 'clickAnim';
     rond.style.top = `${e.pageY - 50}px`;
    rond.style.left = `${e.pageX - 50}px`;
    document.body.appendChild(rond);

     setTimeout(() => {
        rond.remove();
     }, 1500)
 })


// Animation input

const validationInput = document.querySelector('input');

validationInput.addEventListener('input', (e) => {

    if(e.target.value.length >= 3) {
        validationInput.style.borderColor = "green";
    } else {
        validationInput.style.borderColor = "red";
    }

})

var granimInstance = new Granim({
    element: '#canvas-basic',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#ff9966', '#ff5e62'],
                ['#00F260', '#0575E6'],
                ['#e1eec3', '#f05053']
            ]
        }
    }
});


