import React from "react";
import { images } from "../../constants";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";

const About = () => {
    return (
        <>
            <h2 className="head-text">진취적인 웹/블록체인 개발자</h2>

            <div className="app__profiles">
                <div className="app__profile-item">
                    <img src={images.mylaptop} alt="my_laptop_img" />
                    <div className="app__profile-item-title">
                        개발자 최현석을 소개합니다.
                    </div>
                    <div className="app__profile-item-content">
                        <ul className="app__profile-item-content-wrapper">
                            <li>
                                <div className="app__profile-item-content-list-title">
                                    다양한 협업 경험
                                </div>
                                <ul style={{ paddingLeft: 0 }}>
                                    <ul className="app__profile-item-content-list-content">
                                        게스트하우스 예약, 라즈베리파이 이용한
                                        주거침입 알림 서비스, 차별 된 환경 지킴
                                        SNS 등 다양한 협업 프로젝트 경험
                                    </ul>
                                </ul>
                            </li>
                            <li>
                                <div className="app__profile-item-content-list-title">
                                    새로운 기술 적용에 두려움이 없습니다
                                </div>
                                <ul style={{ paddingLeft: 0 }}>
                                    <ul className="app__profile-item-content-list-content">
                                        블록의 합의알고리즘, 트랜잭션, 지갑을
                                        직접 구현
                                        <br />
                                        NFT 프로젝트를 진행하며 실제 NFT 발행 및
                                        해당 NFT를 거래할 수 있는 웹페이지 구현
                                    </ul>
                                </ul>
                            </li>
                            <li>
                                <div className="app__profile-item-content-list-title">
                                    사용자 친화적 지향
                                </div>
                                <ul style={{ paddingLeft: 0 }}>
                                    <ul className="app__profile-item-content-list-content">
                                        사무 보조, 영화관 등 많은 서비스직
                                        아르바이트를 하며 손님 입장에서 생각하며
                                        일을 하는 게 습관화 <br />
                                        개발 하면서 최대한 사용자 입장에서
                                        생각하려고 노력 중
                                    </ul>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="app__profile-item">
                    <img src={images.myhandsup} alt="my_handsup_img" />
                    <div className="app__profile-item-title">
                        사람 최현석을 소개합니다.
                    </div>
                    <div className="app__profile-item-content">
                        <ul className="app__profile-item-content-wrapper">
                            <li>
                                <div className="app__profile-item-content-list-title">
                                    국제교류센터 산하 봉사 자치단체 Global Buddy
                                </div>
                                <ul style={{ paddingLeft: 0 }}>
                                    <ul className="app__profile-item-content-list-content">
                                        Global Buddy에서 외국인 유학생들과 상호
                                        간 문화 교류 및 다양한 활동을 통해
                                        한국에서의 타지 생활을 도와줌
                                        <br />
                                        보고행정팀으로 한국인과 외국인 간의 언어
                                        교류를 위한 한국어 클래스 관리
                                    </ul>
                                </ul>
                            </li>
                            <li>
                                <div
                                    className="app__profile-item-content-list-title"
                                    style={{ marginTop: "1rem" }}
                                >
                                    영어 봉사동아리 SELS
                                </div>
                                <ul style={{ paddingLeft: 0 }}>
                                    <ul className="app__profile-item-content-list-content">
                                        영어 봉사 동아리 SELS에서 총무, 부회장직
                                        직책 담당하며 동아리 자산 관리, 동아리원
                                        출결 관리, 동아리 활동에 대한 인원 분배
                                        관리 <br />
                                        해당 직책을 맡으며 그룹을 이끌어 가는
                                        것에 대한 책임감 향상
                                    </ul>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppWrap(
    MotionWrap(About, "app__about"),
    "aboutme",
    "app__whitebg"
);
