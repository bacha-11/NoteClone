let addButton = document.querySelector('.addNote');

function createNewNote(text='') {
    let note = document.createElement('div');
    note.classList.add('note');
    console.log(note);

    let htmlData = `
            <div class="operation">
                <button class="edit"><i class="fas fa-edit"></i></button>
                <button class="delete"><i class="fas fa-trash-alt"></i></button>
            </div>
            <div class="main"></div>
            <textarea class=""></textarea>`;

    // note.innerHTML = htmlData
    note.insertAdjacentHTML('afterbegin', htmlData);
    // console.log(note);

    document.body.appendChild(note);

    


}



addButton.addEventListener('click', createNewNote );