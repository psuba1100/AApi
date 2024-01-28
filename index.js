 function ShuffleArray(array) {
    const shuffledArray = [...array];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
}

 function GetRandomIntiger(min, max) {
    const randomDecimal = Math.random();

    const randomWholeNumber = Math.floor(randomDecimal * (max - min + 1)) + min;

    return randomWholeNumber;
}

 function GetRandomIntigerInclusive(min, max) {
    const randomDecimal = Math.random();

    const randomWholeNumber = Math.floor(randomDecimal * (max - min + 1)) + min;

    return randomWholeNumber;
}

 function Loop(count, callback) {
    for (let i = 0; i < count; i++) {
        callback();
    }
}

 function Log(message) {
    console.log(message)
}

 function Error(message) {
    console.error(message)
}

 function Warn(message) {
    console.warn(message)
}

 function Debug(message) {
    console.debug(message)
}

 function Sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

 function SleepS(s) {
    return new Promise(resolve => setTimeout(resolve, s*1000));
}

 async function SendDiscordWebhookMessage(message) {
    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(message),
        });

        if (response.ok) {
            console.log('Message sent successfully:', await response.json());
        } else {
            console.error('Failed to send message to webhook. Status:', response.status);
        }
    } catch (error) {
        console.error('Error sending message to webhook:', error.message);
    }
}
