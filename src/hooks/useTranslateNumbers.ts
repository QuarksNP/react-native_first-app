import { useState } from "react";

export const useTranslateNumbers = () => {
  const [numberTransalted, setNumberTransalted] = useState("");

  function handleTranslate(num: number) {
    const units = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
    const specials = [
      "diez",
      "once",
      "doce",
      "trece",
      "catorce",
      "quince",
      "dieciséis",
      "diecisiete",
      "dieciocho",
      "diecinueve",
    ];
    const tens = ["", "", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];
    const hundreds = [
      "",
      "ciento",
      "doscientos",
      "trescientos",
      "cuatrocientos",
      "quinientos",
      "seiscientos",
      "setecientos",
      "ochocientos",
      "novecientos",
    ];
    const Thousands = ["", "mil"];

    const thousand = Math.floor(num / 1000);
    const c = Math.floor((num % 1000) / 100);
    const d = Math.floor((num % 100) / 10);
    const u = num % 10;

    setNumberTransalted("");

    if (thousand > 0) {
      setNumberTransalted((prev) => (prev += Thousands[thousand] + " "));
    }

    if (c > 0) {
      if (num === 100) {
        setNumberTransalted((prev) => (prev += "cien "));
      } else {
        setNumberTransalted((prev) => (prev += hundreds[c] + " "));
      }
    }

    if (d > 0) {
      if (d === 1 && u > 0) {
        setNumberTransalted((prev) => (prev += specials[u] + " "));
      } else {
        setNumberTransalted((prev) => (prev += tens[d] + " "));
        if (d === 2 && u !== 0) {
          setNumberTransalted((prev) => (prev += "y "));
        }
      }
    }

    if (u > 0) {
      if (!(d === 1 || num === 10)) {
        setNumberTransalted((prev) => (prev += units[u] + " "));
      }
    }

    if (num === 0) {
      setNumberTransalted((prev) => (prev += "cero "));
    }

    if (num > 1000) {
      setNumberTransalted("invalid");
    }
  }

  numberTransalted.trim();

  return { numberTransalted, handleTranslate };
};
