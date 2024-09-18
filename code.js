

// document.addEventListener('keydown', function(event) {
//     const keycode = event.keyCode;
//     const outputDiv = document.getElementById('Display');
//     const promptie = document.getElementById("Prompt");
//     outputDiv.innerText = `${keycode}`;
//     // outputDiv.classList.add('keycodestyle');
//     promptie.innerText = "Your keycode is:";
//     // promptie.classList.add('promptiestyle');
// });

document.addEventListener('keydown', function(event) {
    const keycode = event.keyCode;
    const outputDiv = document.getElementById('Display');
    const promptie = document.getElementById("Prompt");
    outputDiv.innerText = `${keycode}`;
    outputDiv.classList.add('keycodestyle');
    promptie.innerText = "Your keycode is:";
    promptie.classList.add('promptiestyle');})