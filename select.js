document.addEventListener("DOMContentLoaded", () => {
    // Mock bus data
    const searchResults = [
      { id: 1, busName: "Express Bus", time: "08:00 AM", price: "$15", seatsAvailable: 20 },
      { id: 2, busName: "Fast Travel", time: "10:00 AM", price: "$20", seatsAvailable: 15 },
      { id: 3, busName: "Comfort Bus", time: "12:00 PM", price: "$18", seatsAvailable: 25 },
      { id: 4, busName: "Luxury Line", time: "02:00 PM", price: "$30", seatsAvailable: 10 },
      { id: 5, busName: "Budget Bus", time: "04:00 PM", price: "$10", seatsAvailable: 40 },
    ];
  
    // Store bus data in localStorage (optional for persistence)
    localStorage.setItem("searchResults", JSON.stringify(searchResults));
  
    // Display bus list
    const busListDiv = document.getElementById("bus-list");
    busListDiv.innerHTML = searchResults
      .map(
        (bus) =>
          `<div class="bus-card">
            <div class="bus-details">
              <p><strong>${bus.busName}</strong></p>
              <p>Time: ${bus.time}</p>
              <p>Price: ${bus.price}</p>
              <p>Seats Available: ${bus.seatsAvailable}</p>
            </div>
            <button onclick="selectBus(${bus.id})">Book this Bus</button>
          </div>`
      )
      .join("");
  });
  
  function selectBus(busId) {
    // Save selected bus ID to localStorage for access on the booking page
    localStorage.setItem("selectedBusId", busId);
  
    // Redirect to the booking page
    window.location.href = "booking.html";
  }
  