import { Feature } from "../../components";
import "./introduction.css";

const Introduction = () => {
  return (
    <div className="gpt__intro section__margin" id="intro">
      <div className="gpt__intro-feature">
        <Feature
          title="GPT是什么"
          desc="GPT是一种基于Transformer架构的预训练语言模型，由OpenAI开发。它通过大规模数据训练，能生成高质量文本、回答问题、翻译语言等，广泛应用于对话AI、内容创作等领域。核心特点是强大的上下文理解和生成能力。"
        />
      </div>
      <div className="gpt__intro-heading">
        <h1 className="gradient__text">可能性，超乎你的想象</h1>
        <p>探索它的库</p>
      </div>
      <div className="gpt__intro-container">
        <Feature
          title="聊天机器人"
          desc="基于GPT的聊天机器人能够与用户进行自然流畅的对话，理解上下文，提供智能回复，广泛应用于客服、助手等场景。"
        />
        <Feature
          title="知识库"
          desc="GPT可用于构建智能知识库，自动整理、归纳和检索信息，帮助用户高效获取所需知识，实现智能问答和内容推荐。"
        />
        <Feature
          title="教育"
          desc="在教育领域，GPT能够辅助个性化学习，自动批改作业，生成教学内容，解答学生疑问，提升教学效率和学习体验。"
        />
      </div>
    </div>
  );
};

export default Introduction;
