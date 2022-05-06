import styled from "styled-components";

const StyledWrapperSetting = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
    height: 100%;
    .container-icon-home{
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .container-icon-home svg{
        cursor: pointer;
    }
`;

const StyledSetting = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem 0;
    height: 100%;

    .logo{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .container-logo{
        padding: 10px 10px 5px 10px;
        border-radius: 10px;
    }
`;

const StyledSocials = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 1rem;
    margin: 1rem 0;
`;

export {StyledWrapperSetting, StyledSetting, StyledSocials};