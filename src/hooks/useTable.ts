import { multiplicate } from "@/shared/lib/multiplicate"
import { useState } from "react"

export const useTable = () => {
    const [table, setTable] = useState('')
    const [number, setNumber] = useState(0)

    function onChange(value: number) {
        setNumber(value)
    }

    function onPress() {
        setTable(multiplicate(number))
    }

    return { table, onChange, onPress }
}