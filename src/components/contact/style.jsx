import styled from "styled-components";

export const Contact_Style = styled.section`
    width: 100%;
    padding: 8rem 0;

    & > h2{
        margin: 0 auto;
    }
    & > p{
        margin: 5rem 0;
        text-align: center;
    }

    & > div{
        width: 100%;
        display: flex;
        gap: 2rem;

        & > div, form{
            background-color: var(--card);
            border-radius: 1rem;
            padding: 4rem 2rem;
        }
        & > div:first-of-type{
            text-align:center;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            
            p{
                margin-bottom: 1rem;
            }
            
            a{  
                width: 100%;
                height: 4.5rem;
                margin: 0 auto;
                border-radius: .6rem;
                display: flex;
                align-items:center;
                justify-content: left;
                padding-left: 35%;
                gap: 1rem;
                background: var(--gradient);
                text-decoration: none;
                color: white;
                text-align: left;
            }
        }
        & > form{
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 2rem;

            div{
                display: flex;
                gap: 2rem;
            }
            input, textarea{
                width: 100%;
                height: 4.5rem;
                padding: 1rem 2rem;
                background-color: var(--background);
                border: none;
                border-radius: .6rem;
                color: white;
                font-size: 1.6rem;
                outline: none;
            }
            textarea{
                resize: none;
                height: 13rem;
            }
            button{
                width: 100%;
                height: 4.5rem;
                border: none;
                border-radius: .6rem;
                background: var(--gradient);
                color: var(--white);
                font-size: 1.6rem;
                font-weight: 600;
                cursor: pointer;
            }
            
        }
        & > div:nth-of-type(2){
            width: 100%;
            position: relative;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 4rem;
            
            div{
                width: 10rem;
                height: 10rem;
                display: flex;
                align-items: center;
                justify-content: center;
                background: var(--gradient);
                border-radius: 100%;
                border: 6px solid white;

            }
        }
    }
    @media (max-width: 900px){
        & > div{
            width: 100%;
            display: flex;
            flex-direction: column;


            & > div{
                order: 2;
                a{  
                    justify-content: center;
                    padding-left: 0;
                }
            }
        }
    }
    @media (max-width: 600px){
        form > div{
            flex-direction: column;
        }
    }
`;