import Joi from 'joi';

export const validateScanRequest = (req, res, next) => {
  const schema = Joi.object({
    targetUrl: Joi.string().uri().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      status: 'error',
      message: error.details[0].message,
    });
  }
  next();
};