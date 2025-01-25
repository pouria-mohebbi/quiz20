async function fetchAndDisplayUsers() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const article = document.querySelector("#user-cards");

    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const users = await response.json();
        
        users.forEach(user => {
            const card = document.createElement("div");
            card.className = "card";
            
            const name = document.createElement("h2");
            name.innerText = user.name;
            card.appendChild(name);
            
            const company = document.createElement("p");
            company.innerText = `Company: ${user.company.name}`;
            card.appendChild(company);
            
            article.appendChild(card);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchAndDisplayUsers();
