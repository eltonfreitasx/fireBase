import styled from 'styled-components'

export const AdminContainer = styled.main`
    & {
        display:flex;
        align-items: center;
        flex-direction: column;
        margin-top: 48px;

        h1 {
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
        }
    }

        button {
        height: 36px;
        border: 0;
        background-color: #3366ff;
        color: #fff;
        cursor: pointer;
    }

    textarea {
        margin-bottom: 12px;
        border: 0;
        height: 90px;
        resize: none;
        border-radius: 4px;
        padding: 5px 0 0 6px;
    }

    textarea:focus {
        outline: none;
    }
}
`

export const BtnRegister = styled.button`
    margin-bottom: 28px;
`

export const List = styled.article`
    width: 90%;
    max-width: 600px;
    flex-direction: column;
    background-color: rgba(18,18,18, 0.30);
    border-radius: 4px;
    margin-bottom: 12px;
    justify-content: center;
    padding: 14px 8px;


    div button:last-child {
        color: #ffcc23;
        background-color: transparent;
        transition: .7s;
        cursor: pointer;

        &:hover {
            color: #fff;
            background-color: #ffcc23;
        }
    }

    p {
        margin-bottom: 8px;
    }

    button {
        margin-right: 8px;
        border: 0;
        border-radius: 4px;
        padding: 4px;
        transition: .7s;
        cursor: pointer;

        &:hover {
            background: green;
        }
    }
`

export const Exit = styled.button`
    position: absolute;
    top: 6%;
    left: 4%;
    cursor: pointer;
    width: 2.5rem;
    border-radius: 30px;
    transition: .7s;
    font-weight: bold;

    &:hover {
        background-color: red;
    }

`
