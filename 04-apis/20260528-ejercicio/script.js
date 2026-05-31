const API_URL = "https://6a147af06c7db8aac0549ba4.mockapi.io/api/v1/movies";

const titleInput = document.querySelector("#titleInput");
const descriptionInput = document.querySelector("#descriptionInput");
const urlInput = document.querySelector("#urlInput");
const scoreInput = document.querySelector("#scoreInput");

const createBtn = document.querySelector("#createBtn");
const getBtn = document.querySelector("#getBtn");

const message = document.querySelector("#message");
const moviesList = document.querySelector("#moviesList");

function showMessage(text) {
message.innerHTML = `<p>${text}</p>`;
}

function showError(text) {
message.innerHTML = `<p style="color:red;">${text}</p>`;
}