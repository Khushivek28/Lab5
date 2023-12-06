function getBatteryPercentage() {
    return new Promise((resolve, reject) => {
        navigator.getBattery()
            .then(battery => {
                const batteryPercentage = battery.level * 100;
                resolve(batteryPercentage);
            })
            .catch(error => {
                reject(error);
            });
    });
}
