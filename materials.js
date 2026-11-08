// Update GitHub Pages - Daily Calendar
const materials = [
  {
    title: "My Lunch Box",
    category: "vocabulary",
    level: "Pre-A1–A1",
    type: "Interactive Game",
    description: "Practise food vocabulary and build your own lunch box.",
    link: "My%20Lunch%20Box%20(1)%20(1).html"
  },
  {
    title: "Magic Bedroom with Prepositions",
    category: "grammar",
    level: "A1",
    type: "Interactive Game",
    description: "Create a bedroom and practise prepositions of place.",
    link: "Magic%20Bedroom%20with%20prepositions%20html.html"
  },
  {
    title: "Magic Bedroom",
    category: "vocabulary",
    level: "Pre-A1–A1",
    type: "Interactive Activity",
    description: "Design your bedroom and practise furniture vocabulary and writing.",
    link: "Magic%20Bedroom%20%E2%9C%A8.html"
  },
  
{
    title: "Daily Calendar",
    category: "vocabulary",
    level: "Pre-A1–A1",
    type: "Interactive Game",
    description: "Practise days, months, dates, weather, seasons and feelings. Create your own daily calendar and build simple English sentences!",
    link: "Daily%20Calendar.html"
}

];

// DISPLAY MATERIALS

function renderMaterials() {

  const vocabularyList = document.getElementById("vocabulary-list");
  const grammarList = document.getElementById("grammar-list");

  vocabularyList.innerHTML = "";
  grammarList.innerHTML = "";

  materials.forEach(material => {

    const card = document.createElement("article");
    card.className = "material-card";

    card.innerHTML = `
      <div class="material-meta">
        <span class="material-tag">${material.level}</span>
        <span class="material-tag">${material.type}</span>
      </div>

      <h3>${material.title}</h3>

      <p>${material.description}</p>

      <a class="open-button"
         href="${material.link}"
         target="_blank"
         rel="noopener noreferrer">
         Open Activity →
      </a>
    `;

    if (material.category.toLowerCase() === "vocabulary") {
      vocabularyList.appendChild(card);
    }

    if (material.category.toLowerCase() === "grammar") {
      grammarList.appendChild(card);
    }

  });

  if (vocabularyList.children.length === 0) {
    vocabularyList.innerHTML = "<p>No vocabulary activities yet.</p>";
  }

  if (grammarList.children.length === 0) {
    grammarList.innerHTML = "<p>No grammar activities yet.</p>";
  }

}

renderMaterials();
