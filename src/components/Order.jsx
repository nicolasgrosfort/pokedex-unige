import styled from 'styled-components'
import order from '@svg/order.svg'

const Order = styled.div`
    opacity: 0.5;
`

const Button = styled.button`
    border: none;
    background: none;
    font-family: var(--sans-serif);
    font-size: var(--p1);
    font-weight: var(--medium);

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    & span {
        margin-left: var(--s6);
    }
`

const _Order = ({ title, action }) => {
    return (
        <Order>
            <Button onClick={action}>
                <img src={order} />
                <span>{title}</span>
            </Button>
        </Order>
    )
}

export { _Order as Order }
