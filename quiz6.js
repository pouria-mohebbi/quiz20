const familyMemberIds = [1, 2, 3];  

async function deleteFamilyMembers() {
    try {
        for (const id of familyMemberIds) {
            const url = `https://your-mockapi-endpoint.com/users/${id}`;  
            const response = await fetch(url, {
                method: "DELETE"
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            console.log(`User with ID ${id} deleted`);
        }
    } catch (error) {
        console.error("Error deleting users:", error);
    }
}

deleteFamilyMembers();



async function deleteEvenIdUsers() {
    const url = "https://your-mockapi-endpoint.com/users"; 

    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const users = await response.json();

        for (const user of users) {
            if (user.id % 2 === 0) {
                const deleteUrl = `${url}/${user.id}`;
                const deleteResponse = await fetch(deleteUrl, {
                    method: "DELETE"
                });

                if (!deleteResponse.ok) {
                    throw new Error(`HTTP error! Status: ${deleteResponse.status}`);
                }

                console.log(`User with ID ${user.id} deleted`);
            }
        }
    } catch (error) {
        console.error("Error deleting users:", error);
    }
}

deleteEvenIdUsers();
