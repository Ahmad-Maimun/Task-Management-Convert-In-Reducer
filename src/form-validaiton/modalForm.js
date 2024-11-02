import * as yup from "yup";

export const formValidation = yup
    .object({
        title: yup.string().required().min(5),
        description: yup.string().required().min(5).max(500),
        assignTo: yup.string().required(),
        priority: yup.string().required(),
    })
    .required();