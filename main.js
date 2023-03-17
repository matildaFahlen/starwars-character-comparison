class Character {
    constructor(name, gender, height, mass, hairColor, skinColor, eyeColor, movies, pictureUrl) {
        this.name = name;
        this.gender = gender;
        this.height = height;
        this.mass = Number(mass);
        this.hairColor = hairColor;
        this.skinColor = skinColor;
        this.eyeColor = eyeColor;
        this.movies = movies;
        this.pictureUrl = pictureUrl;
    }

    static compareGender(characterOne, characterTwo) {
        if (characterOne.gender === characterTwo.gender) {
          return `${characterOne.name} and ${characterTwo.name} has the same gender`;
        } else if (characterOne.gender !== characterTwo.gender) {
          return `${characterTwo.name} and ${characterOne.name} do not share the same gender`;
        } else {
          console.log("gender-if funkar inte");
        }
    }

    static compareHeight(characterOne, characterTwo) {
        if (characterOne.height === characterTwo.height) {
            return `${characterOne.name} has the same height as ${characterTwo.name}`;
          } else if (characterOne.height > characterTwo.height) {
            return `${characterOne.name} is taller than ${characterTwo.name}`;
          } else if (characterOne.height < characterTwo.height) {
            return `${characterTwo.name} is taller than ${characterOne.name}`;
          } else {
            console.log("length-if funkar inte");
          }
    }

    static compareWeight(characterOne, characterTwo) {
        if (characterOne.mass === characterTwo.mass) {
            return `${characterOne.name} and ${characterTwo.name} both weight ${characterTwo.mass} kg`;
          } else if (characterOne.mass > characterTwo.mass) {
            return `${characterOne.name} is heavier than ${characterTwo.name}`;
          } else if (characterOne.mass < characterTwo.mass) {
            return `${characterTwo.name} is heavier than ${characterOne.name}`;
          } else {
            console.log("weight-if funkar inte");
          }
    }

    static compareEyeColor(characterOne, characterTwo) {
        if (characterOne.eyeColor === characterTwo.eyeColor) {
            return `${characterOne.name} and ${characterTwo.name} have the same eye-color`;
          } else if (characterOne.eyeColor !== characterTwo.eyeColor) {
            return `${characterTwo.name} has a different eye-color than ${characterOne.name}`;
          } else {
            console.log("EyeColor-if funkar inte");
          }
    }

    static compareSkinColor(characterOne, characterTwo) {
        if (characterOne.skinColor === characterTwo.skinColor) {
            return `${characterOne.name} has the same skin-color as ${characterTwo.name}`;
          } else if (characterOne.skinColor !== characterTwo.skinColor) {
            return `${characterTwo.name} does not have the same skin-color as ${characterOne.name}`;
          } else {
            console.log("SkinColor-if funkar inte");
          }
    }

    static compareMovies(characterOne, characterTwo) {
        if (characterOne.movies === characterTwo.movies) {
            return `${characterOne.name} and ${characterTwo.name} have both been acting in ${characterTwo.movies} movies`;
          } else if (characterOne.movies > characterTwo.movies) {
            return `${characterOne.name} has been acting in more movies than ${characterTwo.name}`;
          } else if (characterOne.movies < characterTwo.movies) {
            return `${characterTwo.name} has been acting in more movies than ${characterOne.name}`;
          } else {
            console.log("movies-if funkar inte");
          }
    }
}

let character1;
let character2;
let picture1;
let picture2;
// 6st karaktärer som finns i API
let characterList = ["Luke Skywalker", "C-3PO", "R2-D2", "Darth Vader", "Leia Organa", "Owen Lars"];

// För att få ut två listor med de 6 karaktärerna och visa bild vid klick
let showCharacterList = () => {
    let ul1 = document.querySelector("#characterList1");
    let ul2 = document.querySelector("#characterList2");
    let imageHolder1 = document.querySelector("#imageHolder1");
    let imageHolder2 = document.querySelector("#imageHolder2");
    
    characterList.forEach((character) => {
        let li = document.createElement("li");
        li.textContent = character;
        ul1.append(li);
        
        let selectBtn = document.createElement("button");
        selectBtn.textContent = "select";
        selectBtn.addEventListener("click", function () {
            loadCharacter1(character);
            imageHolder1.innerHTML = "";
            let image1 = loadPicture1(character);
            let characterImage = document.createElement("img");
            characterImage.src = image1;
            imageHolder1.append(characterImage);
        });
        li.append(selectBtn);
    })
    
    characterList.forEach((character) => {
        let li = document.createElement("li");
        li.textContent = character;
        ul2.append(li);
        
        let selectBtn = document.createElement("button");
        selectBtn.textContent = "select";
        selectBtn.addEventListener("click", function () {
            loadCharacter2(character);
            imageHolder2.innerHTML = "";
            let image2 = loadPicture2(character);
            let characterImage = document.createElement("img");
            characterImage.src = image2;
            imageHolder2.append(characterImage);
        });
        li.append(selectBtn);
    })
}
showCharacterList();

