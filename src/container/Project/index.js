import React, { useState } from "react";
import Pageheadercontainer from "../../component/Pageheadercontainer";
import { BsInfoCircleFill } from "react-icons/bs";
import imageOne from "../../images/image1.png";
import imageTwo from "../../images/image2.png";
import imageThree from "../../images/image3.png";
import imageFour from "../../images/image4.png";
import imageFive from "../../images/image5.png";
import imageSix from "../../images/image6.png";
import './style.css'

const projectData = [
  {
    id: 2,
    name: "Ecomerce",
    image: imageSix,
    link: "",
  },
  {
    id: 3,
    name: "notes APP",
    image: imageTwo,
    link: "",
  },
  {
    id: 2,
    name: "sazid",
    image: imageThree,
    link: "",
  },
  {
    id: 3,
    name: "ansari",
    image: imageFour,
    link: "",
  },
  {
    id: 2,
    name: "chuttmalpur",
    image: imageFive,
    link: "",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Development",
  },
  {
    filterId: 3,
    label: "Data structure",
  },
];

function Project() {
  const[filtervalue, setfiltervalue] = useState(1);
  const[hoveredvalue, sethovervalue] = useState (null);


function handlefilter(currentId){
  setfiltervalue(currentId);
  console.log(filtervalue);
}
 



function Handlehover(index){
  sethovervalue(index);
}

console.log(hoveredvalue);





 const filteredItems = filtervalue === 1 ? projectData :
 projectData.filter(item=>item.id === filtervalue);


 console.log(filteredItems);


  return (
    <section id="project" className="project">
      <Pageheadercontainer
        HeadersText="project"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="portfolio__container">
        <ul className="portfolio__container__filter">
          {filterData.map((item) => (
            <li className={item.filterId === filtervalue ? 'activestart' : ''} onClick={()=>handlefilter(item.filterId)} key={item.filterId}>{item.label}</li>
          ))}
        </ul>
        <div className="portfolio__container__cards">
          {
            projectData.map((item, index)=>(
              <div className="portfolio__container__cards__item" key={`cardItem${item.name.trim()}`}
              
              onMouseEnter={()=>Handlehover(index)}
              // onMouseLeave={()=>Handlehover(null)}
              
              >
                <div className="portfolio__container__cards__item__img-wrapper">
                  <a href="">
                    <img src={item.image} alt="dummy data" />
                  </a>

                </div>
                <div className="overlay">
                 {
                  index === hoveredvalue && (
                    <div>
                      <p>{item.name}</p>
                      <button>Visit</button>
                    </div>
                  )
                 }
                </div>
                </div>
            ))
          }

        </div>
      </div>
    </section>
  );
}

export default Project;
