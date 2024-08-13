async function robob() {
    try {
        const lvlid = document.getElementById("lvlid");
        const lvl = lvlid.value;

        const response = await fetch('https://www.boomlings.com/database/downloadGJLevel22.php', {
            method: 'POST',
            headers: {
                'User-Agent': '',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                levelID: lvl,
                secret: 'Wmfd2893gb7'
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.text();
        const vals = result.split(":")
        console.log(vals);
    } catch (error) {
        console.error(error);
    }
}
