import User from '#models/user'

export default class UserService {
  getAllUser = async (): Promise<User[]> => {
    try {
      const users: User[] = await User.all()
      return users
    } catch (error) {
      console.error('Error Get All User:', error)
      throw error
    }
  }
}
