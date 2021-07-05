import Joi from "joi";

const productSchema = Joi.object({
  title: Joi.string().required(),
  image: Joi.string().required(),
  old_price: Joi.number().required(),
  description: Joi.string().required(),
  discount_percent: Joi.number(),
  stock: Joi.number().required(),
  createdAt: Joi.date(),
});

export default productSchema;
