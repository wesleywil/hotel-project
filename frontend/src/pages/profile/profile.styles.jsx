import styled from "styled-components";


export const BookingsDiv = styled.div`
    transition: all 2s ease-in-out;
    ${props=>{
        if(props.display === true){
            return`
                display:block;
                animation:fade_in_show 1s
            `;
        }else{
            return`
                display:none;
            `;
        }
    }};
    @keyframes fade_in_show{
        0%{
            opacity:0;
            transform:scale(0);
        }
        100%{
            opacity:1;
            transform:scale(1)
        }
    }
`;