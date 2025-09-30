import { ReactElement } from 'react'
import { useNavigate } from 'react-router'

import OptionNavigator from './components/OptionNavigator'
import DefinedRoutes from './components/routes/DefinedRoutes'

const App = (): ReactElement => {
    const navigate = useNavigate()

    return (
        <main
            className={'min-h-screen max-w-dvw'}
            style={{
                backgroundImage:
                    'linear-gradient(to top, #241f22, #282328, #2c272f, #2f2c36, #30313d, #2d323e, #2b333e, #28343e, #243137, #222d31, #21292a, #202525)',
            }}
        >
            <OptionNavigator />
            <DefinedRoutes />
        </main>
    )
}

export default App
