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
}
