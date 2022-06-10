const charMap = {
    // Punctuation

    "。": ".",
    "、": ",",
    "「": '"',
    "」": '"',
    "？": "?",

    // Hiragana

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

    // Katakana

    ア: "a",
    イ: "i",
    ウ: "u",
    エ: "e",
    オ: "o",

    カ: "ka",
    キ: "ki",
    ク: "ku",
    ケ: "ke",
    コ: "ko",

    サ: "sa",
    シ: "shi",
    ス: "su",
    セ: "se",
    ソ: "so",

    タ: "ta",
    チ: "chi",
    ツ: "tsu",
    テ: "te",
    ト: "to",

    ナ: "na",
    ニ: "ni",
    ヌ: "nu",
    ネ: "ne",
    ノ: "no",

    ハ: "ha",
    ヒ: "hi",
    フ: "fu",
    ヘ: "he",
    ホ: "ho",

    マ: "ma",
    ミ: "mi",
    ム: "mu",
    メ: "me",
    モ: "mo",

    ヤ: "ya",
    ユ: "yu",
    ヨ: "yo",

    ラ: "ra",
    リ: "ri",
    ル: "ru",
    レ: "re",
    ロ: "ro",

    ワ: "wa",
    ヲ: "wo",
    ン: "n",

    ガ: "ga",
    ギ: "gi",
    グ: "gu",
    ゲ: "ge",
    ゴ: "go",

    ザ: "za",
    ジ: "ji",
    ズ: "zu",
    ゼ: "ze",
    ゾ: "zo",

    ダ: "da",
    ヂ: "ji",
    ヅ: "zu",
    デ: "de",
    ド: "do",

    バ: "ba",
    ビ: "bi",
    ブ: "bu",
    ベ: "be",
    ボ: "bo",

    パ: "pa",
    ピ: "pi",
    プ: "pu",
    ペ: "pe",
    ポ: "po",

    キャ: "kya",
    キュ: "kyu",
    キョ: "kyo",

    シャ: "sha",
    シュ: "shu",
    ショ: "sho",

    チャ: "cha",
    チュ: "chu",
    チョ: "cho",

    ニャ: "nya",
    ニュ: "nyu",
    ニョ: "nyo",

    ヒャ: "hya",
    ヒュ: "hyu",
    ヒョ: "hyo",

    ミャ: "mya",
    ミュ: "myu",
    ミョ: "myo",

    リャ: "rya",
    リュ: "ryu",
    リョ: "ryo",

    ギャ: "gya",
    ギュ: "gyu",
    ギョ: "gyo",

    ジャ: "ja",
    ジュ: "ju",
    ジョ: "jo",

    ビャ: "bya",
    ビュ: "byu",
    ビョ: "byo",

    ピャ: "pya",
    ピュ: "pyu",
    ピョ: "pyo",
};

export const hiraToRoman = (hiragana) => {
    const out = charMap[hiragana];
    return out === undefined ? hiragana : out;
};
