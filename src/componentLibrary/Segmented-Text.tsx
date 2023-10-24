// OTPInput.tsx

import React, { useState, useRef, useEffect } from 'react';

interface OTPInputProps {
  length: number;
  onComplete: (code: string) => void;
}

const OTPInput: React.FC<OTPInputProps> = ({ length, onComplete }) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(''));
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (otp.join('').length === length) {
      onComplete(otp.join(''));
    }
  }, [otp, length, onComplete]);

  return (
    <div className="flex justify-center">
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          className="m-1 p-2 text-center border rounded w-12 h-12"
          type="tel"
          maxLength={1}
          value={otp[index]}
          ref={(ref) => (inputs.current[index] = ref)}
          onChange={(e) => {
            setOtp([...otp.slice(0, index), e.target.value, ...otp.slice(index + 1)]);
            if (e.target.value && index < length - 1) {
              inputs.current[index + 1]?.focus();
            }
          }}
          onFocus={(e) => e.target.select()}
        />
      ))}
    </div>
  );
};

export default OTPInput;
