import {MovieList} from "./MovieList.js";
import {Movie} from "./Movie.js";

import './style.css'

const app = document.querySelector('#app');
const title = document.querySelector('#title');
const releaseYear = document.querySelector('#releaseYear');
const duration = document.querySelector('#duration');
const img = document.querySelector('#img');
const previewImg = document.querySelector('#previewImg');
const addBtn = document.querySelector('#addBtn');

const movieDiv = document.createElement('div');

const movieList = new MovieList();


app.append(movieDiv);

img.addEventListener('change', () => {
   const file = img.files[0];
    if(!file.type.includes('image')){
        alert('Please upload an image');
        img.value = '';
    }

    const imageUrl = URL.createObjectURL(file);
    previewImg.src = imageUrl;
});


addBtn.addEventListener('click', e => {
    e.preventDefault();
    const isValid = checkFields(title,releaseYear,duration,img);
    if (!isValid){
        alert('You must fill in all inputs');
        return;
    }

    const movie = new Movie(movieList.movieList.length,title.value, releaseYear.value, duration.value, previewImg.src);

    movieList.addMovie(movie);

    setList();

    clearFields(title,releaseYear,duration,img);
    previewImg.src = '';
  /*  const deleteBtnArr = document.querySelectorAll('.deleteBtn');
    for(let i = 0; i < deleteBtnArr.length; i++){
        deleteBtnArr[i].addEventListener('click', e => {
            const movieId = e.target.closest('.movie').id;
            movieList.removeMovieById(movieId);
            setList();
        });

    }*/
});

movieDiv.addEventListener('click', e => {
    if(e.target.classList.contains('deleteBtn')){
        const movieId = e.target.closest('.movie').id;
        movieList.removeMovieById(movieId);
        setList();
    }
})


function setList(){
    const html = movieList.getHtml();
    movieDiv.innerHTML = '';
    movieDiv.append(html);

}



function checkFields(...fields){
    for(let i = 0; i < fields.length; i++){
        if(!fields[i].value){
            fields[i].classList.add('notFilled');
            return false;
        }
        fields[i].classList.remove('notFilled');
    }
    return true;
}

function clearFields(...fields){
    for(let i = 0; i < fields.length; i++){
        fields[i].value = '';
    }
}
