import { ReactElement, useEffect } from 'react'
import { useNavigate } from 'react-router'
import DefinedRoutes from './components/routes/DefinedRoutes'

const App = (): ReactElement => {
    const navigate = useNavigate()

    return (
        <main
            className={'min-h-screen max-w-dvw'}
            style={{
                backgroundImage:
                    'linear-gradient(to top, #241f22, #282328, #2c272f, #2f2c36, #30313d, #333333, #2b333e, #28343e, #243137, #222d31, #21292a, #202525)',
            }}
        >
            <DefinedRoutes />
        </main>
    )
}

export default App
