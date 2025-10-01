import { ReactElement } from 'react'
import BackArrow from '../mutual/BackArrow'
import {
    ContentInput,
    FormWrapper,
    TitleInput,
} from './modular-form/ModularForm'

const AddTab = (): ReactElement => {
    return (
        <div className="flex h-screen w-full items-center justify-center">
            <BackArrow fixedOnLeftTopCorner />
            <FormWrapper>
                <h1 className="w-full text-neutral-400">
                    Press Enter to save note
                </h1>
                <TitleInput />
                <ContentInput />
            </FormWrapper>
        </div>
    )
}

export default AddTab
