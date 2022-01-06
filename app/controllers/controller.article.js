require('../models/model.author');
require('../models/model.category');
const { textToSlug } = require('../../utils/text-to-slug');
const ArticleModel = require('../models/model.article');

class ArticleController {
  // [GET] Get all articles
  getAll = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    try {
      const totalRows = await ArticleModel.count();
      const article = await ArticleModel.find()
        .populate(['author', 'category'])
        .sort({ created_at: -1 })
        .skip(page > 0 ? (page - 1) * limit : 0)
        .limit(limit);
      if (article.length <= 0) return res.status(204).json();
      return res.status(200).json(article);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  // [GET] Get once article by condition
  getOnce = async (req, res) => {
    const { id } = req.params;
    try {
      const article = await ArticleModel.findOne({ _id: id }).populate([
        'author',
        'category',
      ]);

      return article ? res.status(200).json(article) : res.status(400).json([]);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  // [GET] Get all article by name
  getByName = async (req, res) => {
    const { query } = req.query;
    try {
      const article = await ArticleModel.find({
        slug: { $regex: '.*' + query + '.*' },
      });
      if (article.length <= 0) return res.status(204).json([]);
      return res.status(200).json(article);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  // [GET] Get aritcle if banner active is true
  getArticleBanner = async (req, res) => {
    try {
      const acticleBannerActive = await ArticleModel.find({
        banner_active: true,
      }).select('title introduce thumbnail banner_active slug');
      return res.status(204).json(acticleBannerActive);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  // [POST] Add new article
  create = async (req, res) => {
    const {
      title,
      introduce,
      content,
      time_to_read,
      category,
      author,
      thumbnail,
      banner_active = false,
    } = req.body;
    let { slug = textToSlug(title) } = req.body;
    const article = ArticleModel({
      slug,
      title,
      thumbnail,
      banner_active,
      introduce,
      content,
      time_to_read,
      category,
      author,
    });
    try {
      const response = await ArticleModel.create(article);
      return res.status(201).json(response);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  // [PUT] Update article by condition
  update = async (req, res) => {
    const { id } = req.params;
    const { title, introduce, content, thumbnail } = req.body;
    let { slug = textToSlug(title) } = req.body;
    const article = {
      slug,
      title,
      thumbnail,
      introduce,
      content,
    };
    try {
      const response = await ArticleModel.updateOne({ _id: id }, article);
      return res.status(201).json(response);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  // [DELETE] Delete article by condition
  delete = async (req, res) => {
    const { id } = req.params;
    try {
      if (!id) throw new Error('Please provide id param 🚩');
      const response = await ArticleModel.deleteOne({ _id: id });
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json(error);
    }
  };
}

module.exports = new ArticleController();
