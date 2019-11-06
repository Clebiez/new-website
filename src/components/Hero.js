import React from 'react';
import styled from 'styled-components';
import HeroBackground from '../../static/heroBackground.jpeg';

const Wrapper = styled.div`
    width: 100%;
    height: 500px;
    background-image: url(${HeroBackground});
    background-size: cover;
    background-position: 100% 60%;
`;

const GhostWrapper = styled.div`
    height: 100%;
    width: 100%;
    background-color: #00000070;

    h1 {
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
    height: 100%;
    justify-content: center;
    @media (max-width: ${props => props.theme.mobileSize}) {
        flex-wrap: wrap;
    }
`;

const TitleContent = styled.div`
    height: 100%;
    display: flex;
    justify-content: start;
    flex-direction: column;
    padding: 20px;

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

const DiagonalDivider = styled.div`
    width: 0;
    left: 0;
    border-right: 100px solid white;
    border-top: 500px solid transparent;
`;

const UpcomingEventWrapper = styled.div`
    width: 60%;
    height: 100%;
    background-color: white;
    color: black;
    padding: 3rem;
    padding-top: 4rem;

    h2 {
        text-align: center;
        font-size: 2rem;
    }
    p {
    }
`;

export default ({ children }) => (
    <Wrapper>
        <GhostWrapper>
            <Content>
                <TitleContent>
                    <h1>Les Caen camps</h1>
                    <p>Communauté Caennaise de développeur-euses.</p>
                    <p>
                        Conférence chaque dernier mardi du mois accessible à toutes et à tous.
                    </p>
                </TitleContent>
                <DiagonalDivider />
                <UpcomingEventWrapper>
                    {children}
                </UpcomingEventWrapper>
            </Content>
        </GhostWrapper>
    </Wrapper>
);
