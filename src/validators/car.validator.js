import joi from "joi";

const carValidator = joi.object({
    model:joi.string().regex(/^[a-zA-ZА-яіІїЇ]{1,20}$/).messages({
        'string.pattern.base': 'Model може містити лише букви, мінімум 1 і максимум 20 символів'
    }),
    // model: joi.string().min(1).max(20).required().messages({
    //     'string.empty': 'Model can not be empty',
    //     'string.min': 'Model should contain min 1 symbol',
    //     'string.max': 'Model should contain max 20 symbols'
    // }),
    price: joi.number().min(0).max(1000000).required().messages({
        'number.empty': 'Price can not be empty',
        'number.min':'Price should be more than 0',
        'number.max': 'Price should be less than 1000000'
    }),
    year: joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.empty': 'Year can not be empty',
        'number.min':'Year should be more than 1990',
        'number.max': 'Year can not be more than 2022'
    })
});

export {carValidator};