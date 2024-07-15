import React, {useState, useEffect} from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import { FaBeer } from 'react-icons/fa';

{/* <InertiaLink href='/about'>About</InertiaLink>
<InertiaLink href='/contact'>Contact</InertiaLink> */}


export default function Welcome() {

  const slides = [
    { id: 1, title: 'First slide text', description:'Show yourself', layout: 'center', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4usW4fUARqIPzztpghwSdmq3Cgdl4EG3OVQ&s' },
    { id: 2, title: 'Second slide text', description:'Show yourself', layout: 'side', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4usW4fUARqIPzztpghwSdmq3Cgdl4EG3OVQ&s' },
    { id: 3, title: 'Third slide text', description:'Show yourself', layout: 'side', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4usW4fUARqIPzztpghwSdmq3Cgdl4EG3OVQ&s' },
    { id: 4, title: 'Fourth slide text', description:'Show yourself', layout: 'side', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4usW4fUARqIPzztpghwSdmq3Cgdl4EG3OVQ&s' },
    { id: 5, title: 'Fifth slide text', description:'Show yourself', layout: 'side', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4usW4fUARqIPzztpghwSdmq3Cgdl4EG3OVQ&s' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto slide every 5 seconds
    return () => clearInterval(interval);
  }, [currentSlide]);


    return (
        <div>
          {/* Navigation bar */}
          <nav id="header" className="w-full fixed z-30 top-0">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3 bg-gray-600 bg-opacity-40">
              <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
                <nav>
                  <ul className="md:flex items-center justify-between text-base text-gray-400 font-bold pt-4 md:pt-0">
                      <li>
                          <a className="inline-block no-underline hover:text-blue-600 hover:font-semibold py-2 px-4" href="#">
                              About
                          </a>
                      </li>
                      <li>
                          <a className="inline-block no-underline hover:text-blue-600 hover:font-semibold py-2 px-4" href="#">
                              Contact
                          </a>
                      </li>
                      <li>
                          <a className="inline-block no-underline hover:text-blue-600 hover:font-semibold py-2 px-4" href="#">
                              Shop
                          </a>
                      </li>
                      {/* {{-- <li>
                          <a className="inline-block no-underline hover:text-blue-600 hover:font-semibold py-2 px-4" href="#">
                              Categories
                          </a>
                      </li> --}} */}
                  </ul>
                </nav>
              </div>

              <div className="order-1 md:order-2">
                <a className="flex items-center mx-auto tracking-wide no-underline hover:no-underline font-bold text-blue-900 text-2xl" href="#">
                  NOMADS
                </a>
              </div>

              <div className="order-2 md:order-3 flex items-center" id="nav-content">
                <a className="inline-block no-underline text-gray-300 hover:text-blue-600" href="#">
                  Person
                </a>

                <a className="pl-3 inline-block no-underline text-gray-300 hover:text-blue-600" href="#">
                  Trolley
                </a>
              </div>
            </div>
          </nav>
          {/* End of Navigation */}

      {/* Carousel */}
      <div className="relative mt-44 mb-9">
        <div className="overflow-hidden rounded-lg">
          <div className="flex">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`w-full flex-shrink-0 transition-opacity duration-500 transform ${
                  index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}
                style={{
                  minWidth: '100%', // Ensure each slide takes full width
                  height: '400px', // Adjust height as needed
                  backgroundImage: `url(${slide.imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="max-w-xl mx-auto px-6 py-4 bg-white bg-opacity-70 rounded-lg">
                  <h2 className="text-xl font-bold">{slide.title}</h2>
                  <p>{slide.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <button
          className="absolute inset-y-0 left-0 z-10 flex items-center justify-center w-12 h-12 bg-white bg-opacity-50 text-gray-600 rounded-full focus:outline-none"
          onClick={prevSlide}
        >
          <FaBeer className="w-6 h-6" />
        </button>
        <button
          className="absolute inset-y-0 right-0 z-10 flex items-center justify-center w-12 h-12 bg-white bg-opacity-50 text-gray-600 rounded-full focus:outline-none"
          onClick={nextSlide}
        >
          <FaBeer className="w-6 h-6" />
        </button>

        {/* Indicators (optional) */}
        <div className="absolute bottom-4 inset-x-0 flex items-center justify-center space-x-2 z-10">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
      {/* End of Carousel */}
          <div>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4usW4fUARqIPzztpghwSdmq3Cgdl4EG3OVQ&s'/>
          </div>
          {/* End of Carausel */}
    </div>
    );
}
