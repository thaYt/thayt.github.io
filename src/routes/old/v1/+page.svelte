<script>
  // links
  var spTopURL = "https://spotify-top.com/user/pvl8wlfg5qdcoxs42xidk0zop",
    nameMCURL = "https://namemc.com/profile/thaYt.1",
    githubURL = "https://github.com/thaYt",
    aaclnTwitch = "https://twitch.tv/aacln",
    scloud = "https://soundcloud.com/coredd",
    discord = "core#1011";

  import Particles from "svelte-particles";
  import { loadFull } from "tsparticles";

  let particlesConfig = {
    particles: {
      number: {
        value: 25,
        density: {
          enable: true,
          value_area: 1262.6561550541749,
        },
      },
      color: {
        value: "#2b3347",
      },
      shape: {
        type: "polygon",
        stroke: {
          width: 0,
          color: "#000",
        },
        polygon: {
          nb_sides: 7,
        },
      },
      opacity: {
        value: 0.12626561550541748,
        random: true,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 165.72362035086044,
        random: true,
        anim: {
          enable: true,
          speed: 10,
          size_min: 40,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 383.38764658326613,
        color: "#ffffff",
        opacity: 0.0416725702807898,
        width: 0.833451405615796,
      },
      move: {
        enable: true,
        speed: 8,
        direction: "bottom",
        random: true,
        straight: true,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    retina_detect: true,
  };

  let onParticlesLoaded = (event) => {
    const particlesContainer = event.detail.particles;

    // you can use particlesContainer to call all the Container class
    // (from the core library) methods like play, pause, refresh, start, stop
  };

  let particlesInit = async (engine) => {
    // you can use main to customize the tsParticles instance adding presets or custom shapes
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  };

  function make() {
    navigator.clipboard.writeText(discord);
    document.getElementById("dt").innerHTML = "copied!";
    setTimeout(
      () => (document.getElementById("dt").innerHTML = "discord"),
      5000
    );
  }

  import { base } from "$app/paths";
</script>

<Particles
  id="tsparticles"
  options={particlesConfig}
  on:particlesLoaded={onParticlesLoaded}
  {particlesInit}
/>

<body href="{base}/old/v1">
  <div class="content">
    <a
      href="https://github.com/thaYt/thayt.github.io"
      target="_blank"
      rel="noreferrer noopener"
      ><svg
        id="ghlogo"
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 24 24"
        ><path
          d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
        /></svg
      >
    </a>
    <ul>
      <li>
        <div class="profile">
          <img
            src="https://cdn.discordapp.com/avatars/157471607802036224/b574c2118f5ee85b62ee6cf5d2547794.png"
            id="pfp"
            alt="pfp"
          />
          <div class="box">
            <ul>
              <li class="item-1">core</li>
              <li class="item-2">thaYt</li>
              <li class="item-3">acln</li>
              <li class="item-4">core</li>
            </ul>
          </div>
        </div>
      </li>
      <li>
        <links>
          <ul>
            <li>
              <a href={spTopURL} target="_blank" rel="noreferrer noopener">
                <div class="link" id="spotify-top">
                  <img
                    src="data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='200' height='200'/%3E%3Cpath d='M64.5 11C71.4036 11 77 16.3726 77 23V179C77 185.627 71.4036 191 64.5 191C57.5964 191 52 185.627 52 179V23C52 16.3726 57.5964 11 64.5 11Z' fill='%239DD1F1'/%3E%3Cpath d='M139.5 29C146.404 29 152 34.3726 152 41V161C152 167.627 146.404 173 139.5 173C132.596 173 127 167.627 127 161V41C127 34.3726 132.596 29 139.5 29Z' fill='%239DD1F1'/%3E%3Cpath d='M26 39C32.6274 39 38 44.4152 38 51.0952V153.905C38 160.585 32.6274 166 26 166C19.3726 166 14 160.585 14 153.905V51.0952C14 44.4152 19.3726 39 26 39Z' fill='%23735290'/%3E%3Cpath d='M178 53C184.627 53 190 58.3726 190 65V140H189.622C188.29 145.176 183.592 149 178 149C172.408 149 167.71 145.176 166.378 140H166V65C166 58.3726 171.373 53 178 53Z' fill='%23735290'/%3E%3Cpath d='M102 45C109.18 45 115 50.4442 115 57.16V146.84C115 153.556 109.18 159 102 159C94.8203 159 89 153.556 89 146.84V57.16C89 50.4442 94.8203 45 102 45Z' fill='%23047857'/%3E%3C/svg%3E"
                    alt="spot-top"
                  />
                  <p>spotify-top</p>
                </div>
              </a>
            </li>
            <li>
              <a href={nameMCURL} target="_blank" rel="noreferrer noopener">
                <div class="link" id="namemc">
                  <svg
                    style="background-color:black"
                    viewBox="-8 -8 16 16"
                    shape-rendering="crispEdges"
                    class="align-top"
                    width="150"
                    height="150"
                  >
                    <path
                      style="fill:white"
                      d="M-5-5L+3-5L+3-3L+5-3L+5+5L+3+5L+3-3L-3-3L-3+5L-5+5"
                    />
                  </svg>
                  <p>namemc</p>
                </div>
              </a>
            </li>
            <li>
              <a href={aaclnTwitch} target="_blank" rel="noreferrer noopener">
                <div class="link" id="twitch">
                  <img
                    src="https://brand.twitch.tv/assets/images/black.png"
                    alt="twitch"
                    id="tlogo"
                  />
                  <p>twitch</p>
                </div></a
              >
            </li>
            <li>
              <a href={scloud} target="_blank" rel="noreferrer noopener">
                <div class="link" id="scloud">
                  <img
                    src="https://play-lh.googleusercontent.com/lvYCdrPNFU0Ar_lXln3JShoE-NaYF_V-DNlp4eLRZhUVkj00wAseSIm-60OoCKznpw=w240-h480-rw"
                    alt="scloud"
                  />
                  <p>soundcloud</p>
                </div>
              </a>
            </li>
            <li>
              <a href={githubURL} target="_blank" rel="noreferrer noopener">
                <div class="link" id="github">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt="gh"
                    id="tlogo"
                  />
                  <p>github</p>
                </div>
              </a>
            </li>
            <li>
              <div on:click={make} on:keypress={make} class="link" id="discord">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/006/892/625/original/discord-logo-icon-editorial-free-vector.jpg"
                  alt="disc"
                />
                <p id="dt">discord</p>
              </div>
            </li>
          </ul>
        </links>
      </li>
    </ul>
  </div>
</body>

<style>
  :root {
    --bg-color: 17, 21, 30;
  }
  .profile {
    border-radius: 10px;
    overflow: hidden;
    padding: 25px 50px 25px 50px;
    background-color: #11151e;
    width: 500px;
    border-radius: 25px;
    box-shadow: #000000;
    filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.35));
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    background-color: #11151e;
    overflow: none;
  }

  .content {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 25px;
  }

  body {
    height: 100%;
    width: 100%;
    display: flex;
    letter-spacing: 0.02em;
    background-color: rgb(20, 24, 33);
  }

  .box {
    text-align: center;
    color: white;
    height: 60px;
    overflow: hidden;
    position: relative;
    font-size: 42px;
    transform: translateY(80%);
  }

  .box::before {
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    content: "";
    height: 20px;
    position: absolute;
    background: linear-gradient(
      180deg,
      rgba(var(--bg-color), 1),
      rgba(var(--bg-color), 0)
    );
  }

  .box::after {
    left: 0;
    bottom: 0;
    z-index: 1;
    width: 100%;
    content: "";
    height: 20px;
    position: absolute;
    background: linear-gradient(
      180deg,
      rgba(var(--bg-color), 0),
      rgba(var(--bg-color), 1)
    );
  }

  .box ul {
    margin: 0;
    padding: 0;
    animation: scrollUp 2.75s 0s infinite forwards ease-in-out;
  }

  .box ul li {
    opacity: 1;
    height: 20px;
    padding: 10px;
    list-style: none;
    margin-bottom: 20px;
    background-color: #00000000;
    color: #fff;
    font-size: 42px;
    text-shadow: 5px 5px 5px rgba(17, 21, 30, 0.5);
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes scrollUp {
    from {
      transform: translateY(-5%);
    }
    to {
      transform: translateY(-90.5%);
    }
  }

  ul li {
    background-color: #00000000;
    color: #00000000;
    border-radius: 20px;
  }

  links {
    backdrop-filter: blur(2px);
    padding: 10px;
    position: relative;
    border-radius: 20px;
  }

  links ul {
    color: #00000000;
    overflow: auto;
  }

  .link {
    display: flex;
    filter: blur(0px); /* ?????? makes it work LOL */
    width: 500px;
    height: 175px;
    border-radius: 25px;
    padding-left: 20px;
    background-color: #00000000;
  }

  #ghlogo {
    position: absolute;
    top: 1%;
    right: 1%;
    margin-top: 48%;
    background-color: #00000000;
  }

  #pfp {
    top: 17px;
    width: 150px;
    height: auto;
    border-radius: 75px;
    box-shadow: 5px 5px 5px rgba(22, 23.5, 25.1, 0.5);
    float: left;
    margin: 0 30px 0 0;
    padding: 0;
  }

  /* #pn {
    color: #fff;
    font-size: larger;
    right: 33px;
    bottom: 40px;
    position: fixed;
  } */

  svg,
  img {
    filter: drop-shadow(2px 2px 2px rgba(22, 23.5, 25.1, 0.25));
  }

  .link img,
  svg {
    position: absolute;
    width: 27%;
    margin: auto;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 20px;
    filter: drop-shadow(2px 2px 2px rgba(22, 23.5, 25.1, 0.25));
  }

  .link p {
    background-color: #00000000;
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    font-size: xx-large;
    font-weight: bold;
    filter: drop-shadow(2px 2px 2px rgba(22, 23.5, 25.1, 0.25));
    left: 40%;
  }

  #spotify-top {
    background-color: #7ba4be;
    border-color: black;
  }

  #twitch {
    background-color: #9146ff;
    border-color: white;
  }

  #tlogo {
    background-color: #00000000;
    filter: drop-shadow(2px 2px 2px rgba(22, 23.5, 25.1, 0.25));
  }

  #github,
  #namemc {
    background-color: #fff;
    border-color: black;
  }

  #scloud {
    background-color: #ff5000;
    border-color: white;
  }

  #discord {
    background-color: #444fbf;
    border-color: white;
  }

  links ul li {
    font-size: 0px;
  }

  links li:not(:last-child) {
    margin-bottom: 10px;
  }
</style>
