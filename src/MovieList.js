export class MovieList{
    constructor(){
        this.list = [];
    }

    addMovie(movie){
        if(this.has(movie)){
            alert('This movie is already in the list');
            return;
        }
        this.list.push(movie);
    }


    removeMovieById(id){
        this.list = this.list.filter(m => m.id !== parseInt(id));
    }

    has(movie){
        return this.list.some(m =>  m.id=== movie.id);
    }

    getHtml(){
        const container = document.createElement('div');
        container.classList.add('movieList');
        for(let i = 0; i < this.list.length; i++){
            const movieHtml = this.list[i].getHtml();
            container.append(movieHtml);
        }
        return container;
    }
}