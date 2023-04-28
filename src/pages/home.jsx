import '../home.css'
import { Link } from 'react-router-dom'

function Home() {

    return (
        <div>
            <div className='reveal'>
                <h1 className="title">Phishing and Spam Detection<br/></h1>
                <div className='button-wrapper'>
                <button className='wrapper-text'><Link to='/questions'>Start</Link></button>
                <button className='wrapper-text'><Link to='/instructions'>Introduction</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Home  