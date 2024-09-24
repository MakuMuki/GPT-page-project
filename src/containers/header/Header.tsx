import ai from "../../assets/ai.png";
import people from "../../assets/people.png";

import "./header.css";

const Header = () => {
  return (
    <div className="gpt__header section__padding" id="home">
      <div className="gpt__header-content">
        <h1 className="gradient__text">让我们用GPT做一些神奇的事情吧！</h1>
        <p>
          GPT是一种基于Transformer架构的预训练语言模型，由OpenAI开发。它通过大规模数据训练，能生成高质量文本、回答问题、翻译语言等，广泛应用于对话AI、内容创作等领域。核心特点是强大的上下文理解和生成能力。
        </p>
        <div className="gpt__header-content__input">
          <input type="email" name="" id="" placeholder="电子邮箱地址" />
          <button type="button">开始吧</button>
        </div>

        <div className="gpt__header-content__people">
          <img src={people} alt="people" />
          <p>在最近的24小时内有1600+人已请求使用</p>
        </div>
      </div>
      <div className="gpt__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
