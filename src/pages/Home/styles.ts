import styled from 'styled-components'

export const Container = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    width: 100%;

    h1 {
        font-size: 48px;
        margin-bottom: 8px;
    }    

    span {
        margin-bottom: 28px;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 90%;
        max-width: 600px;

        input {
            border: 0;
            margin-bottom: 12px;
            height: 36px;
            border-radius: 4px;
            padding: 0 8px;
        }

    button {
        height: 36px;
        border: 0;
        border-radius: 4px;
        background-color: #3366ff;
        color: #fff;
    }

    textarea {
        margin-bottom: 12px;
        border: 0;
        height: 90px;
        resize: none;
        border-radius: 4px;
    }

}
    a {
    color: #b4b8bb;
    text-decoration: none;
    margin: 14px 0;
    font-size: 14px;
}
`
