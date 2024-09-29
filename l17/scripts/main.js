function randomDelayPrint(message) {
    for (let i = 0; i < message.length; i++) {
        const delay = Math.floor(Math.random() * 1000)
        setTimeout(() => {
            process.stdout.write(message[i]); 
        }, delay + i * 1000); 
    }
}