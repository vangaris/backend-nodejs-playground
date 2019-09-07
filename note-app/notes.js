const fs = require('fs') //reading from files
const chalk = require('chalk')

const getNotes = function () {
    return 'My notes'

}


//1 
const addNote = (title, body) => {
    //3
    const notes = loadNotes();
    console.log("notes: " + notes)
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

const removeNote = (title) => {

    const notes = loadNotes();
    console.log("notes: " + notes)

    const remaingNotes = notes.filter((note) => {
        console.log("note title: " + note.title)
        return note.title !== title

    })

    if (notes.length > remaingNotes.length){
        console.log(chalk.green.inverse('removed'))
    } else {
        console.log(chalk.red.inverse('No note found')) 
    }

    console.log("RemainingNotes: " + notes)
    
      try{

        if (remaingNotes){

            notes.push({
                title : title
            })

            saveNotes(remaingNotes)
            console.log("Note removed")
        }else {
            console.log("does not remove")
        }

      } catch (error) {
        console.log(error);
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
        console.log("dataJSON: " + dataJSON)
        console.log("json.parse(dataJSON): " + JSON.parse(dataJSON))
        return JSON.parse(dataJSON)
    } catch(e){
        return []
    }

}


// exporting one or more things on node js
module.exports = {
    getNotes : getNotes,// το πρωτο ειναι property
    addNote: addNote,
    removeNote : removeNote
}