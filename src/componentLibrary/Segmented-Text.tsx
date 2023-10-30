// OTPInput.tsx

import React, {
  useState,
  useRef,
  useEffect,
  ChangeEvent,
  KeyboardEvent,
} from "react"
import { useUserNameGuess } from "../context"
import { usePokemon } from "../context/pokemonContext"
import { useAnswerStatus } from "../context"

let currentOTPIndexNumber: number = 0

const OTPInput: React.FC = () => {
  const { pokemonTitle, pokemonSprite, setPokemonTitle, setPokemonSprite } =
  usePokemon()
  const { pokemonNameGuess, setPokemonNameGuess } = useUserNameGuess()
  const { answerCorrectStatus, setCorrectAnswerStatus, answerWrongStatus, setWrongAnswerStatus } = useAnswerStatus()
  const [pokemonNameLength, setPokemonNameLength] = useState<number>(pokemonTitle.length)
  const [otp, setOtp] = useState<string[]>(new Array(pokemonNameLength).fill(""))
  const [currentIndex, setCurrentIndex] = useState<number>()
  
  const [currentOtpIndex, setCurrentOtpIndex] = useState<number>(0)
  // const { pokemonNameGuess, setPokemonNameGuess } = useUserNameGuess()
  const inputRef = useRef<HTMLInputElement>(null)

  const onHandleChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    const { value } = target
    const newOtp: string[] = [...otp]
    newOtp[currentOTPIndexNumber] = value.substring(value.length - 1)

    if (!value) {
      setCurrentOtpIndex(currentOTPIndexNumber - 1)
    } else {
      setCurrentOtpIndex(currentOTPIndexNumber + 1)
    }
    setOtp(newOtp)

    setPokemonNameGuess(newOtp.join(''))
  }

  const handleOnKeyDown = (
    e: KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    currentOTPIndexNumber = index
    // if (e.key === "Backspace") {
    //   setCurrentOtpIndex(currentOTPIndexNumber - 1)
    // }
  }

  useEffect(() => {
      inputRef.current?.focus();
  }, [currentOtpIndex, pokemonTitle]);

  useEffect(() => {
    setPokemonNameLength(pokemonTitle.length);
    setOtp(Array(pokemonTitle.length).fill(""));
    setCurrentOtpIndex(0);
  }, [pokemonTitle]);

  useEffect(() => {
    if(otp.length === currentIndex) {
      setOtp(Array(pokemonTitle.length).fill(""));
    }
  }, [otp])

useEffect(() => {
  console.log('guess', pokemonNameGuess)
}, [pokemonNameGuess])

  return (
    <div className="flex justify-center">
      {otp.map((_, index) => {
        return (
        <input
          key={index}
          ref={index == currentOtpIndex ? inputRef : null}
          className= {`m-1 p-2 text-center border rounded w-12 h-12 ${answerCorrectStatus === true ? 'border-green-500' : ''} ${answerWrongStatus === true ? 'border-red-500' : ''}`}
          type="tel"
          maxLength={1}
          onKeyDown={(e) => handleOnKeyDown(e, index)}
          onChange={onHandleChange}
          value={otp[index]}
        />
      )})}
    </div>
  )
}

export default OTPInput
