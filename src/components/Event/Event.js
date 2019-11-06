import React from 'react';
import styled from 'styled-components';
import MinimalView from '../speakers/MinimalView';

import locale from 'date-fns/locale/fr';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

const Wrapper = styled.div`
    width: 100%;
    max-width: 400px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 4px;
    box-shadow: 0px 0px 6px 0px ${({ theme }) => theme.grey};
`;

const Title = styled.h3`
    ${'' /* text-align: center; */}
    color: ${({ theme }) => theme.blueLight};
    margin: 0;
    padding: 5px;
    padding-left: 10px;
    font-size: 1.3rem;
`;

const Speakers = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: start;
`;

const Image = styled.img`
    width: 70px;
`;

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
`;

const Description = styled.p`
    text-align: justify;
`;

const Event = ({ speakers, picture, edition, title, description }) => {
    return (
        <Wrapper>
            <Title>
                #{edition} - {title}
            </Title>
            <Speakers>
                {speakers.map(speaker => (
                    <MinimalView speaker={speaker} />
                ))}
            </Speakers>
            <Content>
                <Image src={picture} />
                <Description>{description}</Description>
            </Content>
        </Wrapper>
    );
};

Event.propTypes = {};

export default Event;
