import React from 'react';
import styled from 'styled-components';
import StyledLink from './common/Link';
import Link from 'gatsby-link';

const CaenCampContainer = styled.div`
    background-color: #fff;
    h2 {
        font-size: 2.5rem;
        @media (max-width: ${props => props.theme.mobileSize}) {
            font-size: 1.6rem;
        }
    }
    p {
        font-size: 1.3rem;
        line-height: 1.8rem;
        @media (max-width: ${props => props.theme.mobileSize}) {
            font-size: 1rem;
            line-height: 1.3rem;
        }
    }
`;
const Overview = styled.div`
    text-align: left;
    width: 100%;
    @media (max-width: ${props => props.theme.mobileSize}) {
        width: 95%;
    }
    a {
        color: ${({ theme }) => theme.black};
        font-weight: bold;
        -webkit-transition: color 0.2s;
        &:hover {
            color: crimson;
        }
    }
`;

const Stats = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
`;

const StatsItem = styled.div`
    color: ${({ theme }) => theme.black};
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    font-size: 1.1rem;
    span {
        padding-top: 0.5rem;
    }
`;

export default ({ talks, speakers, cccs }) => (
    <CaenCampContainer>
        <Stats>
            <StatsItem>
                <i className="fa fa-user-o fa-5x" aria-hidden="true" />
                <span>{speakers} speakers</span>
                <StyledLink to="/speakers">Tous les speakers</StyledLink>
            </StatsItem>
            <StatsItem>
                <i className="fa fa-bullhorn fa-5x" aria-hidden="true" />
                <span>{talks} talks</span>
                <StyledLink to="/talks">Tous les talks</StyledLink>
            </StatsItem>
            <StatsItem>
                <i className="fa fa-keyboard-o fa-5x" aria-hidden="true" />
                <span>{cccs} codings</span>
                <StyledLink to="/coding-caen-camp">Tous les codings</StyledLink>
            </StatsItem>
        </Stats>
        <Overview>
            <h2>Qu’est-ce que les CaenCamp.s ?</h2>
            <p>
                Ce sont des moments de rencontre organisés sur{' '}
                <strong>Caen</strong>, par et pour toutes les personnes qui
                aiment ou trouvent un intérêt dans le{' '}
                <strong>code et la programmation</strong>.<br />
                Une rencontre régulière est organisée{' '}
                <strong>chaque dernier mardi du mois</strong> avec un{' '}
                <Link to="/talks">sujet</Link> présenté par un{' '}
                <Link to="/speakers">speaker</Link> de la communauté, précédé
                par un{' '}
                <a href="https://medium.com/@ckoster22/why-your-company-should-be-doing-lightning-talks-c84b32e8f82b">
                    lightning talk
                </a>
                . Mais d{"'"}
                autres rencontres peuvent librement s{"'"}
                organiser, comme les{' '}
                <Link to="/coding-caen-camp">Coding Caen Camp (CCC)</Link>.
            </p>
            <p>
                Les CaenCamp.s ne vivent que par{' '}
                <Link to="/call-for-speakers">
                    l{"'"}
                    investissement des membres de sa communauté
                </Link>{' '}
                et ne dépendent d{"'"}
                aucune chapelle ni d{"'"}
                aucune entreprise. Nous tenons cependant à remercier le{' '}
                <a href="http://www.forum-digital.fr/">Forum Digital</a> d’avoir
                accueilli une majorité de nos rencontres, ainsi que{' '}
                <a href="https://www.hey-coworking.com/">HEY! coworking</a> pour
                nous permettre l'organisation des{' '}
                <Link to="/coding-caen-camp">CCC</Link>.
            </p>
            <p>
                Sans forme d{"'"}
                organisation formelle, les CaenCamp.s existent pourtant depuis{' '}
                <strong>2012</strong>.
            </p>
        </Overview>
    </CaenCampContainer>
);
