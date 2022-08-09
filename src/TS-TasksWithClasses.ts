/* eslint-disable no-lone-blocks */
/* eslint-disable no-console */
type Person = {
  readonly name: string,
  readonly surname: string,
  readonly sex: 'male' | 'female',
  age: number,
  income?: number,
  married?: boolean,
  hasCar?: boolean,
};

const people: Person[] = [
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false,
  },
  {
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    income: 1300,
    married: false,
    hasCar: true,
  },
  {
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    income: 0,
    married: false,
    hasCar: false,
  },
  {
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
    hasCar: true,
  },
  {
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    income: 1200,
    married: true,
    hasCar: true,
  },
  {
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    income: 364,
    married: false,
    hasCar: false,
  },
];

/*
    Šių užduočių tikslas ne tik išspręsti užduotis, bet išmokti kurti tipus pagal jau esančius tipus
    Pirmos 2 užduotys pateikiamos kaip pavyzdžiai kaip turėtų būt sprendžiami uždaviniai:
      * Aprašome tipus
      * Aprašome funkcijas
      * (jeigu reikia aprašome naujus kintamuosius reikalingus sprendimui)
      * Atliekame užduoties sprendimą
      * Spausdiname sprendimo rezultatus

    Visas funkcijas ir kintamuosius reikia aprašyti tipais
    (net jei to ir nereikalauja TS compiler'is)

  */
console.groupCollapsed('1. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {name: string, surname: string} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą');
{
    // Tipai:
    type Identity = {
      name: Person['name'],
      surname: Person['surname'],
    };

    // Funkcijos:
    const personToIdentity = ({ name, surname }: Person): Identity => ({ name, surname });

    // Sprendimas:
    const identities: Identity[] = people.map(personToIdentity);

    // Spausdinimas:
    console.table(people);
    console.table(identities);
}
console.groupEnd();

console.groupCollapsed('2. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {married: boolean, hasCar: boolean} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą.');
{
  // type TaskProps = {
  //   married: NonNullable<Person["married"]>,
  //   hasCar: NonNullable<Person["hasCar"]>,
  // }

    type TaskProps = Pick<Required<Person>, 'hasCar' | 'married'>;

    const selectTaskProps = ({ married, hasCar }: Person): TaskProps => ({
      married: Boolean(married),
      hasCar: Boolean(hasCar),
    });

    const result: TaskProps[] = people.map(selectTaskProps);

    console.log(people);
    console.log(result);
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinkite objektus su visų žmonių vardais, pavardėm bei santuokos statusais');
{
  // ...sprendimas ir spausdinimas

  // Tipas
  type PersonsFullNameMarriageStatus = {
    name: Person['name'],
    surname: Person['surname'],
    marriage: Person['married'],
  };

  // type PersonsFullNameAndMarriageStatus2 = Pick<Person, 'name' | 'surname' | 'age'>;

  // Funckija:
  const FullNameMarriage = ({ name, surname, married }: Person): PersonsFullNameMarriageStatus => ({
    name,
    surname,
    marriage: married,
  });

  const results = people.map(FullNameMarriage);

  // Atspausdinimas:
  console.log(...results);
}
console.groupEnd();

console.groupCollapsed('4. Sukurkite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
  // ...sprendimas ir spausdinimas
  // Tipas:
  type GenderMoney = Pick<Required<Person>, 'sex' | 'income'>;

  // Funkcija:
  const MoneyByGender = ({ sex, income }: Person): GenderMoney => ({
    sex,
    income: Number(income),
  });

  const result = people.map(MoneyByGender);

  // Atspausdinimas:
  console.log(result.sort((a, b) => b.income - a.income));
}
console.groupEnd();

console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
  // ...sprendimas ir spausdinimas
  // Tipas:
  type FullPersonInfo = {
    name: Person['name'],
    surname: Person['surname'],
    sex: Person['sex']
  };

  // Funkcija:
  const GetFullInfo = ({ name, surname, sex }: Person): FullPersonInfo => ({
    name,
    surname,
    sex,
  });

  const results = people.map(GetFullInfo);

  // Atspausdinimas:
  console.log(results.sort((a, b) => a.name.localeCompare(b.name)));
}
console.groupEnd();

console.groupCollapsed('6. Atspausdinkite visus vyrus');
{
  // ...sprendimas ir spausdinimas
  // tipas:
  interface OnlyMen extends Omit<Person, 'sex'> {
    sex: 'male',
  }

  // funkcija:
  const onlyMen = function Men({ sex, ...rest }: Person): OnlyMen | void {
    if (sex === 'male') {
      return ({
        ...rest,
        sex,
      });
    }
  };

  const results = people.map(onlyMen).filter((x) => x !== undefined);

  // Atspausdinimas:
  console.log(...results);
}
console.groupEnd();

console.groupCollapsed('7. Atspausdinkite visas moteris');
{
  // ...sprendimas ir spausdinimas
  // tipas
  interface OnlyFemale extends Omit<Person, 'sex'> {
    sex: 'female'
  }

  const IfFemale = ({ sex }: Person): boolean => sex === 'female';

  const females: OnlyFemale[] = people.filter(IfFemale) as OnlyFemale[];

  console.log(females);
}
console.groupEnd();

console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.groupCollapsed('12. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.groupCollapsed('13. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();
