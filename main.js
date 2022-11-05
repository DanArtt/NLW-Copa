function createGame(player1, hour, player2) {
  return `
    <li>
              <img src="./assets/icon-${player1}.svg" 
              alt="Bandeira do ${player1}"/>
              <strong>${hour}</strong>
              <img src="./assets/icon-${player2}.svg"
               alt="Bandeira do ${player2}" />
            </li>
  `
}

let delay = 0.3;
function createCard(date, day, games) {
  delay = delay + 0.3;
  return `
     <div class="card" style="animation-delay: ${delay}s">
          <h2>${date} <span>${day}</span></h2>
          <ul> 
            ${games}
          </ul>
        </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("24/11", "Quinta-Feira",
    createGame("switzerland", "07:00", "cameroon") +
    createGame("uruguay", "10:00", "south-Korea") +
    createGame("portugal", "13:00", "ghana") +
    createGame("brazil", "16:00", "serbia")
) + 

  createCard("28/11", "Segunda-Feira",
    createGame("cameroon", "07:00", "serbia") +
    createGame("south-Korea", "10:00", "ghana") +
    createGame("switzerland", "13:00", "brazil") +
    createGame("uruguay", "16:00", "portugal")
) + 

  createCard("02/12", "Sexta-Feira",
    createGame("south-Korea", "07:00", "portugal") +
    createGame("ghana", "10:00", "uruguay") +
    createGame("serbia", "13:00", "switzerland") +
    createGame("brazil", "16:00", "cameroon")
)

