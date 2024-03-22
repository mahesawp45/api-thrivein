// import type { HttpContext } from '@adonisjs/core/http'

import BannerService from '#services/banner_service'
import { inject } from '@adonisjs/core'

@inject()
export default class BannersController {
  constructor(protected bannerService: BannerService) {}

  getAllBanner = async () => {
    const data = await this.bannerService.getAll()
    return data
  }
}
