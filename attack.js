const attack = (creatureName, damage, isCritical) => {
  const someString = "someText";
  return `${creatureName} dealt ${isCritical ? damage * 2 : damage} damage!`;
};

module.exports = attack;
