//mport { useRoutes } from 'react-router-dom';
import Developers from '../Developers';
/*import Home from '../Home';

import Tutorials from '../Tutorials';*/
import Slider from 'react-slick';//crea carrusel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';


function App() {

  const settings ={
    dots: true,
    infinite: true,
    speed: 2000,
    slideToShow: 3,
    slideToScroll: 1,
    autoplay: true,
    autoplayspeed: 30
    
  };

  return (
    <div>
    <h1 className="bg-red-200 mb-4"> Hola clase </h1>
    <button className="bg-sky-400 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded mb-4" onClick={()=> window.open('https://tailwindcss.com/', '_blank')} > Help me</button>
 
    <div class="grid grid-cols-10 gap-2">
      <div class="bg-violet-50 aspect-square"></div>
      <div class="bg-violet-100 aspect-square"></div>
      <div class="bg-violet-200 aspect-square"></div>
      <div class="bg-violet-300 aspect-square"></div>
      <div class="bg-violet-400 aspect-square"></div>
      <div class="bg-violet-500 aspect-square"></div>
      <div class="bg-violet-600 aspect-square"></div>
      <div class="bg-violet-700 aspect-square"></div>
      <div class="bg-violet-800 aspect-square"></div>
      <div class="bg-violet-900 aspect-square"></div>
    </div>
    <Developers />
    
    <div className='w-3/4 m-auto bg-lime-300'>
      <div className='mt-30'>
        <Slider {...settings}>
          {data.map((d)=>(
          <div><div key={d.name} className="">
              <img src={d.img} alt='' className='h-44 w-44 rounded-full mt-10 mb-2 my-auto mx-auto' />
            </div>
            <div className='flex flex-col item-center justify-center gap-1 p-1'>
                <p className='text-xl font-semibold'>{d.name}</p>
                <p className='text-center'>{d.review}</p>
                <button className='bg-indigo-400 text-white text-lg px-4 py-2'>Mis tutoriales</button>
            </div>
          </div>  
          ) )}
        </Slider>
      </div>
    </div>    
    </div>
  )
}

const data = [{
  name:`Brais`,
  img:`../src/assets/fotos/perfil-brais.png`,
  review:`Developer`
 },
 {
  name:`Brais1`,
  img:`../src/assets/fotos/perfil-brais.png`,
  review:`Developer`
 },
 {
  name:`Brais2`,
  img:`../src/assets/fotos/perfil-brais.png`,
  review:`Developer`
 },
];

export default App
