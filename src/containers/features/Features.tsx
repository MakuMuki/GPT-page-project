import { Feature } from "../../components";
import "./features.css";

const featuresData = [
  {
    title: "智能写作",
    desc: "GPT能够帮助用户自动生成高质量的文章、报告、邮件等文本内容，大幅提升写作效率。",
  },
  {
    title: "代码生成",
    desc: "通过自然语言描述需求，GPT可以自动生成相应的代码片段，辅助开发者快速实现功能。",
  },
  {
    title: "多语言翻译",
    desc: "GPT支持多种语言之间的智能翻译，帮助用户跨语言沟通与内容创作。",
  },
  {
    title: "内容摘要",
    desc: "GPT能够对长文本进行智能摘要，提取关键信息，便于快速理解和阅读。",
  },
];

const Features = () => {
  return (
    <div className="gpt__features section__padding" id="openai">
      <div className="gpt__features-heading">
        <h1 className="gradient__text">
          你需要意识到，未来即是现在。今天起走进未来，让一切发生
        </h1>
        <p>现在试试看吧！</p>
      </div>
      <div className="gpt__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} desc={item.desc} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Features;
