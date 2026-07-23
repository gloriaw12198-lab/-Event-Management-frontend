import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout/AuthLayout";
import Input from "../../components/Input/Input";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import Button from "../../components/Button/Button";

const initialState = {
  fullName: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  role: "attendee",
};

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.password) e.password = "Password is required.";
    else if (form.password.length < 8) e.password = "Password must be at least 8 characters.";
    if (!form.confirmPassword) e.confirmPassword = "Please confirm your password.";
    else if (form.password !== form.confirmPassword) e.confirmPassword = "Passwords do not match.";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((err) => ({ ...err, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const e_ = validate();
    if (Object.keys(e_).length) return setErrors(e_);
    setLoading(true);
    // TODO: connect to Django backend
    setTimeout(() => {
      setLoading(false);
      navigate("/login");
    }, 1000);
  };

  return (
    <AuthLayout title="Create Account" subtitle="Join us and start exploring events">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          label="Full Name"
          name="fullName"
          placeholder="John Doe"
          value={form.fullName}
          onChange={handleChange}
          error={errors.fullName}
        />
        <Input
          label="Username (optional)"
          name="username"
          placeholder="johndoe"
          value={form.username}
          onChange={handleChange}
        />
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="john@example.com"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
        />
        <PasswordInput
          label="Password"
          name="password"
          placeholder="Min. 8 characters"
          value={form.password}
          onChange={handleChange}
          error={errors.password}
        />
        <PasswordInput
          label="Confirm Password"
          name="confirmPassword"
          placeholder="Repeat your password"
          value={form.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
        />

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Role</label>
          <div className="flex gap-6">
            {["attendee", "organizer"].map((r) => (
              <label key={r} className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 capitalize">
                <input
                  type="radio"
                  name="role"
                  value={r}
                  checked={form.role === r}
                  onChange={handleChange}
                  className="accent-purple-600"
                />
                {r}
              </label>
            ))}
          </div>
        </div>

        <Button type="submit" loading={loading} className="mt-2">
          Create Account
        </Button>
      </form>

      <p className="text-center text-sm text-gray-500 mt-5">
        Already have an account?{" "}
        <Link to="/login" className="text-purple-600 font-medium hover:underline">
          Login
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Register;
