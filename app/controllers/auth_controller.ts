import type { HttpContext } from '@adonisjs/core/http'
import AuthService from '#services/auth_service'
import { inject } from '@adonisjs/core'

@inject()
export default class AuthController {
  constructor(protected authService: AuthService) {}

  async registerAdmin({ request, response }: HttpContext) {
    try {
      const adminDetails = request.only(['admin_name', 'password'])
      const admin = await this.authService.registerAdmin(adminDetails)
      return response.status(201).json(admin)
    } catch (error) {
      return response.status(400).json({ message: error.message })
    }
  }
  async loginAdmin({ request, response }: HttpContext) {
    try {
      const adminDetails = request.only(['admin_name', 'password'])
      const admin = await this.authService.loginAdmin(adminDetails)
      return response.status(201).json(admin)
    } catch (error) {
      return response.status(400).json({ message: error.message })
    }
  }

  async registerUser({ request, response }: HttpContext) {
    try {
      const fields: string[] = [
        'name',
        'password',
        'email',
        'phone',
        'address',
        'store_email',
        'store_name',
        'store_phone',
        'store_type',
      ]

      const userDetails = request.only(fields)
      const user = await this.authService.registerUser({ ...(userDetails as any) })
      return response.status(201).json({
        store: {
          store_email: user.store_email,
          store_name: user.store_name,
          store_phone: user.store_phone,
          type: user.type,
        },
        user: {
          user_id: user.user_id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          address: user.address,
          token: user.token,
        },
      })
    } catch (error) {
      return response.status(400).json({ message: error.message })
    }
  }

  async loginUser({ request, response }: HttpContext) {
    try {
      const userDetails = request.only(['email', 'password'])
      const user = await this.authService.loginUser(userDetails)
      return response.status(201).json({
        store: {
          store_email: user.store_email,
          store_name: user.store_name,
          store_phone: user.store_phone,
          type: user.type,
        },
        user: {
          user_id: user.user_id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          address: user.address,
          token: user.token,
        },
      })
    } catch (error) {
      return response.status(400).json({ message: error.message })
    }
  }
}
