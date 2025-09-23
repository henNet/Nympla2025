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
            <button 
              id="btnDetails-${event.id}"
              data-bs-toggle="modal" 
              data-bs-target="#exampleModal" 
              class="btn btn-secondary">Detalhes</button>
            <button class="btn btn-primary">Inscrever-se</button>
          </div>
        </div>`;

    document.querySelector("main").appendChild(card);

    document
      .querySelector(`#btnDetails-${event.id}`)
      .addEventListener("click", updateModal);
  }
}

function updateModal(event) {
  let id = event.target.id.split("-")[1];

  let eventSearched = allEvents.filter((e) => e.id == id);

  console.log(eventSearched);

  document.querySelector("#exampleModalLabel").innerHTML =
    eventSearched[0].title;
}

getAllEvents();
