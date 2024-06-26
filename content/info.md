---
layout: "infopage"
entryDataFile: infopage
---
{{<infopage/pfp gravatar-email="dp@dplayzgames06.tk">}}

{{<html>}}
<script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.4.1/papaparse.min.js" integrity="sha512-dfX5uYVXzyU8+KHqj8bjo7UkOdg18PaOtpa48djpNbZHwExddghZ+ZmzWT06R5v6NSk3ZUfsH6FNEDepLx9hPQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
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
    // Randomize the background
    const random = Math.floor(Math.random() * imgSource.length);
    console.log(random, imgSource[random]);
    document.body.style.background = imgSource[random]; 
    document.body.style.backgroundColor = "#000";
    document.body.style.backgroundSize = "auto 100vh"
    document.body.style.backgroundPosition = "center top"; 
    document.body.style.backgroundRepeat= "repeat-y";
    document.body.style.backgroundAttachment= "fixed";
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
window.addEventListener('DOMContentLoaded', function() {
    if (window.location.hash === "#contacts" ){
        var chatAccountsElement = document.getElementById("contacts");
        chatAccountsElement.click();
        setTimeout(() => chatAccountsElement.scrollIntoView({ behavior: 'smooth' }), 200);
    }
    var urlPublicizedInfo="https://docs.google.com/spreadsheets/d/e/2PACX-1vRwb6ld_4m3PpfxYC_rabLiynoRnAAAnvLaFoyVAtcZpkuMfVbHK2pWRUYzD--tWuKeLIJ9VT9zvNSE/pub?gid=1417795743&single=true&output=csv";
	var dataPublicized;
	Papa.parse(urlPublicizedInfo, {
		download: true,
		header: true,
		complete: function(results) {
			var data = results.data
			function getLatestEntries(entries) {
				const latestEntries = {};
				entries.forEach(entry => {
					const entryType = entry["Entry Type"];
					latestEntries[entryType] = entry;
				});
				return Object.values(latestEntries);
			}
			function replaceWithDownloadLink(entries) {
				return entries.map(entry => {
					const fileIdMatch = entry["Image File"].match(/id=([^&]+)/);
					if (fileIdMatch) {
					const fileId = fileIdMatch[1];
					entry["Image File"] = `https://lh3.googleusercontent.com/d/${fileId}?h=s500`;
					}
					return entry;
				});
			}
			data = getLatestEntries(data);
			data = replaceWithDownloadLink(data);
			console.log(data)
			window.dataPublicized = data;
            if (((urlParamValues.display != undefined && urlParamValues.display.includes("kpopID")) == true) || 
                (urlParamValues.displaykpopID == "true")){
			    document.getElementById("SSSTAYCSTATS").href = data.find(function(entry) {return entry["Entry Type"] === "Games--SUPERSTARSTAYC";})["Image File"];
			    document.getElementById("SSPHSTATS").href = data.find(function(entry) {return entry["Entry Type"] === "Games--SUPERSTARPH";})["Image File"];
            }
            if (((urlParamValues.display != undefined && urlParamValues.display.includes("gameID")) == true) || 
                (urlParamValues.displaygameID == "true")){
			    document.getElementById("MNETPLUSSTATS").href = data.find(function(entry) {return entry["Entry Type"] === "KpopSNS--mnetplus";})["Image File"];
			    document.getElementById("STARPLANETSTATS").href = data.find(function(entry) {return entry["Entry Type"] === "KpopSNS--STARPLANET";})["Image File"];
			    document.getElementById("MUBEATSTATS").href = data.find(function(entry) {return entry["Entry Type"] === "KpopSNS--mubeat";})["Image File"];
			    document.getElementById("ALLCHARTSTATS").href = data.find(function(entry) {return entry["Entry Type"] === "KpopSNS--ALLCHART";})["Image File"];
			    document.getElementById("IDOLCHAMPSTATS").href = data.find(function(entry) {return entry["Entry Type"] === "KpopSNS--idolchamp";})["Image File"];
            }
		}
	});
});
</script>
{{</html>}}