import { ReactElement } from 'react'
import { useNavigate } from 'react-router'

const OptionNavigator = (): ReactElement => {
    const navigate = useNavigate()

    const styles = {
        icon: 'hover:scale-105 hover:cursor-pointer transition select-none rounded-[50%] w-32',
        iconShadow: {
            boxShadow:
                'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
        },
    }

    return (
        <section className="bottom-0 flex h-screen w-full items-center justify-center">
            <div className="absolute top-[1%] right-[2%]">
                <button onClick={() => navigate('/settings')}>
                    <img
                        className={`${styles.icon} w-16!`}
                        // w-[10%]
                        src="images/home/icons/settings.svg"
                        alt="search"
                    />
                </button>
            </div>
            <div className="flex h-fit w-full flex-row justify-evenly">
                <button onClick={() => navigate('/search')}>
                    <img
                        className={styles.icon}
                        style={styles.iconShadow}
                        src="images/home/icons/search.svg"
                        alt="search"
                    />
                </button>
                <button onClick={() => navigate('/add')}>
                    <img
                        className={styles.icon}
                        style={styles.iconShadow}
                        src="images/home/icons/add.svg"
                        alt="add"
                    />
                </button>
            </div>
        </section>
    )
}

export default OptionNavigator
