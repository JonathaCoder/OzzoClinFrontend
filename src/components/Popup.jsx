import React, { useState } from "react";
import Modal from "react-modal";
import { HiOutlineUserAdd } from "react-icons/hi";
import Button from "react-bootstrap/esm/Button";
import { HiUser } from "react-icons/hi";
import { HiMail } from "react-icons/hi";
import { HiClipboard } from "react-icons/hi";
import { HiCurrencyDollar } from "react-icons/hi";
import { VscRepoPull } from "react-icons/vsc";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const customStyles = {
  content: {
    background: "#fdef98",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "600px",
  },
};


const MyButtonWithPopup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    closeModal();
  };
 
 
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [procedimento, setProcedimento] = useState();
  const [valor, setValor] = useState();


  
  const payload = {
    nome:nome,
    email:email,
    procedimento:procedimento,
    valor:valor,
  }
  async function main() {
   
    try {
 
      const request = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(payload)
      });
  
      const response = await request.json();
  
       console.log(response)
  
    } catch(error) {
      if (error.response) {
        toast.error('email ou senha invalidos')
        
      } else if (error.response.status === 500){
        alert("Erro de Servidor");
      }
  
    }
  
  }
  
 

  return (
    <div>
      <ToastContainer/>
      <a
          href="https://calendar.google.com/calendar/u/1/r?pli=1"
          target="black"
         className="agenda">
          <Button color="warning"><VscRepoPull/>Agenda</Button>
        </a>
      <Button onClick={openModal} className="btn_cadastra">
        <HiOutlineUserAdd />
        cadastrar
      </Button>
      

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Formulário Popup"
      >
        <h2 className="form_h2">Formulário:</h2>
        <form onSubmit={handleSubmit} className="Form_Pop">
          <label className="nome_pop">
            <HiUser className="icon_form" /> Nome:
            <input type="text" onChange={(e) => setNome(e.target.value)}/>
          </label>

          <label className="email_pop">
            <HiMail className="icon_form" /> Email:
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label className="Proce_pop">
            <HiClipboard className="icon_form" /> Procedimento:
            <input
              type="text"
              onChange={(e) => setProcedimento(e.target.value)}
            />
          </label>
          <label className="Proce_pop">
            <HiCurrencyDollar className="icon_form" /> valor:
            <input type="number" onChange={(e) => setValor(e.target.value)} />
          </label>
        </form>
        <div className="btn_pop">
          <Button variant="success"  onClick={main()}>Salvar</Button>
        </div>
      </Modal>
    </div>
  );
}


export default MyButtonWithPopup;
