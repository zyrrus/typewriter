import { useState, useEffect } from "react";
import useKeyPress from "../hooks/useKeyPress";
import { gen } from "../utils/generateText";
import { hiraToRoman } from "../utils/translateChar";

const numIncomingChars = 14;
const numOutgoingChars = numIncomingChars * 1.5;
const initialText = gen(numIncomingChars);

export default function Textbox({ showHint }) {
    const [outgoingChars, setOutgoingChars] = useState("");
    const [incomingChars, setIncomingChars] = useState(initialText);
    const [jpToken, setJpToken] = useState("");
    const [enToken, setEnToken] = useState("");
    const [enIndex, setEnIndex] = useState(0);

    const getNextToken = () => {
        // Check for special characters
        const prefixes = ["っ", "ッ"];
        const suffixes = ["ー", "ゃ", "ゅ", "ょ", "ャ", "ュ", "ョ"];

        const curChar = incomingChars[0];
        const nextChar = incomingChars[1];

        let jp = "";
        let en = "";

        if (prefixes.includes(curChar)) {
            // Check for prefixes
            const enChar = hiraToRoman(nextChar);
            en = `${enChar[0]}${enChar}`;
            jp = `${curChar}${nextChar}`;
        } else if (suffixes.includes(nextChar)) {
            // Check for suffixes
            const nextJpToken = `${curChar}${nextChar}`;
            jp = nextJpToken;
            if (nextChar === "ー") {
                const enChar = hiraToRoman(curChar);
                en = `${enChar}${enChar[enChar.length - 1]}`;
            } else en = hiraToRoman(nextJpToken);
        } else {
            // Handle single characters
            jp = curChar;
            en = hiraToRoman(curChar);
        }

        return [jp, en];
    };

    const updateTokens = () => {
        const [jp, en] = getNextToken();
        setJpToken(jp);
        setEnToken(en);
        return jp.length;
    };

    useEffect(() => {
        const charsToConsume = updateTokens();
        setIncomingChars(incomingChars.substring(charsToConsume));
    }, []);

    useKeyPress((key) => {
        let updatedOutgoingChars = outgoingChars;

        const targetKey = enToken[enIndex];

        // Correct key pressed
        if (key === targetKey) {
            // Add correct character
            updatedOutgoingChars += targetKey;

            // En token completed
            let newEnIndex = enIndex + 1;
            if (newEnIndex >= enToken.length) {
                newEnIndex = 0;

                // Add space between syllables
                updatedOutgoingChars += " ";

                // Consume old jp character
                let updatedIncomingChars = incomingChars;
                const charsToConsume = updateTokens();
                updatedIncomingChars =
                    updatedIncomingChars.substring(charsToConsume);

                // Add new characters to incoming string
                const addChar = () => {
                    updatedIncomingChars += gen();
                };
                if (jpToken.length > 1) addChar();
                addChar();

                setIncomingChars(updatedIncomingChars);
            }
            setEnIndex(newEnIndex);
        }

        setOutgoingChars(updatedOutgoingChars);
    });

    return (
        <div className='container centered-container'>
            <p className='text'>
                {/* Outgoing characters */}
                <span className='text__old text__side en'>
                    {outgoingChars
                        .slice(1 - numOutgoingChars)
                        .padStart(numOutgoingChars)}
                </span>

                {/* Current character */}
                {showHint ? (
                    <span className='text__current' data-hint={enToken}>
                        {jpToken}
                    </span>
                ) : (
                    <span className='text__current'>{jpToken}</span>
                )}

                {/* Incoming character */}
                <span className='text__new text__side jp'>
                    {incomingChars.substring(0, numIncomingChars)}
                </span>
            </p>
        </div>
    );
}
