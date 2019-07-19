const fs = require('fs')
const chalk = require('chalk')

//Adding a note
const addNote = (title, body)=>{
    const notes = loadNotes()
    const duplicateNotes = notes.find((note) => note.title === title)
    
    debugger

    if(!duplicateNotes){
        notes.push({title:title,
                    body:body})

            saveNote(notes)
            console.log(chalk.blue.inverse('New note added!')) 
    }else{
        console.log(chalk.red.inverse('Note already taken'))
    }
}

//Removing a note
const removeNote = (title) => {
    const notes = loadNotes()
    var filterNotes = notes.filter((note) => note.title != title)

    if(notes.length > filterNotes.length){
        console.log(chalk.green('Title is removed'))
    }else{
        console.log(chalk.red("No Note found!"))
    }
    saveNote(filterNotes)
}

//Saving a note
const saveNote = (note)=>{
    const jsonData = JSON.stringify(note)
    fs.writeFileSync('notes.json',jsonData)
}

//Loading notes.json
const loadNotes = () => {
    try{
        const buffer = fs.readFileSync('notes.json')
        const jsonData = buffer.toString()
        return JSON.parse(jsonData)
    }catch(e){
        return []
    }
}

//Listing notes
const listNotes = () =>{
    const notes = loadNotes()

    console.log(chalk.green.inverse("Your notes: "))
    
    notes.forEach((note) => {
        console.log(chalk.yellow("Title : " + note.title))
    })
}

//Reading a note
const readNotes = (title) => {
    const notes = loadNotes()

    const filterNote = notes.find((note)=> note.title === title)
    
    if(!filterNote){
        console.log(chalk.red("Note not found"))
    }else{
        console.log(chalk.blue.inverse("Title : ") + chalk.green(filterNote.title) + " Body : " + filterNote.body)
    }
}

module.exports = {
    addNote: addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNotes: readNotes
}