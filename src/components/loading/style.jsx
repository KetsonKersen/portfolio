import styled from "styled-components";

export const Loading_Component = styled.div`
    width: 100%;
    height: 100dvh;
    z-index: 9999;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #0D111E;

    #logo{
        height: 20%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50% , -50%) scale(100%);
        animation: logo 2s ease;
    }
    @keyframes logo {
        0%{
            stroke: white;
            stroke-width: 2px;
            fill-opacity: 0;
            transform: translate(-50% , -50%) scale(100%);
        }
        90.5%{
            stroke: white;
            stroke-width: 2px;
            fill-opacity: 0;
            transform: translate(-50% , -50%) scale(100%);
        }
        100%{
            transform: translate(-50% , -50%) scale(130%);
        }
    }
    #logo path:nth-of-type(1){
        stroke-dasharray: 800.2045288085938;
        stroke-dashoffset: 0;
        animation: draw1 1.8s ease-in;
    }
    @keyframes draw1 {
        0%{
            stroke-dashoffset: 800.2045288085938;
        }
        100%{
            stroke-dashoffset: 0;
        }
    }
    #logo path:nth-of-type(2){
        stroke-dasharray: 660.4281005859375;
        stroke-dashoffset: 0;
        animation: draw2 1.8s ease-in;
    }
    @keyframes draw2 {
        0%{
            stroke-dashoffset: 660.4281005859375;
        }
        100%{
            stroke-dashoffset: 0;
        }
    }
    #logo path:nth-of-type(3){
        stroke-dasharray: 466.15313720703125;
        stroke-dashoffset: 0;
        animation: draw3 1.8s ease-in;
    }
    @keyframes draw3 {
        0%{
            stroke-dashoffset: 466.15313720703125;
        }
        100%{
            stroke-dashoffset: 0;
        }
    }
    #logo path:nth-of-type(4){
        stroke-dasharray: 460.37811279296875;
        stroke-dashoffset: 0;
        animation: draw4 1.8s ease-in;
    }
    @keyframes draw4 {
        0%{
            stroke-dashoffset: 460.37811279296875;
        }
        100%{
            stroke-dashoffset: 0;
        }
    }

`;