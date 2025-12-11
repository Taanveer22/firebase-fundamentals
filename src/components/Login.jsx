import { useContext } from "react";
import { AuthContext } from "../layouts/MyLayout";

const Login = () => {
  const { handleLogIn } = useContext(AuthContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // final data passed
    handleLogIn(email, password);
  };
  return (
    <>
      <h1 className="text-2xl font-medium text-center mb-5">
        Welcome to Login Page
      </h1>
      <form onSubmit={handleFormSubmit}>
        <label>Email:</label>
        <input
          className="border-2 ml-5"
          type="email"
          name="email"
          placeholder="Your Email"
        />
        <br /> <br />
        <label>Password:</label>
        <input
          className="border-2 ml-5"
          type="password"
          name="password"
          placeholder="Your Password"
        />
        <br /> <br />
        <button type="submit" className="bg-gray-500 p-1">
          Log In
        </button>
      </form>
    </>
  );
};

export default Login;
