import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import { UserRegistrationObj } from '../../../types';

const prisma = new PrismaClient();
   
const hashPassword = async (providedPassword: string) => { //fn to encrypt the password before it's passed to DB
  const salt = await bcrypt.genSalt(8);
  return await bcrypt.hash(providedPassword, salt) as string;
};

const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only "POST" method is allowed' });
  }
  const credentials: UserRegistrationObj = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    repeatedPassword: req.body.repeatedPassword,
  };
  if (credentials.password === credentials.repeatedPassword) {
    const user = await prisma.user.findUnique({ //check if username already exists in DB
      where: {
        username: credentials.username,
      },
    });
    const email = await prisma.user.findUnique({ //check if an user by this email already exists in DB
      where: {
        email: credentials.email,
      },
    });
    if (user || email) { 
      return res.status(400).send({ message: 'This user already exists. Please choose a different username/email and try again.' });
    }
    try {
      const hashedPassword = await hashPassword(credentials.password); //encrypt the password before saving it to DB

      const newUser = await prisma.user.create({ //save user to DB
        data: {
          username: credentials.username,
          email: credentials.email,
          password: hashedPassword,
        },
      });
      return res.status(200).send(`User ${newUser.username} has been registered successfully.`);
    } catch (err) {
      return res.status(400).send({ message: err });
    }
  } else {
    return res.status(400).send({ message: "Passwords don't match!" });
  }
};

export default handle;