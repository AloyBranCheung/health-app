import { useContext } from "react";
import AuthContext from "../../context/authContext";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { object, string, InferType } from "yup";
import { useNavigate } from "react-router-dom";

const loginFormSchema = object({
  email: string().required(),
  password: string().required(),
});

type LoginDetails = InferType<typeof loginFormSchema>;

const login = async (data: LoginDetails) => {
  const loginDetails = await loginFormSchema.validate(data);
  const response = await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/user/login`,
    loginDetails
  );
  return response.data;
};

export default function useLogin() {
  const { login: loginContext } = useContext(AuthContext);
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (loginDetails: LoginDetails) => login(loginDetails),
    onSuccess: (data) => {
      loginContext(data);
      navigate("/dashboard", { replace: true });
    },
  });
}
