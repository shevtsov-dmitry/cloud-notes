import { ReactElement } from 'react'
import BackArrow from '../mutual/BackArrow'

const SettingsTab = (): ReactElement => {
    return (
        <div className="flex h-screen w-full items-center justify-center">
            <BackArrow fixedOnLeftTopCorner />
            <ul className="flex list-none flex-col gap-3 text-white">
                <li>case 1</li>
                <li>case 2</li>
                <li>case 3</li>
            </ul>
        </div>
    )
}

export default SettingsTab
