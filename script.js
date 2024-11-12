document.addEventListener('DOMContentLoaded', function() {
    const checkElement = setInterval(() => {
        const commandDialog = document.querySelector(".quick-input-widget");
        if (commandDialog) {
            if (commandDialog.style.display !== "none") {
                applyBlur();
            }
            observeCommandDialog(commandDialog);
            clearInterval(checkElement);
        }
    }, 500);

    function observeCommandDialog(commandDialog) {
        const observer = new MutationObserver(() => {
            if (commandDialog.style.display !== "none") {
                applyBlur();
            } else {
                removeBlur();
            }
        });

        observer.observe(commandDialog, { attributes: true });
    }

    function applyBlur() {
        const targetDiv = document.querySelector(".monaco-workbench .part.editor>.content");
        let blurElement = document.getElementById("bg-blur");

        if (!blurElement) {
            blurElement = document.createElement("div");
            blurElement.setAttribute('id', 'bg-blur');
            blurElement.addEventListener('click', removeBlur);
            targetDiv.appendChild(blurElement);
        }
    }

    function removeBlur() {
        const blurElement = document.getElementById("bg-blur");
        if (blurElement) {
            blurElement.remove();
        }
    }
});