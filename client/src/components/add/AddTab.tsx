import { ReactElement } from 'react'
import BackArrow from '../mutual/BackArrow'

const AddTab = (): ReactElement => {
    return (
        <div className="flex h-screen w-full items-center justify-center">
            <BackArrow fixedOnLeftTopCorner />
            <p id="placeholder" className="text-4xl font-black text-white">
                Add New Content
            </p>
        </div>
    )
}

export default AddTab
