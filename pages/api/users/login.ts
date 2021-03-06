import { PrismaClient, User } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import jwt, { Secret } from 'jsonwebtoken';
import { UserLoginObj } from '../../../types';

const prisma = new PrismaClient();
   
const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only "POST" method is allowed' });
  }
  try { 
    const credentials: UserLoginObj = {
      email: req.body.email,
      password: req.body.password,
    };
    const user = await prisma.user.findUnique({
      where: {
        email: credentials.email,
      },
    }) as User;
    const match: boolean = await bcrypt.compare(credentials.password, user.password); //check if password is correct
    if (!match) { //send error if the provided password doesn't match the user's password
      res.status(400).json({ message: 'Username or password is incorrect!' });
    } else {
      const loginToken = jwt.sign({ id: user.id }, process.env.SECRET_VALUE_FOR_TOKEN as Secret); //generate a jwt token
      res.status(200).json({ token: loginToken, user: user });  
    }
  } catch (err){
    res.status(400).send({ message: 'Username or password is incorrect!' });
  }
};

export default handle;