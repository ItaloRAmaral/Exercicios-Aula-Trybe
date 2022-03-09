const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
};

const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
};

const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
};

const battleMembers = {
    mage,
    warrior,
    dragon
};

/*
funções
*/

const dragonAttack = (dragon) => {
    const minDmg = 15;
    let danoDragao = Math.floor((Math.random() * (dragon.strength - minDmg +1) + minDmg));
    return danoDragao;
};

const warriorAttack = (warrior) => {
    const minDmg = warrior.strength;
    const maxDmg = minDmg * warrior.weaponDmg;
    const warriorDamage = Math.floor((Math.random() * (maxDmg - minDmg + 1)) + minDmg);
    return warriorDamage;
};

const mageAttack = (mage) => {
    const mageMana = mage.mana;
    const minDmg = mage.intelligence;
    const maxDmg = minDmg * 2;
    let danoMage = Math.floor((Math.random() * (maxDmg - minDmg + 1) + minDmg));
    const turnStats = {
        manaSpent: 0,
        damageDealt: 'Not Enough Mana',
    };

    if(mageMana > 15){
        turnStats.manaSpent = 15;
        turnStats.damageDealt = danoMage;
        return turnStats;
    }
    return turnStats;

};

const gameActions = {
    // Crie as HOFs neste objeto.
   warriorTurn: (warriorAttack) => {
        const warriorDamage = warriorAttack(warrior);
        warrior.damage = warriorDamage;
        dragon.healthPoints -= warriorDamage;
    },

    mageTurn: (mageAttack) => {
        const mageTurnsStats = mageAttack(mage);
        const mageDamage = mageTurnsStats.damageDealt
        mage.damage = mageDamage;
        mage.mana -= mageTurnsStats.manaSpent;
        dragon.healthPoints -= mageDamage;
    },

    dragonTurn: (dragonAttack) => {
        const dragonDamage = dragonAttack(dragon);
        dragon.damage = dragonDamage;
        mage.healthPoints -= dragonDamage;
        warrior.healthPoints -= dragonDamage;
    },

    turnResults: () => battleMembers,
};

gameActions.warriorTurn(warriorAttack);
gameActions.mageTurn(mageAttack);
gameActions.dragonTurn(dragonAttack);
console.log(gameActions.turnResults());