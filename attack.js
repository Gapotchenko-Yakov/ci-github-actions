const attack = (creatureName, damage, isCritical) => {
  const unusedString = "some string";
  return `${creatureName} dealt ${isCritical ? damage * 2 : damage} damage!`;
};

module.exports = attack;
