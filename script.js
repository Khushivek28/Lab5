document.addEventListener('DOMContentLoaded', () => {
    const batteryImage = document.getElementById('batteryImage');

    getBatteryPercentage()
        .then(batteryPercentage => {
            const robohashURL = `https://robohash.org/${batteryPercentage}.png`;

            batteryImage.src = robohashURL;
        })
        .catch(error => {
            console.error('Error', error);
        });
});
