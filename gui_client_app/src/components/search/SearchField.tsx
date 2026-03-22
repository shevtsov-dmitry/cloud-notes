import { ReactElement } from 'react'

const SearchField = (): ReactElement => {
    return (
        <input
            type="text"
            className="m-5 w-10/12 rounded-2xl border-2 border-slate-600 bg-purple-900/50 px-3 pt-1 pb-2 text-3xl font-medium text-white"
        />
    )
}

export default SearchField
