const fs=require("fs");

const addNote=(title,body)=>
{
const notes=loadNotes()

   notes.push(
       {
           "title":title,
           "body":body
       }
   )
   saveNotes(notes);
}



const removeNote = function(title)
{
     const data=loadNotes();
     var noteRemoved=data.filter(function(note)
     {
         if(note.title !== title)
         return note
     })
     saveNotes(noteRemoved)
    }

    const saveNotes=function(notes)
    {
        const data=JSON.stringify(notes);
        fs.writeFileSync("notes.json",data)
    }

    const readNote = (title)=>
    {
        var note=loadNotes().find((note)=>note.title===title);
        console.log("Title : "+note.title )

    }
const loadNotes=function()
{
    debugger
    try
    {
    const dataBuffer=fs.readFileSync("notes.json")
    const dataJson=dataBuffer.toString()
    return JSON.parse(dataJson)
    }
    catch(e)
    {
        return []
    }
    
}

module.exports = {addNote,removeNote,readNote}