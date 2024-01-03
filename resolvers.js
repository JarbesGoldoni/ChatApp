import pc from '@prisma/client'
import { AuthenticationError } from 'apollo-server'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const prisma = new pc.PrismaClient()

const resolvers = {
  Query: {},
  Mutation: {
    signupUser: async (_, { userNew }) => {
      const user = await prisma.user.findUnique({
        where: { email: userNew.email },
      })
      if (user) {
        throw new AuthenticationError('User already exists with that email')
      }
      const hashedPassword = await bcrypt.hash(userNew.password, 10)
      const newUser = await prisma.user.create({
        data: {
          ...userNew,
          password: hashedPassword,
        },
      })
      return newUser
    },
    signinUser: async (_, { userSignin }) => {
      const user = await prisma.user.findUnique({
        where: { email: userSignin.email },
      })
      if (!user) {
        throw new AuthenticationError('Email or password is invalid #00')
      }
      const doMatch = await bcrypt.compare(userSignin.password, user.password)
      if (!doMatch) {
        throw new AuthenticationError('Email or password is invalid #01')
      }
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET)
      return { token }
    },
  },
}

export default resolvers
