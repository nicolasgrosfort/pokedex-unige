import { Fragment } from 'react'
import GlobalStyle from '@styles/GlobalStyle'
import { Header, Main } from '@layouts'

function App() {
    return (
        <Fragment>
            <GlobalStyle />
            <Header />
            <Main />
        </Fragment>
    )
}

export default App
