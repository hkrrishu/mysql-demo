const db=require("../utils/db-connection");
const Student=require("../models/students");

const addEntries= async (req, res)=>{
    try {
        const {name,email}=req.body;
        const newStudent= await Student.create({
            name: name,
            email: email
        });
        res.status(201).send(`student with name ${name} added successfully`);
    } catch (error) {
        res.status(500).send("unable to make an entry");
    }


    // const insertQuery=`insert into students(name,email) values(?,?)`;
    // db.execute(insertQuery,[name,email],(err)=>{
    //     if(err){
    //         console.error(err.message);
    //         res.status(500).send(err.message);
    //         db.end();
    //         return;
    //     }

    //     console.log("values inserted successfully");
    //     res.status(200).send(`student with name ${name} added successfully`);
    // })

}

const updateEntry=async (req,res)=>{
    try{
        const {id} = req.params;
        const {name}=req.body;

        const updatedStudent = await Student.findByPk(id);
        if(!updatedStudent){
            res.status(404).send(`user is not found`);
            return;
        }
        updatedStudent.name = name;
        await updatedStudent.save();
        res.status(200).send(`user updated successfully`);

    }catch(error){
        res.status(500).send("unable to update the entry");
    }
   
    





    // const updateQuery=`update students set name=?, email=? where id=?`;
    // db.execute(updateQuery,[name,email,id],(err, result)=>{
    //     if(err){
    //         console.error(err.message);
    //         res.status(500).send(err.message);
    //         db.end();
    //         return;
    //     }
    //     if(result.affectedRows===0){
    //         res.status(404).send(`student with id ${id} not found`);
    //         return;
    //     }
    //     res.status(200).send(`student with id ${id} updated successfully`);
    // })
    
}

const deleteEntry=async (req,res)=>{
    try{
        const {id} = req.params;
        const deletedStudent = await Student.destroy({
            where: { id: id }
        })
        if(!deletedStudent){
            res.status(404).send(`user is not found`);
            return;
        }
        res.status(200).send(`user deleted successfully`);
    }catch(error){
        res.status(500).send("unable to delete the entry");
    }






    // const deleteQuery=`delete from students where id=?`;
    // db.execute(deleteQuery,[id],(err, result)=>{
    //     if(err){
    //         console.error(err.message);
    //         res.status(500).send(err.message);
    //         db.end();
    //         return;
    //     }
    //     if(result.affectedRows===0){
    //         res.status(404).send(`student with id ${id} not found`);
    //         return;
    //     }
    //     res.status(200).send(`student with id ${id} deleted successfully`);
    // })
}

module.exports={
    addEntries,
    updateEntry,
    deleteEntry
}