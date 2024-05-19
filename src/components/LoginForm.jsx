import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e, setInputFunction) => {
    setInputFunction(e.target.value);
  };

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      navigate("/feedback");
    }
  }, [navigate]);

  const handleLogin = () => {
    // Retrieve stored user data
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      // Decrypt the stored password
      const decryptedPassword = CryptoJS.AES.decrypt(
        userData.password,
        import.meta.env.VITE_SECRET_KEY
      ).toString(CryptoJS.enc.Utf8);

      // Check if email and password match stored data
      if (userData.email === email && decryptedPassword === password) {
        // Login successful, you can redirect the user or perform other actions
        navigate("/feedback");
      } else {
        // Handle incorrect email or password
        alert("Incorrect email or password!");
      }
    } else {
      // Handle case where no user data is stored
      alert("Cannot find any data available");
    }
  };

  return (
    <>
      <div className="max-w-xl min-h-screen mx-auto text-center flex flex-col justify-center items-center px-8 py-8">
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <h1 className="text-3xl font-semibold py-4">Login</h1>
          <div className="w-full flex flex-col justify-center items-center gap-4">
            <div className="w-3/4 flex flex-col justify-center gap-2">
              <h2 className="w-full text-base font-medium text-neutral-600 text-left px-2">
                Email
              </h2>
              <input
                type="email"
                placeholder="Email.."
                value={email}
                onChange={(e) => handleInputChange(e, setEmail)}
                className="bg-neutral-100 shadow-md rounded-md indent-2 py-2 px-2 placeholder:text-sm placeholder:font-medium hover:bg-neutral-200 focus:bg-neutral-200 duration-300"
              />
            </div>
            <div className="w-3/4 flex flex-col justify-center gap-2">
              <h2 className="w-full text-base font-medium text-neutral-600 text-left px-2">
                Password
              </h2>
              <input
                type="password"
                placeholder="Password.."
                value={password}
                onChange={(e) => handleInputChange(e, setPassword)}
                className="bg-neutral-100 shadow-md rounded-md indent-2 py-2 px-2 placeholder:text-sm placeholder:font-medium hover:bg-neutral-200 focus:bg-neutral-200 duration-300"
              />
            </div>
          </div>
          <NavLink to={"/"} className="w-full flex justify-center items-center">
            <p className="text-sm w-3/4 text-center px-2 cursor-pointer font-medium text-neutral-500 hover:text-neutral-800 duration-300">
              Don't have an account?
            </p>
          </NavLink>
          <button
            onClick={handleLogin}
            className="w-1/2 font-medium py-4 bg-neutral-600 text-neutral-100 shadow-md rounded-md hover:bg-neutral-500 focus:bg-neutral-500 active:bg-neutral-400 duration-300"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
