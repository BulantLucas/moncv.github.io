const navigation = document.querySelector('nav');

window.addEventListener('scroll', () => {

     if(window.scrollY > 900){
         navigation.classList.add('anim-nav');
     } else {
         navigation.classList.remove('anim-nav');
     }

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



