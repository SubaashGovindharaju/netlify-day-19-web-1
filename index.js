var p1 = fetch("https://hp-api.onrender.com/api/characters").then((data) => data.json()).then((data1) => console.log(data1));



var container = document.createElement("div");
container.className = "container-fluid box-2";
var row = document.createElement("div");
row.className = "row";
var p1 = fetch("https://hp-api.onrender.com/api/characters").then((data) => data.json())
    .then((data1) => foo(data1));


container.append(row);
function foo(data1) {
    for (var i = 0; i < data1.length; i++) {
      
row.innerHTML +=`<div class=" col-12  col-xl-6">
  <div class="card">
  <h2 class="card-title head">${data1[i].name}</h2>
    <img src="${data1[i].image}" class="card-img-top" alt="...">
    <div class="card-body">
    <h4 class="card-title">Actor: ${data1[i].actor}</h4>
    <h5 class="card-title">Date of birth: ${data1[i].dateOfBirth}</h5>
    <h5 class="card-title">House: ${data1[i].house}</h5>
    <h5 class="card-title">Ancestry: ${data1[i].ancestry}</h5>
    </div>
  </div>`;

        document.body.append(container);


    }
}

