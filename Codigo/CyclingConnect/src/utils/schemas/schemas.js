import {z} from 'zod';
import moment from 'moment';

export const loginSchema = z.object({
  email: z.string().email({message: 'Insira um e-mail válido.'}),
  password: z.string().min(8),
});

export const firstStepSignupSchema = z.object({
  cpf: z.string().min(11, {
    message: 'Campo obrigatório.',
  }),
  login: z.string().min(3, {
    message: 'Campo obrigatório.',
  }),
  phone: z.string().min(11, {
    message: 'Campo obrigatório.',
  }),
  gender: z.string().min(1, {
    message: 'Campo obrigatório.',
  }),
  birthdate: z
    .string()
    .min(1, {
      message: 'Campo obrigatório.',
    })
    .refine(value => {
      const dateValue = moment(value, 'DD/MM/YYYY');
      return (
        dateValue.isValid() &&
        dateValue.isBefore() &&
        dateValue.isAfter(moment('01/01/1900', 'DD/MM/YYYY'))
      );
    }, 'Insira uma data válida.'),
});

export const secondStepSignupSchema = z
  .object({
    email: z
      .string()
      .min(1, {
        message: 'Campo obrigatório.',
      })
      .email({
        message: 'Insira um e-mail válido.',
      }),
    password: z
      .string()
      .min(8, {
        message: 'A senha deve possuir ao menos 8 caracteres.',
      })
      .regex(/[a-z]/, {
        message: 'A senha deve possuir ao menos uma letra minúscula.',
      })
      .regex(/[A-Z]/, {
        message: 'A senha deve possuir ao menos uma letra maiúscula.',
      })
      .regex(/[0-9]/, {
        message: 'A senha deve possuir ao menos um número.',
      })
      .regex(/[!@#$%^&*]/, {
        message: 'A senha deve possuir ao menos um caractere especial.',
      }),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem.',
    path: ['confirmPassword'],
  });

export const signUpSchema = z.object({
  cpf: z.string().min(11, {
    message: 'Campo obrigatório.',
  }),
  login: z.string().min(3, {
    message: 'Campo obrigatório.',
  }),
  email: z
    .string()
    .min(1, {
      message: 'Campo obrigatório.',
    })
    .email({
      message: 'Insira um e-mail válido.',
    }),
  phone: z.string().min(11, {
    message: 'Campo obrigatório.',
  }),
  gender: z.string().min(1, {
    message: 'Campo obrigatório.',
  }),
  birthdate: z
    .string()
    .min(1, {
      message: 'Campo obrigatório.',
    })
    .refine(value => {
      const dateValue = moment(value, 'DD/MM/YYYY');
      return (
        dateValue.isValid() &&
        dateValue.isBefore() &&
        dateValue.isAfter(moment('01/01/1900', 'DD/MM/YYYY'))
      );
    }, 'Insira uma data válida.'),
  password: z
    .string()
    .min(8, {
      message: 'A senha deve possuir ao menos 8 caracteres.',
    })
    .regex(/[a-z]/, {
      message: 'A senha deve possuir ao menos uma letra minúscula.',
    })
    .regex(/[A-Z]/, {
      message: 'A senha deve possuir ao menos uma letra maiúscula.',
    })
    .regex(/[0-9]/, {
      message: 'A senha deve possuir ao menos um número.',
    })
    .regex(/[!@#$%^&*]/, {
      message: 'A senha deve possuir ao menos um caractere especial.',
    }),
});

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, {
        message: 'A senha deve possuir ao menos 8 caracteres.',
      })
      .regex(/[a-z]/, {
        message: 'A senha deve possuir ao menos uma letra minúscula.',
      })
      .regex(/[A-Z]/, {
        message: 'A senha deve possuir ao menos uma letra maiúscula.',
      })
      .regex(/[0-9]/, {
        message: 'A senha deve possuir ao menos um número.',
      })
      .regex(/[!@#$%^&*]/, {
        message: 'A senha deve possuir ao menos um caractere especial.',
      }),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem.',
    path: ['confirmPassword'],
  });
