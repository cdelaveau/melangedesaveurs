// Définition des constantes pour les mois et les jours de la semaine
function generateCalendar(events) {
    
    const months = [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre"
    ];
    
    const daysOfWeek = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
    // Obtention de la date actuelle et initialisation de certaines variables
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    // Création de la table qui contiendra le calendrier
    const calendarTable = document.createElement("table");
    calendarTable.classList.add("table-auto", "mx-auto");
  
    // Ajout de la ligne pour les jours de la semaine
    const headerRow = document.createElement("tr");
    for (let day of daysOfWeek) {
      const th = document.createElement("th");
      th.classList.add("px-4", "py-2", "text-gray-600", "font-medium", "text-sm", "text-center");
      th.textContent = day;
      headerRow.appendChild(th);
    }
    calendarTable.appendChild(headerRow);
  
    // Ajout des jours du mois au calendrier
    let dayOfMonth = 1;
    for (let row = 0; row < 6; row++) {
      const tr = document.createElement("tr");
      for (let col = 0; col < 7; col++) {
        const td = document.createElement("td");
        td.classList.add("border", "px-4", "py-2", "text-gray-600", "font-medium", "text-sm", "text-center");
  
        if (row === 0 && col < firstDayOfMonth) {
          // Si le jour ne fait pas partie du mois en cours, la cellule est vide
          td.textContent = "";
        } else if (dayOfMonth > lastDayOfMonth) {
          // Si tous les jours du mois ont été ajoutés, la cellule est vide
          td.textContent = "";
        } else {
          // Ajout du numéro de jour dans la cellule
          td.textContent = dayOfMonth;
          const date = new Date(currentYear, currentMonth, dayOfMonth);
          const eventsForDate = events.filter(event => event.date.getTime() === date.getTime());
          if (eventsForDate.length > 0) {
            // Si un événement est prévu ce jour-là, on l'affiche dans une liste
            const ul = document.createElement("ul");
            ul.classList.add("text-sm", "text-gray-600", "mt-2");
            for (let event of eventsForDate) {
              const li = document.createElement("li");
              const title = document.createElement("span");
              title.classList.add("font-medium", "text-gray-800");
              title.textContent = event.title;
              const time = document.createElement("span");
              time.classList.add("text-gray-500", "ml-2");
              time.textContent = event.time;
              li.appendChild(title);
              li.appendChild(time);
              ul.appendChild(li);
            }
            td.appendChild(ul);
          }
          dayOfMonth++;
        }
        // Si le jour ne fait pas partie du mois courant, on n'affiche rien
        tr.appendChild(td);
      }
      calendarTable.appendChild(tr);
    }
  
    // On crée un titre pour le mois en cours
    const title = document.createElement("h2");
    title.classList.add("text-3xl", "font-bold", "text-gray-800", "mt-10", "mb-4", "text-center");
    title.textContent = months[currentMonth];
    // On ajoute le calendrier à la page
    const container = document.querySelector("#calendrier");
    container.appendChild(title);
    container.appendChild(calendarTable);
  }
  
  // On définit les événements à afficher dans le calendrier
  const events = [
    {
      date: new Date(2023, 3, 15),
      title: "Dégustation de vins",
      time: "18h30"
    },
    {
      date: new Date(2023, 3, 23),
      title: "Soirée asiatique",
      time: "19h00"
    }
  ];
  // On génère le calendrier avec les événements
  generateCalendar(events);