import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    {
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
    }
  };
  return (
    <div className="flex flex-col md:flex-row h-screen ">
      {/** First Div Horizonatlly  */}
      <div className="flex-1 bg-black text-white flex  flex-col px-20 py-52 ">
        <div className="text-xl font-bold text-center">
          Welcome to Avatar.AI,<span className="text-[#946AFF]"> Buddy</span>
        </div>
        <div className="text-center px-28">
          <div className="flex flex-col">
            <label htmlFor="" className="text-[#B1B1B1] w-[430px] text-left">
              Email
            </label>
            <input
              type="text"
              placeholder="youremail@gmail.com"
              className="bg-[#1A1A1A] border-white border-2 rounded-md px-3 py-2 mb-3 w-[430px]"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-[#B1B1B1] w-[430px] text-left">
              Password
            </label>
            <input
              type="text"
              className="bg-[#1A1A1A] border-white border-2 rounded-md px-3 py-2 mb-3 w-[430px]"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <span
          className="bg-white text-[#8F66FD] font-semibold  my-3 p-2 rounded-md text-center w-[430px] mx-auto"
          onClick={handleLogin}
        >
          Login to Avatar.AI
        </span>
        <div className="text-[#7C7C7C] text-center my-5">
          Don't have an account?{" "}
          <span className="text-[#8F66FD]">
            <Link to="/signup">Sign up</Link>
          </span>
        </div>
      </div>
      {/** Second Div Horizontally */}
      <div className="flex-1 ">
        <img
          src="https://github.com/sandeepyadav-24/Article.Ai/blob/main/Client/public/login_theme.png?raw=true"
          alt=""
          className="h-screen"
        />
      </div>
    </div>
  );
};
export default Login;

{
  /*<div className="flex flex-row ">
  <div className="Image w-2/4">
    <img
      className="h-screen"
      src="https://clickup.com/blog/wp-content/uploads/2020/01/note-taking.png"
    ></img>
  </div>
  <div className="Data  h-screen w-2/4 bg-[#ebeafb] ">
    <div className="flex flex-col py-52 px-28">
      <h1 className="text-[#7671DE] font-extrabold text-5xl my-1">Sign in</h1>
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
      <button onClick={handleLogin} className="bg-black text-white py-3 mt-10">
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
</div>;
 */
}
