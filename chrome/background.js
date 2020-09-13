
function updateIcon() {
    fetch('http://127.0.0.1:5000/ping')
    .then(response => {
        if (!response.ok) {
            console.log('Network response was not ok');
            //throw new Error('Network response was not ok');
            browser.browserAction.setIcon({path: "icons/no_conection.png"});
        }
        return response.json();
    })
    .then(data => {
        console.log(data)
        browser.browserAction.setIcon({path: "icons/etecsa.png"});
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
        browser.browserAction.setIcon({path: "icons/no_conection.png"});
    });
}

updateIcon();

// Set up an alarm to check this regularly.
browser.alarms.onAlarm.addListener(updateIcon);
browser.alarms.create('updateIcon', {periodInMinutes: 1});