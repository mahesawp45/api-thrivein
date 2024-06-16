// import type { HttpContext } from '@adonisjs/core/http'

import ItemService from '#models/item_service'
import ItemServiceRequest from '#models/request/item_service_request'
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
      const services = await this.thriveInServiceService.getAllServiceCategory()
      return response.status(200).json({ services })
    } catch (error) {
      return response.status(400).json({ message: error.message })
    }
  }

  createService = async ({ request, response }: HttpContext) => {
    try {
      const serviceRequest = request.only(['category', 'price', 'description', 'icon_url', 'title'])
      const service = await this.thriveInServiceService.createService({
        ...serviceRequest,
      } as any)
      return response.status(201).json(service)
    } catch (error) {
      return response.status(400).json({ message: error.message })
    }
  }

  getAllServicesByCategory = async ({ params, response }: HttpContext) => {
    try {
      const services = await this.thriveInServiceService.getAllServicesByCategory(params.category)
      return response.status(200).json({ 'list-services': services })
    } catch (error) {
      return response.status(400).json({ message: error.message })
    }
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

  createItemService = async ({ request, response }: HttpContext) => {
    try {
      const itemRequest = request.only(['service_id', 'image_url', 'price', 'title', 'qty'])
      const item = await this.thriveInServiceService.createItemService({
        ...itemRequest,
      } as any)
      return response.status(201).json(item)
    } catch (error) {
      return response.status(400).json({ message: error.message })
    }
  }
}
