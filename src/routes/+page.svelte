<script>
  import Particles from "svelte-particles";
  import { loadFull } from "tsparticles";

  let particlesConfig = {
    particles: {
      number: {
        value: 14,
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
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: true,
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
</script>

<Particles
  id="tsparticles"
  options={particlesConfig}
  on:particlesLoaded={onParticlesLoaded}
  {particlesInit}
/>

<body>
  <div class="content">
    <img
      src="https://cdn.discordapp.com/avatars/157471607802036224/bb1284e9009a6110191d79cff0d71485.png"
      id="pfp"
      alt="pfp"
    />
    <h1>core / thaYt</h1>
    <br />
    <h2>links:</h2>
    <ul class="links">
      <li>
    </ul>
  </div>
</body>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }
  body {
    text-align: center;
  }
  ul li {
    background-color: #00000000;
  }
  .content {
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;

    position: absolute;
    width: 40%;
    top: 9%;
    background-color: rgba(0, 0, 0, 0);
  }

  #pfp {
    top: 25px;
    width: 150px;
    height: auto;
    border-radius: 75px;
    box-shadow: 5px 5px 5px rgba(22, 23.5, 25.1, 0.5);
  }
  h1 {
    color: #fff;
    text-align: center;
    font-size: 50px;
    margin-top: 25px;
    text-shadow: 5px 5px 5px rgba(22, 23.5, 25.1, 0.5);
    background-color: #00000000;
  }
  h2 {
    color: #848d99;
    text-align: center;
    font-size: 19.5px;
    margin-top: -10px;
    text-shadow: 5px 5px 5px rgba(22, 23.5, 25.1, 0.5);
    background-color: #00000000;
    text-shadow: #2c2f33;
  }
  img {
    margin: auto;
    display: inline-block;
    filter: drop-shadow(2px 2px 2px rgba(22, 23.5, 25.1, 0.25));
  }
</style>
