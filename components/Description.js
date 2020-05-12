import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";

const bounceAnimation = keyframes`${bounce}`;

const DescriptionWrapper = styled.div`
  width: 100%;
  height: 90vh;
  background-image: linear-gradient(330deg, #feaf10, 23%, #feaf10 100%);
  .main_header {
    margin: 1em 1.5em 0.4em;
    padding: 0.1em 1em;
    text-align: center;
    font-size: 3em;
    font-family: "Playfair Display";
  }
  .main_header:hover {
    animation: 1s ${bounceAnimation};
    color: #fff;
  }
  .main_items {
    align-items: center;
    position: relative;
    display: flex;
  }
  .photo_card {
    width: 15rem;
    height: 25rem;
    margin: 0.3em 4em;
    padding: 1.5em 1em;
    justify-content: space-between;
    align-items: center;
    position: relative;
    display: flex;
    background: #1a1b1e;
    border-radius: 32px;
    box-shadow: -11px -11px 22px #242529, 11px 11px 22px #151518;
  }
  .photo_card h2 {
    font-style: italic;
    color: #fff;
    font-size: 1.5em;
    text-align: center;
    font-family: "Playfair Display";
  }
  .hobbies {
    list-style: inside;
    margin: 1.4em 1.5em;
    padding: 1em 0.4em;
    font-family: "Roboto";
    font-size: 1.4em;
  }
  .main_description {
    font-size: 2.4em;
    font-family: "Inconsolata", "Roboto";
    font-weight: 300;
    font-style: italic;
  }
  .main_description span {
    font-weight: bold;
    color: #fff;
  }
`;

const Description = () => (
  <DescriptionWrapper>
    <h1 className="main_header">Germán Grandas</h1>
    <div className="main_items">
      <div className="photo_card">
        <h2>Insert Some Random Photo</h2>
      </div>
      <div className="description">
        <h2 className="main_description">
          <span>Data Scientist</span> and sometimes <span>Web Developer</span>
          <br /> Also:
        </h2>
        <ul className="hobbies">
          <li>I drink a lot of coffee☕</li>
          <li>My music is weirder than yours 🤖</li>
          <li>I'm good looking at Stack Overflow 👨‍💻</li>
        </ul>
      </div>
    </div>
  </DescriptionWrapper>
);

export default Description;
