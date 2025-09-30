import { ReactElement } from 'react'
import { useNavigate } from 'react-router'

const OptionNavigator = (): ReactElement => {
    const navigate = useNavigate()

    const styles = {
        icon: 'hover:scale-105 hover:cursor-pointer transition select-none',
    }

    return (
        <section className="bottom-0 flex h-screen w-full items-center justify-center">
            <div className="absolute top-[1%] right-[2%]">
                <button onClick={() => navigate('/settings')}>
                    <img
                        className={`${styles.icon} w-16`}
                        src="images/home/icons/settings.svg"
                        alt="search"
                    />
                </button>
            </div>
            <div className="flex h-fit w-full flex-row justify-evenly">
                <button onClick={() => navigate('/search')}>
                    <img
                        className={`${styles.icon} w-32`}
                        src="images/home/icons/search.svg"
                        alt="search"
                    />
                </button>
                <button onClick={() => navigate('/add')}>
                    <img
                        className={`${styles.icon} w-32`}
                        src="images/home/icons/add.svg"
                        alt="add"
                    />
                </button>
            </div>
        </section>
    )
}

export default OptionNavigator
