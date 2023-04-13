module.exports = (req, res, next) => {
  const { description } = req.body;

  if (!description) {
    return res.status(400).json(
      { message: 'O campo description é obrigatório' },
    );
  }

  const descriptionValues = ['createdAt', 'rating', 'difficulty'];
  if (!(descriptionValues[0] in description && descriptionValues[1] in description && descriptionValues[2] in description)) {
    return res.status(400).json(
      { message: 'Os campos createdAt, rating e difficulty são obrigatórios'}
    )
  }

  next();
};
