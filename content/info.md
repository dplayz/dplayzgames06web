---
layout: "infopage"
entryDataFile: infopage
---
{{<infopage/pfp gravatar-email="dp@dplayzgames06.tk">}}

{{<html>}}
<style>
@font-face {
    font-family: 'Halvar Breitschrift';
    font-weight: normal;
    font-display: swap;
    src: url('https://raw.githubusercontent.com/kuiperdog/nova/main/src/lib/assets/fonts/halvar_breitschrift.woff2') format('woff2');
}
</style>
<script>
// The array of randomized background images
const imgSource = [
    "url(https://pbs.twimg.com/media/GMV1NxIbYAAlXPv?format=jpg&name=large)", 
    "url(https://pbs.twimg.com/media/GPtp6toWQAANmgB?format=jpg&name=large)", 
    "url(https://pbs.twimg.com/media/GPpW8u7WMAIV1jp?format=jpg&name=large)",
    "url(https://pbs.twimg.com/media/GPiTOvvawAEiEdM?format=jpg&name=large)",
    "url(https://pbs.twimg.com/media/GOWFD-TbAAIuxtN?format=jpg&name=large)"
]
if (urlParamValues.fromWavHaus == "true") {
    console.log("Hello there from dp.wav.haus!");

    // Manage font delegation
    document.body.style.fontFamily = "Halvar Breitschrift";

    // Modify the main page's meta tags
    window.parent.document.title = "Hello World";

    // Randomize the background
    const random = Math.floor(Math.random() * imgSource.length);
    console.log(random, imgSource[random]);
    document.body.style.background = imgSource[random]; 
    document.body.style.backgroundColor = "#000";
    document.body.style.backgroundSize = "auto 100vh"
    document.body.style.backgroundPosition = "center top"; 
    document.body.style.backgroundRepeat= "repeat-y";

    // Toggle Button 
    function toggleCanvasDisplay() {
        var infopageCanvas = document.getElementById("infopage");
        if (infopageCanvas.style.display === "none") {
            infopageCanvas.style.display = "block";
        } else {
            infopageCanvas.style.display = "none";
        }
    }
    const canvasToggleButton = document.createElement('button');
    canvasToggleButton.textContent = 'Show/Hide';
    canvasToggleButton.style.position = 'fixed';
    canvasToggleButton.style.right = 0;
    canvasToggleButton.style.top = 0;
    document.body.appendChild(canvasToggleButton);
    canvasToggleButton.addEventListener('click', () => {
        toggleCanvasDisplay();
    });
    
    // Make all content be in parent page, not in iframe
    window.addEventListener('DOMContentLoaded', function() {
        const links = document.querySelectorAll('a');
        links.forEach(link => {
            link.setAttribute('target', '_parent');
        });
    });
}
</script>
{{</html>}}