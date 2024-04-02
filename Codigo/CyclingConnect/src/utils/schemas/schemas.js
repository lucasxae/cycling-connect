import {z} from 'zod';

export const loginSchema = z.object({
  email: z.string().email({message: 'Insira um e-mail válido.'}),
  password: z.string().min(8),
});

export const signUpSchema = z.object({
  cpf: z.string().length(11),
  name: z.string().min(3),
  email: z.string().email(),
  phone: z.string().length(11),
  gender: z.string(),
  birthDate: z.string().length(10),
  password: z.string().min(8),
});
