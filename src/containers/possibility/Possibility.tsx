import possibilityImage from "../../assets/possibility.png";
import "./possibility.css";

const Possibility = () => (
  <div className="gpt__possibility section__padding" id="possibility">
    <div className="gpt__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt__possibility-content">
      <h4>立即申请，开启智能之旅</h4>
      <h1 className="gradient__text">可能性将超乎你的想象</h1>
      <p>
        GPT通过自然语言处理技术，能够帮助你实现自动化写作、智能问答、内容生成等多种应用场景。无论是工作还是生活，GPT都能为你带来全新的体验。
      </p>
      <h4>现在就加入，体验未来科技</h4>
    </div>
  </div>
);

export default Possibility;
