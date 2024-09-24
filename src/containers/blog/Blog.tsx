import Article from "../../components/article/Article";
import "./blog.css";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const Blog = () => (
  <div className="gpt__blog section__padding" id="blog">
    <div className="gpt__blog-heading">
      <h1 className="gradient__text">
        这里每天都有新鲜事发生，
        <br /> 我们为您呈现最新动态与深度解读。
      </h1>
    </div>
    <div className="gpt__blog-container">
      <div className="gpt__blog-container_groupA">
        <Article
          imgUrl={blog01}
          date="2025年9月26日"
          text="GPT与OpenAI引领未来，人工智能将如何改变我们的生活？"
        />
      </div>
      <div className="gpt__blog-container_groupB">
        <Article
          imgUrl={blog02}
          date="2025年9月26日"
          text="AI技术新突破，GPT-3助力企业数字化转型"
        />
        <Article
          imgUrl={blog03}
          date="2025年9月26日"
          text="深度解读：GPT在中文语境下的应用前景"
        />
        <Article
          imgUrl={blog04}
          date="2025年9月26日"
          text="人工智能与日常生活：你准备好迎接AI时代了吗？"
        />
        <Article
          imgUrl={blog05}
          date="2025年9月26日"
          text="技术观察：OpenAI推动全球AI创新浪潮"
        />
      </div>
    </div>
  </div>
);

export default Blog;
