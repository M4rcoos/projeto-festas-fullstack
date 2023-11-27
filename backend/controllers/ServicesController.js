const { Service: ServiceModel } = require('../models/Service')

const serviceCintroller = {
   create: async(req,res)=>{
    try{
        const service = {
          name:req.body.name,
          description:req.body.description,
          image:req.body.image,
          price:req.body.price,
        }
        //criando o objeto que vem do front no banco
        const response = await ServiceModel.create(service)
        res.status(201).json({ response, msg:"Serviço criado com sucesso!" })
    }catch(err){

    }
   },
   getAll: async(req,res)=>{
    try{
     
      //criando o objeto que vem do front no banco
      const services = await ServiceModel.find()
      res.json(services)
  }catch(err){

  }
   },
   get: async(req,res)=>{
    try{
     const id = req.params.id
     //buscando id do db 
     const service = await ServiceModel.findById(id)
     res.json(services)
   
  }catch(err){
console.log(err)
  }
   }
}

module.exports = serviceCintroller