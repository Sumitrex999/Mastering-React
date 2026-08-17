import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useContextData } from "../context/AuthContext";
import toast from "react-hot-toast";
import { nanoid } from "nanoid";

export const useAuth = () => {
  const navigate = useNavigate();

  const {
    setLoggedInUser,
    setRegisteredUsers,
    registeredUsers,
  } = useContextData();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const loginHandler = (data) => {
    const user = registeredUsers.find(
      (val) =>
        val.email === data.email &&
        val.password === data.password
    );

    if (!user) {
      toast.error("Invalid credentials");
      return;
    }

    localStorage.setItem(
      "loggedInUser",
      JSON.stringify(user)
    );

    setLoggedInUser(user);

    navigate("/dashboard");

    toast.success("Login successful");
  };

  const registerHandler = (data) => {
    const newUser = {
      ...data,
      id: nanoid(),
    };

    const updatedUsers = [
      ...registeredUsers,
      newUser,
    ];

    setRegisteredUsers(updatedUsers);

    localStorage.setItem(
      "registeredUsers",
      JSON.stringify(updatedUsers)
    );

    toast.success("Registered successfully");

    navigate("/login");

    reset();
  };

  return {
    register,
    handleSubmit,
    reset,
    errors,
    loginHandler,
    registerHandler,
  };
};