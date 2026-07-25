import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout/AuthLayout";
import Input from "../../components/Input/Input";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import Button from "../../components/Button/Button";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login: _login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "", rememberMe: false });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.password) e.password = "Password is required.";
    else if (form.password.length < 8) e.password = "Password must be at least 8 characters.";
    return e;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
    setErrors((err) => ({ ...err, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const e_ = validate();
    if (Object.keys(e_).length) return setErrors(e_);
    setLoading(true);
    // TODO: call _login(token) with JWT from Django backend
    setTimeout(() => { setLoading(false); navigate("/"); }, 1000);
  };

  return (
    <AuthLayout title="Welcome Back" subtitle="Sign in to your account">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input label="Email" name="email" type="email" placeholder="john@example.com" value={form.email} onChange={handleChange} error={errors.email} />
        <PasswordInput label="Password" name="password" placeholder="Your password" value={form.password} onChange={handleChange} error={errors.password} />
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 cursor-pointer text-gray-600">
            <input type="checkbox" name="rememberMe" checked={form.rememberMe} onChange={handleChange} className="accent-purple-600" />
            Remember me
          </label>
          <Link to="/forgot-password" className="text-purple-600 hover:underline">Forgot Password?</Link>
        </div>
        <Button type="submit" loading={loading} className="mt-2">Login</Button>
      </form>
      <p className="text-center text-sm text-gray-500 mt-5">
        Don&apos;t have an account?{" "}
        <Link to="/register" className="text-purple-600 font-medium hover:underline">Register</Link>
      </p>
    </AuthLayout>
  );
};

export default Login;
