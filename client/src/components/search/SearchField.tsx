import { ReactElement } from 'react'

const SearchField = (): ReactElement => {
    return (
        <div className="mt-0 flex h-fit max-w-full justify-center">
            <input
                type="text"
                className="m-5 w-10/12 rounded-2xl border-2 border-slate-600 bg-purple-900/50 px-3 pt-1 pb-2 text-3xl font-medium text-white"
            />
        </div>
    )
}

export default SearchField
