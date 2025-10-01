import { ReactElement } from 'react'
import { useNavigate } from 'react-router'

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
            <h1 className="font-form-input-medium text-7xl text-white">
                Hello text, приветсвенный красивый текст. Снизу Sans-Serif
                standard.
            </h1>
            <h1 className="font-sans text-7xl text-white">
                Hello text, приветсвенный красивый текст. This is Sans-Serif
                standard.
            </h1>
            <div className="bg-testpink h-32 w-32"></div>
            {/*<DefinedRoutes />*/}
        </main>
    )
}

export default App
