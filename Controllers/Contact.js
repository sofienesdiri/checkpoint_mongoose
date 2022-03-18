const Contact = require("../Model/Contact")
exports.AddContact = async(req,res)=>{
    try {
        const NewContact = new Contact(req.body)
        const founded = await Contact.findOne({email:req.body.email})
        if(founded){
            return res.status(400).send('email already exist')
        }
        await NewContact.save()
        res.status(200).send({NewContact ,Msg : "Contact added"})
    } catch (error) {
        res.status(500).send("error")
    }
}

exports.GetContact = async(req,res)=>{
    try {
        const Contacts = await Contact.find()
        res.status(200).send({Contacts,msg:'list of contacts'})
    } catch (error) {
        res.status(500).send("error")
    }
}
exports.DeleteContact = async(req,res)=>{
    try {
        const {id}= req.params
        const delContact = await Contact.findByIdAndDelete(id)
        res.status(200).send('contact deleted')
    } catch (error) {
        res.status(500).send("Error")
    }
}
exports.UpdateContact = async(req,res)=>{
    try {
        const {id} = req.params
        const upContact = await Contact.findByIdAndUpdate(id,{$set:req.body})
        res.status(200).send("contact updated")
    } catch (error) {
        res.status(500).send("error")
    }
}