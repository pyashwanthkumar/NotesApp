const chalk = require('chalk')
const yargs = require('yargs')
const note = require('./notes.js')


//Customize yargs version
yargs.version('1.1.0')

//Create a command
yargs.command({
    command:'add',
    describe:'add a note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:String
        },
        body:{
            describe:'Giving body to the note',
            demandOption:true,
            type:String
        }
    },
    handler: function(argv){
        debugger
       note.addNote(argv.title, argv.body)
    }
})

//Create a remove command
yargs.command({
    command:'remove',
    describe:'Removing a note!',
    builder:{
        title:{
            describe:'The title to be removed',
            demandOption:true,
            type:String
        }
    },
    handler:function(argv){
        note.removeNote(argv.title)
    }
})

//Create a read command
yargs.command({
    command:'read',
    describe:'Reading a note!',
    builder:{
        title:{
            describe:'Reading a title',
            demandOption:true,
            type:String
        }
    },
    handler:function(argv){
        note.readNotes(argv.title)
    }
})

//Create a list command
yargs.command({
    command:'list',
    describe:'Listing a command',
    handler:function(argv){
        note.listNotes()
    }
})

yargs.parse()