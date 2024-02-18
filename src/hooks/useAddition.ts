import { useState } from "react"

export const useAddition = () => {
    const [value, setValue] = useState({ firstNumber: 0, secondNumber: 0 })
    const [addition, setAddition] = useState(0)

    function onChange(input: "firstNumber" | "secondNumber", value: string) {
        setValue((prev) => ({
            ...prev,
            [input]: value
        }))
    }
    
    function onAddition() {
        setAddition(Number(value.firstNumber) + Number(value.secondNumber))
    }

return { addition, onChange, onAddition }
}