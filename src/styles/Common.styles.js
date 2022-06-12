import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50vw;
  background-color: #fafafa;
  padding: 1rem;
  border-radius: 5px;

  @media (max-width: 1000px) {
    width: 90vw;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 0 0.5rem;
  border-radius: 5px;
  border: 3px solid rgba(30, 30, 100, 0.3);

  &:focus {
    outline: none;
    border: 3px solid rgba(30, 30, 100, 0.8);
  }
`;

export const Textarea = styled.textarea`
  resize: vertical;
  height: 100px;
  padding: 0 0.5rem;
  border-radius: 5px;
  border: 3px solid rgba(30, 30, 100, 0.3);

  &:focus {
    outline: none;
    border: 3px solid rgba(30, 30, 100, 0.8);
  }
`;

export const Error = styled.p`
  color: rgba(207, 40, 40, 1);
`;

export const Button = styled.button`
  width: 200px;
  align-self: center;
  padding: 0.2rem;
  background-color: rgba(30, 30, 100, 0.5);
  border-radius: 5px;
  border: 3px solid rgba(30, 30, 100, 0.3);
  color: white;

  &:hover {
    cursor: pointer;
    background-color: rgba(30, 30, 100, 0.7);
  }
`;
