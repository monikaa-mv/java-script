  const obj = {
    name : "joy",
    place : "kolkata",
    hobbies : ["dancing", "singing", "reading"],
    isMarried : false,
    sayHi : function(){
        console.log("Hi there");
        }
  };

  console.log(obj);

  const makeJson = JSON.stringify(obj);
  console.log(makeJson);
  console.log(typeof makeJson);

    const makeObj = JSON.parse(makeJson);
    console.log(makeObj);
    console.log(typeof makeObj);