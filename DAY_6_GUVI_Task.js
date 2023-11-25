var response = new XMLHttpRequest();
response.open("GET","https://restcountries.com/v3.1/all");
response.send();
response.onload = function(){
    var res = JSON.parse(response.response);
    console.log(res);
    //1. Get all the countries from Asia continent /region using Filter function
    var allAsia = res.filter((it)=>it.region === "Asia").map((l)=>l.name.common);
    console.log(allAsia);
    //2.Get all the countries with a population of less than 2 lakhs using Filter function
    var allPopulation = res.filter((it)=>it.population<200000).map((p)=>p.name.common);
    console.log(allPopulation);
    //3.Print the following details name, capital, flag, using forEach function
    var all = res.forEach((ele)=>console.log(`name: ${ele.name.common} || capital: ${ele.capital} || flag: ${ele.flag}`))
    console.log(all)
    //4.Print the total population of countries using reduce function
    var sumPopulation = res.reduce((a,b)=>a+b.population,0);
    console.log(sumPopulation);
    //5.Print the country that uses US dollars as currency.
    let arr = [];
    for(let a in res){
        if(!res[a].hasOwnProperty("currencies")){
            continue;
        }
        let x = res[a].currencies;
        if(x.hasOwnProperty("USD")){
            arr.push(res[a].name.common);
        }
    }
    console.log(arr);
}