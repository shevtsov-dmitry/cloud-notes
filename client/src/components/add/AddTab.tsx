import { ReactElement } from 'react'
import BackArrow from '../mutual/BackArrow'
import {
    ContentInput,
    FormWrapper,
    SaveButton,
    TitleInput,
} from './modular-form/ModularForm'

const AddTab = (): ReactElement => {
    return (
        <div className="flex h-screen w-full items-center justify-center">
            <BackArrow fixedOnLeftTopCorner />
            <FormWrapper>
                <TitleInput />
                <ContentInput />
                <SaveButton />
            </FormWrapper>
        </div>
    )
}

export default AddTab
