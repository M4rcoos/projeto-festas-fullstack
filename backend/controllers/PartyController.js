const PartyModel = require("../models/Party");

const checkPartyBudget = (budget, services) => {
  const priceSum = services.reduce((sum, service) => sum + service.price, 0)

  if (priceSum > budget) {
    return false
  }
  return true;
}

const partyController = {
  create: async (req, res) => {
    try {
      const { title, author, description, budget, image, services } = req.body

      if (services && !checkPartyBudget(budget, services)) {
        res.status(406).json({ msg: "O seu orçamento é insuficiente." })
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
      res.status(201).json({ response, msg: "Festa criada com sucesso." })
    } catch (error) {
      console.error(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const parties = await PartyModel.find()
      res.status(200).json(parties)
    } catch (error) {
      console.log(error)
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params

      const party = await PartyModel.findById(id)

      if (!party) {
        res.status(404).json({ msg: "Festa não encontrada." })
        return
      }
      res.json(party)
    } catch (error) {
      console.log(error)
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params

      const deleteParty = await PartyModel.findByIdAndDelete(id)

      if (!deleteParty) {
        res.status(404).json({ msg: "Festa não encontrada." })
        return
      }
      res.status(200).json({ deleteParty, msg: "Festa deletada com sucesso." })
    } catch (error) {
      console.log(error)
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params
      const party = {
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        budget: req.body.budget,
        image: req.body.image,
        services: req.body.services
      }

      if (party.services && !checkPartyBudget(party.budget, party.services)) {
        res.status(406).json({ msg: "O seu orçamento é insuficiente." })
        return
      }
      const updateParty = await PartyModel.findByIdAndUpdate(id, party)

      if (!updateParty) {
        res.status(404).json({ msg: "Festa não encontrada." })
      }
      res.status(200).json({ party, msg: "Atualizado com sucesso" })
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = partyController;