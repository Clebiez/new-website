import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.blue};
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    padding: 0.5rem;
    margin: 1rem;
    border: 2px solid ${({ theme }) => theme.blue};
    -webkit-transition: color 0.2s;
    border-radius: 6px;
    font-size: 1.1rem;
    &:hover {
        color: ${({ theme }) => theme.green};
        border-color: ${({ theme }) => theme.green};
    }
`;

export default ({ to, children }) => (
    <StyledLink to={to}>{children}</StyledLink>
);
