import Note from "../models/Notes.js" 
 
export async  function  getAllNotes (req,res) {
try{
    const notes = await Note.find({})
    res.status(200).json(notes)
}catch(error){
    console.error("error in get all notes  ",error)
    res.status(500).json({message:"Internal Server Errorr  "});
}
}

export async function getNoteById (req,res){
    try{
        const note = await Note.findById(req.params.id)
        if(!note) return res.status(404).json({message:"Note not found !"})
        res.json(note);
    }catch(error){
    console.error("Error in get note by id   controller:", error);
    res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;

    // Validation simple
    if (!title || !content) {
      return res.status(400).json({ message: "Title and content are required." });
    }

    const newNote = new Note({ title, content });
    await newNote.save();

    console.log("Note created:", newNote);

    res.status(201).json({
      message: "Note created successfully",
      note: newNote
    });

  } catch (error) {
    console.error("Error in createNote controller:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function updateNote(req,res){
    try{
        const {title,content } = req.body;
        const updatedNote =  await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true,})
        if (!updatedNote) return res.status(404).json({message:"note not found "})
        
        res.status(200).json(updatedNote);
    }catch(error){
            console.error("Error in updateNote controller:", error);
    res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function deleteNote (req,res){
    try{    
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote) return res.status(404).json({message:"note not found "});
    res.status(200).json({message:"note deleted succesfully !!"})

}catch(error){
        console.error("Error in deletenote  controller:", error);
    res.status(500).json({ message: "Internal Server Error" });
    }
}

