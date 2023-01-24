import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :root {
        /*COLORS*/
        --white: #FFFFFF;
        --black: #000000;
        --blue: #2A106D;
        --grey: #FAFAFA;

        /*WEIGHT*/
        --normal: 400;
        --medium: 500;
        --bold:  700;

        /*FONT-SIZES*/
        --h1: 34pt;
        --h2: 16pt;
        --p1: 14pt;

        /*LINE-HEIGHT*/
        --l1: 41px;
        --l2: 19px;
        --l3: 17px;

        /*SPACES*/
        --s0: 64px;
        --s1: 40px;
        --s2: 32px;
        --s3: 24px;
        --s4: 16px;
        --s5: 12px;
        --s6: 8px;

        /*FONT*/
        --sans-serif: 'Inter', sans-serif;


        font-family: var(--sans-serif);
        font-size: var(--p1);
        font-weight: var(--normal);
        line-height: var(--l3);

        color-scheme: light dark;
        color: var(--black);
        background-color: var(--white);

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }

    body {
        margin: 0;
    }

    h1 {
        font-size: var(--h1);
        line-height: var(--l1);
        font-weight: 500;
        margin: 0;
    }

    h2 {
        font-size: var(--h2);
        line-height: var(--l2);
        font-weight: 700;
        margin: 0;
    }

    p {
        font-size: var(--p1);
        line-height: var(--l3);
        font-weight: 400;
        margin: 0;
    }
`

export default GlobalStyle
