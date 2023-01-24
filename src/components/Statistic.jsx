import styled from 'styled-components'

const Statistic = styled.div`
    background: var(--grey);
    padding: var(--s1);
    margin: 0 var(--s6);
    width: 256px;
`

const H2 = styled.h2`
    margin-bottom: var(--s6);
    white-space: nowrap;
`

const H1 = styled.h1``

const _Statistic = ({ title, content }) => {
    return (
        <Statistic>
            <H2>{title}</H2>
            <H1>{content}</H1>
        </Statistic>
    )
}

export { _Statistic as Statistic }
