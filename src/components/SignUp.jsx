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

    // check password length
    if (password.length < 6) {
      alert("need more than 6 characters");
      return;
    }

    // check password matching
    if (password !== confirmPassword) {
      alert("need to be same password");
      return;
    }

    //Check for at least one lowercase letter
    const lowercaseRegex = /(?=.*[a-z])/;
    if (!lowercaseRegex.test(password)) {
      alert("must contain at least 1 lowercase");
      return;
    }

    // Check for at least one uppercase letter
    const uppercaseRegex = /(?=.*[A-Z])/;
    if (!uppercaseRegex.test(password)) {
      alert("must contain 1 uppercase");
      return;
    }

    // Check for at least one number (digit)
    const digitRegex = /(?=.*\d)/;
    if (!digitRegex.test(password)) {
      alert("must contain 1 digit");
      return;
    }

    // Check for at least one special character
    const specialCharRegex = /(?=.*[@$!%*?&])/;
    if (!specialCharRegex.test(password)) {
      alert("must contain 1 special character");
      return;
    }

    // finally password email data passed
    handleSignUp(email, password);
  };

  return (
    <>
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
        <label>Confirm Password:</label>
        <input
          className="border-2 ml-5"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
        />
        <br /> <br />
        <button type="submit" className="bg-gray-500 p-1">
          Sign Up
        </button>
      </form>
    </>
  );
};

export default SignUp;
