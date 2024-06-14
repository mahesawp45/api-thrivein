// import type { HttpContext } from '@adonisjs/core/http'

import ThriveInServiceService from '#services/thrive_in_service'
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class ThriveInServicesController {
  constructor(protected thriveInServiceService: ThriveInServiceService) {}

  createServiceCategory = async ({ request, response }: HttpContext) => {
    try {
      const categoryRequest = request.only([
        'category',
        'description',
        'icon_url',
        'title',
        'color',
      ])
      const category = await this.thriveInServiceService.createServiceCategory({
        ...categoryRequest,
      } as any)
      return response.status(201).json(category)
    } catch (error) {
      return response.status(400).json({ message: error.message })
    }
  }

  getAllServiceCategory = async ({ response }: HttpContext) => {
    try {
      const data = await this.thriveInServiceService.getAllServiceCategory()
      return response.status(200).json(data)
    } catch (error) {
      return response.status(400).json({ message: error.message })
    }
  }

  getAllServicesByCategory = async ({ params }: HttpContext) => {
    const data = await this.thriveInServiceService.getAllServicesByCategory(params.category)
    return data
  }

  getServiceById = async ({ params }: HttpContext) => {
    const data = await this.thriveInServiceService.getServiceById(params.service_id)
    return data
  }

  getAllServicePorfolio = async ({ params }: HttpContext) => {
    const data = await this.thriveInServiceService.getAllServicePorfolio(
      params.service_id,
      params.size,
      params.page
    )
    return data
  }
}
