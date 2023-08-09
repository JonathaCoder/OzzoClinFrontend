import React from "react";
import { useState } from "react";
import { CiPower } from "react-icons/ci";
import Example from "../../components/Navigate";
import Clientes from "../Clientes/clientes";
import logo from "../../img/logotipo.png"

function Home(){

  const [user,setUser] = useState(null);
  const [error, setError] = useState("");

  const handleLogout = (e) => {
    setUser(null)
    setError('')
    window.location.href= "/"
  }


return(
<div className="home">
    <header className="header_home">
      <div className="home_header">
        <img src={logo} alt="logo"  className="LogoHeader"/>
       </div>
      <div className="btn_logout2">
       <button type="button" className="btn-logout"
        onClick={(e) =>handleLogout(e)}> <CiPower  className="icon_btn"/></button>
       </div>
        
    </header>

<div>
<Clientes/>
</div>
    <Example/>
</div>






  
  
    )
  
}

  


export default Home;
