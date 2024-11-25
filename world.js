const lookupCountryButton = document.getElementById("lookup");
const lookupCitiesButton = document.getElementById("lookup-cities");
const countryInput = document.getElementById("country");
const resultDiv = document.getElementById("result");

lookupCountryButton.addEventListener("click", () => {
  const country = countryInput.value.trim();
  if (country === "") {
    resultDiv.innerHTML = "<p>Please enter a country name.</p>";
    return;
  }
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `world.php?country=${encodeURIComponent(country)}`, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      resultDiv.innerHTML = xhr.responseText;
    }
  };
  xhr.send();
});

lookupCitiesButton.addEventListener("click", () => {
  const country = countryInput.value.trim();
  if (country === "") {
    resultDiv.innerHTML = "<p>Please enter a country name.</p>";
    return;
  }
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `world.php?country=${encodeURIComponent(country)}&lookup=cities`, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      resultDiv.innerHTML = xhr.responseText;
    }
  };
  xhr.send();
});
