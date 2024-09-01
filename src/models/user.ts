import mongoose, { Document, Schema } from "mongoose"

interface IfavoritList {
  idMovie: string
  mediaType: string
}

export interface IUser extends Document {
  username: string
  email: string
  password: string
  favoritList:
}

const userSchema: Schema = new mongoose.Schema({


})

const User = mongoose.model<IUser>('User', userSchema)

export default User