import { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";

const Menu = () => (
  <>
    <p>
      <a href="#home">首页</a>
    </p>
    <p>
      <a href="#GPT">GPT是什么</a>
    </p>
    <p>
      <a href="#openai">Open AI</a>
    </p>
    <p>
      <a href="#case">示例</a>
    </p>
    <p>
      <a href="#library">库</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt__navbar">
      <div className="gpt__navbar-links">
        <div className="gpt__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt__navbar-sign">
        <p>登录</p>
        <button type="button">注册</button>
      </div>
      <div className="gpt__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt__navbar-menu_container scale-up-center">
            <div className="gpt__navbar-menu_container-links">
              <Menu />
              <div className="gpt__navbar-menu_container-links-sign">
                <p>登录</p>
                <button type="button">注册</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
