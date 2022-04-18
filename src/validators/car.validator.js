import joi from "joi";

const carValidator = joi.object({
    // model:joi.string().min(1).max(20).required().messages({
    //     'string.empty': 'Model не може бути пустим',
    //     'string.min': 'Model має містити мінімум 1 символ',
    //     'string.max': 'Model має містити максимум 20 символів'
    // }),
    model:joi.string().regex(/^[a-zA-ZА-яіІїЇ]{1,20}$/).messages({
        'string.pattern.base': 'Model може містити лише букви, мінімум 1 і максимум 20 символів'
    }),
    price:joi.number().min(0).max(1000000).required().messages({
        'number.empty': 'Price не може бути пустим',
        'number.min': 'Price має бути більшим за 0',
        'number.max': 'Price не може бути більшим за 1000000'
    }),
    year: joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.empty': 'Year не може бути пустим',
        'number.min': 'Year має бути більшим за 1990',
        'number.max': 'Year не може бути більшим за 2022'
    })
})

export {carValidator};