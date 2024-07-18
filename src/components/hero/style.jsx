import styled from "styled-components";
import desktop from "../../assets/background-desktop.png"
import mobile from "../../assets/background-mobile.png"

export const Hero_Style = styled.section`
    width: 100%;
    height: calc(100vh + 8rem);
    background-image: url(${desktop});
    background-size: auto 100%;
    background-position: right;
    background-repeat: no-repeat;
    margin-top: 6rem;
    position: relative;

    .content{
        width: min-content;
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 50%;
        left: 12rem;
        transform: translate(0, -80%);

        h2{
            font-size: 6.4rem;
            white-space: nowrap;
            font-weight: 900;
            background: -webkit-linear-gradient(0deg, #008CF8, #00BCEA);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        h4{
            font-size: 2.4rem;
            letter-spacing: .07rem;
            margin-top: -1rem
        }
        p{  
            margin-top: 2rem;
            font-weight: 200;
        }

        a{
            width: 15rem;
            height: 5rem;
            background-color: transparent;
            border: 2px solid white;
            border-radius: 1rem;
            color: white;
            font-size: 1.6rem;
            font-weight: 600;
            margin-top: 4rem;
            display: flex;
            align-items: center;
            justify-content:center;
            gap: 1rem;
            cursor: pointer;
        }
    }
    @media (max-width: 900px){
        width: 100%;
        background-image: url(${mobile});
        background-size: auto 50%;
        background-position: 70% 90%;
        background-repeat: no-repeat;
        margin-top: 6rem;
        position: relative;
        .content{
            top: 22rem;
            left: 50%;
            transform: translate(-50% , -50%);
            text-align: center;
            
            a{
                margin: 0 auto;
                margin-top: 4rem;
                cursor: pointer;
            }
        }
    }
    @media (max-width: 600px){
        .content{
            h2{
                font-size: 4rem;
            }
            h4{
                font-size: 1.44rem;
                letter-spacing: .07rem;
                margin-top: -0.5rem
            }
            p{  
                margin-top: 1rem;
            }
        }
    }
`;