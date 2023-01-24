import styled from 'styled-components'
import { Statistic, Order, Data } from '@components'
import { useFetchPokemon } from '@hooks'
import { useEffect, useState } from 'react'

const Main = styled.main`
    background: var(--white);
    padding: var(--s2);
`

const Statistics = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -100px;
`

const Orders = styled.div`
    width: 75%;
    margin: var(--s1) auto;
    margin-bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const List = styled.div`
    width: 75%;
    margin: var(--s6) auto;
`

const Loading = styled.h2`
    padding: var(--s1);
    text-align: center;
`

const _Main = () => {
    const { response, error } = useFetchPokemon(
        'https://pokeapi.co/api/v2/pokemon/?limit=151'
    )

    return (
        <Main>
            <Statistics>
                <Statistic
                    title="Nombre total de Pokémon"
                    content={response?.count || '-'}
                />
                <Statistic title="Types totaux" content={0} />
            </Statistics>

            <Orders>
                <Order title="Name" />
                <Order title="Type" />
            </Orders>

            <List>
                {response?.pokeData.map((pokemon, id) => (
                    <Data
                        img=""
                        name={pokemon.name}
                        key={id}
                        data={pokemon.data}
                    />
                )) || <Loading>Loading...</Loading>}
            </List>
        </Main>
    )
}

export { _Main as Main }
