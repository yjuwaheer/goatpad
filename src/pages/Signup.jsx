import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../schemas/formSchema";
import { useSignup } from "../hooks/useSignup";
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
const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginRedirect = styled.div`
  a {
    text-decoration: underline;

    &:hover {
      cursor: pointer;
      color: rgba(30, 30, 100, 0.8);
    }
  }
`;

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      displayName: "",
      email: "",
      password: "",
      password2: "",
    },
    resolver: yupResolver(signUpSchema),
  });

  const navigate = useNavigate();
  const { error, signup } = useSignup();

  async function handleSignUp({ displayName, email, password }) {
    await signup(email, password, displayName);

    navigate("/");
  }

  return (
    <SignupContainer>
      <h1>Sign Up</h1>
      <Form
        onSubmit={handleSubmit((data) => {
          handleSignUp(data);
        })}
      >
        <FormGroup>
          <Label htmlFor="displayName">Username</Label>
          <Input
            type="text"
            name="displayName"
            {...register("displayName")}
            placeholder="Username"
          />
          <Error>{errors.displayName?.message}</Error>
        </FormGroup>
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
          <Error>{errors.password?.message}</Error>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password2">Confirm Password</Label>
          <Input
            type="password"
            name="password2"
            {...register("password2")}
            placeholder="Confirm Password"
          />
          <Error>{errors.password2?.message}</Error>
        </FormGroup>

        <Button type="submit">Register</Button>
      </Form>
      <Error>{error && <p>{error}</p>}</Error>

      <LoginRedirect>
        Already have an account?
        <Link to="/login"> Login</Link>
      </LoginRedirect>
    </SignupContainer>
  );
}

export default Signup;
