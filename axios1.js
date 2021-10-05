let btn = document.getElementById("btn");
let myDiv = document.getElementById("myDiv");
let inputILS = document.getElementById("inputILS");
const currencyOptions = document.getElementById("currencyOptions");

// //!..........................12

// btn.onclick = () => {
//   const ajaxReq = new XMLHttpRequest();
//   ajaxReq.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       const OBJajaxReq = JSON.parse(this.responseText);
//       console.log(OBJajaxReq);
//       myDiv.innerHTML = inputILS.value / OBJajaxReq.rates.ILS
//     }
//   };

//   const API_KEY = `ffd74b2e2ac1ca44c876aee365154964`
//   const url = `http://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}`
//   ajaxReq.open("GET", url);
//   ajaxReq.send();
// };

//!................................13

// const API_KEY = `ffd74b2e2ac1ca44c876aee365154964`

// const url = `http://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}`

// btn.onclick = ()=>{
//   axios
//     .get(url)
//     .then(function (response) {
//       console.log("got success");
//       if(response.status === 200){
//         console.log(response.data);
//         myDiv.innerHTML =  (inputILS.value / response.data.rates.ILS).toFixed(2)
//         const rates = response.data.rates
//         for(const key in rates){

//           console.log(key , rates[key] );
//         }
//       }
//     })
//     .catch(function (error) {
//       console.log("got error");
//       console.log(error);
//     });

// }

//!...............................14

const API_KEY = `ffd74b2e2ac1ca44c876aee365154964`;
const url = `http://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}`;


axios
  .get(url)
  .then(function (response) {
    console.log("got success");
    if (response.status === 200) {
      console.log(response.data);
      const rates = response.data.rates;
      for (const key in rates) {
        currencyOptions.innerHTML += `<option value="${rates[key]}" class="allOptions">${key}</option>`;
      }
    }
  })
  .catch(function (error) {
    console.log("got error");
    console.log(error);
  });

const allOptions = document.getElementsByClassName("allOptions");


btn.onclick = function(){
  let element
for (let i = 0; i < allOptions.length; i++) {
  element = allOptions[currencyOptions.selectedIndex];
  myDiv.innerHTML = element.value / inputILS.value
  
}
};




