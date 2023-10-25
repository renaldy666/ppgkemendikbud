if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("/service-worker.js")
            .then(function () {})
            .catch(function () {
                console.log("Fail to register ServiceWorker");
            });
    });
} else {
    console.log("The browser not support ServiceWorker.");
}
