window.onload = function () {
    const backdrop = document.createElement("div");
    backdrop.style.position = "fixed";
    backdrop.style.top = "0";
    backdrop.style.left = "0";
    backdrop.style.width = "100%";
    backdrop.style.height = "100%";
    backdrop.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    backdrop.style.display = "flex";
    backdrop.style.justifyContent = "center";
    backdrop.style.alignItems = "center";
    backdrop.style.zIndex = "1000";


    const alertBox = document.createElement("div");
    alertBox.style.backgroundColor = "#E9E1E2";
    alertBox.style.padding = "20px";
    alertBox.style.borderRadius = "10px";
    alertBox.style.textAlign = "center";
    alertBox.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    alertBox.style.position = "relative";


    const message = document.createElement("p");
    message.innerHTML = `🚧 Attenzione 🚧<br>Il sito web è attualmente in cantiere... 🛠️✨`;
    message.style.marginBottom = "15px";
    message.style.fontFamily = "Arial, sans-serif";
    message.style.color = "#333";


    const spinner = document.createElement("div");
    spinner.style.width = "40px";
    alertBox.style.display = "flex";
    alertBox.style.flexDirection = "column";
    alertBox.style.justifyContent = "center";
    alertBox.style.alignItems = "center";
    spinner.style.height = "40px";
    spinner.style.border = "4px solid transparent";
    spinner.style.borderTop = "4px solid #007bff";
    spinner.style.borderRadius = "50%";
    spinner.style.animation = "spin 1s linear infinite";

    const style = document.createElement("style");
    style.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);


    const closeButton = document.createElement("button");
    closeButton.textContent = "×";
    closeButton.style.position = "absolute";
    closeButton.style.top = "10px";
    closeButton.style.right = "10px";
    closeButton.style.border = "none";
    closeButton.style.background = "none";
    closeButton.style.fontSize = "20px";
    closeButton.style.cursor = "pointer";
    closeButton.style.color = "#333";


    closeButton.onclick = function () {
        document.body.removeChild(backdrop);
    };


    alertBox.appendChild(closeButton);
    alertBox.appendChild(message);
    alertBox.appendChild(spinner);
    backdrop.appendChild(alertBox);
    document.body.appendChild(backdrop);


    backdrop.style.visibility = "visible";
    backdrop.style.opacity = "1";
};

const svgElement = document.querySelector('.menu-toggler-icon');
svgElement.addEventListener('pointerdown', () => {
    svgElement.classList.add('clicked');
});
svgElement.addEventListener('pointerup', () => {
    setTimeout(() => {
        svgElement.classList.remove('clicked');
    });
});
svgElement.addEventListener('pointerleave', () => {
    svgElement.classList.remove('clicked');
});

const svgElement2 = document.querySelector('.logo');
svgElement2.addEventListener('pointerdown', () => {
    svgElement2.classList.add('clicked');
});
svgElement2.addEventListener('pointerup', () => {
    setTimeout(() => {
        svgElement2.classList.remove('clicked');
    });
});
svgElement2.addEventListener('pointerleave', () => {
    svgElement2.classList.remove('clicked');
});