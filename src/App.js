import './App.css';
import Testimonials from './components/Testimonials';
import reviews from './data1';
function App() {
  // let reviews = props.reviews;
  return (
    <div className='flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200 '>
          <div className='text-center'>
              <h1 className='text-4xl font-bold'>
                Our Testimonials
              </h1>
              <div className='h-[4px] w-1/5 mx-auto mt-1 bg-voilet-400'></div>
              <div>
                <Testimonials reviews={reviews}/>
              </div>
          </div>
    </div>
  );
}

export default App;
