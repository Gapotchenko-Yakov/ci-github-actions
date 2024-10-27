import attack from "./attack";

// console.log(attack("Smelly Ogre", 29));

const resultTag = document.querySelector('#resultTag')
const creature = document.querySelector('#creature')
const damage = document.querySelector('#damage')
const resultButton = document.querySelector('#resultButton')

resultButton.addEventListener('click', () => {
    const result = attack(creature.value, damage.value);

    resultTag.innerHTML = result

})

