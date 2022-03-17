import { PrismaClient, User } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import jwt, { Secret } from 'jsonwebtoken';

const prisma = new PrismaClient();
   
const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only "POST" method is allowed' });
  }
  const token = req.body.token;
  try { 
    const authenticatedUser = await jwt.verify(token, process.env.SECRET_VALUE_FOR_TOKEN as Secret) as User;
    const user = await prisma.user.findUnique({ 
      where: { id: authenticatedUser.id  },
    }) as User;
    res.status(201).send(user);
  } catch (err){
    res.status(400).send({ message: 'Token is wrong' });
  }
};

export default handle;