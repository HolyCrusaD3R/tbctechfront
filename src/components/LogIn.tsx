import { useState } from "react";
import SubmitButton from "../components/SubmitButton";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accessToken, setAccessToken] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://134.122.73.198/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      console.log("Access token:", data.access_token);

      setAccessToken(data.access_token); // Save the access token if needed
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-[700px] mx-auto mt-12">
      <div className="rounded-xl border-tbcBlue border-2 p-10">
        <form onSubmit={handleSubmit}>
          <div className="my-5 flex flex-row gap-3">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              className="border-customGrey border-2 rounded-md pl-2"
              required
            />
          </div>
          <div className="my-5 flex flex-row gap-3">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="border-customGrey border-2 rounded-md pl-2"
              required
            />
          </div>
          <SubmitButton />
        </form>
      </div>
      {/* {accessToken && <p>Access token: {accessToken}</p>} */}
    </div>
  );
};

export default LogIn;
