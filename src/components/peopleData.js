let peopleData = { nodes: [], entityRelations: {} };

const initialInput = [
  ["Sameer", "Aayushi"],
  ["Aayushi", "Bhaskar"],
  ["Sameer", "Kamalnath Sharma"],
  ["Kamalnath Sharma", "Shanti Kumar Saha"],
  ["Shanti Kumar Saha", "Bhaskar"],
];

const settingData = (pair) => {
  let friend1 = pair[0];
  let friend2 = pair[1];
  if (!peopleData.entityRelations.hasOwnProperty(friend1)) {
    peopleData.entityRelations[friend1] = [friend2];
  } else {
    peopleData.entityRelations[friend1].push(friend2);
  }
  for (let i of pair) {
    if (!peopleData.nodes.some((obj) => obj.value === i)) {
      peopleData.nodes.push({ label: i, value: i });
    }
  }
};

for (let j of initialInput) {
  settingData(j);
}

export { peopleData, initialInput, settingData };
