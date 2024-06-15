import Admin from '#models/admin'
import RegisterUserRequest from '#models/request/register_user_request'
import User from '#models/user'
import hash from '@adonisjs/core/services/hash'

export default class AuthService {
  registerAdmin = async (adminDetails: { admin_name: string; password: string }) => {
    try {
      // Hash the password
      const hashedPassword = await hash.make(adminDetails.password)

      // Create a new admin record
      const admin = await Admin.create({
        admin_name: adminDetails.admin_name,
        password: hashedPassword,
      })

      return admin
    } catch (error) {
      console.error('Error registering admin:', error)
      throw new Error('Unable to register admin at this time.')
    }
  }

  loginAdmin = async (adminDetails: { admin_name: string; password: string }) => {
    try {
      const admin = await Admin.findByOrFail('admin_name', adminDetails.admin_name)

      // Verify the password
      await hash
        .verify(admin.password, adminDetails.password)
        .then((value) => value)
        .catch((error) => {
          throw error
        })

      // Generate a new token
      const token = await Admin.accessTokens.create(admin)

      return {
        user_id: admin.user_id,
        is_admin: admin.is_admin,
        admin_name: admin.admin_name,
        token: token.value?.release(),
        createdAt: admin.createdAt,
        updatedAt: admin.updatedAt,
      }
    } catch (error) {
      console.error('Error logging in admin:', error)
      throw new Error('Invalid credentials')
    }
  }

  registerUser = async (request: RegisterUserRequest): Promise<User> => {
    try {
      // Hash the password
      const hashedPassword = await hash.make(request.password)

      // Create a new user record
      const user = await User.create({
        name: request.name,
        password: hashedPassword,
        email: request.email,
        phone: request.phone,
        address: request.address,
        store_email: request.store_email,
        store_name: request.store_name,
        store_phone: request.store_phone,
        type: request.store_type,
      })

      // Generate a new token
      const token = await User.accessTokens.create(user)

      return <User>{
        user_id: user.user_id,
        name: user.name,
        password: hashedPassword,
        email: user.email,
        phone: user.phone,
        address: user.address,
        avatarUrl: user.avatarUrl,
        token: token.value?.release(),
        store_email: user.store_email,
        store_name: user.store_name,
        store_phone: user.store_phone,
        type: user.type,
      }
    } catch (error) {
      console.error('Error registering user:', error)
      throw new Error('Unable to register user at this time.')
    }
  }

  loginUser = async (userDetails: { email: string; password: string }) => {
    try {
      const user = await User.findByOrFail('email', userDetails.email)

      // Verify the password
      await hash
        .verify(user.password, userDetails.password)
        .then((value) => value)
        .catch((error) => {
          throw error
        })

      // Generate a new token
      const token = await User.accessTokens.create(user)

      return <User>{
        user_id: user.user_id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        token: token.value?.release(),
        store_email: user.store_email,
        store_name: user.store_name,
        store_phone: user.store_phone,
        type: user.type,
      }
    } catch (error) {
      console.error('Error logging in user:', error)
      throw new Error('Invalid credentials')
    }
  }
}
