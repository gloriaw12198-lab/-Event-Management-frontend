import { useState } from "react";
import Avatar from "../Avatar/Avatar";
import Input from "../Input/Input";

const EditProfileForm = ({ profile, onSave, onCancel }) => {
  const [form, setForm] = useState({
    fullName: profile.fullName,
    email: profile.email,
    phone: profile.phone || "",
  });
  const [avatar, setAvatar] = useState(profile.avatar);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((err) => ({ ...err, [name]: "" }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setAvatar(reader.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const e_ = validate();
    if (Object.keys(e_).length) return setErrors(e_);
    onSave({ ...form, avatar });
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-5">Edit Profile</h3>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Avatar upload */}
        <div className="flex justify-center mb-2">
          <Avatar src={avatar} name={form.fullName} size="lg" onChange={handleAvatarChange} />
        </div>

        <Input
          label="Full Name"
          name="fullName"
          placeholder="Your full name"
          value={form.fullName}
          onChange={handleChange}
          error={errors.fullName}
        />
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="your@email.com"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
        />
        <Input
          label="Phone Number"
          name="phone"
          type="tel"
          placeholder="+254 7XX XXX XXX"
          value={form.phone}
          onChange={handleChange}
        />

        <div className="flex gap-3 mt-2">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 py-2.5 border border-gray-300 text-gray-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors text-sm"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors text-sm"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfileForm;
