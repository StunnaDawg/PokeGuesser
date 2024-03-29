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

const OTPInput: React.FC = () => {
  const { pokemonTitle } = usePokemon()
  const { setPokemonNameGuess } = useUserNameGuess()
  const { answerCorrectStatus, answerWrongStatus } = useAnswerStatus()
  const [pokemonNameLength, setPokemonNameLength] = useState<number>(
    pokemonTitle.length
  )
  const [otp, setOtp] = useState<string[]>(
    new Array(pokemonNameLength).fill("")
  )
  const [currentIndex] = useState<number>()
  let currentOTPIndexNumber: number = 0

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

    setPokemonNameGuess(newOtp.join(""))
  }

  const handleOnKeyDown = (
    e: KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    currentOTPIndexNumber = index
    e
  }
  useEffect(() => {
    inputRef.current?.focus()
  }, [currentOtpIndex, pokemonTitle])

  useEffect(() => {
    setPokemonNameLength(pokemonTitle.length)
    setOtp(Array(pokemonTitle.length).fill(""))
    setCurrentOtpIndex(0)
  }, [pokemonTitle])

  useEffect(() => {
    if (otp.length === currentIndex) {
      setOtp(Array(pokemonTitle.length).fill(""))
    }
  }, [otp])

  return (
    <div className="flex justify-center xl:text-4xl font-bold max-w-full ">
      <div className="max-w-32">
        {otp.map((_, index) => {
          return (
            <input
              key={index}
              ref={index == currentOtpIndex ? inputRef : null}
              className={`m-0.5 p-0.5 text-center border-4 border-black w-8 h-8 xl:w-32 xl:h-32 ${
                answerCorrectStatus === true ? "border-green-500" : ""
              } ${answerWrongStatus === true ? "focus: border-red-500" : ""}`}
              type="text"
              pattern="[A-Za-z]*"
              maxLength={1}
              onKeyDown={(e) => handleOnKeyDown(e, index)}
              onChange={onHandleChange}
              value={otp[index]}
            />
          )
        })}
      </div>
    </div>
  )
}

export default OTPInput
