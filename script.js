// Add JavaScript code to calculate the required amount of water
const form = document.getElementById("brewingForm");
const resultCell = document.getElementById("resultCell");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Read the values entered by the user
  const people = Number(document.getElementById("peopleInput").value);
  const teacupSize = Number(document.getElementById("teacupSizeInput").value);
  const teacupFill = Number(document.getElementById("teacupFillInput").value);
  const teapotSize = Number(document.getElementById("teapotSizeInput").value);

  // Calculate the required amount of water
  const waterRequired = (people * teacupSize * teacupFill * 0.01);
  const waterRequiredRounded = Math.round(waterRequired);
  let message = waterRequiredRounded + " ml"

  // Display the result and apply the appropriate background color
  resultCell.classList.remove("gray", "red", "yellow", "green");

  if (teapotSize < waterRequired) {
    resultCell.classList.add("gray");
  } else if (waterRequired / teapotSize > 0.9) {
    resultCell.classList.add("red");
  } else if (waterRequired / teapotSize < 0.8) {
    resultCell.classList.add("yellow");
    message = 'waterRequiredRounded + " ml"<br>Fill teapot between ' + Math.round(teapotSize * 0.8) + 'ml and ' + Math.round(teapotSize * 0.9) + 'ml';
  } else {
    resultCell.classList.add("green");
  }

  resultCell.insertAdjacentHTML("beforeend", message);
});

// Get all the collapsible headings
var collapsible = document.getElementsByClassName("collapsible");

// Add click event listener to each heading
for (var i = 0; i < collapsible.length; i++) {
  collapsible[i].addEventListener("click", function() {
    // Toggle the visibility of the content when the heading is clicked
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
