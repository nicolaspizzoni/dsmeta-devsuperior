import styled from 'styled-components'

export const HeaderContainer = styled.header`
    background: linear-gradient(180deg, #102347 0%, #181818 100%);
    height: 220px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HeaderContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 235px;
    }
    h1 {
        margin-top: 15px;
        font-size: 24px;
    }
    p {
        font-size: 14px;
    }
`