import React from 'react';
import { Link } from 'react-router-dom';
import food1 from '../images/food_1.png'
import dreamdoor from '../images/dreamdoor.png'
import portfolio from '../images/portfolio.png'


function Projects() {
  return (
    <>
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-10 text-4xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-4xl">Check Out My Projects</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Link target='blank' to="https://foodlabdemoproject.netlify.app/">
              <img className="w-full h-48 object-cover" src={food1} alt="Project 1" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800">Food Lab</h3>
                <p className="mt-2 text-gray-600">This Is Foodlab Webpage, it was Make In Only HTML5 And CSS3, Foodlab Is Fully Responsive Webpage, Foodlab Is My First Project In Web Development Journy.</p>
              </div>
            </Link>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Link target='blank' to="https://github.com/Ganesh212001/DreamDoor.git">
              <img className="w-full h-48 object-cover" src={dreamdoor} alt="Project 2" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800">Dream Door</h3>
                <p className="mt-2 text-gray-600">DreamDoor Is Real-Estet Website,It Is My First MERN Project In My Web Development Journy, DreamDoor Is Completaly Responsive Project, And It's Work Verry Well </p>
              </div>
            </Link>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Link to="https://example.com/project3">
              <img className="w-full h-48 object-cover" src={portfolio} alt="Project 3" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800">Portfolio</h3>
                <p className="mt-2 text-gray-600">This is my personal portfolio , this is react app please Check out this link to visit my portfolio and know about me </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
    {/* <Footer/> */}
    </>
  );
}

export default Projects