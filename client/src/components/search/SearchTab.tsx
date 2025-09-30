import { ReactElement } from 'react'
import BackArrow from '../mutual/BackArrow'
import FoundSubjects from './FoundSubjects'
import SearchField from './SearchField'

const SearchTab = (): ReactElement => {
    return (
        <div className="h-full w-full">
            <BackArrow fixedOnLeftTopCorner />
            <div className="flex h-fit w-full justify-end">
                <SearchField />
            </div>
            <FoundSubjects />
        </div>
    )
}

export default SearchTab
