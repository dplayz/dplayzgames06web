---
singlepage: true
---
{{< html >}}
<img src="../images/logo.png"  class="style-exclude" width="240px" style="margin-top:2%;">	
<br>
    <a class="button" href="/info">Info</a>
    </br>
    <style>
      .slider {
        z-index:99999;
        overflow-y:hidden;
        width: 300px;
        text-align: center;
        overflow-y: hidden;
      }
      @media (min-width:800px){
        .slider{width: 600px; height:600px;}
        .slides div{height:800px;}
      }
      .slides {
        z-index:-99;
        display: flex;
        overflow: hidden;
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch;
      }
      .slides div {
        z-index:0;
        scroll-snap-align: start;
        flex-shrink: 0;
        width: 97%;
        height:300px;
        margin-right: 10px;
        border-radius: 10px;
        background: #eee;
        transform-origin: center center;
        transform: scale(1);
        transition: transform 0.5s;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 100px;
        border:5px black solid;
        border-radius:5px;
        background-color:white;
      }
      .slider > a {
        display: inline-flex;
        width: 1.5rem;
        height: 1.5rem;
        background: white;
        text-decoration: none;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        margin: 0 0 0.5rem 0;
        position: relative;
      } 
    </style>
    <div class="slider" style="margin-left:auto; margin-right:auto; padding: top 30px;">
      <div class="slides">
        <div id="fb-page" style="background-color:#2374E1;" class="fb-page" data-href="https://www.facebook.com/dplayzgames06/" data-tabs="timeline" data-width="600" data-height="300" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"></div>
        <div id="twitch-channel"><iframe src="https://player.twitch.tv/?channel=dplayzgames06&parent=dplayzgames06.tk" frameborder="0" allowfullscreen="true" scrolling="no" height="100%" width="100%"></iframe></div>
        <div id="yt1-channel" style="background-color:#282828;"><div class="g-ytsubscribe" data-channelid="UCNTjCvAvlLzmEKIZQ5BpoGQ" data-layout="full" data-theme="default" data-count="default"></div></div>
        <div id="yt2-channel" style="background-color:#282828;"><div class="g-ytsubscribe" data-channelid="UCRYtnbYg1N9AKS7LQ88N5Qg" data-layout="full" data-theme="default" data-count="default"></div></div>
        <div id="twt-acct" style="background-color:#F5F8FA;"><a class="twitter-timeline" href="https://twitter.com/dplayzgames06?ref_src=twsrc%5Etfw">Tweets by dplayzgames06</a></div>
      </div>
      <a href="#fb-page"><img src="/images/fb.png" width="17.5px"></a>
      <a href="#twitch-channel"><img src="/images/twch.png" width="15px"></a>
      <a href="#yt1-channel"><img src="/images/yt.png" width="17.5px"></a>
      <a href="#yt2-channel"><img src="/images/yt.png" width="17.5px"></a>
      <a href="#twt-acct"><img src="/images/twt.png" width="15px;"></a>
    </div>
    <div id="fb-root"></div>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/tl_PH/sdk.js#xfbml=1&version=v13.0&appId=2932203920349027&autoLogAppEvents=1" nonce="rAlCMoZM"></script>
<br>
{{< /html >}}