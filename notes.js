const fs = require('fs')

const getNotes = function(){
    return "Your notes ..."
}

const addNote = function(title, body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })
    if(duplicateNotes.length === 0){
        
        notes.push({title:title,
                    body:body})

            saveNote(notes)
            console.log('New note added!') 
    }else{
        console.log('Note already taken')
    }
}

const saveNote = function(note){
    const jsonData = JSON.stringify(note)
    fs.writeFileSync('notes.json',jsonData)
}

const loadNotes = function(){
    try{
        const buffer = fs.readFileSync('notes.json')
        const jsonData = buffer.toString()
        return JSON.parse(jsonData)
    }catch(e){
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote
}