import { useState, useEffect } from 'react'

const fetchPokeData = async (results) => {
    const pokeData = []

    for (let i = 0; i < results.length; i++) {
        const res = await fetch(results[i].url)
        const data = await res.json()
        pokeData.push({ name: results[i].name, data })
    }

    return pokeData
}

const useFetchPokemon = (url) => {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url)
                const { count, results } = await res.json()
                const pokeData = await fetchPokeData(results)
                setResponse({ count, pokeData })
            } catch (error) {
                setError(error)
            }
        }
        fetchData()
    }, [])

    return { response, error }
}

export { useFetchPokemon }
