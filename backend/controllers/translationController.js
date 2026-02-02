import { Translation } from "../models/Translation.js";

export const getTranslations = async (req, res) => {
  const { lang, page } = req.query;

  const translations = await Translation.find({ lang, page });

  const response = {};
  translations.forEach((t) => {
    response[t.key] = t.value;
  });

  res.json(response);
};
