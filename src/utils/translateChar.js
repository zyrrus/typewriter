const charMap = {
    "。": ".",
    "、": ",",
    "「": '"',
    "」": '"',
    "？": "?",

    あ: "a",
    い: "i",
    う: "u",
    え: "e",
    お: "o",
    ん: "n",

    か: "ka",
    き: "ki",
    く: "ku",
    け: "ke",
    こ: "ko",
    きゃ: "kya",
    きゅ: "kyu",
    きょ: "kyo",

    さ: "sa",
    し: "shi",
    す: "su",
    せ: "se",
    そ: "so",
    しゃ: "sha",
    しゅ: "shu",
    しょ: "sho",

    た: "ta",
    ち: "chi",
    つ: "tsu",
    て: "te",
    と: "to",
    ちゃ: "cha",
    ちゅ: "chu",
    ちょ: "cho",

    な: "na",
    に: "ni",
    ぬ: "nu",
    ね: "ne",
    の: "no",
    にゃ: "nya",
    にゅ: "nyu",
    にょ: "nyo",

    は: "ha",
    ひ: "hi",
    ふ: "fu",
    へ: "he",
    ほ: "ho",
    ひゃ: "hya",
    ひゅ: "hyu",
    ひょ: "hyo",

    ま: "ma",
    み: "mi",
    む: "mu",
    め: "me",
    も: "mo",
    みゃ: "mya",
    みゅ: "myu",
    みょ: "myo",

    や: "ya",
    ゆ: "yu",
    よ: "yo",

    ら: "ra",
    り: "ri",
    る: "ru",
    れ: "re",
    ろ: "ro",
    りゃ: "rya",
    りゅ: "ryu",
    りょ: "ryo",

    わ: "wa",
    ゐ: "wi",
    ゑ: "we",
    を: "wo",

    が: "ga",
    ぎ: "gi",
    ぐ: "gu",
    げ: "ge",
    ご: "go",
    ぎゃ: "gya",
    ぎゅ: "gyu",
    ぎょ: "gyo",

    ざ: "za",
    じ: "ji",
    ず: "zu",
    ぜ: "ze",
    ぞ: "zo",
    じゃ: "ja",
    じゅ: "ju",
    じょ: "jo",

    だ: "da",
    ぢ: "ji",
    づ: "zu",
    で: "de",
    ど: "do",
    ぢゃ: "ja",
    ぢゅ: "ju",
    ぢょ: "jo",

    ば: "ba",
    び: "bi",
    ぶ: "bu",
    べ: "be",
    ぼ: "bo",
    びゃ: "bya",
    びゅ: "byu",
    びょ: "byo",

    ぱ: "pa",
    ぴ: "pi",
    ぷ: "pu",
    ぺ: "pe",
    ぽ: "po",
    ぴゃ: "pya",
    ぴゅ: "pyu",
    ぴょ: "pyo",
};

export const hiraToRoman = (hiragana) => {
    const out = charMap[hiragana];
    return out === undefined ? hiragana : out;
};
