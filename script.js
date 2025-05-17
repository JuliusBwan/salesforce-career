const containerEl = document.querySelector(".container");
careers = ["Administrator", "Platform App Builder", "Developer", "Consultant", "DevOps Engineer"];
let careerIndex = 0;
let charIndex = 0;

function getCareer(){
    charIndex++;
    containerEl.innerHTML = `<h1>I am a Salesforce ${careers[careerIndex].slice(0, charIndex)}</h1>`;

    if (charIndex === careers[careerIndex].length){
        careerIndex++;
        charIndex = 0;
    }
    if (careerIndex === careers.length){
        careerIndex = 0;
    }
    setTimeout(getCareer, 400);
}

getCareer();

 



