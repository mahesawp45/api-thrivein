import Article from '#models/article'
import ArticleRequest from '#models/request/article_request'

export default class ArticleService {
  getAllArticle = async (): Promise<Article[]> => {
    try {
      const articles: Article[] = await Article.all()
      return articles
    } catch (error) {
      console.error('Error Add Article:', error)
      throw error
    }
  }

  createArticle = async (request: ArticleRequest): Promise<Article> => {
    try {
      const article: Article = await Article.create({
        content: request.content,
        banner_url: request.banner_url,
        title: request.title,
      })
      return article
    } catch (error) {
      console.error('Error Add Article:', error)
      throw error
    }
  }
}
