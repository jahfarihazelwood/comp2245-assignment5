const button = document.getElementById("lookup");
const resultDiv = document.getElementById("result");

button.addEventListener("click", () => {
  const country = prompt("Enter a country name:");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `world.php?country=${encodeURIComponent(country)}`, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      resultDiv.innerHTML = xhr.responseText;
    }
  };
  xhr.send();
});
