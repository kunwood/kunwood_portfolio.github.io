import React from "react";
import HTML from "../assets/img/HTML.png";
import JS from "../assets/img/JS.png";
import CSS from "../assets/img/CSS.png";
import REACT from "../assets/img/REACT.png";
import GIT from "../assets/img/GIT.png";
import GITHUB from "../assets/img/GITHUB.png";
import NODE from "../assets/img/NODE.png";
import BOOTSTRAP from "../assets/img/BOOTSTRAP.png";
import JAVA from "../assets/img/JAVA.png";
import MYSQL from "../assets/img/MYSQL.png";
import SPRINGBOOT from "../assets/img/SPRINGBOOT.png";
import AWS from "../assets/img/AWS.png";
import PHOTOSHOP from "../assets/img/PHOTOSHOP.png";
import ILLUSTRATOR from "../assets/img/ILLUSTRATOR.png";


import {skillText} from "../constants"

const Skill = () => {
  return (
    <section id="skill">
      <div className="skill__inner">
        <h2 className="skill__title">
          This is Me <em>&nbsp;&nbsp;디테일&nbsp;&nbsp; 끈기&nbsp;&nbsp; 
            <ul>
              <div className="imgBox">
              <li>
                <img src={HTML} alt="" />
              </li>
              <li>
                <img src={JS} alt="" />
              </li>
              <li>
                <img src={CSS} alt="" />
              </li>
              <li>
                <img src={REACT} alt="" />
              </li>
              <li>
                <img src={BOOTSTRAP} alt="" />
              </li>
              <li>
                <img src={NODE} alt="" />
              </li>
              <li>
                <img src={GIT} alt="" />
              </li>
              <li>
                <img src={GITHUB} alt="" />
              </li>
              <li>
                <img src={JAVA} alt="" />
              </li>
              <li>
                <img src={MYSQL} alt="" />
              </li>
              <li>
                <img src={SPRINGBOOT} alt="" />
              </li>
              <li>
                <img src={AWS} alt="" />
              </li>
              <li>
                <img src={PHOTOSHOP} alt="" />
              </li>
              <li>
                <img src={ILLUSTRATOR} alt="" />
              </li>
              </div>
            </ul>
            </em>
        </h2>
        <div className="skill__desc">
          {skillText.map((skill, key) => (
          <div key={key}>
            <span>{key+1}</span>
            <h3>{skill.title}</h3>
            <p>
              {skill.desc}
            </p>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
