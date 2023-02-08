import "../styles/styles.css";
import useForm from "../hooks/useForm";
export const RegisterPage = () => {
  const { onChange, onSubmit, formData, resetForm } = useForm({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });
  const { name, email, password1, password2 } = formData;

  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={onSubmit} noValidate>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChange}
          className={`${name.trim().length <= 0 && "has-error"} `}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
        />

        <input
          type="password"
          name="password1"
          placeholder="Password"
          value={password1}
          onChange={onChange}
        />
        <input
          type="password"
          name="password2"
          placeholder="Repeat Password"
          value={password2}
          onChange={onChange}
        />

        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>
          Reset Form
        </button>
      </form>
    </div>
  );
};
