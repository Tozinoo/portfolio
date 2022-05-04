import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { images } from "../../constants";

import { AppWrap, MotionWrap } from "../../wrapper";

import "./Work.scss";

const myWorkData = [
    {
        imgUrl: images.nft,
        name: "nft_jpg",
        projectLink: "https://github.com/webwebweb3/musit_nft",
        codeLink: "https://github.com/webwebweb3/musit_nft",

        title: "음원 NFT 거래 사이트",
        description: "음원 NFT 발행 및 거래, 간단한 스트리밍",
        tags: ["NFT Project", "Web App", "BlockChain", "All"],
    },
    {
        imgUrl: images.spiderCoin,
        name: "spiderCoin_gif",
        projectLink: "https://github.com/BlockchainWeb3-0/SpiderCoin",
        codeLink: "https://github.com/BlockchainWeb3-0/SpiderCoin",

        title: "Blockchain",
        description:
            "블록체인 직접 구현해보기. 합의 알고리즘, 트랜잭션, 지갑 등",
        tags: ["BlockChain", "All"],
    },
    {
        imgUrl: images.voting,
        name: "voting_jpg",
        projectLink: "https://github.com/webwebweb3/voting",
        codeLink: "https://github.com/webwebweb3/voting",

        title: "Voting",
        description: "스마트 컨트랙트를 통해 투표 앱 만들어보기",
        tags: ["BlockChain", "All"],
    },
    {
        imgUrl: images.buymesushi,
        name: "buymesushi_img",
        projectLink: "https://github.com/buymesushi/BUYMESUSHI",
        codeLink: "https://github.com/buymesushi/BUYMESUSHI",

        title: "탄소 감축 장려 SNS",
        description: "SNS 인증을 통하여 환경 보호에 적극 참여",
        tags: ["Web App", "All"],
    },
    {
        imgUrl: images.onedayClass,
        name: "onedayClass_img",
        projectLink: "https://github.com/Tozinoo/Team-onedayclass",
        codeLink: "https://github.com/Tozinoo/Team-onedayclass",

        title: "Oneday Class",
        description: "원데이클래스 예약 서비스",
        tags: ["Web App", "All"],
    },
    {
        imgUrl: images.surfarty,
        name: "surfarty_img",
        projectLink: "https://github.com/Tozinoo/SurFaty-4MB",
        codeLink: "https://github.com/Tozinoo/SurFaty-4MB",

        title: "Surfarty Guest House",
        description: "게스트하우스 예약 서비스",
        tags: ["Web App", "All"],
    },
];

const Work = () => {
    const [works, setWorks] = useState([]);
    const [filterWork, setFilterWork] = useState([]);
    const [activeFilter, setActiveFilter] = useState("All");
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

    useEffect(() => {
        setWorks(myWorkData);
        setFilterWork(myWorkData);
    }, []);

    const handleWorkFilter = (item) => {
        setActiveFilter(item);
        setAnimateCard([{ y: 100, opacity: 0 }]);

        setTimeout(() => {
            setAnimateCard([{ y: 0, opacity: 1 }]);

            if (item === "All") {
                setFilterWork(works);
            } else {
                setFilterWork(works.filter((work) => work.tags.includes(item)));
            }
        }, 500);
    };

    return (
        <>
            <h2 className="head-text">
                My Creative <span>Portfolio</span> Section
            </h2>

            <div className="app__work-filter">
                {["All", "NFT Project", "BlockChain", "Web App"].map(
                    (item, index) => (
                        <div
                            key={index}
                            onClick={() => handleWorkFilter(item)}
                            className={`app__work-filter-item app__flex p-text ${
                                activeFilter === item ? "item-active" : ""
                            }`}
                        >
                            {item}
                        </div>
                    )
                )}
            </div>

            <motion.div
                animate={animateCard}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__work-portfolio"
            >
                {filterWork.map((work, index) => (
                    <div className="app__work-item app__flex" key={index}>
                        <div className="app__work-img app__flex">
                            <img src={work.imgUrl} alt={work.name} />
                            <motion.div
                                whileHover={{ opacity: [0, 1] }}
                                transition={{
                                    duration: 0.25,
                                    ease: "easeInOut",
                                    staggerChildren: 0.5,
                                }}
                                className="app__work-hover app__flex"
                            >
                                <a
                                    href={work.projectLink}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.9] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                        <AiFillEye />
                                    </motion.div>
                                </a>
                                <a
                                    href={work.codeLink}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.9] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                        <AiFillGithub />
                                    </motion.div>
                                </a>
                            </motion.div>
                        </div>

                        <div className="app__work-content app__flex">
                            <h4 className="bold-text">{work.title}</h4>
                            <p className="p-text" style={{ marginTop: 10 }}>
                                {work.description}
                            </p>

                            <div
                                className="app__work-tag app__flex"
                                style={{ fontWeight: 600 }}
                            >
                                <p className="p-text">{work.tags[0]}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </>
    );
};

export default AppWrap(
    MotionWrap(Work, "app__works"),
    "work",
    "app__primarybg"
);
