import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordShort, setIsPasswordShort] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e, setInputFunction) => {
    setInputFunction(e.target.value);
  };

  const handleShortPassword = () => {
    if (password.length < 8) {
      setIsPasswordShort(true);
    } else {
      setIsPasswordShort(false);
    }
  };

  const handleSignUp = () => {
    if (password.length < 8) {
      setIsPasswordShort(true);
      return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validate username format
    const usernamePattern = /^[a-zA-Z0-9_]+$/;
    if (!usernamePattern.test(username)) {
      alert("Username can only contain letters, numbers, and underscores.");
      return;
    }

    // Retrieve existing user data
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      if (userData.username === username || userData.email === email) {
        alert("This email or username exists already!");
        return;
      }
    }

    // Encrypt the password before storing it locally
    const encryptedPassword = CryptoJS.AES.encrypt(
      password,
      import.meta.env.VITE_SECRET_KEY
    ).toString();

    // Store user data locally
    localStorage.setItem(
      "userData",
      JSON.stringify({ username, email, password: encryptedPassword })
    );

    navigate("/feedback");
  };

  return (
    <>
      <div className="max-w-xl min-h-screen mx-auto text-center flex flex-col justify-center items-center px-8 py-8">
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <h1 className="text-3xl font-semibold py-4">Create Account</h1>
          <div className="w-full flex flex-col justify-center items-center gap-4">
            <div className="w-3/4 flex flex-col justify-center gap-2">
              <h2 className="w-full text-base font-medium text-neutral-600 text-left px-2">
                Username
              </h2>
              <input
                type="text"
                placeholder="Username.."
                value={username}
                onChange={(e) => handleInputChange(e, setUsername)}
                className="bg-neutral-100 shadow-md rounded-md indent-2 py-2 px-2 placeholder:text-sm placeholder:font-medium hover:bg-neutral-200 focus:bg-neutral-200 duration-300"
              />
            </div>
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
              {isPasswordShort ? (
                <p className="text-sm font-medium text-red-400">
                  Password must be 8 characters minimum
                </p>
              ) : null}
            </div>
          </div>
          <NavLink
            to={"/login"}
            className="w-full flex justify-center items-center"
          >
            <p className="text-sm w-3/4 text-center px-2 cursor-pointer font-medium text-neutral-500 hover:text-neutral-800 duration-300">
              Already have an account?
            </p>
          </NavLink>
          <button
            onClick={handleSignUp}
            className="w-1/2 font-medium py-4 bg-neutral-600 text-neutral-100 shadow-md rounded-md hover:bg-neutral-500 focus:bg-neutral-500 active:bg-neutral-400 duration-300"
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
