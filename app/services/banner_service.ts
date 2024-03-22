import Banner from '#models/banner'

export default class BannerService {
  getAll = async (): Promise<Banner[]> => {
    try {
      const banners: Banner[] = await Banner.all()
      return banners
    } catch (error) {
      throw error
    }
  }
}
