import styled from "styled-components";

export const About_Style = styled.section`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    padding: 8rem 0;

    &::before{
        content: '';
        width: 100dvw;
        border-bottom: 1px solid var(--line);
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50% , 0);
    }
    h2{
        width: fit-content;
        font-size: 5rem;
        font-weight: 800;
    }
    .grid-about{
        width: 100%;
        height: fit-content;
        display: grid;
        grid-template-columns: 25rem 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 2rem;

        div{
            background-color: var(--card);
            border-radius: 1rem;
            position: relative;
            padding: 4rem;
            display: flex;
            flex-direction: column;
            gap: 2rem;
            
            img{
                height: 40rem;
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translate(-50%, 0);
                z-index: 2;
            }

            p:first-of-type{
                font-size: 2rem;
                font-weight: 600;
            }
        }

        div:nth-child(1){
            grid-row-start: 1;
            grid-row-end: 3;
            grid-column-start: 1;
            grid-column-end: 2;
        }
        div:nth-child(3){
            p:nth-child(2),  p:nth-child(3){
                padding-left: 2rem;
                position: relative;

            }
            p:nth-child(2)::before,  p:nth-child(3)::before{
                content: '';
                width: 1rem;
                height: 1rem;
                display: inline-block;
                background: var(--gradient);
                border-radius: 1rem;
                position: absolute;
                top: 50%;
                left: 0;
                transform: translate(0 , -50%);
            }
        }
     
    }
    @media (max-width: 900px){
        padding: 4rem 0;
        h2{
            margin: 2rem auto;
        }
        .grid-about{
            display: flex;
            flex-direction: column;

            div{
                padding: 2rem;
            }
        }
        div:nth-child(1){
            margin-top: 15rem;
            height: 25rem;
            order: 2;
        }
        div:nth-child(2){
            order: 1;
        }
        div:nth-child(3){
            order: 3;
        }
    }
`;
