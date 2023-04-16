import { useState, useEffect } from "react"
import { ChoiceContainer, Container, Header, ResultContainer, ScoreContainer, ChoiceButton, PlayerPick, HousePick, Result, RulesContainer, Rules, RulesButton, ModeButton } from "./styles/App"
import Switch from 'react-switch'

function App() {

  const [playerChoice, setPlayerChoice] = useState('')
  const [houseChoice, setHouseChoice] = useState('')
  const [result, setResult] = useState('')
  const [choiceMade, setChoiceMade] = useState(false)
  const [score, setScore] = useState(0)
  const [winner, setWinner] = useState('')
  const [houseChoiceVisible, setHouseChoiceVisible] = useState(false)
  const [resutVisible, setResultVisible] = useState(false)
  const [rulesOpen, setRulesOpen] = useState(false)
  const [tbbtMode, setTbbtMode] = useState(false)

  function handleClick(choice) {
    setPlayerChoice(choice)
    generateHouseChoice()
    setChoiceMade(true)

    setTimeout(() => {
      setHouseChoiceVisible(true)
      
    }, 2000)

    setTimeout(() => {
      setResultVisible(true)
    }, 3000)
    
  }

  function generateHouseChoice() {
    const choices = ['rock', 'paper', 'scissors']
    const choicesTbbt = ['rock', 'paper', 'scissors', 'lizard', 'spock']
    // setHouseChoice(choices[Math.floor(Math.random() * choices.length)])
    // tbbtMode === true && setHouseChoice(choicesTbbt[Math.floor(Math.random() * choicesTbbt.length)])
    if (tbbtMode === true) {
      setHouseChoice(choicesTbbt[Math.floor(Math.random() * choicesTbbt.length)])
    } else {
      setHouseChoice(choices[Math.floor(Math.random() * choices.length)])
    }
  }

  function validateChoice() {
    if (playerChoice === 'rock' && (houseChoice === 'scissors' || houseChoice === 'lizard')) {
      setResult('win')
      setTimeout(() => {
        setScore(current => current + 1)
      }, 2000)

      setTimeout(() => {
        setWinner('player')
      }, 4000)
    }

    if (playerChoice === 'scissors' && (houseChoice === 'paper' || houseChoice === 'lizard')) {
      setResult('win')
      setTimeout(() => {
        setScore(current => current + 1)
      }, 2000)

      setTimeout(() => {
        setWinner('player')
      }, 4000)
    }

    if (playerChoice === 'paper' && (houseChoice === 'rock' || houseChoice === 'spock')) {
      setResult('win')
      setTimeout(() => {
        setScore(current => current + 1)
      }, 2000)

      setTimeout(() => {
        setWinner('player')
      }, 4000)
    }

    if (playerChoice === 'lizard' && (houseChoice === 'spock' || houseChoice === 'paper')) {
      setResult('win')
      setTimeout(() => {
        setScore(current => current + 1)
      }, 2000)

      setTimeout(() => {
        setWinner('player')
      }, 4000)
    }

    if (playerChoice === 'spock' && (houseChoice === 'scissors' || houseChoice === 'rock')) {
      setResult('win')
      setTimeout(() => {
        setScore(current => current + 1)
      }, 2000)

      setTimeout(() => {
        setWinner('player')
      }, 4000)
    }
    
    if (houseChoice === 'rock' && (playerChoice === 'scissors' || playerChoice === 'lizard')) {
      setResult('lose')
      setTimeout(() => {
        setScore(current => current - 1)
        score === 0 && setScore(0)
      }, 2000)

      setTimeout(() => {
        setWinner('house')
      }, 4000)
    }
    
    if (houseChoice === 'scissors' && (playerChoice === 'paper' || playerChoice === 'lizard')) {
      setResult('lose')
      setTimeout(() => {
        setScore(current => current - 1)
        score === 0 && setScore(0)
      }, 2000)
      
      setTimeout(() => {
        setWinner('house')
      }, 4000)
    }
    
    if (houseChoice === 'paper' && (playerChoice === 'rock' || playerChoice === 'spock')) {
      setResult('lose')
      setTimeout(() => {
        setScore(current => current - 1)
        score === 0 && setScore(0)
      }, 2000)

      setTimeout(() => {
        setWinner('house')
      }, 4000)
    }

    if (houseChoice === 'lizard' && (playerChoice === 'spock' || playerChoice === 'paper')) {
      setResult('lose')
      setTimeout(() => {
        setScore(current => current - 1)
        score === 0 && setScore(0)
      }, 2000)

      setTimeout(() => {
        setWinner('house')
      }, 4000)
    }

    if (houseChoice === 'spock' && (playerChoice === 'scissors' || playerChoice === 'rock')) {
      setResult('lose')
      setTimeout(() => {
        setScore(current => current - 1)
        score === 0 && setScore(0)
      }, 2000)

      setTimeout(() => {
        setWinner('house')
      }, 4000)
    }

    if (playerChoice !== '' && playerChoice === houseChoice) {
      setResult('draw')
    }
  }

  function playAgain() {
    setWinner('')
    setChoiceMade(false)
    setHouseChoiceVisible(false)
    setResultVisible(false)
    setPlayerChoice('')
    setHouseChoice('')
  }

  useEffect(() => {
    choiceMade === true && validateChoice()
  }, [choiceMade])
  
  return (
    <Container>
      <Header>
        <img src="/images/logo.svg" alt="Rock Paper Scissors Logo" />
        <ScoreContainer>
          <span>Score</span>
          <span className="score">{score}</span>
        </ScoreContainer>
      </Header>
      
      <ChoiceContainer className={`${choiceMade === true && 'hidden'} ${tbbtMode === true && 'tbbt-mode'}`}>
        <ChoiceButton className={`paper ${tbbtMode === true && 'tbbt-mode'}`} onClick={() => handleClick('paper')}>
          <div><img src="/images/icon-paper.svg" alt="Paper Icon" /></div>
        </ChoiceButton>

        <ChoiceButton className={`scissors ${tbbtMode === true && 'tbbt-mode'}`} onClick={() => handleClick('scissors')}>
          <div><img src="/images/icon-scissors.svg" alt="Scissors Icon" /></div>
        </ChoiceButton>

        <ChoiceButton className={`rock ${tbbtMode === true && 'tbbt-mode'}`} onClick={() => handleClick('rock')}>
          <div><img src="/images/icon-rock.svg" alt="Rock Icon" /></div>
        </ChoiceButton>
        
        {tbbtMode === true && <>
          <ChoiceButton className="lizard tbbt-mode" onClick={() => handleClick('lizard')}>
          <div><img src="/images/icon-lizard.svg" alt="Lizard Icon" /></div>
          </ChoiceButton>

          <ChoiceButton className="spock tbbt-mode" onClick={() => handleClick('spock')}>
            <div><img src="/images/icon-spock.svg" alt="Spock Icon" /></div>
          </ChoiceButton>
        </>}

      </ChoiceContainer>

      <ResultContainer className={`${choiceMade === true && 'visible'}`}>

        <PlayerPick>
          <span>You Picked</span>
          <ChoiceButton className={`${playerChoice} result ${winner === 'player' && 'winner'}`}>
            <div><img src={`${playerChoice !== '' && `/images/icon-${playerChoice}.svg`}`} alt={`${playerChoice} icon`} /></div>
          </ChoiceButton>
        </PlayerPick>

        <Result className={`${resutVisible === true && 'visible'}`}>
          <span>{result === 'draw' ? 'draw' : `you ${result}`}</span>
          <button onClick={playAgain}>Play Again</button>
        </Result>

        <HousePick className={`${houseChoiceVisible === true && 'button-visible'}`}>
          <span>The House Picked</span>
          <div className="circle"></div>
          <ChoiceButton className={`${houseChoice} ${winner === 'house' && 'winner'}`} >
            <div><img src={`${houseChoice !== '' && `/images/icon-${houseChoice}.svg`}`} alt={`${houseChoice} icon`} /></div>
          </ChoiceButton>
        </HousePick>
      </ResultContainer>

      <ModeButton>
        <span>TBBT Mode</span>
        <Switch 
          onChange={() => {
            setTbbtMode(current => !current)
          }}
          checked={tbbtMode === true}
          checkedIcon={false}
          uncheckedIcon={false}
          onColor={'#FFF'}
          height={15}
          width={40}
          handleDiameter={20}
        />
      </ModeButton>

      <RulesButton onClick={() => setRulesOpen(true)}>Rules</RulesButton>

      <RulesContainer className={`${rulesOpen === true && 'open'}`}> 
        <Rules>
          <h2>Rules</h2>
          <button onClick={() => setRulesOpen(false)}><img src="/images/icon-close.svg" alt="Close Button" /></button>
          <img src={`${tbbtMode === true ? "/images/image-rules-bonus.svg" : "/images/image-rules.svg"}`} alt="Rules" />
        </Rules>
      </RulesContainer>
    </Container>
  )
}

export default App
