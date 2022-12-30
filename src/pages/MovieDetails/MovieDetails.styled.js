import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const InfoMovieBlock = styled.div`
    display: flex;
    gap: 20px;
    padding: 20px;;
`

export const Poster = styled.img`
    width: 200px;
`

export const Wrapper = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const GoBackBtn = styled(Link)`
    border: 1px solid rgb(27 180 139);
    padding: 5px;
    border-radius: 5px;

    :hover,
    :focus {
        background: rgb(27 180 139);
        color: white;
    }
`

export const Container = styled.div`
    padding: 20px;

`

export const DeatailedBtn = styled(Link)`
    border: 1px solid rgb(27 180 139);
    padding: 5px;
    border-radius: 5px;
    background: white;

    :hover,
    :focus {
        background: rgb(27 180 139);
        color: white;
    }
`

export const BtnWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    border: 1px solid rgb(27 180 139);
    width: 100%;
    padding: 20px;
    margin: 0 auto;
    background: rgb(27 180 139 / 15%);
    box-shadow: 5px 3px 4px 1px rgba(10, 10, 4, 0.7);
`

export const ErrorDiv = styled.div`
    padding: 30px;
    font-size: 30px;
`