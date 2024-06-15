import UserService from '#services/user_service'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class UsersController {
  constructor(protected userService: UserService) {}

  getAllUsers = async ({ response }: HttpContext) => {
    try {
      const users = await this.userService.getAllUser()
      return response.status(200).json(users)
    } catch (error) {
      return response.status(400).json({ message: error.message })
    }
  }
}
