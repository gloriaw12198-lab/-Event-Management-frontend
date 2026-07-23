import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout/AuthLayout";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return setError("Email is required.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError("Enter a valid email.");
    setLoading(true);
    // TODO: connect to Django backend
    setTimeout(() => { setLoading(false); setSent(true); }, 1000);
  };

  return (
    <AuthLayout title="Forgot Password" subtitle="We'll send you a reset link">
      {sent ? (
        <div className="text-center py-4">
          <p className="text-green-600 font-medium">Reset link sent!</p>
          <p className="text-sm text-gray-500 mt-1">Check your email inbox.</p>
          <Link to="/login" className="text-purple-600 text-sm hover:underline mt-4 inline-block">Back to Login</Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input label="Email" name="email" type="email" placeholder="john@example.com"
            value={email} onChange={(e) => { setEmail(e.target.value); setError(""); }} error={error} />
          <Button type="submit" loading={loading} className="mt-2">Send Reset Link</Button>
          <p className="text-center text-sm text-gray-500">
            <Link to="/login" className="text-purple-600 hover:underline">Back to Login</Link>
          </p>
        </form>
      )}
    </AuthLayout>
  );
};

export default ForgotPassword;
