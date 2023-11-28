const { Service: ServiceModel } = require('../models/Service')

const serviceCintroller = {
  create: async (req, res) => {
    try {
      const service = {
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        price: req.body.price,
      }
      //criando o objeto que vem do front no banco
      const response = await ServiceModel.create(service)
      res.status(201).json({ response, msg: "Serviço criado com sucesso!" })
    } catch (err) {

    }
  },
  getAll: async (req, res) => {
    try {

      //criando o objeto que vem do front no banco
      const services = await ServiceModel.find()
      res.json(services)
    } catch (err) {

    }
  },
  get: async (req, res) => {
    try {
      const id = req.params.id
      //buscando id do db 
      const service = await ServiceModel.findById(id)
      if (!service) {
        res.status(404).json({ msg: "Serviço não encontrado!" })
        return
      }
      res.json(service)

    } catch (err) {
      console.log(err)
    }
  },
  delete: async (req, res) => {
    try {
        const id = req.params.id

        const service = await ServiceModel.findById(id)
        if (!service) {
          res.status(404).json({ msg: "Serviço não encontrado!" })
          return
        }
        const deletedService = await ServiceModel.findOneAndDelete(id)
        res.status(200).json({deletedService, msg:"Serviço excluido com sucesso!"})
    } catch (err) {
      console.log(err)
    }
  },
  update: async (req, res) => {
    const id = req.params.id

    const service = {
      name: req.body.name,
      description: req.body.description,
      image: req.body.image,
      price: req.body.price,
    }
    const updateService = await ServiceModel.findByIdAndUpdate(id,service)

    if (!updateService) {
      res.status(404).json({ msg: "Serviço não encontrado!" })
      return
    }

    res.status(200).json({service, msg: "Serviço atualizado com sucesso!"})
  }

}

module.exports = serviceCintroller