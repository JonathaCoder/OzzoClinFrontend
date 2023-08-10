import axios from "axios";
import { useState } from "react";
import { HiOutlineUser } from "react-icons/hi";
import { VscUnlock } from "react-icons/vsc";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.data.ok == true) {
        window.location.href = '/home'
      } else {
        return '/'
      }
    } catch (error) {
      if (error.response) {
        toast.error('email ou senha invalidos')

      } else if (error.response.status === 500) {
        alert("Erro de Servidor");
      }



    }

  };


  return (


    <div className="login-form-wrap">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div>
        <h2>Login</h2>
        <form className="login-form">
          <HiOutlineUser className="email_icon" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <VscUnlock className="password_icon" />
          <input
            type="password"
            name="password"
            placeholder="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="btn-login"
            onClick={(e) => handleLogin(e)}

          >
            Login
          </button>
        </form>
        <p>{error}</p>
      </div>

    </div>
  );
}
export default Login;
