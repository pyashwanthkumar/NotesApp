const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')


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
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

//Create a remove command
yargs.command({
    command:'remove',
    describe:'Removing a note!',
    handler:function(){
        console.log("Removing a note")
    }
})

//Create a read command
yargs.command({
    command:'read',
    describe:'Reading a note!',
    handler:function(){
        console.log("Reading a note")
    }
})

//Create a list command
yargs.command({
    command:'list',
    describe:'Listing a command',
    handler:function(){
        console.log('Listing a note')
    }
})

yargs.parse()