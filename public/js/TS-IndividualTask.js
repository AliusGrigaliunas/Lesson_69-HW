"use strict";
console.groupCollapsed('1. Sukurkite funkciją, kuri atspausdiną tekstą didžiosiomis raidėmis');
{
    const ToUpperCase = (text) => text.toUpperCase();
    console.log(ToUpperCase('Čia yra didžiosios raidės'));
}
console.groupEnd();
console.groupCollapsed('2. Sukurkite funkciją, kuri grąžina pirmo ir antro parametro bendrą simbolių skaičių');
{
    const CombinedSimbolsNum = (text, text2) => text.split('').length + text2.split('').length;
    console.log(CombinedSimbolsNum('Labas', 'Vakaras'));
}
console.groupEnd();
console.groupCollapsed('3. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra 2 parametru perduoda raidė, priešingu atveju false');
{
    const CheckStrForLett = (word, letter) => word.includes(letter);
    console.log(CheckStrForLett('Labas', 'e'));
}
console.groupEnd();
console.groupCollapsed('4. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra lyginis skaičius simbolių');
{
    const CheckStrSimbEqualNum = (str) => { if (str.split('').length % 2 !== 0) {
        return false;
    } return true; };
    console.log(CheckStrSimbEqualNum('Labap'));
}
console.groupEnd();
console.groupCollapsed('5. Sukurkite funkciją, kuri grąžina balsių kiekį žodyje');
{
    const checkStrIfVowels = (str) => {
        const HasVowels = str.match(/[AaĄaEeĘęĖėIiĮįYyOoUuŲųŪū]/ig);
        return HasVowels?.length;
    };
    console.log(checkStrIfVowels('Labas'));
}
console.groupEnd();
console.groupCollapsed('6. Sukurkite funkciją, kuri grąžina bet kokios raidės kiekį žodyje');
{
    const CheckSimbolInStrNum = (word, lett) => {
        const lettCount = word.match(new RegExp(lett, 'g'))?.length;
        return lettCount;
    };
    console.log(CheckSimbolInStrNum('Fool', 'o'));
}
console.groupEnd();
console.groupCollapsed('7. Sukurkite funkciją, kuri ištrintų pirmą surastą simbolį žodyje ir grąžintų pakeistą žodį');
{
    const RemoveSimbolFromStr = (str, lett) => {
        const replacedLettStr = str.replace(str.split('')[0], lett);
        return replacedLettStr;
    };
    console.log(RemoveSimbolFromStr('Nick', 'R'));
}
console.groupEnd();
console.groupCollapsed('8. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.');
{
    const ReplaceStrWithStr = (str1, strLett) => {
        const StrArr = strLett.split('');
        return StrArr.reduce((prevLett, currLett) => prevLett.replaceAll(currLett, ''), str1);
    };
    const newWord = ReplaceStrWithStr('Labass', 'ass');
    console.log(newWord);
}
console.groupEnd();
console.groupCollapsed('8. Sukurkite funkciją, kuri taiso pastraipos klaidas');
{
}
console.groupEnd();
//# sourceMappingURL=TS-IndividualTask.js.map