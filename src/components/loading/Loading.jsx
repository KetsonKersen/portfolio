import { useEffect } from "react"
import { Loading_Component } from "./style.jsx"

export default function Loading(){

    useEffect(()=>{
        const loading = document.querySelector("#loading")
        setTimeout(()=>{
            loading?.remove()
        },3000)
    },[])

    return(
        <Loading_Component id="loading">
            <svg id="logo" width="206" height="206" viewBox="0 0 206 206" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_2346_236)">
                <path d="M2.00014 109.802C2.00014 107.953 2.73173 106.179 4.03515 104.867L71.4201 37.0655C72.7341 35.7434 74.5211 35 76.3851 35L121.332 35C127.558 35 130.686 42.5185 126.297 46.9345L13.965 159.961C9.56154 164.392 2.00002 161.273 2.00004 155.027L2.00014 109.802Z" fill="url(#paint0_linear_2346_236)"/>
                <path d="M83.1299 107.564C80.4165 104.834 80.4165 100.425 83.1299 97.6948L143.259 37.1938C144.573 35.8717 146.36 35.1283 148.224 35.1283L193.171 35.1283C199.397 35.1283 202.524 42.6468 198.136 47.0627L115.533 130.176C112.796 132.93 108.34 132.93 105.603 130.176L83.1299 107.564Z" fill="url(#paint1_linear_2346_236)"/>
                <path d="M69.481 111.998C72.2181 109.244 76.6738 109.244 79.4109 111.998L127.183 160.066C131.572 164.482 128.444 172 122.218 172H76.6222C74.7632 172 72.9805 171.26 71.6673 169.945L46.6421 144.867C43.9193 142.138 43.9148 137.722 46.632 134.988L69.481 111.998Z" fill="url(#paint2_linear_2346_236)"/>
                <path d="M141.883 112.446C144.62 109.692 149.075 109.692 151.813 112.446L199.082 160.008C203.479 164.432 200.33 171.964 194.093 171.942L149.746 171.791C147.89 171.785 146.113 171.042 144.805 169.726L119.784 144.55C117.071 141.82 117.071 137.412 119.784 134.682L141.883 112.446Z" fill="url(#paint3_linear_2346_236)"/>
                </g>
                <defs>
                <linearGradient id="paint0_linear_2346_236" x1="2.18187" y1="103.151" x2="149.792" y2="103.151" gradientUnits="userSpaceOnUse">
                <stop stop-color="#225CD6"/>
                <stop offset="1" stop-color="#00BCEA"/>
                </linearGradient>
                <linearGradient id="paint1_linear_2346_236" x1="2.18187" y1="103.151" x2="149.792" y2="103.151" gradientUnits="userSpaceOnUse">
                <stop stop-color="#225CD6"/>
                <stop offset="1" stop-color="#00BCEA"/>
                </linearGradient>
                <linearGradient id="paint2_linear_2346_236" x1="2.18187" y1="103.151" x2="149.792" y2="103.151" gradientUnits="userSpaceOnUse">
                <stop stop-color="#225CD6"/>
                <stop offset="1" stop-color="#00BCEA"/>
                </linearGradient>
                <linearGradient id="paint3_linear_2346_236" x1="2.18187" y1="103.151" x2="149.792" y2="103.151" gradientUnits="userSpaceOnUse">
                <stop stop-color="#225CD6"/>
                <stop offset="1" stop-color="#00BCEA"/>
                </linearGradient>
                <clipPath id="clip0_2346_236">
                <rect width="206" height="206" fill="white"/>
                </clipPath>
                </defs>
            </svg>
        </Loading_Component>
    )
}