import styled, { keyframes } from "styled-components";
import { shade } from 'polished'

const scaleFowardBack = keyframes`
  0% {
		transform: scale(1);
	}

  50% {
    transform: scale(0.5);
  }

	100% {
		transform: scale(1);
	}
`

const entrance = keyframes`
  0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
`

const entranceScale = keyframes`
  0% {
		transform: scale(0);
	}

	100% {
		transform: scale(1);
	}
`
const winnerShadow = keyframes`
  0% {
		box-shadow: 0px 0px 0px 0px rgb(255 255 255 / 2%),
                0px 0px 0px 0px rgb(255 255 255 / 2%),
                0px 0px 0px 0px rgb(255 255 255 / 2%);
	}

	50% {
		box-shadow: 0px 0px 0px 210px rgb(255 255 255 / 2%),
                0px 0px 0px 120px rgb(255 255 255 / 2%),
                0px 0px 0px 30px rgb(255 255 255 / 2%);
	}

	100% {
		box-shadow: 0px 0px 0px 0px rgb(255 255 255 / 2%),
                0px 0px 0px 0px rgb(255 255 255 / 2%),
                0px 0px 0px 0px rgb(255 255 255 / 2%);
	}
`

const winnerShadowMobile = keyframes`
  0% {
		box-shadow: 0px 0px 0px 0px rgb(255 255 255 / 2%),
                0px 0px 0px 0px rgb(255 255 255 / 2%),
                0px 0px 0px 0px rgb(255 255 255 / 2%);
	}

	50% {
		box-shadow: 0px 0px 0px 50px rgb(255 255 255 / 2%),
                0px 0px 0px 30px rgb(255 255 255 / 2%),
                0px 0px 0px 10px rgb(255 255 255 / 2%);
	}

	100% {
		box-shadow: 0px 0px 0px 0px rgb(255 255 255 / 2%),
                0px 0px 0px 0px rgb(255 255 255 / 2%),
                0px 0px 0px 0px rgb(255 255 255 / 2%);
	}
`

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  min-height: 100lvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  gap: 50px;
  position: relative;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  border-radius: 15px;
  outline: 3px solid hsl(217, 16%, 45%);
  max-width: 700px;
  width: 100%;

  @media (max-width: 960px) {
    img {
      width: 100px;
    }
  }
`

export const ScoreContainer = styled.div`
  background-color: #FFF;
  height: 100%;
  padding: 20px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  line-height: .9;

  @media (max-width: 950px) {
    padding: 10px 25px;
  }

  span {
    color: hsl(229, 64%, 46%);
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 2px;

    @media (max-width: 950px) {
      font-size: 14px;
    }
  }

  .score {
    color: hsl(229, 25%, 31%);
    font-size: 75px;
    font-weight: 700;

    @media (max-width: 950px) {
      font-size: 48px;
    }
  }
