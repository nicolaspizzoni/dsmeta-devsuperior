import styled from 'styled-components'

const NotificationContainer = styled.button`
    height: 45px;
    width: 45px;
    background: rgba(255, 107, 114, 0.1);
    border: 1px solid #ff6b72;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    img {
        width: 19px;
    }
`;

export {NotificationContainer}