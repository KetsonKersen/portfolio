import styled from "styled-components";

export const Stacks_Style = styled.section`
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
    & > h2{
        margin: 0 auto;
        margin-bottom: 6rem;
    }
    & > div{
        width: 100%;
        display: flex;
        gap: 2rem;
        margin-bottom: 6rem;
        .card{
            width: 100%;
            background-color: var(--card);
            padding: 4rem;
            border-radius: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 2rem;
            position: relative;

            p{
                position: absolute;
                top: -3rem;
                left: 2rem;
            }

            img{
                width: 5rem;
            }
        }
        .card:last-of-type{
            p{  
                left: auto;
                right: 2rem;
            }
        }
    
    }
    @media (max-width: 1024px){
        padding: 4rem 0;
        & > div{
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 6rem;
            margin-bottom: 6rem;
            
            .card{
                padding: 2rem;
                flex-wrap: wrap;
                p{
                    position: absolute;
                    top: -3rem;
                    left: 50%;
                    transform: translate(-50%, 0)
                }

            }
            .card:last-of-type{
                p{  
                    left: 50%;
                    right: auto;
                }
            }
            .card:nth-child(1){
                width: 100%;
            }
        }

        & > div:last-of-type{
            margin-bottom: 0;
        }
    }

`;