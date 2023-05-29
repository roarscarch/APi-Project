const btnEl=document.getElementById("btn");
const apiKey="asb+r2+RutLhmnAYNDSbQg==5E4bFu32nn5Vnak2";
const jokeEl=document.getElementById("joke");
const options={
    method:"GET",
    headers:{
        "X-Api-Key":apiKey,
    },
};
const apiURL ="https://api.api-ninjas.com/v1/dadjokes?limit=1"
async function getJoke()
{
    try {
        jokeEl.innerText="Updating...";
    btnEl.disabled=true;
    btnEl.innerText="Wait!!! Please Don't Click ";
    const response=await fetch(apiURL,options);
    const data=await response.json();

    btnEl.disabled=false;
    btnEl.innerText="Tell me a joke again";
    jokeEl.innerText=data[0].joke;
    
} catch (error) {
    jokeEl.innerText="An error happened,try again later";
    btnEl.disabled=false;
    btnEl.innerText="Tell me a joke again";
}
    
}
btnEl.addEventListener("click",getJoke);
/*
JSON. parse(data)
  {ticker: {...}, timestamp: 1596510482, success: true, error: ""}
                                                                      i
            ....
    error:
    success: true
    ticker: {base: "ВТС", target: "USD", price: "11288.49813464", volume: "9176...
    timestamp: 1596510482
     _proto_ : Object
 const parsedData = JSON. parse (data)
  */
 /* 
 Static methods
 JSON. parse (text(, reviver))
  Parse the string text as JSON, optionally transform the produced value and its properties,
  and return the value. Any violations of the JSON syntax, including those pertaining to the
  differences between JavaScript and JSON, cause a SyntaxError to be thrown. The
  reviver option allows for interpreting what the replacer has used to stand in for other
  datatypes.

  
JSON.stringify(value, replacer[, space]])
  Returnp JSON string corresponding to the specified value, optionally including only certain
  properties or replacing property values in a user-defined manner. By default, all instances of
  undefined are replaced with null, and other unsupported

  */