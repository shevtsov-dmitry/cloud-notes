import { ReactElement } from 'react'

const SingleSubjectInstance = (): ReactElement => {
    return <div className="h-24 w-12 bg-cyan-800"></div>
}

const FoundSubjects = (): ReactElement => {
    return (
        <div className="grid grid-cols-5 gap-3">
            {Array.from({ length: 10 }).map((i) => (
                <li>
                    <SingleSubjectInstance />
                </li>
            ))}
        </div>
    )
}

export default FoundSubjects
