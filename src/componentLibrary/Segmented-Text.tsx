// OTPInput.tsx

import React, { useState, useRef, useEffect, ChangeEvent } from 'react';
import { useUserNameGuess } from '../context';

interface OTPInputProps {
  length: number;
  onComplete: (code: string) => void;
}

const OTPInput: React.FC<OTPInputProps> = ({ length, onComplete }) => {
  const [otp, setOtp] = useState<string[]>([])
  const [focused, setFocused] = useState<boolean>(false)
  const inputs = useRef<(HTMLInputElement | null)[]>([]);
  // const { pokemonNameGuess, setPokemonNameGuess } = useUserNameGuess()
  
  const onInputChange = (userInput: ChangeEvent<HTMLInputElement>) => {
    const newTypedValue = userInput.target.value
    setOtp([...otp, newTypedValue])
    console.log(otp)
  }

  const onLetterKeyPress = (event: any) => {
    const letterPattern = /^[a-zA-Z]$/;
    if (letterPattern.test(event.key)) {
    const currentIndex  = inputs.current.findIndex((input) => input = event.target)
    const nextInput = inputs.current[currentIndex + 1]
    
    if(nextInput) {
      nextInput.focus()
    }
    }

    
  }

  useEffect(() => {
    console.log(focused)
  }, [focused])

  return (
    <div className="flex justify-center">
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          ref={(e) =>(inputs.current[index] = e)}
          className="m-1 p-2 text-center border rounded w-12 h-12"
          type="tel"
          maxLength={1}
          onChange={onInputChange}
          onKeyDown={(event) => {onLetterKeyPress(event); console.log('key pressed')}}
        />
      ))}
    </div>
  );
};

export default OTPInput;
