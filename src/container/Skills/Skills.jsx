import React from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";

import { AppWrap, MotionWrap } from "../../wrapper";

import "./Skills.scss";

const skills = [
    {
        name: "Blockchain",
        bgColor: `#eee`,
        icon: images.blockchain,
    },
    {
        name: "Solidity",
        bgColor: `#eee`,
        icon: images.solidity,
    },
    {
        name: "MySQL",
        bgColor: `#eee`,
        icon: images.MySQL,
    },
    {
        name: "JavaScript",
        bgColor: `#eee`,
        icon: images.javascript,
    },
    {
        name: "Typescript",
        bgColor: `#eee`,
        icon: images.typescript,
    },
    {
        name: "NodeJs",
        bgColor: `#eee`,
        icon: images.nodejs,
    },
    {
        name: "React",
        bgColor: `#eee`,
        icon: images.react,
    },
    {
        name: "Redux",
        bgColor: `#eee`,
        icon: images.redux,
    },
    {
        name: "Html",
        bgColor: `#eee`,
        icon: images.html,
    },
    {
        name: "Css",
        bgColor: `#eee`,
        icon: images.css,
    },
    {
        name: "Linux",
        bgColor: `#eee`,
        icon: images.linux,
    },
    {
        name: "Amazon RDS",
        bgColor: `#eee`,
        icon: images.rds,
    },
    {
        name: "Amazon EC2",
        bgColor: `#eee`,
        icon: images.ec2,
    },
    {
        name: "Amazon S3",
        bgColor: `#eee`,
        icon: images.s3,
    },
    {
        name: "github",
        bgColor: `#eee`,
        icon: images.github,
    },
    {
        name: "notion",
        bgColor: `#eee`,
        icon: images.notion,
    },
];

const experiences = [
    {
        year: 2013,
        month: "03",
        works: [{ name: "세종대학교 컴퓨터 공학과 입학" }],
    },
    {
        year: 2017,
        works: [{ name: "소셜미디어 매니지먼트 소프트웨어 융합과 연계전공" }],
    },
    {
        year: 2019,
        works: [
            {
                name: "창의 융합 콘서트 SW연계전공 융합 프로젝트 발표회 장려상 수여",
            },
        ],
    },
    {
        year: 2022,
        works: [
            { name: "세종대학교  졸업" },
            { name: "블록체인 기반 핀테크 및 응용 SW 개발자 양성과정 수강" },
        ],
    },
];

const Skills = () => {
    return (
        <>
            <h2 className="head-text">Skills & Experiences</h2>

            <div className="app__skills-container">
                <motion.div className="app__skills-list">
                    {skills.map((skill) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__skills-item app__flex"
                            key={skill.name}
                        >
                            <div
                                className="app__flex"
                                style={{ backgroundColor: skill.bgColor }}
                            >
                                <img src={skill.icon} alt={skill.name} />
                            </div>
                            <p className="p-text">{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
                <div className="app__skills-exp">
                    {experiences.map((experience) => (
                        <motion.div
                            className="app__skills-exp-item"
                            key={experience.year}
                        >
                            <div className="app__skills-exp-year">
                                <p className="bold-text">{experience.year}</p>
                            </div>
                            <motion.div className="app__skills-exp-works">
                                {experience.works.map((work) => (
                                    <>
                                        <motion.div
                                            whileInView={{ opacity: [0, 1] }}
                                            transition={{ duration: 0.5 }}
                                            className="app__skills-exp-work"
                                            data-tip
                                            data-for={work.name}
                                            key={work.name}
                                        >
                                            <h4 className="bold-text">
                                                {work.name}
                                            </h4>
                                        </motion.div>
                                    </>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AppWrap(
    MotionWrap(Skills, "app__skills"),
    "skills",
    "app__whitebg"
);
