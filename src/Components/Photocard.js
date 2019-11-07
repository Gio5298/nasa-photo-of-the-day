import React from "react";
import styled from "styled-components";

const BodyDiv = styled.div`
  background-color: #7a7a7a;
`;

const NavBar = styled.div`
  background-color: rgb(91, 93, 172);
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
  width: 40%;
  height: 40%;
  margin: 1.5rem;
  border-radius: 5px;
`;

const DescriptContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 3rem;
  margin: 5rem 0;
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
                <p>{props.explanation}</p>
            </DescriptContent>
            </CenterContent>
        </BodyDiv>
    );
};

export default PhotoCard;