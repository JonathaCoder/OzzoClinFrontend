import React from "react";
import { Table } from "reactstrap";
import Button from "react-bootstrap/Button";
import { FaPen } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import MyButtonWithPopup from "../../components/Popup"
import { useEffect } from "react";

class Clientes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cliente: [
        {
          id:"0",
          nome: "jonatha",
          email: "jonatha@teste",
          procedimento: "limpeza",
          valor:'valor',
          
        },
      ],
    };
  }

  componentDidMount() {}
  componentWillUnmount() {}


atualizaNome= (e) => {
  this.setState(
    {
      nome: e.target.value
     
    }
  )
}

atualizaEmail= (e) => {
  this.setState(
    {
      email: e.target.value
    }
  )
}
atualizaProcedimento= (e) => {
  this.setState(
    {
      procedimento: e.target.value
    }
  )
}
atualizaValor= (e) => {
  this.setState(
    {
      valor: e.target.value
    }
  )
}
submit(){
  const Cliente = {
    nome: this.state.nome,
    email: this.state.email,
    procedimento: this.state.procedimento,
    valor: this.state.valor
  }
  this.cadastrarCliente(Cliente);
}

  render() {
    return (
      <div>
       <div>
        <MyButtonWithPopup/>
    
        </div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Email</th>
              <th>procedimento</th>
              <th>valor</th>
              <th>ações</th>
            </tr>
          </thead>
          <tbody>
            {this.state.cliente.map((Cliente) => (
              <tr>
                <th scope="row">{Cliente.id}</th>
                <td>{Cliente.nome}</td>
                <td>{Cliente.email}</td>
                <td>{Cliente.procedimento}</td>
                <td>{Cliente.valor}</td>
                <td>
                  <Button variant="success">
                    <FaPen />
                    Editar
                  </Button>{" "}
                  <Button variant="danger">
                    <FaRegTrashAlt />
                    Excluir
                  </Button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
         
      </div>

      
    );
  }
}
export default Clientes;
