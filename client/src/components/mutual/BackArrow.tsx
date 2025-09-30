import { ReactElement } from 'react'
import { useNavigate } from 'react-router'

interface BackArrowProps {
    fixedOnLeftTopCorner?: boolean
}

const BackArrow = ({ fixedOnLeftTopCorner }: BackArrowProps): ReactElement => {
    const navigate = useNavigate()

    const ArrowButton = (): ReactElement => (
        <button onClick={() => navigate(-1)}>
            <img
                className="w-[10%]"
                src="images/home/icons/curved-back-arrow.svg"
                alt="/"
            />
        </button>
    )

    if (fixedOnLeftTopCorner) {
        return (
            <div className="absolute top-[1%] left-[2%]">
                <ArrowButton />
            </div>
        )
    } else {
        return <ArrowButton />
    }
}

export default BackArrow
