import { ReactElement } from 'react'
import { useNavigate } from 'react-router'

const OptionNavigator = (): ReactElement => {
    const navigate = useNavigate()

    const styles = {
        icon: 'w-32 hover:scale-105 hover:cursor-pointer transition select-none',
    }

    return (
        <section className="bottom-0 flex h-screen w-full items-center justify-center">
            <div className="flex h-fit w-full flex-row justify-evenly">
                <button>
                    <img
                        className={styles.icon}
                        src="images/home/search-icon.svg"
                        alt="search"
                    />
                </button>
                <button>
                    <img
                        className={styles.icon}
                        src="images/home/add-icon.svg"
                        alt="add"
                    />
                </button>
            </div>
        </section>
    )
}

export default OptionNavigator
