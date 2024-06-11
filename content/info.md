---
layout: "infopage"
entryDataFile: infopage
---
##### This is the new layout of my info page. New features are being added, along with the migration of the info here. When the time comes that the theme is feature complete, and/or all info has migrated to here, this message will be removed
##### More info about the theme [here](https://github.com/dplayz/codenamecore2)
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
if (urlParamValues.fromWavHaus == "true") {
    console.log("Hello there from dp.wav.haus!");

    // Manage font delegation
    document.body.style.fontFamily = "Halvar Breitschrift";
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