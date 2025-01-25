const updatedUser = {
    firstName: "Lufy",
    lastName: "Monkey. D",
    phoneNumber: "(945) 635-3854"
};

async function updateUser() {
    const url = "https://your-mockapi-endpoint.com/users/1";  

    try {
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedUser)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log("User updated:", result);
    } catch (error) {
        console.error("Error updating user:", error);
    }
}

updateUser();
