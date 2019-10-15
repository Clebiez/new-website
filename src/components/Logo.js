import styled from 'styled-components';
import logo from '../../static/logoFondBlanc.png';

export default styled.img.attrs({
    src: logo,
})`
    display: block;
    position: absolute;
    left: 0.75rem;
    top: 0.75rem;
    bottom: 0;
    height: 3.5rem;
    @media (max-width: ${props => props.theme.mobileSize}) {
        height: 2rem;
        display: none;
    }
`;
