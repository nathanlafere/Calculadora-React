
import Input from './components/Input';
import Button from './components/Button';
import { Container, Content, Row } from './styles';
import { useState } from 'react'; 


const App = () => {
  const [currentNumber, setcurrentNumber] = useState('');
  const [firstNumber, setFirstNumber] = useState('');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setcurrentNumber('');
    setFirstNumber('');
    setOperation('');
  };
  const handleAddNumber = (number) => {
    setcurrentNumber(prev => `${prev}${number}`)
  };
  const handleErase = () => {
    setcurrentNumber(prev => prev.slice(0,-1))
  }

  const handleSumNumbers = () => {
    const sum = Number(firstNumber) + Number(currentNumber);
    setcurrentNumber('');
    setOperation('+');
    setFirstNumber(String(sum));
  }

  const handleMinusNumbers = () => {
    const sum = Number(firstNumber) + Number(currentNumber);
    setcurrentNumber('');
    setOperation('-');
    setFirstNumber(String(sum));
  }

  const handleMultNumbers = () => {
    const sum = Number(firstNumber) + Number(currentNumber);
    setcurrentNumber('');
    setOperation('*');
    setFirstNumber(String(sum));
  }

  const handleDivNumbers = () => {
    const sum = Number(firstNumber) + Number(currentNumber);
    setcurrentNumber('');
    setOperation('/');
    setFirstNumber(String(sum));
  }

  const handleEquals = () => {
    if(firstNumber !== '' && operation !== '' && currentNumber !== ''){
      switch(operation){
        case '+':
          setcurrentNumber(String(Number(firstNumber) + Number(currentNumber)));
          setFirstNumber('');
          setOperation('');
          break;
        case '-':
          setcurrentNumber(String(Number(firstNumber) - Number(currentNumber)));
          setFirstNumber('');
          setOperation('');
          break;
        case '*':
          setcurrentNumber(String(Number(firstNumber) * Number(currentNumber)));
          setFirstNumber('');
          setOperation('');
          break;
        case '/':
          setcurrentNumber(String(Number(firstNumber) / Number(currentNumber)));
          setFirstNumber('');
          setOperation('');
          break;
        default:
          break;
      }
    }
  }
  return (
    <Container>
      <Content>
        <Input value={currentNumber} operation={operation} firstNumber={firstNumber}/>
        <Row>
          <Button label="(" onClick={() => handleAddNumber('(')}/>
          <Button label=")" onClick={() => handleAddNumber(')')}/>
          <Button label="C" onClick={handleOnClear}/>
          <Button label="←" onClick={handleErase}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="÷" onClick={handleDivNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="x" onClick={handleMultNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="-" onClick={handleMinusNumbers}/>
        </Row>
        <Row>
          <Button label="." onClick={() => handleAddNumber('.')}/>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="=" onClick={handleEquals}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
