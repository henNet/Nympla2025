var allEvents = [];

async function getAllEvents() {
  const reply = await fetch("http://localhost:8080/event/all");
  const data = await reply.json();

  console.log(data);

  allEvents = data;

  for (let event of allEvents) {
    let card = document.createElement("div");
    card.className = "card shadow-lg";
    card.style = "width: 18rem";

    card.innerHTML = `
        <img
          src="${event.imageURL}"
          class="card-img-top"
        />
        <div class="card-body">
          <h5 class="card-title">${event.title}</h5>
          <p class="card-text">${event.description}</p>
          <div class="d-flex justify-content-center gap-2">
            <button class="btn btn-secondary">Detalhes</button>
            <button class="btn btn-primary">Inscrever-se</button>
          </div>
        </div>`;

    document.querySelector("main").appendChild(card);
  }
}

getAllEvents();
