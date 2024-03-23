import ThriveInCategoryService from '#models/thrive_in_category_service'
import ThriveInService from '#models/thrive_in_service'
import db from '@adonisjs/lucid/services/db'

export default class ThriveInServiceService {
  getAllServiceCategory = async (): Promise<ThriveInCategoryService[]> => {
    try {
      const categories: ThriveInCategoryService[] = await ThriveInCategoryService.all()
      return categories
    } catch (error) {
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
      throw error
    }
  }

  getServiceById = async (serviceId: string): Promise<ThriveInService | null> => {
    try {
      const service: ThriveInService | null = await ThriveInService.findBy('service_id', serviceId)
      return service
    } catch (error) {
      throw error
    }
  }

  getAllServicePorfolio = async()
}
