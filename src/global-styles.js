import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        font: 14px "Nunito", Futura, sans-serif;
        margin: 0;
        color: var(--grey);
    }

    ol,
    ul {
        padding-left: 30px;
    }

    @keyframes addCount{
        to{
            transform: scale(1);
        }
        from{
            transform: scale(1.1);
        }
    }
`;

const globalColors = {
    darked: '#222831',
    greyDark: '#393e46',
    greyA10: '#eeeeee10',
    greyE: '#EEE',
    greyD: '#DDD',
    orange: '#D65A31',
    navy: '#22577E',
    greenLight: '#F4FCD9',
    greenDark: '#1E5128'
}

export {GlobalStyle, globalColors};