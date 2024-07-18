import styled from "styled-components";

export const Cards_Style = styled.section`
    display: flex;
    gap: 1rem;
    .card{
        width: 100%;
        background-color: var(--white);
        border-radius: 1rem;
        color: var(--background);
        text-align: center;
        padding: 6rem 1rem 2rem 1rem;
        position: relative;
        margin-top: -10rem;

        .icon{
            width: 8rem;
            height: 8rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 1rem;
            background: var(--gradient);
            position: absolute;
            top: 0;
            left: 50%;
            transform: translate(-50% , -50%)
        }

        p:first-of-type{
            font-weight: 600;
            font-size: 1.8rem;
        }
    }
    @media (max-width: 1024px){
        flex-direction: column;
        gap: 6rem;
        margin-top: -10rem;
        .card{
            margin-top: 0rem;
        }
    }

`;