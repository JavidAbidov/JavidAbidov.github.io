function greetBasedOnTime() {
    // Get the current time
    const now = new Date();
    const hour = now.getHours();

    let greeting;

    if (hour >= 5 && hour <= 11) {
        greeting = "Good Morning";
    } else if (hour >= 12 && hour <= 17) {
        greeting = "Good Afternoon";
    } else if (hour >= 18 && hour <= 21) {
        greeting = "Good Evening";
    } else {
        greeting = "Good Night";
    }

    // Display the greeting message
    document.getElementById('greeting').innerText = greeting;
}

if (document.getElementById('greeting') != null) {
    greetBasedOnTime();
}


function drawSpiralSquare(context) {
    let width = 640;
    let height = 480;
    let centerX = width / 2;
    let centerY = height / 2;

    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    let angle = 0;        
    let size = 5;    
    let increment = 7;    
    let angleIncrement = Math.PI / 2;  

    context.strokeStyle = 'black';
    context.lineWidth = 2;


    for (let i = 0; i < 200; i++) {
        let x1 = centerX + size * Math.cos(angle);
        let y1 = centerY + size * Math.sin(angle);
        
        let x2 = centerX + size * Math.cos(angle + Math.PI / 2);
        let y2 = centerY + size * Math.sin(angle + Math.PI / 2);
        
        let x3 = centerX + size * Math.cos(angle + Math.PI);
        let y3 = centerY + size * Math.sin(angle + Math.PI);
        
        let x4 = centerX + size * Math.cos(angle + 3 * Math.PI / 2);
        let y4 = centerY + size * Math.sin(angle + 3 * Math.PI / 2);

        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.lineTo(x3, y3);
        context.lineTo(x4, y4);
        context.closePath();
        context.stroke();

        size += increment;
        angle += angleIncrement;
    }
}