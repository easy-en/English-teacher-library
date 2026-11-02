
const materials = [

  // ADD YOUR MATERIALS HERE

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
