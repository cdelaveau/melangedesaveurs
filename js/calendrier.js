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
  
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
    const calendarTable = document.createElement("table");
    calendarTable.classList.add("table-auto", "mx-auto");
  
    // Header row
    const headerRow = document.createElement("tr");
    for (let day of daysOfWeek) {
      const th = document.createElement("th");
      th.classList.add("px-4", "py-2", "text-gray-600", "font-medium", "text-sm", "text-center");
      th.textContent = day;
      headerRow.appendChild(th);
    }
    calendarTable.appendChild(headerRow);
  
    // Days
    let dayOfMonth = 1;
    for (let row = 0; row < 6; row++) {
      const tr = document.createElement("tr");
      for (let col = 0; col < 7; col++) {
        const td = document.createElement("td");
        td.classList.add("border", "px-4", "py-2", "text-gray-600", "font-medium", "text-sm", "text-center");
  
        if (row === 0 && col < firstDayOfMonth) {
          // Blank space before first day of the month
          td.textContent = "";
        } else if (dayOfMonth > lastDayOfMonth) {
          // Blank space after last day of the month
          td.textContent = "";
        } else {
          // Day of the month
          td.textContent = dayOfMonth;
          const date = new Date(currentYear, currentMonth, dayOfMonth);
          const eventsForDate = events.filter(event => event.date.getTime() === date.getTime());
          if (eventsForDate.length > 0) {
            // Add event information
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
  
        tr.appendChild(td);
      }
      calendarTable.appendChild(tr);
    }
  
    // Title
    const title = document.createElement("h2");
    title.classList.add("text-3xl", "font-bold", "text-gray-800", "mt-10", "mb-4", "text-center");
    title.textContent = months[currentMonth];
  
    const container = document.querySelector("#calendrier");
    container.appendChild(title);
    container.appendChild(calendarTable);
  }
  
  // Example usage
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
  generateCalendar(events);