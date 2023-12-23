import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const onSubmitHandle = (e) => {
    e.preventDefault();
    navigate(`/searched/${input}`);
  };
  return (
    <FormStyle onSubmit={onSubmitHandle}>
      <div>
        <FaSearch />
        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </div>
    </FormStyle>
  );
};
const FormStyle = styled.form`
  display: flex;
  justify-content: left;
  width: 100%;
  div {
    padding-top: 1rem;
    position: relative;
    justify-content: center;
    width: 80%;
  }
  input {
    width: 100%;
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, 0%);
    color: white;
  }
`;
export default Search;
