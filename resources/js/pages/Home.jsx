import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
{/* <InertiaLink href='/about'>About</InertiaLink>
<InertiaLink href='/contact'>Contact</InertiaLink> */}


export default function Welcome(props) {
    return (
        <div>
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
            <svg className="mr-2" fill="#002f61" height="24px" width="24px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 297.001 297.001" xml:space="preserve" stroke="#002f61" transform="matrix(1, 0, 0, 1, 0, 0)rotate(-45)" stroke-width="2.97001">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#c9c9c9" stroke-width="5.94002"> <g> <g>
                <path d="M287.034,60.873l-20.819-0.001V39.321c0-4.934-3.61-9.126-8.49-9.856c-0.852-0.128-21.134-3.074-45.557,1.37 c-27.227,4.954-48.941,17.171-63.668,35.64c-14.728-18.469-36.442-30.686-63.668-35.64c-24.424-4.443-44.706-1.498-45.557-1.37 c-4.88,0.731-8.49,4.923-8.49,9.856v21.551H9.966C4.463,60.872,0,65.335,0,70.839v187.805c0,3.227,1.562,6.254,4.193,8.124 s6.004,2.35,9.051,1.288c0.748-0.259,75.431-25.747,131.12-0.345c2.628,1.199,5.645,1.199,8.273,0 c55.533-25.33,130.376,0.088,131.12,0.345c1.068,0.372,2.174,0.555,3.276,0.555c2.043,0,4.065-0.628,5.775-1.842 c2.631-1.87,4.193-4.897,4.193-8.124V70.84C297,65.336,292.538,60.873,287.034,60.873z M19.933,245.309V80.805h10.852v132.726 c0,2.896,1.267,5.646,3.458,7.539c2.191,1.893,5.105,2.742,7.969,2.319c0.55-0.08,43.846-6.024,75.478,15.679 C78.725,232.405,39.727,240.112,19.933,245.309z M138.534,230.08c-13.932-12.588-32.079-21.1-53.702-25.034 c-10.406-1.894-20.06-2.446-27.78-2.446c-2.292,0-4.414,0.049-6.333,0.126V48.473h-0.001c19.155-0.864,65.752,1.184,87.816,38.587 V230.08z M158.466,87.061c21.985-37.243,68.655-39.384,87.816-38.563v154.228c-8.383-0.338-20.62-0.136-34.114,2.32 c-21.623,3.934-39.77,12.445-53.702,25.034V87.061z M179.277,239.074c31.636-21.716,74.955-15.766,75.495-15.686 c2.871,0.431,5.783-0.413,7.981-2.305c2.198-1.894,3.462-4.65,3.462-7.552V80.806h10.852v164.503 C257.267,240.11,218.253,232.4,179.277,239.074z"></path>
                </g> </g> </g><g id="SVGRepo_iconCarrier"> <g> <g>
                <path d="M287.034,60.873l-20.819-0.001V39.321c0-4.934-3.61-9.126-8.49-9.856c-0.852-0.128-21.134-3.074-45.557,1.37 c-27.227,4.954-48.941,17.171-63.668,35.64c-14.728-18.469-36.442-30.686-63.668-35.64c-24.424-4.443-44.706-1.498-45.557-1.37 c-4.88,0.731-8.49,4.923-8.49,9.856v21.551H9.966C4.463,60.872,0,65.335,0,70.839v187.805c0,3.227,1.562,6.254,4.193,8.124 s6.004,2.35,9.051,1.288c0.748-0.259,75.431-25.747,131.12-0.345c2.628,1.199,5.645,1.199,8.273,0 c55.533-25.33,130.376,0.088,131.12,0.345c1.068,0.372,2.174,0.555,3.276,0.555c2.043,0,4.065-0.628,5.775-1.842 c2.631-1.87,4.193-4.897,4.193-8.124V70.84C297,65.336,292.538,60.873,287.034,60.873z M19.933,245.309V80.805h10.852v132.726 c0,2.896,1.267,5.646,3.458,7.539c2.191,1.893,5.105,2.742,7.969,2.319c0.55-0.08,43.846-6.024,75.478,15.679 C78.725,232.405,39.727,240.112,19.933,245.309z M138.534,230.08c-13.932-12.588-32.079-21.1-53.702-25.034 c-10.406-1.894-20.06-2.446-27.78-2.446c-2.292,0-4.414,0.049-6.333,0.126V48.473h-0.001c19.155-0.864,65.752,1.184,87.816,38.587 V230.08z M158.466,87.061c21.985-37.243,68.655-39.384,87.816-38.563v154.228c-8.383-0.338-20.62-0.136-34.114,2.32 c-21.623,3.934-39.77,12.445-53.702,25.034V87.061z M179.277,239.074c31.636-21.716,74.955-15.766,75.495-15.686 c2.871,0.431,5.783-0.413,7.981-2.305c2.198-1.894,3.462-4.65,3.462-7.552V80.806h10.852v164.503 C257.267,240.11,218.253,232.4,179.277,239.074z"></path>
                </g> </g> </g>
            </svg>
            NOMADS
          </a>
        </div>

        <div className="order-2 md:order-3 flex items-center" id="nav-content">
          <a className="inline-block no-underline text-gray-300 hover:text-blue-600" href="#">
            <svg className="fill-current hover:text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <circle fill="none" cx="12" cy="7" r="3" />
              <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z"/>
            </svg>
          </a>

          <a className="pl-3 inline-block no-underline text-gray-300 hover:text-blue-600" href="#">
            <svg className="fill-current hover:text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z"/>
              <circle cx="10.5" cy="18.5" r="1.5" />
              <circle cx="17.5" cy="18.5" r="1.5" />
            </svg>
          </a>
        </div>
      </div>
    </nav>

    <div className="carousel relative container mx-auto" style="max-width: 1600px">
        <div className="carousel-inner relative overflow-hidden w-full">
          {/* <!--Slide 1--> */}
          <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked"/>
          <div className="carousel-item absolute opacity-0" style="height: 80vh">
            <div className="h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-bottom" id="Slide1"
            style="background-image: url('https://img.freepik.com/free-photo/shopping-trolleys-with-red-blue-handles_23-2147961882.jpg?t=st=1714466145~exp=1714469745~hmac=10ac5a397158ee2fb39355fea55025b89a81da742f350133c4fe967e3b072123&w=1060');">
              <div className="container mx-auto items-center">
                <div className="w-full px-6">
                  <p className="mt-12 text-white font-bold text-5xl my-4 text-center font-mono">
                    The Store
                    <br/>
                    <a className="mt-12 text-xl font-semibold inline-block no-underline border-b-2 text-gray-400 border-transparent leading-relaxed hover:text-gray-200  hover:border-blue-600"
                      href="#">
                      View Products</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <label htmlFor="carousel-5" className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
            >‹</label>
          <label htmlFor="carousel-2" className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
            >›</label>

          {/* <!--Slide 2--> */}
          <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden=""/>
          <div className="carousel-item absolute opacity-0 bg-cover bg-right" style="height: 80vh">
            <div className="h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-center"  id="Slide2"
              style="background-image: url('https://images.unsplash.com/photo-1470940511639-1068d7764233?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhbWVyYXN8ZW58MHwwfDB8fHww');">
              <div className="container mx-auto">
                <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                  <p className="text-black text-2xl my-4">Shop Cameras by </p>
                  <a className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black"
                    href="#">View Cameras</a>
                </div>
              </div>
            </div>
          </div>
          <label htmlFor="carousel-1" className="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
            >‹</label>
          <label htmlFor="carousel-3" className="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
            >›</label>

          {/* <!--Slide 3--> */}
          <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden=""/>
          <div className="carousel-item absolute opacity-0" style="height: 80vh">
            <div className="h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-top" id="Slide3"
              style="background-image: url('https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHNob2VzfGVufDB8MHwwfHx8MA%3D%3D');">
              <div className="container mx-auto">
                <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                  <p className="text-black text-2xl my-4">Shop Shoes by </p>
                  <a className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black"
                    href="#">View Shoes</a>
                </div>
              </div>
            </div>
          </div>
          <label htmlFor="carousel-2" className="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
            >‹</label>
          <label htmlFor="carousel-4" className="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
            >›</label>

          {/* <!--Slide 4--> */}
          <input className="carousel-open" type="radio" id="carousel-4" name="carousel" aria-hidden="true" hidden=""/>
          <div className="carousel-item absolute opacity-0" style="height: 80vh">
            <div className="h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-bottom" id="Slide4"
              style="background-image: url('https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3N8ZW58MHwwfDB8fHww');">
              <div className="container mx-auto">
                <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                  <p className="text-black text-2xl my-4">Shop Books by </p>
                  <a className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black"
                    href="#">View Books</a>
                </div>
              </div>
            </div>
          </div>
          <label htmlFor="carousel-3" className="prev control-4 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
            >‹</label>
          <label htmlFor="carousel-5" className="next control-4 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
            >›</label>

          {/* <!--Slide 5--> */}
          <input className="carousel-open" type="radio" id="carousel-5" name="carousel" aria-hidden="true" hidden=""/>
          <div className="carousel-item absolute opacity-0" style="height: 80vh">
            <div className="h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-center" id="Slide5"
              style="background-image: url('https://images.unsplash.com/photo-1558980664-2cd663cf8dde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW90b3JjeWNsZXN8ZW58MHwwfDB8fHww');">
              <div className="container mx-auto">
                <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                  <p className="text-black text-2xl my-4">Shop Motorcycles by </p>
                  <a className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black"
                    href="#">View Motorcyles</a>
                </div>
              </div>
            </div>
          </div>
          <label htmlFor="carousel-4" className="prev control-5 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
            >‹</label>
          <label htmlFor="carousel-1" className="next control-5 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
            >›</label>

          {/* <!-- Add additional indicators for each slide--> */}
          <ol className="carousel-indicators">
            <li className="inline-block mr-3">
                <label htmlFor="carousel-1" className="carousel-bullet cursor-pointer block text-5xl text-gray-400 hover:text-gray-900"
                  >•</label>
            </li>
            <li className="inline-block mr-3">
                <label htmlFor="carousel-2" className="carousel-bullet cursor-pointer block text-5xl text-gray-400 hover:text-gray-900"
                >•</label>
            </li>
            <li className="inline-block mr-3">
                <label htmlFor="carousel-3" className="carousel-bullet cursor-pointer block text-5xl text-gray-400 hover:text-gray-900"
                >•</label>
            </li>
            <li className="inline-block mr-3">
                <label htmlFor="carousel-4" className="carousel-bullet cursor-pointer block text-5xl text-gray-400 hover:text-gray-900"
                >•</label>
            </li>
            <li className="inline-block mr-3">
              <label htmlFor="carousel-5" className="carousel-bullet cursor-pointer block text-5xl text-gray-400 hover:text-gray-900"
                >•</label>
            </li>
          </ol>
        </div>
    </div>
    </div>
    );
}
