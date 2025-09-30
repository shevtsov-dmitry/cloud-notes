import { ReactElement } from 'react'

const App = (): ReactElement => {
    return (
        <main
            className={'h-screen max-w-full'}
            style={{
                backgroundImage:
                    'linear-gradient(to top, #241f22, #282328, #2c272f, #2f2c36, #30313d, #2d323e, #2b333e, #28343e, #243137, #222d31, #21292a, #202525)',
            }}
        >
            <div></div>
        </main>
    )
}

export default App
