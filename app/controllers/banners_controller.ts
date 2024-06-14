import type { HttpContext } from '@adonisjs/core/http'

import BannerService from '#services/banner_service'
import { inject } from '@adonisjs/core'

@inject()
export default class BannersController {
  constructor(protected bannerService: BannerService) {}

  getAllBanner = async ({ response }: HttpContext) => {
    try {
      const banners = await this.bannerService.getAllBanner()
      return response.status(201).json({
        banners,
      })
    } catch (error) {
      return response.status(400).json({ message: error.message })
    }
  }

  createBanner = async ({ request, response }: HttpContext) => {
    try {
      const bannerRequest = request.only(['banner_txt', 'banner_url', 'title'])
      const banner = await this.bannerService.createBanner({
        ...bannerRequest,
      } as any)
      return response.status(201).json(banner)
    } catch (error) {
      return response.status(400).json({ message: error.message })
    }
  }
}
