import CategoryRequest from '#models/request/category_request'
import ThriveInServiceRequest from '#models/request/service_request'
import ThriveInCategoryService from '#models/thrive_in_category_service'
import ThriveInPorfolioService from '#models/thrive_in_porfolio_service'
import ThriveInService from '#models/thrive_in_service'
import db from '@adonisjs/lucid/services/db'

export default class ThriveInServiceService {
  createServiceCategory = async (request: CategoryRequest): Promise<ThriveInCategoryService> => {
    try {
      const category: ThriveInCategoryService = await ThriveInCategoryService.create({
        category: request.category,
        color: request.color,
        description: request.description,
        icon_url: request.icon_url,
        title: request.title,
      })
      return category
    } catch (error) {
      console.error('Error Add Category:', error)
      throw error
    }
  }

  getAllServiceCategory = async (): Promise<ThriveInCategoryService[]> => {
    try {
      const categories: ThriveInCategoryService[] = await ThriveInCategoryService.all()
      return categories
    } catch (error) {
      console.error('Error Get All Category:', error)
      throw error
    }
  }

  createService = async (request: ThriveInServiceRequest): Promise<ThriveInService> => {
    try {
      const service: ThriveInService = await ThriveInService.create({
        category: request.category,
        price: request.price,
        description: request.description,
        icon_url: request.icon_url,
        title: request.title,
      })
      return service
    } catch (error) {
      console.error('Error Add Service:', error)
      throw error
    }
  }

  getAllServicesByCategory = async (category: string): Promise<ThriveInService[]> => {
    try {
      const services: ThriveInService[] = await db
        .from('thrive_in_services')
        .where('category', category)
      return services
    } catch (error) {
      console.error('Error Get Services:', error)
      throw error
    }
  }

  getServiceById = async (service_id: string): Promise<ThriveInService | null> => {
    try {
      const service: ThriveInService | null = await ThriveInService.findBy('service_id', service_id)
      return service
    } catch (error) {
      console.error('Error Get Service by Id:', error)
      throw error
    }
  }

  createPortfolio = async (request: ThriveInServiceRequest): Promise<ThriveInService> => {
    try {
      const service: ThriveInService = await ThriveInService.create({
        category: request.category,
        price: request.price,
        description: request.description,
        icon_url: request.icon_url,
        title: request.title,
      })
      return service
    } catch (error) {
      console.error('Error Add Service:', error)
      throw error
    }
  }

  getAllServicePorfolio = async (
    service_id: string,
    size: number,
    page: number
  ): Promise<ThriveInPorfolioService[] | null> => {
    try {
      const portofolio: ThriveInPorfolioService[] | null = await db
        .from('thrive_in_porfolio_services')
        .where('service_id', service_id)
        .paginate(page, size)
      return portofolio
    } catch (error) {
      console.error('Error Get Portfolio:', error)
      throw error
    }
  }
}
