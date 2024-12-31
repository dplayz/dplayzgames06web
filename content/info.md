---
layout: "infopage"
title: "Info"
entryDataFile: infopage
---
{{<infopage/pfp gravatar-email="dp@dplayzgames06.tk">}}

{{<html>}}
<script>
if (urlParamValues.ref == "dp.wav.haus") {
    // Make all content be in parent page, not in iframe
    window.addEventListener('turbo:load', function() {
        const links = document.querySelectorAll('a');
        links.forEach(link => {
            link.setAttribute('target', '_parent');
        });
    });
}
if (window.location.pathname.startsWith("/info") === true){
if (urlParamValues.ref == "dp.wav.haus") {
    // Make all content be in parent page, not in iframe
    window.addEventListener('turbo:load', function() {
        const links = document.querySelectorAll('a');
        links.forEach(link => {
            link.setAttribute('target', '_parent');
        });
    });
}
window.addEventListener('turbo:load', function() {
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
}
</script>
{{</html>}}