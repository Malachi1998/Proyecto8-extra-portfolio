
import Sidebar from '../Sidebar'
import './index.scss'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <main className="App">
            <nav>
                <Sidebar />
            </nav>

            <article className='page'>
                <header className='tags top-tags'>Miracle Malaquias</header>

                <Outlet />

                <section>
                    <p className='profile-title'> WEB DEVELOPER </p>
                    <p className='sub-profile-title'>Student at Factoria-F5</p>
                </section>
            </article>
        </main >

    )
}
export default Layout