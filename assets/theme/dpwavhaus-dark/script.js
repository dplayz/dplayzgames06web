/*
GOAL: 
This is fundamentally flawed



Either of these to do:
- to catch themeToggler's setTheme
- make setTheme also emit theme:change event
*/

document.addEventListener("theme:change", (event)=> {
    if(event.detail.themeName === "dpwavhaus" && 
        event.detail.colorScheme === "dark" &&
        location.pathname.match("\/info") == "/info" ){

        console.log("Hello there from dp.wav.haus!");
        // Manage font delegation
        var urlInfopageBG="https://docs.google.com/spreadsheets/d/e/2PACX-1vRwb6ld_4m3PpfxYC_rabLiynoRnAAAnvLaFoyVAtcZpkuMfVbHK2pWRUYzD--tWuKeLIJ9VT9zvNSE/pub?gid=1109457605&single=true&output=csv";
        var dataInfopageBG;
        // Fetch background data from CSV Endpoint, then process it
        Papa.parse(urlInfopageBG, {
            download: true,
            header: true,
            complete: function(results) {
                var data = results.data
                    data = data.filter(item => item["Approval Status"] === "Approved")
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
                data = replaceWithDownloadLink(data);
                console.log(data)
                window.dataInfopageBG = data;
                function randomizeBG(){
                // Randomize the background
                const random = Math.floor(Math.random() * data.length);
                console.log(random, data[random]["Image File"]);
                console.log(`url(${data[random]["Image File"]})`)
                document.documentElement.style.setProperty('--theme-dpwavhaus-dark-backgroundImg', `url(${data[random]["Image File"]})`);
                }
                randomizeBG();
                window.randomizeBG = randomizeBG;
                
            }
        });
        function toggleCanvasDisplay() {
            var infopageCanvas = document.querySelector("main");
            if (infopageCanvas.style.display === "none") {
                infopageCanvas.style.display = "block";
            } else {
                infopageCanvas.style.display = "none";
            }
        }
        window.toggleCanvasDisplay = toggleCanvasDisplay;
    } else {
        document.body.style = null;
        setTimeout(() => {
            setTheme('auto');
        }, 2000)
        console.log("kneeee")

          
    }
});