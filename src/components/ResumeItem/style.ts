import styled from "styled-components";

type InfoColor = {
    color?: string
}

export const Container = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Title = styled.div`

`

export const Info = styled.div<InfoColor>`
    font-weight: bold;
    color:${ props => props.color ?? '#00000'}
`