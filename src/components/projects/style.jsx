import styled from "styled-components";

export const Projects_Style = styled.section`
    width: 100%;
    padding: 8rem 0;
    position: relative;
    
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

        margin: 0 auto;
        margin-bottom: 4rem;
        
    }

    & > div{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 2rem;

        div{
            padding: 2rem;
            border-radius: 1rem;
            background-color: var(--card);
            text-align: center;
            cursor: pointer;

            p{  
                font-size: 1.8rem;
                font-weight: 600;
                margin-bottom: 2rem;
            }

            img{
                width: 100%;
                border-radius: .5rem;
            }
        }
    }
    .modal{
        width: 100%;
        height: 100dvh;
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        padding: 0 2rem;
        div{
            cursor: default;
            width: 100%;
            max-width: 68rem;
            position: relative;
            
            .close{
                width: 3rem;
                height: 3rem;
                border-radius: 3rem;
                border: none;
                background-color: #b01c1c;
                color: var(--white);
                position: absolute;
                top: -1.5rem;
                right: -1.5rem;
                cursor: pointer;
            }
            h2{
                font-size: 4rem;
                margin-bottom: 2rem;
            }
            p{
                text-align: left;
                font-size: 1.6rem;
                font-weight: 400;
                margin-top: 1rem;

            }
            div{
                display: flex;
                justify-content: center;
                gap: 2rem;

                a{
                    width: 15rem;
                    height: 4.5rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: .6rem;
                    text-decoration: none;
                    color: var(--white);
                    background: var(--gradient);
                }
                a:first-of-type{
                   
                    background: transparent;
                    border: 2px solid var(--white);
                }
            }
        }

    }
    @media (max-width: 900px){
        padding: 4rem 0;
        & > div{
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr 1fr 1fr;
        }
    }
`;