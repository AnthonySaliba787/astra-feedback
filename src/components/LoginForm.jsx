import { NavLink } from "react-router-dom";

function LoginForm() {
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
                className="bg-neutral-100 shadow-md rounded-md indent-2 py-2 px-2 placeholder:text-sm placeholder:font-medium hover:bg-neutral-200 focus:bg-neutral-200 duration-300"
              />
            </div>
          </div>
          <NavLink to={"/"} className="w-full flex justify-center items-center">
            <p className="text-sm w-3/4 text-center px-2 cursor-pointer font-medium text-neutral-500 hover:text-neutral-800 duration-300">
              Don't have an account?
            </p>
          </NavLink>
          <button className="w-1/2 font-medium py-4 bg-neutral-600 text-neutral-100 shadow-md rounded-md hover:bg-neutral-500 focus:bg-neutral-500 active:bg-neutral-400 duration-300">
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
