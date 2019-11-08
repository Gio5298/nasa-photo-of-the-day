import React from "react";
import styled from "styled-components";

const BodyDiv = styled.div`
  background-color: #7a7a7a;
`;

const NavBar = styled.div`
  background-color: rgb(91, 93, 172);
  border-bottom: 2px solid white;
`;

const SiteTitle = styled.h1`
  font-size: 2rem;
  text-align: center;
  padding: .6rem;
  color: white;
`;

const TopContent = styled.div`
  margin: 1.8rem .8rem 0 0;
`;

const ApodTitle = styled.h2`
  font-size:1.7rem;
  text align: center;
  margin: .5rem 0;
  color: white;
`;

const ApodDate = styled.h3`
  font-size:1.4rem;
  text align: center;
  margin: .5rem 0;
  color: white;
`;

const CenterContent = styled.div`
  display: flex;
`;

const SpaceImg = styled.img`
  width: 35%;
  height: 35%;
  margin: 1.5rem;
  border-radius: 5px;
  border: 2px solid black;
`;

const DescriptContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 3rem;
  margin: 5rem 0;
`;

const DescriptPara = styled.p`
  font-size: 1.2rem
`;

const PhotoCard = props => {
    return(
        <BodyDiv>
            <NavBar>
                <SiteTitle>NASA Astronomy Picture Of The Day</SiteTitle>
            </NavBar>
            <TopContent>
            <ApodTitle>{props.title}</ApodTitle>
            <ApodDate>{props.date}</ApodDate>
            </TopContent>
            <CenterContent>
            <SpaceImg src= {props.imgurl} alt="Nasa Astronomy Image"/>
            <DescriptContent>
                <h3>Description</h3>
                <DescriptPara>{props.explanation}</DescriptPara>
            </DescriptContent>
            </CenterContent>
        </BodyDiv>
    );
};

export default PhotoCard;