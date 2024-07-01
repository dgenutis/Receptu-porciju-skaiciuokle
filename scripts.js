//mark uzdejimas - nuemimas
document
  .querySelector(".receptas1")
  .addEventListener("click", function (event) {
    event.preventDefault();
    resetSliderAndIngredients();
    document.getElementById("mark1").style.display = "block";
    document.getElementById("mark2").style.display = "none";
    document.getElementById("mark3").style.display = "none";
  });

document
  .querySelector(".receptas2")
  .addEventListener("click", function (event) {
    event.preventDefault();
    resetSliderAndIngredients();
    document.getElementById("mark1").style.display = "none";
    document.getElementById("mark2").style.display = "block";
    document.getElementById("mark3").style.display = "none";
  });

document
  .querySelector(".receptas3")
  .addEventListener("click", function (event) {
    event.preventDefault();
    resetSliderAndIngredients();
    document.getElementById("mark1").style.display = "none";
    document.getElementById("mark2").style.display = "none";
    document.getElementById("mark3").style.display = "block";
  });

//selektintas receptas turi seseli
document.querySelectorAll(".receptas").forEach(function (receptas) {
  receptas.addEventListener("click", function (event) {
    event.preventDefault();

    document.querySelectorAll(".receptas").forEach(function (item) {
      item.classList.remove("active");
    });

    this.classList.add("active");
  });
});
// atstatom duomenys paspaudus uz conteineriu ribos
document.addEventListener("click", function (event) {
  if (!event.target.closest(".container1, .container2, .container3")) {
    document.querySelectorAll(".receptas").forEach(function (item) {
      item.classList.remove("active");
    });

    document.getElementById("mark1").style.display = "none";
    document.getElementById("mark2").style.display = "none";
    document.getElementById("mark3").style.display = "none";
    resetSliderAndIngredients();
  }
});
function resetSliderAndIngredients() {
  num.value = 0;
  slider.value = 0;
  ingredientai.innerHTML =
    '<p style="margin-left: 30px;">Pasirinkite receptą ir kiekį</p>';
}



//ingredientu kiekiai

let slider = document.getElementById("slider");
let ingredientai = document.getElementById("ingredientai");

slider.addEventListener("input", function () {
  if (document.querySelector(".receptas1").classList.contains("active")) {
    let scale = slider.value;
    updateIngredients1(scale);
  } else if (
    document.querySelector(".receptas2").classList.contains("active")
  ) {
    let scale = slider.value;
    updateIngredients2(scale);
  } else if (
    document.querySelector(".receptas3").classList.contains("active")
  ) {
    let scale = slider.value;
    updateIngredients3(scale);
  }
});
//pirmam receptui
function updateIngredients1(scale) {
  if (scale == 0) {
    ingredientai.innerHTML =
      '<p style="margin-left: 30px;">Pasirinkite receptą ir kiekį</p>';
  } else {
    ingredientai.innerHTML = `
    <p class="priedai"> Vištienos: <b>${100 * scale} g.</b></p>
    <p class="priedai"> Uogos: <b>${20 * scale} g.</b></p>
    <p class="priedai"> Salotos: <b>${200 * scale} g.</b></p>
    <p class="priedai"> Padažas: <b>${2 * scale} šaukštai.</b></p>
    `;
  }
}
//antram receptui
function updateIngredients2(scale) {
  if (scale == 0) {
    ingredientai.innerHTML =
      '<p style="margin-left: 30px;">Pasirinkite receptą ir kiekį</p>';
  } else {
    ingredientai.innerHTML = `
      <p class="priedai">Miltų: <b>${250 * scale} g.</b></p>
      <p class="priedai">Kiaušinių: <b>${1 * scale} vnt.</b></p>
      <p class="priedai">Mėlynių: <b>${500 * scale} g.</b></p>
      <p class="priedai">Cukraus: <b>${1 * scale} šaukštelių</b></p>
    `;
  }
}

//treciam receptui
function updateIngredients3(scale) {
  if (scale == 0) {
    ingredientai.innerHTML =
      '<p style="margin-left: 30px;">Pasirinkite receptą ir kiekį</p>';
  } else {
    ingredientai.innerHTML = `
    <p class="priedai">Makaronų: <b>${200 * scale} g.</b></p>
    <p class="priedai">Jautienos: <b>${100 * scale} g.</b></p>
    <p class="priedai">Sūrio: <b>${50 * scale} g.</b></p>
    <p class="priedai">padažo: <b>${3 * scale} šaukštai</b></p>
    `;
  }
}

