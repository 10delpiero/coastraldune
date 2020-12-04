import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from '@fortawesome/free-solid-svg-icons'
import Slide from "./Slide";
import styled from "styled-components";
import icon7 from "../components/icons/icon7.jpg";
import img1 from "../components/imgs/1.jpg"
import img2 from "../components/imgs/2.jpg"
import img3 from "../components/imgs/3.jpg"
import img4 from "../components/imgs/4.jpg"
import img5 from "../components/imgs/5.jpg"
import img6 from "../components/imgs/6.jpg"
import img7 from "../components/imgs/7.jpg"
import img8 from "../components/imgs/8.jpg"
import img9 from "../components/imgs/9.jpg"
import img10 from "../components/imgs/10.jpg"

const IMG = styled.img`
  width: 100%;
  height: 70vh;
`;
const exContainer = styled.div`
  width: 60%;
  overflow: hidden; 
`;
const Button = styled.button`
  all: unset;
  border: 1px solid white;
  padding: 0.5em 2em;
  color: white;
  border-radius: 10px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: white;
    color: #5ed1a1;
  }
`;
const SliderContainer = styled.div`
  width: 100%;
  display: flex; 
`;

const TOTAL_SLIDES = 9;
export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) { 
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);
return (
<div>
<div>
        <nav>
          <ul>
            <li>
              <Link to="/" 
              style={{ 
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            marginLeft: "30px",
            marginBottom: "10px",
            fontSize: 12,}}>
          <FontAwesomeIcon icon={faHome} color={"#ffffff"} size="3x" />
        </Link>
        </li>
        </ul>
        </nav>
        </div>
    <div className="pageTitleBack">
        <div className="pageTitle">
            <div className="in">
                <div style={{float: "left"}}><img width="100px" height="100px" src={icon7}></img></div>
                <div style={{float: "left", textAlign:"center", marginTop:"40px"}}>사구 식물 공부하기</div>
            </div>
        </div>
    </div>
    <div>
    <exContainer style={{float: "left", textAlign:"center", marginTop:"40px"}}>
      <SliderContainer ref={slideRef}>
        <Slide img={img1} />
        <Slide img={img2} />
        <Slide img={img3} />
        <Slide img={img4} />
        <Slide img={img5} />
        <Slide img={img6} />
        <Slide img={img7} />
        <Slide img={img8} />
        <Slide img={img9} />
        <Slide img={img10} />
      </SliderContainer>
      <Button onClick={prevSlide}>이전</Button>
      <Button onClick={nextSlide}>다음</Button>
    </exContainer>
    </div>
</div>
  );
}