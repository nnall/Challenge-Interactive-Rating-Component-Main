'use strict';


//form.addEventListener('submit', function)

const form = document.querySelector('form');
const inputArray = document.querySelectorAll('input');
const thankYouBox = document.querySelector('.thankYouBox');
const ratingBox = document.querySelector('.ratingBox');






let ratingSpan;



// const span = document.querySelector('.rating');

// console.log(span);


form.addEventListener('submit', event => {

    event.preventDefault();

    ratingBox.style.display = 'none';
    thankYouBox.style.display = 'flex';



    const data = Object.fromEntries(new FormData(event.target));

    const rating = data.rating + ' ';

    console.log(rating);

    document.querySelector('.ratingSpan').innerHTML = rating;

  })







