import Banner from '#models/banner'
import BannerRequest from '#models/request/banner_request'

export default class BannerService {
  getAllBanner = async (): Promise<Banner[]> => {
    try {
      const banners: Banner[] = await Banner.all()
      return banners
    } catch (error) {
      console.error('Error Add Banner:', error)
      throw error
    }
  }

  createBanner = async (request: BannerRequest): Promise<Banner> => {
    try {
      const category: Banner = await Banner.create({
        banner_txt: request.banner_txt,
        banner_url: request.banner_url,
        title: request.title,
      })
      return category
    } catch (error) {
      console.error('Error Add Banner:', error)
      throw error
    }
  }
}
