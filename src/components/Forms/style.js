import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  display: flex;
  width: 98%;
  gap: 10px;
  padding: 15px 0px;
  align-items: center;
  justify-content: space-around;
  margin: 30px auto;
  background-color: #fff;
  box-shadow: 0px 0px 10px #ccc;

  @media (max-width: 750px){
    display: grid;
  }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label``;

export const Input = styled.input`
  outline:none;
  border-radius: 5px;
  padding: 6px 10px;
  font-size: 15px;
  border: 1px solid #ccc;
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  
  input{
    margin-left: 20px;
    margin-right: 5px;
    accent-color: black;
    margin-top: 0;
  }
`;
export const Button = styled.button`
  padding: 15px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  background-color: #42b883;
`
