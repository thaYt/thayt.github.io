<script>
  // links
  var spTopURL = "https://spotify-top.com/user/pvl8wlfg5qdcoxs42xidk0zop",
    githubURL = "https://github.com/thaYt",
    scloud = "https://soundcloud.com/coredd",
    discord = "core#1011",
    rosePineRepo = "https://github.com/rose-pine/rose-pine-theme";

  import { base } from "$app/paths";
  import { onMount } from "svelte/internal";

  import pfp from "$lib/assets/pfp.png";
  import Discord from "$lib/svg/discord.svelte";
  import Github from "$lib/svg/github.svelte";
  import Soundcloud from "$lib/svg/soundcloud.svelte";
  import Spotify from "$lib/svg/spotify.svelte";

  let card;
  let speed = 100;
  let steps = 12;
  let deltaRotation = -1;

  let loaded = false;

  onMount(() => {
    card = document.getElementsByTagName("card")[0];
    loaded = true;
  });

  let discordPopup,
    discCopied = false;

  function copyDiscord() {
    navigator.clipboard.writeText(discord);
    discCopied = true;
    setTimeout(() => {
      discCopied = false;
    }, 5000);
  }

  function easeBack() {
    let rotation = parseFloat(
      card.style.webkitTransform.toString().split(",")[3].replace("deg)", "")
    );
    deltaRotation = rotation / steps;
    ease();
  }

  function ease() {
    let rotation = parseFloat(
      card.style.webkitTransform.toString().split(",")[3].replace("deg)", "")
    );
    setTimeout(() => {
      rotation -= deltaRotation;
      // thank you formatter!!!
      if (
        (deltaRotation > 0 && rotation < 0) ||
        (deltaRotation < 0 && rotation > 0)
      ) {
        rotation = 0;
        card.style.webkitTransform = card.style.transform =
          "rotate3d(10, 180, 50, " + rotation + "deg)";
        return;
      } else {
        ease();
      }
      card.style.webkitTransform = card.style.transform =
        "rotate3d(10, 180, 50, " + rotation + "deg)";
    }, speed / steps);
  }
</script>

<a
  href="https://github.com/thaYt/thayt.github.io"
  target="_blank"
  rel="noreferrer noopener"
>
  <div id="ghlogo"><Github /></div>
</a>

<p id="contact">
  contact me on discord/core#1011 | <a
    href={rosePineRepo}
    target="_blank"
    rel="noreferrer noopener">color theme based on rose pine</a
  >
</p>

<body href="{base}/">
  <card
    on:mousemove={(e) => {
      card.style.webkitTransform = card.style.transform =
        "rotate3d(10, 180, 50, " + (e.pageX / -30 + 32.5) + "deg)";
    }}
    on:mouseleave={easeBack}
  >
    <img src={pfp} alt="pfp" id="pfp" />
    <h1 id="name">hey, i'm core!</h1>
    <p id="info">i do things on the internet, some examples in links!</p>

    <div class="bottom">
      <p id="info">links:</p>
      <ul>
        <!-- svelte-ignore a11y-mouse-events-have-key-events -->
        <li
          id="discord"
          on:mouseover={() => (discordPopup = true)}
          on:mouseleave={() => (discordPopup = false)}
          on:mousedown={copyDiscord}
        >
          {#if discordPopup}
            <div class="popup">
              <p>{discCopied == true ? "copied!" : discord}</p>
            </div>
          {/if}
          <Discord />
        </li>
        <li id="github">
          <a href={githubURL} target="_blank" rel="noreferrer noopener">
            <Github />
          </a>
        </li>
        <li id="soundcloud">
          <a href={scloud} target="_blank" rel="noreferrer noopener">
            <Soundcloud />
          </a>
        </li>
        <li id="spotify">
          <a href={spTopURL} target="_blank" rel="noreferrer noopener">
            <Spotify />
          </a>
        </li>
      </ul>
    </div>
  </card>
</body>

<style>
  * {
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    /* thanks browsers!!! */
  }

  body {
    background-color: #191724;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  card {
    border-color: #ddb8ff;
    border-style: solid;
    position: absolute;
    width: 43%;
    top: 20%;
    height: 50%;
    padding: 20px;
    background-color: #332f4a;
  }

  h1 {
    color: #ddb8ff;
    margin-left: 25px;
  }

  #ghlogo {
    position: absolute;
    right: 10px;
    top: 10px;
  }

  #pfp {
    border-radius: 20px;
    width: 100px;
    filter: drop-shadow(5px, 5px, 5px, black);
    -webkit-filter: drop-shadow(5px, 5px, 5px black);
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  li {
    float: left;
  }

  #discord,
  #ghlogo,
  #github,
  #spotify,
  #soundcloud {
    fill: #e0b6ff;
  }

  #name {
    margin-left: 0%;
    top: 37.5%;
    text-shadow: #000 2px 2px 0.5px;
  }

  #info {
    text-shadow: #000 2px 2px 0.5ex;
    top: 43.5%;
    color: #ddb8ff;
  }

  .bottom {
    position: absolute;
    bottom: 10px;
  }

  li:not(:last-child) {
    padding-right: 10px;
  }

  .popup {
    position: absolute;
    top: -5px;
    left: 12.5%;
    transform: translateX(-50%);
    color: black;
    background-color: #505;
    border-radius: 10px;
    border-color: #000;
    border-style: solid;
    padding-left: 10px;
    padding-right: 10px;
  }

  #contact {
    text-shadow: #000 2px 2px 0.25px;
    position: absolute;
    bottom: 5px;
    transform: translateX(-50%);
    left: 50%;
    color: #ddb8ff;
    user-select: text;
    -webkit-user-select: text;
    -moz-user-select: text;
    text-decoration: none;
  }
</style>
