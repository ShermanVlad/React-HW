import Joi
    from "joi";

const postValidator = Joi.object({

    userId: Joi.number().min(1).max(10).required().messages({
        "string.min": "UserId must be bigger than 0",
        "string.max": "UserId must be smaller than 10"
    }),
    title: Joi.string().pattern(/^[a-zA-Z ]*$/).min(1).max(50).required().messages({
        "string.min": "Your title must be longer than 0 letters",
        "string.max": "Your title must be shorter than 50 letters",
        "string.pattern.base": "Your title must contain only letters"
    }),
    body: Joi.string().pattern(/^[a-zA-Z !?,.\-:;'%]*$/).required().messages({
        "string.pattern.base":"Only letters and punctuations without numbers"
    })
})

export default postValidator