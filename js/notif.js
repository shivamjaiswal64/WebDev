
// request permission on page load
document.addEventListener('DOMContentLoaded', function() {
 if (!Notification) {
  alert('Desktop notifications not available in your browser. Try FireFox.');
  return;
 }

 if (Notification.permission !== 'granted')
  Notification.requestPermission();
});
function notifyMe() {
    var options = {
    icon: 'images/project-2.jpg',
    body: 'Wow! Notification is working',
    image: 'images/project-3.jpg', //Not working in firefox
    //tag: '#KauaLe'
    //sound: 'sound/notifSound.mp3'
    badge: 3,
    data: 'I like data.' // Not used
}
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }
  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification("Notification test 1",options);
    notification.onclick = function() {
                                    window.open('terms-conditions.html');
                                    };
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification("Notification test 2",options);
        notification.onclick = function() {
                                    window.open('terms-conditions.html');
                                };
      }
    });
  }

  // At last, if the user has denied notifications, and you 
  // want to be respectful there is no need to bother them any more.
}

 var today = new Date();
  var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
  document.getElementById("dtText").innerHTML = date;
/* // Other way of send notification
askForApproval(); // Removed
            
            function askForApproval() {
                if(Notification.permission === "granted") {
                    createNotification('Wow! Notification is working', 'created by KauaLe Team', 'images/project-2.jpg','images/project-3.jpg');
                }
                else {
                    Notification.requestPermission(permission => {
                        if(permission === 'granted') {
                            createNotification('Wow! Notification is working', 'created by KauaLe Team', 'images/project-2.jpg','images/project-3.jpg');
                        }
                    });
                }
            }
            
            function createNotification(title, text, icon) {
                const noti = new Notification(title, {
                    body: text,
                    icon,

                });
            }
*/