import styled from "styled-components";

export const Container = styled.div`

    background-color: #a9c0f1;

    main{
        padding: 0 20px 30px 20px;
    }

    .produtos{
        display: flex;
        flex-wrap: wrap;
        gap: 2%;
        width: 90vw;   
    }

`;

export const Filtro = styled.div`
        width: 100%;
        display: flex;
        align-content: center;
        justify-content: flex-end;
        margin: 25px 0;
        padding: 0 60px;

        input{
            border-radius: 7px;
            border: 0;
            margin-right: 5px;
            width: 270px;
            height: 35px;
            padding: 5px; 
            font-size: 17px; 
        }
`;
    

export const Nav = styled.nav`
    padding: 1%;
    background: #2b53a8;
`;