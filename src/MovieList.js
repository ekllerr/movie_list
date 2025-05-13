export class MovieList{
    constructor(){
        this.movieList = [];
    }

    addMovie(movie){
        if(this.has(movie)){
            alert('This movie is already in the list');
            return;
        }
        this.movieList.push(movie);
    }

/*    removeMovie(movie){
        if(!this.has(movie)){
            alert('This movie is not in the list');
        }
    }*/

    removeMovieById(id){
        this.movieList = this.movieList.filter(m => m.id !== parseInt(id));
    }

    has(movie){
        return this.movieList.some(m => m.id === movie.id);
    }

    getHtml(){
        const container = document.createElement('div');
        container.classList.add('movieList');
        for(let i = 0; i < this.movieList.length;i++){
            const movieHtml = this.movieList[i].getHtml();
            container.append(movieHtml);
        }
        return container;
    }
}