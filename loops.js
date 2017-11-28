function forLoop(array){
  for(let i = 0; i < 25; i++){
    if (i == 1){
      array = "I am ${i} strange loop.";
      return array;
    } else {
      array = "I am ${i} strange loops.";
      return array;
    }
  }
}
