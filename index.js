function dwarfRollCall(dwarves) {
  let str = ""
  for(var i = 0;i<dwarves.length;i++){
  var name = dwarves[i]
  var number = i+1
  str = str +(number)+ ". "+(name)+" "
   
  }
  return str
  
}
 
function summonCaptainPlanet(planeteerCalls){
  let container = []
  for(var i = 0; i<planeteerCalls.length; i++){
    var planeteerCall = planeteerCalls[i]
    var message = planeteerCall.toUpperCase() +"!"

    
    container.push(message)
    //container.push(planeteerCalls[i].toUpperCase() + "!")

    //var message = planeteerCalls.length[i].toUpperCase()
    container.push(message)

    
    
  }
  return container
}


function longPlaneteerCalls(words) {
  let str = []
  for(var i = 0;i<words.length;i++){
    if(words.length<4)return false
  }
  return true
}

function findTheCheese (foods) {
  var str = []
  for(var i =0; i<foods.length;i++){

    var item = foods[i]
    
    if(item ==="cheddar") return "cheddar"

    if(foods.length ==="cheddar") return true

  }
  return  "no cheese!"
}
