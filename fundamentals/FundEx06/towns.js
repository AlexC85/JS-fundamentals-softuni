function towns(townInfo){
  let currentTown = {};
  for (let el of townInfo){
    let townArr = el.split(' | ');
    currentTown.town = townArr[0];
    currentTown.latitude = Number(townArr[1]).toFixed(2);
    currentTown.longitude = Number(townArr[2]).toFixed(2);
    console.log(currentTown); 
  }
}
towns(['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625'])