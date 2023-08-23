import { z } from 'zod';

const createCartZOdValidation = z.object({
  body: z.object({
    user: z.string({
      required_error: 'user is required(zod)',
    }),
    category: z.string({
      required_error: 'category is required(zod)',
    }),
    productName: z.string({
      required_error: 'productName is required(zod)',
    }),
  }),
});

export const CartValidation = { createCartZOdValidation };
