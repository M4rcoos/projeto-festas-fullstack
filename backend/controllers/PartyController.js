const PartyModel = require("../models/Party");

const checkPartyBudget = (budget, services) => {
  const priceSum = services.reduce((sum, service)=> sum + service.price, 0)

  if(priceSum > budget) {
    return false
  }
  return true;
}

const partyController = {
  create: async (req, res) => {
    try {
      const  { title, author, description, budget, image, services } = req.body

      if(services && !checkPartyBudget(budget, services)) {
        res.status(406).json({ msg:"O seu orçamento é insuficiente."})
        return
      }
      console.log('Dados recebidos:', { title, author, description, budget, image, services });
      const response = await PartyModel.create({
        title,
        image,
        author,
        budget,
        services,
        description,
      })
      res.status(201).json({response, msg:"Festa criada com sucesso."})
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = partyController;