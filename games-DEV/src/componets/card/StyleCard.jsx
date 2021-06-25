import styled from 'styled-components';

export const Produto = styled.div`

    background-color: #3a5ca5;
    margin-top: 20px;
    width: 220px;
    height:370px;
    margin-bottom: 40px;
    margin-top: 30px;
    padding-top: 2px;
    padding-bottom: 5px;
    border-radius:5px;

        .info{
            display: block;
            text-align: center;
            max-width:250px;
            height: 260px;
            
            h6{
                color: #7d7d7d;
            }
            h3{
                color: #4d4d4d;
                max-height: 30px;
            }

            img{
                max-width: 100%;
                max-height: 180px;
                transition: 0.2s;

                &:hover{
                   padding-top: 4px;
                }
             }  
        }

        .comprar{
            margin-top: 5%;
            font-weight: bold;
            color: #424242;
            font-size: 18px;
            max-width: 100%;

            .qtd{
                font-size: 10px;
            }

            .notqtd{
                font-size: 10px;
                color: red;
            }
            button{
                width: 120px;
                height: 25px;
                margin-top: 7px;
            }
        }

    div{
        background-color: #fafafa;
        padding: 5px;
        border-radius: 5px;
        text-align: center;
        margin: 3%;
    }
`;