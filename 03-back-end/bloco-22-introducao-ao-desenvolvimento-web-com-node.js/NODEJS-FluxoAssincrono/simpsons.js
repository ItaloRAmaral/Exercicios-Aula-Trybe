const fs = require('fs').promises;

async function readAll () {
 const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
 const simpsons = JSON.parse(fileContent);
 const nameId = simpsons.map(({id, name}) => console.log(`${id} ${name}`));
 nameId.forEach(nameId => console.log(nameId));
}

async function idSimpson (id) {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const findSimpson = simpsons.find((simpson) => Number(simpson.id) === id);

  if (!findSimpson) {
    throw new Error('Simpson not found');
  } 

  return findSimpson
}

async function idSimpson() {
    const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(fileContent);
    const newArray = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');
    await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
}

async function main () {
  const a = await idSimpson();
  console.log(a);
}

main();