import { useState } from 'react'
import styled from 'styled-components'

const Data = styled.div`
    background: var(--grey);
    margin-bottom: var(--s6);
`

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    padding: var(--s4);
    cursor: pointer;
`

const Img = styled.div`
    width: 108px;
    text-align: center;
    margin-right: var(--s6);

    & img {
        width: auto;
        height: 50.82px;
    }
`

const Name = styled.div`
    text-align: left;
    width: 100%;
    text-transform: capitalize;
`

const Id = styled.div`
    width: 90px;
`

const Content = styled.div`
    padding: var(--s4);
    padding-top: 0;

    & p {
        margin: var(--s4) 0;
    }
`

const Specs = styled.div`
    padding-left: calc(108px - var(--s4));

    & span {
        text-transform: capitalize;
    }
`

const Button = styled.button`
    display: block;
    margin: 0 auto;
    background: var(--blue);
    color: var(--white);
    font-size: var(--p1);
    font-weight: var(--bold);
    padding: var(--s5);
    border: none;
    cursor: pointer;
`

const _Data = ({ name, data }) => {
    const [isOpen, setIsOpen] = useState(false)
    const img = data.sprites.back_default

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <Data>
            <Title onClick={handleClick}>
                <Img>
                    <img src={img} alt={name} />
                </Img>
                <Name>
                    <h2>{name}</h2>
                </Name>
                <Id>
                    <p>{data.id}</p>
                </Id>
            </Title>

            {isOpen && (
                <Content>
                    <Specs>
                        <p>
                            Type : <span>{data.types[0]?.type.name}</span>{' '}
                        </p>
                        <p>Height: {data.height} m</p>
                        <p>Weight: {data.weight} kg</p>
                    </Specs>
                    <Button>SEE FULL CARD</Button>
                </Content>
            )}
        </Data>
    )
}

export { _Data as Data }
