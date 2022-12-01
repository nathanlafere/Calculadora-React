
import { InputContainer, FirstDisplay } from './styles';


const Input = ({value, firstNumber, operation}) => {
  return (
      <InputContainer>
        <FirstDisplay>{firstNumber}{operation}</FirstDisplay>
        <input disabled value={value} placeholder="0"/>
      </InputContainer>
  );
};

export default Input;
