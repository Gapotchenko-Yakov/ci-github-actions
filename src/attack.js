const attack = (creatureName, damage, isCritical) => {
  // const unusedString = "some string";

  const result = `${creatureName} dealt ${
    isCritical ? damage * 2 : damage
  } damage!`;
  return result;
};

export default attack;
