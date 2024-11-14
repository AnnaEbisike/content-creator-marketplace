const creators = [
    { id: 1, name: "John Doe", type: "Photographer", description: "Professional photographer specializing in portraits and landscapes.", price: "$100/hr" },
    { id: 2, name: "Jane Smith", type: "Videographer", description: "Expert videographer for commercials and events.", price: "$120/hr" },
    { id: 3, name: "Mark Lee", type: "Writer", description: "Experienced writer creating engaging blog posts and articles.", price: "$80/hr" },
    { id: 4, name: "Emily Davis", type: "Graphic Designer", description: "Creative graphic designer for logos, websites, and branding.", price: "$90/hr" }
];

const contentList = document.getElementById("content-list");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const bookingModal = document.getElementById("booking-modal");
const serviceDetails = document.getElementById("service-details");
const closeModalBtn = document.getElementById("close-modal");
const bookBtn = document.getElementById("book-btn");

// Function to display creators
function displayCreators(creators) {
    contentList.innerHTML = "";
    creators.forEach(creator => {
        const creatorDiv = document.createElement("div");
        creatorDiv.classList.add("content-item");
        creatorDiv.innerHTML = `
            <h3>${creator.name}</h3>
            <p><strong>${creator.type}</strong></p>
            <p>${creator.description}</p>
            <p><strong>${creator.price}</strong></p>
            <button onclick="openBookingModal(${creator.id})">Book Now</button>
        `;
        contentList.appendChild(creatorDiv);
}

// Search functionality
searchBtn.addEventListener("click", function() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredCreators = creators.filter(creator => 
        creator.name.toLowerCase().includes(searchTerm) ||
        creator.type.toLowerCase().includes(searchTerm) ||
        creator.description.toLowerCase().includes(searchTerm)
    );
    displayCreators(filteredCreators);
});

// Open booking modal
function openBookingModal(creatorId) {
    const creator = creators.find(creator => creator.id === creatorId);
    serviceDetails.textContent = `You are booking ${creator.name}, a ${creator.type}. Price: ${creator.price}. ${creator.description}`;
    bookingModal.style.display = "flex";
}

// Close booking modal
closeModalBtn.addEventListener("click", function() {
    bookingModal.style.display = "none";
});

// Handle booking action
bookBtn.addEventListener("click", function() {
    alert("Booking confirmed!");
    bookingModal.style.display = "none";
});

// Initial display of creators
displayCreators(creators);
