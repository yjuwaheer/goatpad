import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../schemas/formSchema";

import { useLogin } from "../hooks/useLogin";
import styled from "styled-components";

import {
  Form,
  FormGroup,
  Label,
  Input,
  Error,
  Button,
} from "../styles/Common.styles";

// Styled components
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginHeading = styled.h1`
  margin-bottom: 10px;
`;

const SignupRedirect = styled.div`
  a {
    text-decoration: underline;

    &:hover {
      cursor: pointer;
      color: rgba(30, 30, 100, 0.8);
    }
  }
`;

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  const navigate = useNavigate();
  const { error, login } = useLogin();

  async function handleLogin({ email, password }) {
    await login(email, password);

    navigate("/");
  }

  return (
    <LoginContainer>
      <LoginHeading>Log In</LoginHeading>
      <Form
        onSubmit={handleSubmit((data) => {
          handleLogin(data);
        })}
      >
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            {...register("email")}
            placeholder="Email"
          />
          <Error>{errors.email?.message}</Error>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            {...register("password")}
            placeholder="Password"
          />
          <p>{errors.password?.message}</p>
        </FormGroup>

        <Button type="submit">Login</Button>
      </Form>

      {error && <Error>{error}</Error>}

      <SignupRedirect>
        Don&apos;t have an account yet?
        <Link to="/signup"> Sign Up!</Link>
      </SignupRedirect>
    </LoginContainer>
  );
}

export default Login;
