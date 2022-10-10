
//EXERCICE 1


function russianRoulette() {
    if (Math.random() < 0.5) {
      throw new Error("PAN");
    }
  }
  

try{
    russianRoulette();
}catch(err){
  console.log("dead")
  process.exit(1)
}
console.log("alive")


//EXERCICE 2

const axios = require('axios').default;

async function getuser(){
  try {
    const user = await axios.get("https://randomuser.me/api/?results=100")
    console.log(user.data)

  }catch(err)
  {

  }
}

function getuser2(){
  return new Promise (function (resolve, reject){
    await.axios.get("https://randomuser.me/api/?results=100")
      .then(function(user)){}}
  )
}

getuser()

j
