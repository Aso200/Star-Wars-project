const jediSection = document.querySelector("#Jedi") as HTMLElement;
const btnJedi = document.querySelector("#showjedi") as HTMLButtonElement;
const jediinfo = document.querySelector("#jedi-info") as HTMLElement;
const sithSection = document.querySelector("#Sith") as HTMLElement;
const btnSith = document.querySelector("#showsith") as HTMLElement;
const sithInfo = document.querySelector("#sith-info") as HTMLElement;
const img = document.querySelector("img") as HTMLImageElement;
const img1 = document.getElementById("#imagesith") as HTMLImageElement;
const search = document.querySelector("#search") as HTMLElement;
const searchInput = document.querySelector("#search-input") as HTMLInputElement;
const searchBtn = document.querySelector("#search-btn") as HTMLButtonElement;
const resultsSection = document.querySelector("#result") as HTMLElement;
const information = document.querySelector("#info") as HTMLElement;

btnJedi.addEventListener("click", async () => {
  try {
    const response = await fetch("https://swapi.dev/api/people/1");
    const data = await response.json();
    const response1 = await fetch("https://swapi.dev/api/planets/1/");
    const data1 = await response1.json();
    jediinfo.innerHTML = `Name: ${data.name}<br> Height: ${data.height}<br> Gender: ${data.gender} <br> Planet: ${data1.name}`;
    jediSection.append(jediinfo);
  } catch (error) {
    console.error(error);
  }
});

btnSith.addEventListener("click", async () => {
  try {
    const response = await fetch("https://swapi.dev/api/people/4/");
    const data2 = await response.json();
    const response1 = await fetch("https://swapi.dev/api/starships/13/");
    const data3 = await response1.json();
    sithInfo.innerHTML = `Name: ${data2.name} <br> Height: ${data2.height} <br> Gender: ${data2.gender} <br> Ship: ${data3.name}`;
    sithSection.append(sithInfo);
  } catch (error) {
    console.error(error);
  }
});

interface Character {
  [key: string]: string | string[];
}
//funktion för fetchen så jag kan lägga in det i click och enter
async function searchCharacters(searchTerm: string) {
  try {
    const response = await fetch(
      `https://swapi.dev/api/people?search=${searchTerm}`
    );
    const data = await response.json();
    const characters = data.results;
    resultsSection.innerHTML = "";
    characters.forEach((character: Character) => {
      const characterName = character.name as string;
      const characterInfo = document.createElement("p");
      characterInfo.textContent = characterName;
      resultsSection.append(characterInfo);
    });
  } catch (error) {
    console.error(error);
  }
}
// click funktion
searchBtn.addEventListener("click", () => {
  const searchTerm = searchInput.value;
  searchCharacters(searchTerm);
});
//enter funktion
searchInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    const searchTerm = searchInput.value;
    searchCharacters(searchTerm);
  }
});

