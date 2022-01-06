const AuthorModel = require('../models/model.author');

class AuthorController {
  // [GET] Get all authors
  getAll = async (req, res) => {
    try {
      const author = await AuthorModel.find();
      return res.status(200).json(author);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  // [GET] Get once author by condition
  getOnce = async (req, res) => {
    try {
      res.status(200).json([]);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  // [POST] Add new author
  create = async (req, res) => {
    const { id, name, avatar } = req.body;
    if (!(id, name, avatar)) throw new Error('Please fill all fileds 🚩');

    const author = AuthorModel({
      name,
      avatar,
    });

    try {
      const response = await AuthorModel.create(author);
      return res.status(201).json(response);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  // [PUT] Update author by condition
  update = async (req, res) => {
    try {
      return res.status(201).json([]);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  // [DELETE] Delete author by condition
  delete = async (req, res) => {
    try {
      return res.status(200).json([]);
    } catch (error) {
      return res.status(500).json(error);
    }
  };
}

module.exports = new AuthorController();
