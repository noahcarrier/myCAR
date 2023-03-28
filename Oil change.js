// Check if the Notification API is available in the browser
if ("Notification" in window) {
    // Check if permission to display notifications has already been granted
    if (Notification.permission === "granted") {
      // Create a new notification
      new Notification("Oil Change Due Soon", {
        body: "It's time to schedule an oil change for your vehicle.",
        icon: "path/to/icon.png" // Replace with the path to your notification icon
      });
    } else if (Notification.permission !== "denied") {
      // Request permission to display notifications
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          // Create a new notification
          new Notification("Oil Change Due Soon", {
            body: "It's time to schedule an oil change for your vehicle.",
            icon: "path/to/icon.png" // Replace with the path to your notification icon
          });
        }
      });
    }
  }