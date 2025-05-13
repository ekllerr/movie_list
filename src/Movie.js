export class Movie{
    constructor(id,title,releaseYear,duration,imgUrl){
        this.id = id;
        this.title=title;
        this.releaseYear=releaseYear;
        this.duration = duration;
        this.imgUrl=imgUrl;
    }

    getHtml(){
        const container = document.createElement('div');
        container.classList.add('movie');
        container.id = this.id;

        const title = document.createElement('h3');
        title.innerText = this.title;

        const img = document.createElement('img');
        img.src = this.imgUrl;
        // img.alt = this.title;

        const info = document.createElement('p');
        info.innerText = `Year: ${this.releaseYear}, duration: ${this.duration}`;

        const buttonsDiv = document.createElement('div');
        const deleteBtn = document.createElement('input');
        const editBtn = document.createElement('input');

        buttonsDiv.classList.add('buttonsDiv');

        deleteBtn.type = 'button';
        deleteBtn.value = 'Delete';
        deleteBtn.classList.add('deleteBtn');

        editBtn.type = 'button';
        editBtn.value = 'Edit';
        editBtn.classList.add('editBtn');

        buttonsDiv.append(editBtn);
        buttonsDiv.append(deleteBtn);

        container.append(title,img,info,buttonsDiv);

        return container;
    }

}