function roll()
{
    const numofDice=document.getElementById('numofdice').value;
    const diceresult=document.getElementById('diceresult');
    const diceimage=document.getElementById('diceimage');
    const rollingDuration = 1000;
    const rollingInterval = 100;
    diceresult.textContent = "Rolling...";
    diceimage.innerHTML = "";

    const rollingIntervalId = setInterval(() => {
        const tempImages = [];
        for (let i = 0; i < numofDice; i++) {
            const tempVal = Math.floor(Math.random() * 6) + 1;
            tempImages.push(`<img src="dice${tempVal}.png">`);
        }
        diceimage.innerHTML = tempImages.join('');
    }, rollingInterval);
  
    setTimeout(() => {
        clearInterval(rollingIntervalId);

        const values = [];
        const images = [];
        for (let i = 0; i < numofDice; i++) {
            const val = Math.floor(Math.random() * 6) + 1;
            values.push(val);
            images.push(`<img src="dice${val}.png">`);
        }

        diceresult.textContent = `Dice: ${values.join(', ')}`;
        diceimage.innerHTML = images.join('');
    }, rollingDuration);
}