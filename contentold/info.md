---
category: post
title: "Info"
date: 2022-01-20T10:52:59+08:00
description: "Check my accounts and info here!"
draft: false
sitemapExclude: true
singlepage: true
infopage: true
---
{{< html >}}
<style>
	body.fromwavhaus{
		background:url(https://i.redd.it/mqr0mw3q36vb1.jpg);
		background-size:155%;
		background-position:center;
	}
	body.fromwavhaus details.collapsible div.content{
		background-color:#08090a;
	}
	body.fromwavhaus div.infopage{
		backdrop-filter:blur(5px);
	}
	@media (max-width:800px){
		body.fromwavhaus{
			background-size:165%;
		}
	}
</style>
<script>
	if (urlParamValues.fromwavhaus == "true"){
		console.log("hello there!")
		var element = document.getElementById("body");
		element.classList.add("fromwavhaus");
	} else if (urlParamValues.displaykpopID == "true"){
		document.getElementById("body").style.backgroundColor = "#f36196";
	}
</script>
{{< infopage/profile-gravatar "dp@dplayzgames06.tk" >}}
{{< infopage/sns >}}
    {{< infopage/sns/icon iconClass="fa-brands fa-facebook" link="https://facebook.com/dplayzgames06" >}}
	{{< infopage/sns/icon iconClass="fa-brands fa-twitch" link="https://twitch.tv/dplayzgames06" >}}
	{{< infopage/sns/icon iconClass="fa-brands fa-youtube" link="https://youtube.com/channel/UCNTjCvAvlLzmEKIZQ5BpoGQ" >}}
	{{< infopage/sns/icon link="https://youtube.com/channel/UCRYtnbYg1N9AKS7LQ88N5Qg" >}}
    {{< infopage/sns/icon iconSrc="https://medal.tv/favicon.ico" link="https://medal.tv/u/dplayzgames06" >}}
	{{< infopage/sns/icon iconClass="fa-brands fa-twitter" link="https://twitter.com/dplayzgames06" >}}
	{{< infopage/sns/icon  iconClass="fa-brands fa-instagram" link="https://tiktok.com/@dplayzgames06" >}}
    {{< infopage/sns/icon "https://instagram.com/dplayzgames06" >}}
{{</ infopage/sns >}}
	{{<infopage/collapsible name="Introduction" iconClass="fa-solid fa-info-circle">}}
		{{< readFile "/readFile/info/introduction.md" markdownify>}}
		{{< dynamicContent introductionAsAKPopFan >}}
			{{<infopage/collapsible iconClass="fa-solid fa-heart" name="Introduction as a K-Pop Fan">}}
				{{< readFile "/readFile/info/introduction-kpopfan.md" markdownify>}}
			{{</infopage/collapsible>}}
		{{</dynamicContent>}}
	{{</infopage/collapsible>}}
		{{<infopage/collapsible name="What am I doing?" iconClass="fas fa-question-circle">}}
		{{< readFile "/readFile/info/presence.md" markdownify>}}
	{{</infopage/collapsible>}}
<br>
<br>
		{{< dynamicContent gameID >}}
			{{< infopage/collapsible iconClass="fa-solid fa-gamepad" name="Play With Me!" >}}
				{{< readFile "/readFile/info/playwithme-active.md" markdownify>}}
				{{< infopage/collapsible "Inactive player of these games" >}}
					{{< readFile "/readFile/info/playwithme-inactive.md" markdownify>}}
				{{</ infopage/collapsible >}}
			{{</ infopage/collapsible>}}
		{{< /dynamicContent >}}
		{{< infopage/collapsible name="My other accounts" iconClass="fa-solid fa-user">}}
			{{< readFile "/readFile/info/1_otheraccounts.md" markdownify>}}
		{{< /infopage/collapsible >}}
		{{< infopage/collapsible iconClass="fa-solid fa-play" name="Media Monitor Accounts" >}}
			{{< readFile "/readFile/info/medialist-id.md" markdownify>}}
		{{< /infopage/collapsible >}}
		{{< dynamicContent kpopID >}}
			{{< infopage/collapsible iconClass="fa-solid fa-heart" name="Kpop-Related Accounts" >}}
				{{< infopage/collapsible "Weverse-Phoning" >}}	
					{{< readFile "/readFile/info/kpop-ids-weverse-phoning.md" markdownify>}}
				{{< /infopage/collapsible >}}
				{{< infopage/collapsible "Daum Cafe" >}}
						{{< readFile "/readFile/info/kpop-ids-daum_cafe.md" markdownify>}}
				{{< /infopage/collapsible >}}
				{{< infopage/collapsible "Voting Platforms" >}}
						{{< readFile "/readFile/info/kpop-ids-voting_platforms.md" markdownify>}}
				{{< /infopage/collapsible >}}
				{{< infopage/collapsible "JYPE Fans" >}}
						{{< readFile "/readFile/info/kpop-ids-jype_fans.md" markdownify>}}
				{{< /infopage/collapsible >}}
				{{< infopage/collapsible name="Modhaus' Cosmo" >}}
					{{<readFile "/readFile/info/kpop-ids-cosmo.md" markdownify>}}
				{{< /infopage/collapsible >}}
			{{< /infopage/collapsible >}}
		{{< /dynamicContent >}}
		{{< infopage/collapsible iconClass="fa-solid fa-address-card" name="Contact Info" >}}
			{{<readFile "/readFile/info/contactinfo.md" markdownify>}}
		{{< /infopage/collapsible >}}
	<br>
	<br>
	<br>
	<br>
	<br>
	</div>
{{< /html >}}
