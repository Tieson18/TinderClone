import dbCardsModel from "../models/dbCards.model.js";
import { response } from "../utils/helper.js";

const handleCardCreate = async (req, res) => {
  const dbCard = req.body;
  try {
    const data = await dbCardsModel.create(dbCard);
    res.status(201).send(response("Card created successfully", data, true));
  } catch (e) {
    res.status(e.code || 500).send(response(e.message, null, false));
  }
};

const handleGetCards = async (req, res) => {
  try {
    const data = await dbCardsModel.find();
    res.status(200).send(response("Cards retrieved successfully", data, true));
  } catch (e) {
    res.status(500).send(response(e.message, null, false));
  }
};

export { handleCardCreate, handleGetCards };
