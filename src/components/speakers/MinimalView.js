import React from 'react';
import styled from 'styled-components';

export const Item = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 1rem;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.blueLight};
    border: 1px solid ${({ theme }) => theme.blueLight};
    padding: 0;
    padding-right: 8px;
`;

export const Profile = styled.img`
    border-radius: 50%;
    width: 25px;
    height: 25px;
    margin-right: 0.5rem;
`;

export const Name = styled.span`
    font-size: 0.8rem;
    text-align: left;
    padding: 0;
    color: ${({ theme }) => theme.white};
`;

export default ({ speaker }) => (
    <Item>
        <Profile src={`/speakers/${speaker.picture}`} />
        <Name>
            {speaker.firstName} {speaker.lastName}
        </Name>
    </Item>
);