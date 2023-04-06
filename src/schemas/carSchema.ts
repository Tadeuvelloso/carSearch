import Joi from "joi";

export const carSchema = Joi.object({
    model: Joi.string().required(),
    plate: Joi.string().required(),
    category: Joi.string().required(),
    year: Joi.number().required(),
    brand: Joi.string().required(),
    price: Joi.number().required(),
    color: Joi.string().required()
})