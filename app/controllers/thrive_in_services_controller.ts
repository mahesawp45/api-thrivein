// import type { HttpContext } from '@adonisjs/core/http'

import ThriveInServiceService from '#services/thrive_in_service'
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class ThriveInServicesController {
  constructor(protected thriveInServiceService: ThriveInServiceService) {}

  getAllServiceCategory = async () => {
    const data = await this.thriveInServiceService.getAllServiceCategory()
    return data
  }

  getAllServicesByCategory = async ({ params }: HttpContext) => {
    const data = await this.thriveInServiceService.getAllServicesByCategory(params.category)
    return data
  }

  getServiceById = async ({ params }: HttpContext) => {
    const data = await this.thriveInServiceService.getServiceById(params.serviceId)
    return data
  }
}
