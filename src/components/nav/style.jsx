import styled from "styled-components";

export const Nav_Style = styled.nav`
    width: 100%;
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: #0D111E;
    border-bottom: 1px solid var(--line);
    a{
        cursor: pointer;
    }

    ul{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        transform: translate(0, 0);
    }
    li{
        font-weight: 300;
        cursor: pointer;
    }

    button{
        display: none;
        background-color: transparent;
        border: none;
        outline: none;
        color: var(--white);
        cursor: pointer;
    
    }
    @media (max-width: 900px){
        height: 8rem;
        padding: 0 2rem;
        ul{ 
            background-color: var(--card);
            border: 1px solid var(--line);
            border-bottom-left-radius: 1rem;
            border-bottom-right-radius: 1rem;
            width: 100%;
            flex-direction: column;
            position: absolute;
            top: 0;
            left: 0;
            gap: 0rem;
            z-index: 0;
            transform: translate(0, -100%);
            transition: .3s linear;
        }
        ul.activeMenu{
            transform: translate(0, 7.9rem);
        }
        ul a{
            width: 100%;
            height: 6rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom: 1px solid var(--line);
        }
        ul a:last-of-type{
            border: none;
        }
        button{
            display: flex;
        }
    }
`;