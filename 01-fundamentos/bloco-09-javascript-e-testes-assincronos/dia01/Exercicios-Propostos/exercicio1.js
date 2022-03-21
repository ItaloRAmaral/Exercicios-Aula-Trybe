const planetDistanceFromSun = ({
        name,
        distanceFromSun: {
            value,
            measurementUnit
        }
    }) =>
    `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
    name: "Mars",
    distanceFromSun: {
        value: 227900000,
        measurementUnit: "kilometers",
    },
};

const venus = {
    name: "Venus",
    distanceFromSun: {
        value: 108200000,
        measurementUnit: "kilometers",
    },
};

const jupiter = {
    name: "Jupiter",
    distanceFromSun: {
        value: 778500000,
        measurementUnit: "kilometers",
    },
};

console.log(planetDistanceFromSun(mars)); // A
console.log(planetDistanceFromSun(venus)); // B
console.log(planetDistanceFromSun(jupiter)); // C

/* 1 - Dado o código cima, qual a ordem de finalização de execução das linhas comentadas?
1- Mars 
2- Venus
3- Jupiter
*/
