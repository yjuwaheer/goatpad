import React from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { postFormSchema } from "../../schemas/postFormSchema";
import styled from "styled-components";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Textarea,
  Error,
  Button,
} from "../../styles/Common.styles";

import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../config/firebase.ts";
import { useAuthContext } from "../../hooks/useAuthContext";

// Styled components
const CreatePostContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 500px;
  margin: 50px;
  position: sticky;
  top: 0;

  @media (max-width: 1150px) {
    position: static;
    margin: 0;
    width: 100%;
  }
`;

const PostForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      postBody: "",
      topics: [],
    },
    resolver: yupResolver(postFormSchema),
  });

  const { user } = useAuthContext();
  const navigate = useNavigate();

  const onSubmit = async (data, e) => {
    try {
      const newTopics = data.topics.split(",").map((topic) => topic.trim());
      const allTopics = [user.displayName || user.email, ...newTopics];
      const docRef = await addDoc(collection(db, "posts"), {
        ...data,
        topics: [...allTopics],
        uid: user.uid,
        timestamp: serverTimestamp(),
      });
      console.log("Document written with ID: ", docRef.id);
      e.target.reset();
    } catch (err) {
      console.error("Error adding document: ", err);
    }

    navigate("/");
  };

  return (
    <CreatePostContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            name="title"
            {...register("title")}
            placeholder="Enter a title"
          />
          <Error>{errors.title?.message}</Error>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="title">Topics</Label>
          <Input
            type="text"
            name="topics"
            {...register("topics")}
            placeholder="Enter topics separated by commas"
          />
          <Error>{errors.title?.message}</Error>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="postBody">Body</Label>
          <Textarea
            name="postBody"
            {...register("postBody")}
            placeholder="Enter your post"
            rows="6"
          />
          <Error>{errors.postBody?.message}</Error>
        </FormGroup>
        <Button type="submit">Create Post</Button>
      </Form>
    </CreatePostContainer>
  );
};

export default PostForm;
