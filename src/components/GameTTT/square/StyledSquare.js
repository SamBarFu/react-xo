import styled from 'styled-components';

const StyledSquare = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.isStripe ? 'var(--light-green)' : 'var(--grey-a10)' };
    border: none;
    font-size: 20px;
    width: 100%;
    height: 100%;
    aspect-ratio: 1/1;
    border-radius: 8px;
`;

export default StyledSquare;