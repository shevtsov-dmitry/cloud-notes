import { ReactElement, ReactNode } from 'react'

// const ModularForm = (): ReactElement => <> </>

interface FormWrapperProps {
    children: ReactNode
}

export const FormWrapper = ({ children }: FormWrapperProps): ReactElement => (
    <form
        onClick={(e) => e.preventDefault()}
        className="flex h-1/2 w-2/3 flex-col gap-2 rounded-2xl bg-neutral-700/80 p-5"
    >
        {children}
    </form>
)

export const TitleInput = (): ReactElement => (
    <input
        type="text"
        className="font-form-input-medium h-12 w-full rounded border-2 border-zinc-200 bg-neutral-500 p-5 text-2xl text-white placeholder:text-neutral-300"
        placeholder="letter title" 
    />
)

enum ContentInputKind {
    TEXT,
    IMAGE,
    AUDIO,
}

export const ContentInput = (): ReactElement => (
    <textarea
        className="font-form-input-regular h-12 w-full flex-1 rounded border-2 border-zinc-200 bg-neutral-500 p-5 text-2xl text-white placeholder:text-neutral-300"
        placeholder="text content"
    />
)

export const SaveButton = (): ReactElement => (
    <div className="flex w-full justify-center">
        <button className="hover:bg-neutral-200 hover:text-neutral-600 hover:cursor-pointer transition-colors rounded-2xl border-2 border-neutral-300 bg-zinc-500/80 px-[1.5%] py-[0.5%] font-mono text-3xl font-extrabold text-white">
            Save & Sync
        </button>
    </div>
)
