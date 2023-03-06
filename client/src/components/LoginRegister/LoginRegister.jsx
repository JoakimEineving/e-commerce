import React, { useState } from "react";
import accountService from "../../services/accountService";
import { Alert} from "../index"
import useAlert from "../../hooks/useAlert";

const LoginRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertType, alertMessage, showAlert] = useAlert();
  const [signUp, setSignUp] = useState(false);



  const handleSignIn = async (e) => {
    e.preventDefault();
    console.log("submit clicked");
    try {
      const accountData = { email, password };
      const account = await accountService.signIn(accountData);
      if (account && account._id) {
        window.location.href = "/";
        showAlert("Logged in successfully!", "success");
      } else {
        showAlert("Invalid email or password", "error");
      }
    } catch (error) {
      showAlert("Error logging in. Please try again.", "error");
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const accountData = { email, password };
      const createdAccount = await accountService.signUp(accountData);
      if (createdAccount && createdAccount._id) {
        setEmail("");
        setPassword("");
        setSignUp(false);
        showAlert("Account created successfully! You can now sign in.", "success");
      }
    } catch (error) {
      console.error(error);
      showAlert("Error creating account. Please try again.", "error");
    }
  };
  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      showAlert("Logged out successfully!", "success");
    } catch (error) {
      console.error(error);
      showAlert("Error logging out. Please try again.", "error");
    }
  };

  return (
    <div>
      {localStorage.getItem("token") ? (
        <button className="btn " onClick={handleSignOut}>
          Logout
        </button>
      ) : (
        <label htmlFor="my-modal-4" className="btn">
          Sign In
        </label>
      )}

      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white justify-center">
              {signUp ? "Sign Up" : "Sign In"}
            </h1>
            <form
              onSubmit={signUp ? handleSignUp : handleSignIn}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@emailprovider.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  {!signUp && "Forgot Password?"}
                </a>
              </div>
              <button
                onClick={signUp ? handleSignUp : handleSignIn}
                className="btn-primary w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                {signUp ? "Sign Up" : "Sign In"}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                {signUp ? "Already have an account?" : "Don't have an account?"}
                <a
                  onClick={() => setSignUp(!signUp)}
                  href="#"
                  className="font-medium text-primary-600 dark:text-primary-500 "
                >
                  {signUp ? " Sign In" : " Sign Up"}
                </a>
              </p>
            </form>
          </div>
        </label>
      </label>
      
            {alertType && <Alert msg={alertMessage} type={alertType}/>}
          
    </div>
  );
};

export default LoginRegister;
