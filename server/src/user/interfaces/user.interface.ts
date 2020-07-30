import * as mongoose from 'mongoose';

export interface User extends mongoose.Document {
  name: string;

  password: string;

  email: string;

  addresses: [
    {
      addressName: string;
      city: string;
      country: string;
      address: string;
    },
  ];

  phone: number;

  shoppingCart: string[];

  validatePassword: (
    enteredPassword: string,
    hashedPassword: string,
  ) => Promise<boolean>;
}
