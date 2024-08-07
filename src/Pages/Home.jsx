import { useState } from 'react'
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import { Content } from "../Components/Content";

const Home = () => {
    const [category, setCategory] = useState(0);
    const [isOpen, setIsOpen] = useState(true);
    const toggleNavbar = ()=>{
      setIsOpen(!isOpen);
    }

    

  return (
    <>
      <div className="home-page">
        <Header toggleNavbar={toggleNavbar}/>
        <div className="home-container">
          <Navbar category={category} setCategory={setCategory} isOpen={isOpen}/>
          <Content category={category} isOpen={isOpen}/>
        </div>
      </div>
    </>
  )
}

export default Home;