`

export const ChoiceContainer = styled.div`
  background-image: url('/images/bg-triangle.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-position-y: 70%;
  background-size: 55%;
  max-width: 600px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 25px;
  animation: ${entrance} 1s ease 0s 1 normal forwards;

  @media (max-width: 950px) {
    max-width: 375px;
  }

  &.tbbt-mode {
    background-image: url('/images/bg-pentagon.svg');
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-areas: 'sci sci'
                          'spock paper'
                          'liz rock';
    animation: ${entranceScale} 1s ease 0s 1 normal forwards;
  }

  &.hidden {
    display: none;
  }

`

export const ChoiceButton = styled.button`
  width: 200px;
  height: 200px;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .2s;
  
  &.tbbt-mode {
    width: 130px;
    height: 130px;

    div {
      img {
        width: auto;
      }
    }

    @media (max-width: 950px) {
      width: 100px;
      height: 100px;

      div {
        img {
          width: 50%;
        }
      }
    }

    @media (max-width: 400px) {
      width: 80px;
      height: 80px;
    }
  }

  @media (max-width: 950px) {
    width: 130px;
    height: 130px;
  }

  &.winner {
    animation: ${winnerShadow} 2s linear 0s infinite normal forwards;
    
    @media (max-width: 950px) {
      animation: ${winnerShadowMobile} 2s linear 0s infinite normal forwards;
    }
  }

  &.paper {
    background-image: radial-gradient(circle, hsl(230, 89%, 62%), hsl(230, 89%, 65%));
    filter: drop-shadow(0px 10px 0px ${shade(0.1, 'hsl(230, 89%, 62%)')});
    
    &.tbbt-mode {
      filter: drop-shadow(0px 5px 0px ${shade(0.1, 'hsl(230, 89%, 62%)')});
      grid-area: paper;
      margin: auto;
    }
  }

  &.scissors {
    background-image: radial-gradient(circle, hsl(39, 89%, 49%), hsl(40, 84%, 53%));
    filter: drop-shadow(0px 10px 0px ${shade(0.1, 'hsl(39, 89%, 49%)')});

    &.tbbt-mode {
      filter: drop-shadow(0px 5px 0px ${shade(0.1, 'hsl(39, 89%, 49%)')});
      grid-area: sci;
      margin: auto;
      position: relative;
      top: 20px;
    }
  }

  &.rock {
    background-image: radial-gradient(circle, hsl(349, 71%, 52%), hsl(349, 70%, 56%));
    filter: drop-shadow(0px 10px 0px ${shade(0.1, 'hsl(349, 71%, 52%)')});

    &.tbbt-mode {
      filter: drop-shadow(0px 5px 0px ${shade(0.1, 'hsl(349, 71%, 52%)')});
      grid-area: rock;
    }
  }

  &.lizard {
    background-image: radial-gradient(circle, hsl(261, 73%, 60%), hsl(261, 72%, 63%));
    filter: drop-shadow(0px 10px 0px ${shade(0.1, 'hsl(261, 73%, 60%)')});

    &.tbbt-mode {
      filter: drop-shadow(0px 5px 0px ${shade(0.1, 'hsl(261, 73%, 60%)')});
      grid-area: liz;
      margin-left: auto;
    }
  }

  &.spock {
    background-image: radial-gradient(circle, hsl(189, 59%, 53%), hsl(189, 58%, 57%));
    filter: drop-shadow(0px 10px 0px ${shade(0.1, 'hsl(189, 59%, 53%)')});
    
    div {
      img {
        position: relative;
        left: 2px;
      }
    }

    &.tbbt-mode {
      filter: drop-shadow(0px 5px 0px ${shade(0.1, 'hsl(189, 59%, 53%)')});
      grid-area: spock;
      margin: auto;
    }
  }

  &:hover {
    opacity: 0.8;
  }
    
  div {
    width: 75%;
    height: 75%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #FFF;
    box-shadow: inset #00000030 0px 10px;

    img {
      width: 45%;
    }
  }
`

export const ResultContainer = styled.div`
  max-width: 950px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 50px;
  margin-bottom: 25px;
  animation: ${entrance} 1s ease 0s 1 normal forwards;
  display: none;

  @media (max-width: 950px) {
    justify-content: center;
    align-items: flex-start;
    height: 363px;
  }

  &.visible {
    display: flex;
  }
`

export const PlayerPick = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;

  @media (max-width: 950px) {
    gap: 30px;
    flex-direction: column-reverse;
    width: 40%;
  }

  Button {
    width: 280px;
    height: 280px;
    cursor: auto;

    @media (max-width: 950px) {
      width: 130px;
      height: 130px;
    }
    
    &:hover {
      opacity: 1;
    }
  }

  span {
    color: #FFF;
    text-transform: uppercase;
    font-size: 24px;
    letter-spacing: 3px;

    @media (max-width: 950px) {
      font-size: 10px;
    }
  }
`


export const HousePick = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;

  @media (max-width: 950px) {
    gap: 30px;
    flex-direction: column-reverse;
    width: 40%;
  }

  .circle {
    width: 280px;
    height: 280px;
    background-color: transparent;
    border-radius: 50%;
    position: relative;
    animation: ${scaleFowardBack} 1s linear infinite;
    /* display: none; */

    @media (max-width: 950px) {
      width: 130px;
      height: 130px;
    }
    
    &:after {
      content: '';
      position: absolute;
      width: 75%;
      height: 75%;
      top: 12.5%;
      left: 12.5%;
      border-radius: 50%;
      background-color: #00000020;
    }
  }

  Button {
    width: 280px;
    height: 280px;
    cursor: auto;
    display: none;
    animation: ${entranceScale} 1s ease 0s 1 normal forwards;

    @media (max-width: 950px) {
      width: 130px;
      height: 130px;
    }

    &:hover {
      opacity: 1;
    }
  }

  &.button-visible {
    .circle {
      display: none;
    }

    Button {
      display: flex;
    }
  }

  span {
    color: #FFF;
    text-transform: uppercase;
    font-size: 24px;
    letter-spacing: 3px;

    @media (max-width: 950px) {
      font-size: 10px;
    }
  }
`

export const Result = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  display: none;
  animation: ${entranceScale} 1s ease 0s 1 normal forwards;

  @media (max-width: 950px) {
    order: 1;
  }

  &.visible {
    display: flex;
  }

  span {
    color: #FFF;
    font-size: 58px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  
  button {
    border: none;
    font-size: 16px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: hsl(229, 25%, 31%);
    font-weight: 600;
    background: #FFF;
    padding: 15px 0;
    width: 100%;
    border-radius: 10px;
    cursor: pointer;
    transition: all .2s;

    &:hover {
      color: hsl(349, 71%, 52%);
    }
  }
`

export const ModeButton = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  margin-bottom: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  animation: ${entranceScale} 1s ease 0s 1 normal forwards;

  &.hidden {
    display: none;
  }

  span {
    text-transform: uppercase;
    letter-spacing: 3px;
    color: #FFF;
  }
`

export const RulesButton = styled.button`
  border: none;
  text-transform: uppercase;
  color: #FFF;
  border-radius: 7px;
  border: 1px solid #FFF;
  padding: 10px 40px;
  font-size: 16px;
  letter-spacing: 3px;
  background: transparent;
  cursor: pointer;
  transition: all .2s;
  margin-left: auto;

  &:hover {
    background: #FFF;
    color: hsl(229, 25%, 31%);
  }
`

export const RulesContainer = styled.div`
  background: #00000050;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  align-items: center;
  justify-content: center;
  display: none;
  /* padding: 30px; */

  &.open {
    display: flex;
  }
`

export const Rules = styled.div`
  max-width: 400px;
  width: 100%;
  height: 400px;
  border-radius: 10px;
  background: #FFF;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 35px;
  animation: ${entranceScale} 1s ease 0s 1 normal forwards;

  @media (max-width: 950px) {
    max-width: none;
    width: 100%;
    height: 100%;
    border-radius: 0;
    flex-direction: column;
    justify-content: space-around;
  }
  

  h2 {
    color: hsl(229, 25%, 31%);
    text-transform: uppercase;
    font-size: 28px;
  }

  button {
    border: none;
    background: transparent;
    cursor: pointer;
    height: max-content;
    padding: 5px;
    transition: all .1s;

    @media (max-width: 950px) {
      order: 1;
    }

    &:hover {
      filter: brightness(10%);
    }
    
    img {
      display: block;
      margin: auto;
      width: 20px;
      height: 20px;

      @media (max-width: 950px) {
        width: 30px;
        height: 30px;
      }
    }
  }

  img {
    width: 100%;
    margin: auto;

    @media (max-width: 950px) {
      margin: 0;
      width: 60%;
    }

    @media (max-width: 550px) {
      margin: 0;
      width: 100%;
    }
  }
`