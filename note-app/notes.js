const fs = require('fs') //reading from files

const getNotes = function () {
    return 'My notes'

}


//1 
const addNote = (title, body) => {
    //3
    const notes = loadNotes();
    //6
    const duplicateNotes = notes.filter((note)=>{
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        //4
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('Note added')
    }else{
        console.log('Note title taken')
    }
}

const saveNotes = (notes) => {//5
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON)
}

//2
const loadNotes = ()=> {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    } catch(e){
        return []
    }
}

// exporting one or more things on node js
module.exports = {
    getNotes : getNotes,// το πρωτο ειναι property
    addNote: addNote
}