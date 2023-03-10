// import LogoTitle from '../../assets/images/logo-s.png';
import {Link} from 'react-router-dom'
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
// import Logo from './Logo'
import Loader from 'react-loaders';



const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['S','z','e','t','o',]
    const jobArray = ['w','e','b',' ', 'd','e','v','e','l','o','p','e','r','.']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, []);

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _11`}>i</span>
                <span className={`${letterClass} _12`}>,</span>
                <span className={`${letterClass} _12`}> </span>
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <br />
                <span className={`${letterClass} _15`}>M</span>
                <span className={`${letterClass} _16`}>e</span>
                <span className={`${letterClass} _17`}>r</span>
                <span className={`${letterClass} _18`}>i</span>
                <span className={`${letterClass} _19`}>c</span>
                <span className={`${letterClass} _20`}>k</span>
                <br />

                {/* <img src={LogoTitle} alt="developer"/> */}
                {/* <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={20}/>

                <br /> */}

                <AnimatedLetters letterClass={letterClass}

                strArray={jobArray}
                idx={22}/>
                </h1>

                <br />

                <h1> Fullstack Developer / Python / Javascript</h1>
                <Link to="contact" className='flat-button'>CONTACT ME </Link>
                </div>
                {/* <Logo/> */}

        </div>
        <Loader type="pacman" />
        </>
    )
}



export default Home;