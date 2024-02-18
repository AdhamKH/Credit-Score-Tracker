import { FormProvider, useForm } from "react-hook-form";
import { LoginContainer, LoginHeading } from "./style";

import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Tlogin } from "../../../types/loginType";
import { toast } from "react-toastify";
import StanderInput from "../../../shared/inputs/standerInput";
import LoginButton from "../../../shared/Buttons/loginButton";
import { SubmitButton } from "../../../shared/Buttons/SubmitButton";
import { login } from "../../../store/reducers/auth/authSlice";
import { allData } from "../../../staticData/loginData";
import { useEffect, useState } from "react";
import { tUsers } from "../../../types/usersEmail";

const LoginForm = () => {
  const dispatch = useDispatch();
  const methods = useForm<Tlogin>({ mode: "onChange" });
  const navigate = useNavigate();
  const [allUsers, setAllUsers] = useState<tUsers>([]);
  useEffect(() => {
    const users: string | null = localStorage.getItem("users") || "";
    console.log("users", users);
    if (users) {
      const usersPars = JSON.parse(users || "") as tUsers;
      setAllUsers(usersPars);
    }
  }, []);
  const onSubmit = async (data: Tlogin) => {
    const findUser: any = () => {
      const user = allUsers.find(
        (obj: Tlogin) =>
          obj.email === data.email && obj.password === data.password
      );
      return { email: user?.email, password: user?.password };
    };
    try {
      if (findUser()) {
        console.log("findUser", findUser());
        await dispatch(login(data));
        await navigate("/home/score-credit");
        await toast.success("Welcome");
      } else {
        console.log("false");
        await toast.error(`Wrong credentials`);
      }
    } catch (error: any) {
      console.log("error", error);
    }
  };

  return (
    <LoginContainer>
      <LoginHeading>Sign In </LoginHeading>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <StanderInput
            required
            name="email"
            placeholder="you@gmail.com"
            Label="Email"
          />
          <StanderInput
            required
            name="password"
            placeholder="password"
            Label="Password"
            type="password"
          />
          <Link to="/signup">
            <p className="notAmember">
              Don’t have an account yet ? <span>Sign up</span>
            </p>
          </Link>
          <SubmitButton type="submit">Login</SubmitButton>
        </form>
      </FormProvider>
      {/* <a className="right" href="">
        Forget Password ?
      </a> */}
      {/* <SignUpText>
        Don’t have an account yet ?
        <button onClick={() => setIsLogin(true)}> Sign up </button>
      </SignUpText> */}
    </LoginContainer>
  );
};

export default LoginForm;
