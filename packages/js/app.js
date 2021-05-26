document.querySelector("#formPostage").addEventListener("submit", e => {
	e.preventDefault();
  const input = new FormData(e.target);
  e.target.nextElementSibling.firstElementChild.textContent = Number(input.get("amount")) * 0.5;
});