import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
const Recipe = () => {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("Instructions");
  const fetchDetails = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    console.log(detailData);
    setDetails(detailData);
  };
  useEffect(() => {
    fetchDetails(params.name);
  }, [params.name]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <Buttons>
        <Button
          className={activeTab === "Instructions" ? "active" : ""}
          onClick={() => setActiveTab("Instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "Ingredients" ? "active" : ""}
          onClick={() => setActiveTab("Ingredients")}
        >
          Ingredients
        </Button>
        </Buttons>
        {activeTab === "Instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }} />
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }} />
          </div>
        )}
        {activeTab === "Ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
};
const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    color: white;
    background: linear-gradient(35deg, #494949, #313131);
  }
  img{
    width: 30vw;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

const Buttons = styled.div`
display: flex;
justify-content: left;
`;
const Button = styled.button`
  cursor: pointer;
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 10rem;
  text-align: left;
`;
export default Recipe;
