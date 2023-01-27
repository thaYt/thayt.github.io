<script>
  // links
  var spTopURL = "https://spotify-top.com/user/pvl8wlfg5qdcoxs42xidk0zop",
    githubURL = "https://github.com/thaYt",
    scloud = "https://soundcloud.com/coredd",
    discord = "core#1011";

  import { base } from "$app/paths";
  import { onMount } from "svelte/internal";
  import pfp from "$lib/assets/pfp.png";
  import Discord from "$lib/svg/discord.svelte";
  import Github from "$lib/svg/github.svelte";

  let card;
  let speed = 100;
  let steps = 10;

  let deltaRotation = -1;

  onMount(() => {
    card = document.getElementsByTagName("card")[0];
    card.style.webkitTransform = card.style.transform =
      "rotate3d(10, 180, 50, " +
      (window.screenX > 50 ? window.screenX / -30 + 20 : 0) +
      "deg)";
  });

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
      // formatter makes me cry

      if ((deltaRotation > 0 && rotation < 0) || (deltaRotation < 0 && rotation > 0)) {
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

<img
  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/12cbe8a4-f55c-4b40-85bb-d8e1405e7b84/de5xmey-d2973d58-f67f-4f61-abdb-b4d240d98e5d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzEyY2JlOGE0LWY1NWMtNGI0MC04NWJiLWQ4ZTE0MDVlN2I4NFwvZGU1eG1leS1kMjk3M2Q1OC1mNjdmLTRmNjEtYWJkYi1iNGQyNDBkOThlNWQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.rWg-cHkq9ex3P9VFu2TrW8R62gyoOOhRxtvmb5sJbgo"
  alt="background???"
  id="bg"
/>

<body href="{base}/">
  <a
    id="bgref"
    href="https://www.deviantart.com/kirokaze"
    target="_blank"
    rel="noreferrer noopener"><p>background - kirokaze</p></a
  >
  <a
    href="https://github.com/thaYt/thayt.github.io"
    target="_blank"
    rel="noreferrer noopener"
    >
    <div id="ghlogo"><Github /></div>
  </a>
  <card
    on:mousemove={(e) => {
      card.style.webkitTransform = card.style.transform =
        "rotate3d(0, 180, 50, " + 1.5*(e.pageX / -30 + 30) + "deg)";
    }}
    on:mouseleave={easeBack}
  >
    <img src={pfp} alt="pfp" id="pfp" />
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <h1 id="name">hey, i'm core!</h1>
    <p id="info">i'm a backend developer that works with svelte, typescript, golang, and some others.</p>
    <ul>
      <li id="discord">
        <Discord />
      </li>
    </ul>
  </card>
</body>

<style>
  * {
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    font-family: "Gill Sans", sans-serif;
    /* thanks browsers!!! */
  }

  body {
    background-color: #112;
    /*  */
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
  }

  card {
    background-color: #4443;
    /* #22223d77 */
    position: absolute;
    width: 43%;
    top: 25%;
    height: 50%;
    border-radius: 20px;
    backdrop-filter: blur(2.5ex);
    filter: drop-shadow(2px, 2px, 5px, #000);
  }

  h1 {
    color: #fff;
    filter: drop-shadow(0 0 0.05rem #aaa);
    margin-left: 25px;
  }

  #ghlogo {
    position: absolute;
    right: 10px;
    top: 10px;
    filter: drop-shadow(5px, 5px, 5px black);
  }

  #bg {
    padding: 0%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0px;
    height: 100%;
  }

  #pfp {
    border-radius: 20px;
    top: 12%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
  }

  #bgref {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 25px;
    color: white;
    text-decoration: none;
    bottom: 0%;
    text-shadow: #000 2px 2px 0.5px;
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

  #discord, #ghlogo {
    fill: white;
  }

  #name {
    position: fixed;
    margin: 0%;
    left: 50%;
    transform: translateX(-50%);
    top: 37.5%;
    text-shadow: #000 2px 2px 0.5px;
  }

  #info {
    color: #fff;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    text-shadow: #000 2px 2px 0.5ex;
    top: 43.5%;
  }
</style>
