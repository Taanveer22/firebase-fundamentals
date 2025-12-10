import { useContext } from "react";
import { AuthContext } from "../layouts/MyLayout";

const SignUp = () => {

  const { handleSignUp } = useContext(AuthContext);
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    console.log(email, password, confirmPassword);
    handleSignUp(email, password);
  };

  return (
    <div className="">
      <form onSubmit={handleFormSubmit}>
        <label>Email:</label>
        <input
          className="boreder-2 ml-5"
          type="email"
          name="email"
          placeholder="Your Email"
        />
        <br /> <br />
        <label>Password:</label>
        <input
          className="boreder-2 ml-5"
          type="password"
          name="password"
          placeholder="Your Password"
        />
        <br /> <br />
        <label>Confirm Password:</label>
        <input
          className="boreder-2 ml-5"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
        />
        <br /> <br />
        <button type="submit" className="bg-gray-500 p-1">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
