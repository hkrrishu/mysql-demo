const db=require("../utils/db-connection");

const addEntries=(req, res)=>{
    const {name,email}=req.body;
    const query=`insert into students(name,email) values(?,?)`;
    db.execute(query,[name,email],(err)=>{
        if(err){
            console.error(err.message);
            res.status(500).send(err.message);
            db.end();
            return;
        }

        console.log("values inserted successfully");
        res.status(200).send(`student with name ${name} added successfully`);
    })

}

const updateEntry=(req,res)=>{
    const {id} = req.params;
    const {name,email}=req.body;
    const updateQuery=`update students set name=?, email=? where id=?`;
    db.execute(updateQuery,[name,email,id],(err, result)=>{
        if(err){
            console.error(err.message);
            res.status(500).send(err.message);
            db.end();
            return;
        }
        if(result.affectedRows===0){
            res.status(404).send(`student with id ${id} not found`);
            return;
        }
        res.status(200).send(`student with id ${id} updated successfully`);
    })

    
}

const deleteEntry=(req,res)=>{
    const {id} = req.params;
    const deleteQuery=`delete from students where id=?`;
    db.execute(deleteQuery,[id],(err, result)=>{
        if(err){
            console.error(err.message);
            res.status(500).send(err.message);
            db.end();
            return;
        }
        if(result.affectedRows===0){
            res.status(404).send(`student with id ${id} not found`);
            return;
        }
        res.status(200).send(`student with id ${id} deleted successfully`);
    })
}

module.exports={
    addEntries,
    updateEntry,
    deleteEntry
}