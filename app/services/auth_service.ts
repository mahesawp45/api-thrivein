import Admin from '#models/admin'
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
}
