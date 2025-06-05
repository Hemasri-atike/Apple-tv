import React, { useState } from "react";
import "../Styles/Register.css";

const Register = () => {
  const [form, setForm] = useState({ username: "", password: "", role: "user" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    // Optional: basic validation
    if (form.username.trim() === "" || form.password.trim() === "") {
      alert("Username and Password are required!");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("Registration Successful!");
        setForm({ username: "", password: "", role: "user" }); // Reset form
      } else {
        alert("Registration failed!");
      }
    } catch (error) {
      alert("Something went wrong!");
      console.error("Register error:", error);
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleRegister}>
        <h2>Create Account</h2>
        <input
          name="username"
          value={form.username}
          placeholder="Username"
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          value={form.password}
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <select name="role" value={form.role} onChange={handleChange}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Register</button>
        <p>Already have an account? <a href="/login">Login</a></p>
      </form>
    </div>
  );
};

export default Register;
