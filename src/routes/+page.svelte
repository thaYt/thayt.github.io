<script>
  // links
  var spTopURL = "https://spotify-top.com/user/pvl8wlfg5qdcoxs42xidk0zop";

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

  function make() {}

  import { base } from "$app/paths";
</script>

<Particles
  id="tsparticles"
  options={particlesConfig}
  on:particlesLoaded={onParticlesLoaded}
  {particlesInit}
/>

<body href="{base}/">
  <div class="content">
    <div class="profile">
      <img
        src="https://cdn.discordapp.com/avatars/157471607802036224/bb1284e9009a6110191d79cff0d71485.png"
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
    <!-- <div class="links">
      <div href={spTopURL} id="spotify-top" />
    </div> -->
  </div>
</body>

<style>
  :root {
    --bg-color: 17, 21, 30;
  }
  .profile {
    border-radius: 10px;
    overflow: hidden;
    position: absolute;
    padding: 25px 50px 25px 50px;
    background-color: #11151e;
    margin-left: 2%;
    margin-top: 2%;
    width: 20%;
    border-radius: 25px;
    box-shadow: #000000;
    filter: drop-shadow(3px 3px 3px rgba(0,0,0, .35));
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    background-color: #11151e;
  }
  body {
    height: 100%;
    width: 100%;
    display: flex;
    font-size: 42px;
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
  ul {
    margin: 0;
    padding: 0;
    animation: scrollUp 2.75s 0s infinite forwards ease-in-out;
  }
  ul li {
    opacity: 1;
    height: 20px;
    padding: 10px;
    list-style: none;
    margin-bottom: 20px;
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

  .links {
    width: 400px;
    height: 100px;
  }

  ul li {
    background-color: #00000000;
    color: #fff;
    font-size: 42px;
    text-shadow: 5px 5px 5px rgba(17, 21, 30, 0.5);
  }

  #ghlogo {
    position: absolute;
    margin-right: 1%;
    margin-top: 1%;
    right: 1%;
    background-color: #00000000;
  }

  .content {
    position: absolute;
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
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
  img {
    filter: drop-shadow(2px 2px 2px rgba(22, 23.5, 25.1, 0.25));
  }
</style>
