import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import HeroBackground from '../../static/heroBackground.jpeg';

const Wrapper = styled.div`
    width: 100%;
    height: 500px;
    background-image: url(${HeroBackground});
    background-size: cover;

`;

const GhostWrapper = styled.div`
    height: 100%;
    background-color: #00000060;

    h1 {
        padding-top: 50px;
        text-align: center;
        font-size: 3rem;
        color: white;
    }

    @media (max-width: ${props => props.theme.mobileSize}) {
        h1 {
            font-size: 2.5rem;
        }
    }
`;

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;


    @media (max-width: ${props => props.theme.mobileSize}) {
        display: block;
    }
`;

const TitleContent = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 50px;

    p {
        font-size: 2rem;
        color: white;
    }

    @media (max-width: ${props => props.theme.mobileSize}) {
        p {
            font-size: 1.5rem;
        }
    }
`;

const UpcomingEventWrapper = styled.div`
    width: 60%;
    margin-left: 80px;
    background-color: white;
    display: flex;
    justify-content: center;
    flex-direction: column;
    h2 {
        text-align: center;
        font-size: 2rem;
        color: white;
    }
    p {
        color: white;
    }
`;

export default () => (
    <Wrapper>
        <GhostWrapper>
            <h1>Les Caen camps</h1>
            <Content>
                <TitleContent>
                    <p>Communauté Caennaise de développeur-euses.</p>
                    <p>
                        Conférence chaque dernier mardi du mois accessible à toutes et à tous.
                    </p>
                </TitleContent>
                <UpcomingEventWrapper>
                    <h2></h2>
                    <p>Le 23 Octobre à 19h</p>
                    <p>Forum digital</p>
                </UpcomingEventWrapper>
            </Content>
        </GhostWrapper>
    </Wrapper>
);
