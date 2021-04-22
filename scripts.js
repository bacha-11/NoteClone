let addButton = document.querySelector('.addNote');

function storeData(){
    let textData = document.querySelectorAll('textarea');
    let notes = []

    textData.forEach((note) => {
        return notes.push(note.value);
    })

    localStorage.setItem('notes', JSON.stringify(notes));

}

function createNewNote (text = '') {
    let note = document.createElement('div');
    note.classList.add('note');
    // console.log(note);

    let htmlData = `
            <div class="operation">
                <button class="edit"><i class="fas fa-edit"></i></button>
                <button class="delete"><i class="fas fa-trash-alt"></i></button>
            </div>
            <div class="main ${text ? "" : "hidden" } "> </div>
            <textarea class="${text ? "hidden" : "" } "></textarea>  `;

    // note.innerHTML = htmlData
    note.insertAdjacentHTML('afterbegin', htmlData);
    // console.log(note);


    let editButton = note.querySelector('.edit');
    let delButton = note.querySelector('.delete');
    let mainDiv = note.querySelector('.main');
    let textArea = note.querySelector('textarea');


    textArea.value = text
    mainDiv.innerHTML = text
    
    // Deleting the note
    delButton.addEventListener('click', () => {
        note.remove()
        storeData()
    })

    // toggle data (toggle mean show or hide)
    editButton.addEventListener('click', () => {
        mainDiv.classList.toggle('hidden');
        textArea.classList.toggle('hidden')
    });

    textArea.addEventListener('change', (event) => {
        let value = event.target.value;
        mainDiv.innerHTML = value

        storeData()
    });

    document.body.appendChild(note);

}


let getTextData = JSON.parse(localStorage.getItem('notes'));

if(getTextData){ 
    getTextData.forEach((note) => { 
        createNewNote(note)
    });
}

addButton.addEventListener('click', () =>  createNewNote() );


