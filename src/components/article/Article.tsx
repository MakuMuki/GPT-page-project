import "./article.css";

interface ArticleProps {
  imgUrl: string;
  date: string;
  text: string;
}

const Article = ({ imgUrl, date, text }: ArticleProps) => (
  <div className="gpt__blog-container_article">
    <div className="gpt__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>阅读全文</p>
    </div>
  </div>
);

export default Article;
