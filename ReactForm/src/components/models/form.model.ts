import {z} from "zod"


export const schema = z.object({
    name: z.string().min(1,"el nombre es obligatorio"),
    email:z.string().email("correo invalido").min(1,"el correo es obligatorio"),
    password: z.string().min(6, "La contraseña debe tener almenos 6 caracteres"),
    confirmPassword:z.string().min(6, "la confirmacion debe tener al menos 6 caracteres"),
}).refine(data => data.password === data.confirmPassword,{
    message: "las contraseñas deben ser iguales",
    path:['confirmPassword']
})


export type FormValues = z.infer<typeof schema>;