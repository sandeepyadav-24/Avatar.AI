import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const navigate = useNavigate();
  const handleLogin = async () => {
    {
      /*
     const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    // Todo: Create a type for the response that you get back from the server
    const data = await response.json();
    console.log(data.message);
    if (data.token) {
      localStorage.setItem("token", data.token);
      navigate("/");
    } else {
      toast("invalid credentials");
    }
    */
    }
  };
  return (
    <div className="flex flex-row ">
      <div className="Image w-2/4">
        <img
          className="h-screen"
          src="https://clickup.com/blog/wp-content/uploads/2020/01/note-taking.png"
        ></img>
      </div>
      <div className="Data  h-screen w-2/4 bg-[#ebeafb] ">
        <div className="flex flex-col py-52 px-28">
          <h1 className="text-[#7671DE] font-extrabold text-5xl my-1">
            Sign in
          </h1>
          <h1 className="text-4xl font-bold ">to your account</h1>
          <label className="mt-5 font-bold">Email address</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="border-2 border-black mb-5 px-4 py-2"
          />
          <label className="font-bold">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your password"
            className="border-2 border-black px-4 p-2"
          />
          <button
            onClick={handleLogin}
            className="bg-black text-white py-3 mt-10"
          >
            Sign In
          </button>
          <ToastContainer />
          <div className="text-center my-2">
            Don't have an account?{" "}
            <Link className="text-[#7671DE]" to="/signup">
              Sign up
            </Link>
          </div>
          <Link className="text-[#7671DE] text-center" to="">
            Forgor password
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
