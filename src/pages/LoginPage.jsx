// src/pages/LoginPage.js
import { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

const LoginPage = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    avatar: null,
  });

  const [avatarPreview, setAvatarPreview] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setAvatarPreview(preview);
      setFormData((prev) => ({ ...prev, avatar: preview }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, password } = formData;

    if (!fullName.trim() || !email.trim() || !password.trim()) {
      setError('Please fill in all fields');
      return;
    }

    setError('');
    onLogin({
      name: formData.fullName,
      email: formData.email,
      avatar: formData.avatar,
    });
  };

  return (
    <div className="login-wrapper">
      <form className="login-dark w-full max-w-sm" onSubmit={handleSubmit}>
        <h2 className="text-2xl text-center font-bold">Login</h2>

        {error && <div className="form-error">{error}</div>}

        <label className="upload-label">
          Upload Avatar
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className="upload-input"
          />
        </label>

        {avatarPreview && (
          <img src={avatarPreview} alt="Avatar Preview" className="avatar-preview" />
        )}

        <Input
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
        />
        <Input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <Input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />

        <div className="login-btn-wrap">
          <Button label="Login" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
