import type { HttpContext } from '@adonisjs/core/http'

import { inject } from '@adonisjs/core'
import ArticleService from '#services/article_service'

@inject()
export default class ArticlesController {
  constructor(protected articleService: ArticleService) {}

  getAllArticle = async ({ response }: HttpContext) => {
    try {
      const articles = await this.articleService.getAllArticle()
      return response.status(201).json({
        articles,
        meta: { total_data: articles.length, total_page: 1, current_page: 1, data_per_page: 10 },
      })
    } catch (error) {
      return response.status(400).json({ message: error.message })
    }
  }

  createArticle = async ({ request, response }: HttpContext) => {
    try {
      const articleRequest = request.only(['content', 'title', 'banner_url'])
      const article = await this.articleService.createArticle({
        ...articleRequest,
      } as any)
      return response.status(201).json(article)
    } catch (error) {
      return response.status(400).json({ message: error.message })
    }
  }
}
