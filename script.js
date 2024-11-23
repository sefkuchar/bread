const flour = document.getElementById("flour");
const water = document.getElementById("water");
const salt = document.getElementById("salt");
const bowl = document.getElementById("bowl");
const result = document.getElementById("result");

let ingredientsInBowl = new Set();

// Function to create the bread and show the popup
const makeBread = () => {
    if (ingredientsInBowl.has("flour") && ingredientsInBowl.has("water") && ingredientsInBowl.has("salt")) {
        result.textContent = "🍞 Bread is made! Congratulations!";
        
        // Show the pop-up sign
        const popup = document.getElementById("popup");
        popup.style.display = "flex"; // Make the pop-up visible

        // Hide the pop-up after 3 seconds
        setTimeout(() => {
            popup.style.display = "none";
        }, 3000);
    }
};

// Drag and Drop Events
const dragStart = (event) => {
    event.dataTransfer.setData("text", event.target.id);
};

const dragOver = (event) => {
    event.preventDefault();
};

const drop = (event) => {
    event.preventDefault();
    const ingredientId = event.dataTransfer.getData("text");
    const ingredient = document.getElementById(ingredientId);

    if (!ingredientsInBowl.has(ingredientId)) {
        ingredientsInBowl.add(ingredientId);
        ingredient.style.display = "none";
        makeBread();
    }
};

// Attach Events
[flour, water, salt].forEach(ingredient => {
    ingredient.addEventListener("dragstart", dragStart);
});

bowl.addEventListener("dragover", dragOver);
bowl.addEventListener("drop", drop);
