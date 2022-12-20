import './index.scss';
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom';
import './matrix.css';
import video from './video.mp4';


// const Layout = () => {
//     return (
//     <div className="App">
//         <Sidebar/>
//         <div className='page'>
//             <span className='tags top-tags'>&lt;body&gt;</span>


//             <Outlet/>
//             <span className='tags bottom-tags'>
//             &lt;body&gt;
//             <br/>
//             <span className='bottom-tag-html'>&lt;/html&gt;</span>

//             </span>
//             </div>
//         </div>
//         )
//     }


// export default Layout;


const Layout = () => {
    return (
      <div className="App">
        <video src={video} autoPlay loop muted />
        <Sidebar />
        <div className='page'>
          <span className='tags top-tags'>&lt;body&gt;</span>

          <Outlet />
          <span className='tags bottom-tags'>
            &lt;body&gt;
            <br />
            <span className='bottom-tag-html'>&lt;/html&gt;</span>
          </span>
        </div>
      </div>
    );
  };


  export default Layout;