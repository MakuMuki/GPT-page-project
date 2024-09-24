import type { ReactNode } from "react";
import "./feature.css";

const Feature = ({ title, desc }: { title: ReactNode; desc: ReactNode }) => {
  return (
    <div className="gpt__features-container__feature">
      <div className="gpt__features-container__feature-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="gpt__features-container__feature-text">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Feature;
