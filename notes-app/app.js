const yargs=require("yargs")
const fs= require("fs")
const notes=require("./notes.js")

//add,remove,read,list

//add command

yargs.command(
    {
    command: 'add',
    describe : "To add notes",
    builder : {
        title :
        {
            describe : "Notes title",
            demandOption : true,
            type:"string"
        },
        body :
        {
            describe : "body for the notes",
            demandOption : true,
            type : "string"
        }
    },
    handler : (argv)=> notes.addNote(argv.title,argv.body)

    }
);

yargs.command(
    {
    command:"remove",
    describe : "To remove notes",
    builder : {
        title : {
            describe : "Title to be remove",
            demandOption : true,
            type:'string'
        }
    },
    handler: function(argv)
    {
        notes.removeNote(title)
    }
    }
)

yargs.command(
    {
        command:"read",
        describe:"To read a note",
        builder:
        {
            title:{
                describe : "title of the note",
                type:"string",
                demandOption:true
            }
        },
        handler : (argv)=>notes.readNote(argv.title)
    }
)


yargs.command(
    {
        command:"list",
        describe:"To List a note",
        handler : function()
        {
            console.log("This a the list of notes")
        }
    }
)
//console.log(yargs.argv)

yargs.parse()