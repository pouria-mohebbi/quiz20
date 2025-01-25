const users = [
    {
        firstName: "Grattan",
        lastName: "Dalton"
    },
    {
        firstName: "William",
        lastName: "Dalton"
    },
    {
        firstName: "Robert",
        lastName: "Dalton"
    }
];

async function addUsersToMockAPI() {
    const url = "https://your-mockapi-endpoint.com/users";  

    try {
        for (const user of users) {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();
            console.log("User added:", result);
        }
    } catch (error) {
        console.error("Error adding users:", error);
    }
}



addUsersToMockAPI();

document.getElementById("signup-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const phoneNumber = document.getElementById("phone-number").value;

    const newUser = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber
    };

    const url = "https://your-mockapi-endpoint.com/users";  

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log("User signed up:", result);
    } catch (error) {
        console.error("Error signing up:", error);
    }
});
