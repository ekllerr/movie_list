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
    let isValid;

    //previewImg.attributes[0].value is a src attribute of <img>
    if(previewImg.attributes[0].value !== '' && !img.value){
        isValid = checkFields(title,releaseYear, duration);
    }
    else{
        isValid = checkFields(title,releaseYear,duration,img);
    }

    if (!isValid){
        alert('You must fill in all inputs');
        return;
    }

    const movie = new Movie(movieList.movieList.length,title.value, releaseYear.value, duration.value, previewImg.src);

    movieList.addMovie(movie);

    setList();

    clearFields(title,releaseYear,duration,img);
    previewImg.src = '';

});

movieDiv.addEventListener('click', e => {
    if(e.target.classList.contains('deleteBtn')){
        const movieId = e.target.closest('.movie').id;
        movieList.removeMovieById(movieId);
        setList();
    }

    if(e.target.classList.contains('editBtn')){
        const movieId = e.target.closest('.movie').id;
        const movie = movieList.movieList.filter(m => m.id === parseInt(movieId))[0];
        editMovie(movie);
    }
});

function editMovie(movie){
    title.value = movie.title;
    releaseYear.value = movie.releaseYear;
    duration.value = movie.duration;
    previewImg.src = movie.imgUrl;
    movieList.removeMovieById(movie.id);
    setList();
}

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
