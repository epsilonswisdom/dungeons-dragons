const { Player } = require("../models")

const create = async (req, res) => {
  try {
    const player = await Player.create(req.body)
    res.status(200).json(player)
  } catch (error) {
    res.status(500).json(error)
  }
}
module.exports = {
  create,

}