// Skapar knappen som jämför
let compareBtn = document.querySelector("#compareBtn");
compareBtn.innerText = "Compare characters";
document.body.append(compareBtn);

// För att visa ut namn på vald karaktär från lista 1
let showCharacter1 = (obj) => {
    let div = document.createElement("div");
    let characterName = document.querySelector("#showCharacter1");
    characterName.innerHTML = obj.name;
    div.append("characterName");

    // Compare characters-knapp som skriver ut mer info och jämför
    compareBtn.addEventListener("click", () => {
        let div = document.createElement("div");
        let characterInfo = document.querySelector("#characterInfo1");
        characterInfo.innerHTML = `<p>Hair color: ${obj.hairColor}</p>
        <p>Height (cm): ${obj.height}</p>
        <p>Weight (kg): ${obj.mass}</p>
        <p>Gender: ${obj.gender}</p>
        <p>Skin color: ${obj.skinColor}</p>
        <p>Eye color: ${obj.eyeColor}</p>
        <p>Number of movies: ${obj.movies}</p>`;
        div.append("characterInfo");
        compareFunction(character1, character2);
    });
}

// För att visa ut namn på vald karaktär från lista 2
let showCharacter2 = (obj) => {
    let div = document.createElement("div");
    let characterName = document.querySelector("#showCharacter2");
    characterName.innerHTML = obj.name;
    div.append("characterName");
    
    // Compare characters-knapp som skriver ut mer info och jämför
    compareBtn.addEventListener("click", () => {
        let div = document.createElement("div");
        let characterInfo = document.querySelector("#characterInfo2");
        characterInfo.innerHTML = `<p>Hair color: ${obj.hairColor}</p>
        <p>Height (cm): ${obj.height}</p>
        <p>Weight (kg): ${obj.mass}</p>
        <p>Gender: ${obj.gender}</p>
        <p>Skin color: ${obj.skinColor}</p>
        <p>Eye color: ${obj.eyeColor}</p>
        <p>Number of movies: ${obj.movies}</p>`;
        div.append("characterInfo");
    });
}

// För att hämta från SWAPI
async function getData(url) {
    let data = await fetch(url);
    let json = await data.json();
    return json;
}

const loadCharacter1 = async (character) => {
    let index = characterList.indexOf(character);
    index++;
    let data = await getData(`https://swapi.dev/api/people/${index}/`);
    character1 = new Character(character);
    character1.name = data.name;
    character1.gender = data.gender;
    character1.height = data.height;
    character1.mass = data.mass;
    character1.hairColor = data.hair_color;
    character1.skinColor = data.skin_color;
    character1.eyeColor = data.eye_color;
    character1.movies = data.films.length;
    showCharacter1(character1);
};

const loadCharacter2 = async (character) => {
    let index = characterList.indexOf(character);
    index++;
    let data = await getData(`https://swapi.dev/api/people/${index}/`);
    character2 = new Character(character);
    character2.name = data.name;
    character2.gender = data.gender;
    character2.height = data.height;
    character2.mass = data.mass;
    character2.hairColor = data.hair_color;
    character2.skinColor = data.skin_color;
    character2.eyeColor = data.eye_color;
    character2.movies = data.films.length;
    showCharacter2(character2);
};

// Hämta bilder från nätet med rätt index
const loadPicture1 = (character) => {
    try {
        let pictureIndex1 = characterList.indexOf(character);
        pictureIndex1++;
        let picture1 = `https://starwars-visualguide.com/assets/img/characters/${pictureIndex1}.jpg`;
        return picture1; 
    } catch (error) { //Träffar inte catch vid URL-problem, vet ej varför.
        let h2 = document.createElement("h2");
        h2.innerText = "Sorry, there was a problem when loading images. Try again later.";
        document.body.append(h2);
    }
}

const loadPicture2 = (character) => {
    try {
        let pictureIndex2 = characterList.indexOf(character);
        pictureIndex2++;
        let picture2 = `https://starwars-visualguide.com/assets/img/characters/${pictureIndex2}.jpg`;
        return picture2;
    } catch (error) {
        let h2 = document.createElement("h2");
        h2.innerText = "Sorry, there was a problem when loading images. Try again later.";
        document.body.append(h2);
    }
}

// Funktion som kör alla jämförelser (static funktioner i klassen)
let compareFunction = (character1, character2) => {
   let gender = Character.compareGender(character1, character2);
   let height = Character.compareHeight(character1, character2);
   let weight = Character.compareWeight(character1, character2);
   let eyeColor = Character.compareEyeColor(character1, character2);
   let skinColor = Character.compareSkinColor(character1, character2);
   let movies = Character.compareMovies(character1, character2);

   let compareInfo = document.querySelector("#compareInfo");
   compareInfo.innerHTML = `<p>${gender}</p>
   <p>${height}</p>
   <p>${weight}</p>
   <p>${eyeColor}</p>
   <p>${skinColor}</p>
   <p>${movies}</p>`;
   document.body.append(compareInfo);
}