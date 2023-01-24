import styled from 'styled-components'

const Header = styled.header`
    background: var(--blue);
    padding: var(--s2) var(--s1);
`

const Title = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--s2);
`

const H1 = styled.h1`
    color: var(--white);
`

const H2 = styled.h2`
    color: var(--white);
`

const Research = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: var(--s0);
`

const Input = styled.input`
    width: 75%;
    background: none;
    border: none;
    border-bottom: 0.5px solid var(--white);
    border-radius: 3px;
    padding: var(--s4) 0;
    font-size: var(--p1);
    font-weight: 700;
    font-family: var(--sans-serif);
    outline: none;
    color: var(--white);

    ::placeholder {
        color: var(--white);
    }
`

const _Header = () => {
    return (
        <Header>
            <Title>
                <H1>Pokédex</H1>
                <H2>Première génération - Kanto</H2>
            </Title>

            <Research>
                <Input type="text" placeholder="Chercher un pokémon" />
            </Research>
        </Header>
    )
}

export { _Header as Header }
