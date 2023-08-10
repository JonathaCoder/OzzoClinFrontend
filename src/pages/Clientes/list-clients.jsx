import { useEffect, useState } from "react"
import axios from "axios"



export default function ListUsers() {
  const [users, setUsers] = useState();

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get("http://localhost:3000/users");
        const result = await response.data;
        setUsers(result);
      }

      fetchData();

    } catch (error) {
      console.error(error);
    }
  })

  return (
    <div>
      <div>
        <MyButtonWithPopup />

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
          {users.map((Cliente) => (
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