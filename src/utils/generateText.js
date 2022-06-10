const text =
    "「おれのほうがつよい。」「いいや、ぼくのほうがつよい。」きたかぜとたいようのこえがきこえます。ふたりはどちらのちからがつよいかでケンカをしているようです。「たいようがまいにちげんきだから、あつくてみんなこまっているよ。おれがすずしいかぜをふくと、みんなうれしそうだ。おれのほうがみんなのやくにたっているよ。」「でも、ぼくがいないと、きややさいはそだたないよ。ふゆはきたかぜのふくかぜがつめたくて、とてもさむかった。みんなそとにでられなかったよね？さいきんはあたたかいから、みんなよろこんでいるよ。」「いいや、あそこをみて。たいようがつよくてらすから、かわのみずがもうすぐなくなりそうだ。みずがないと、みんなせいかつできないよ。」";

function* generator(count = 5) {
    let i = 0;
    while (i < text.length) {
        yield text.substring(i, i + count);
        i += count;
    }
}

// Generate strings
const textGen = generator(1);
export const gen = (times = 1) => {
    let out = "";
    for (let i = 0; i < times; i++) out += textGen.next().value;
    return out;
};
