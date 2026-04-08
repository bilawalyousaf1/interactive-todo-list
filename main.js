function delete_todo(event) {
  let parentContainer = event.target.parentNode;
  document.querySelector(".output").removeChild(parentContainer);
}

function edit_todo(event) {
  const paragraph_element = event.target.parentNode.querySelector("p");
  const newText = prompt(
    "Enter New Updated Text",
    paragraph_element.textContent,
  );
  if (newText == "") {
    alert("Text cannot be empty");
    return;
  }
  paragraph_element.innerText = newText;
}

function add_todo(event) {
  event.preventDefault();

  const userinput = document.querySelector(".userinput").value;
  const output = document.querySelector(".output");

  output.innerHTML += `
    <div>
        <p>${userinput}</p>
        <button onclick="delete_todo(event)">Delete</button>
        <button onclick="edit_todo(event)">Edit</button>
    </div>
    `;
  document.querySelector(".userinput").value = "";
}
