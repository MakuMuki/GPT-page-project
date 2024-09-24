import gptLogo from "../../assets/logo.svg";
import "./footer.css";

const Footer = () => (
  <div className="gpt__footer section__padding">
    <div className="gpt__footer-heading">
      <h1 className="gradient__text">你想比他人更快步入未来吗？</h1>
    </div>

    <div className="gpt__footer-btn">
      <p>申请访问</p>
    </div>

    <div className="gpt__footer-links">
      <div className="gpt__footer-links_logo">
        <img src={gptLogo} alt="gpt_logo" />
        <p>All Rights Reserved</p>
      </div>
      <div className="gpt__footer-links_div">
        <h4>相关链接</h4>
        <p>公司</p>
        <p>社交媒体</p>
        <p>会议</p>
        <p>联系我们</p>
      </div>
      <div className="gpt__footer-links_div">
        <h4>公司</h4>
        <p>团队 & 条件 </p>
        <p>隐私政策</p>
        <p>联系方式</p>
      </div>
      <div className="gpt__footer-links_div">
        <h4>保持联系</h4>
        <p>公司地址</p>
        <p>012-132567</p>
        <p>info@company.net</p>
      </div>
    </div>

    <div className="gpt__footer-copyright">
      <p>@{new Date().getFullYear()} GPT. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
