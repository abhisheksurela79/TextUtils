import React from "react";
import devImg from "../assets/dev.png";
import "../styles/dev.css";

function About(props) {
  return (
    <div className={props.mode}>
      <section className="dev-head pt-5">
        <img
          className="dev-pic"
          src={devImg}
          alt="developer picture"
          draggable="false"
        />
        <div>
          <h2>Abhishek Surela</h2>
          <div className="social-media-icons">
            <a
              href="https://www.linkedin.com/in/abhisheksurela79/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="112"
                height="112"
                viewBox="0 0 112 112"
              >
                <g id="icons8-linkedin-circled" transform="translate(-4 -4)">
                  <path
                    id="Path_6"
                    data-name="Path 6"
                    d="M60,4a56,56,0,1,0,56,56A56,56,0,0,0,60,4Z"
                    transform="translate(0 0)"
                    fill="#0078d4"
                  />
                  <path
                    id="Path_7"
                    data-name="Path 7"
                    d="M60.83,76.711V51.389a5.627,5.627,0,0,0-11.254,0V76.711H32.695V28.881H49.576v2.889a18.274,18.274,0,0,1,28.135,15.4V76.711Zm-47.83,0V28.881h8.345A8.118,8.118,0,0,1,13,20.438,8.178,8.178,0,0,1,21.472,12a8.237,8.237,0,0,1,8.41,8.382,8.2,8.2,0,0,1-8.474,8.5h8.474v47.83Z"
                    transform="translate(16.035 14.254)"
                    opacity="0.05"
                  />
                  <path
                    id="Path_8"
                    data-name="Path 8"
                    d="M61.33,74.4V50.483a7.034,7.034,0,0,0-14.068,0V74.4H33.195V29.381H47.262V33.7A16.867,16.867,0,0,1,75.4,46.262V74.4Zm-47.83,0V29.381H27.568V74.4Zm6.938-47.83A6.759,6.759,0,0,1,13.5,19.531,6.817,6.817,0,0,1,20.565,12.5a6.793,6.793,0,0,1,7,7A6.829,6.829,0,0,1,20.5,26.568Z"
                    transform="translate(16.943 15.159)"
                    opacity="0.07"
                  />
                  <path
                    id="Path_9"
                    data-name="Path 9"
                    d="M14,29.881H25.254v42.2H14Zm5.593-5.627h-.062A5.386,5.386,0,0,1,14,18.624,5.414,5.414,0,0,1,19.658,13a5.4,5.4,0,0,1,5.6,5.624A5.418,5.418,0,0,1,19.593,24.254Zm53.491,21.1a15.466,15.466,0,0,0-28.135-8.879V29.881H33.695v42.2H44.949V49.576a8.441,8.441,0,0,1,16.881,0V72.084H73.084Z"
                    transform="translate(17.85 16.065)"
                    fill="#fff"
                  />
                </g>
              </svg>
            </a>
            <a href="https://github.com/abhisheksurela79" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="112"
                height="108.798"
                viewBox="0 0 112 108.798"
              >
                <path
                  id="icons8-github"
                  d="M51.754,2.419C25.942,5.225,5.18,25.987,2.374,51.238a56.445,56.445,0,0,0,35.352,58.919c1.683.561,3.367-.561,3.367-2.806V98.374a23.154,23.154,0,0,1-5.05.561c-7.856,0-11.223-6.734-11.784-10.662a11.643,11.643,0,0,0-3.367-5.611c-1.683-.561-2.245-.561-2.245-1.122,0-1.122,1.683-1.122,2.245-1.122,3.367,0,6.173,3.928,7.295,5.611,2.806,4.489,6.173,5.611,7.856,5.611a11.205,11.205,0,0,0,5.05-1.122c.561-3.928,2.245-7.856,5.611-10.1C33.8,77.612,24.259,70.317,24.259,57.972a26.449,26.449,0,0,1,6.734-16.834c-.561-1.122-1.122-3.928-1.122-7.856,0-2.245,0-5.05,1.122-7.295A1.792,1.792,0,0,1,32.676,24.3h.561A26.651,26.651,0,0,1,46.7,31.6a36.181,36.181,0,0,1,11.223-1.683A36.181,36.181,0,0,1,69.15,31.6,27.82,27.82,0,0,1,83.178,24.3h.561c1.122,0,1.683.561,2.245,1.683v7.295c0,4.489-.561,6.734-1.122,7.856A25.28,25.28,0,0,1,91.6,57.972c0,12.345-9.539,19.64-22.445,22.445,3.367,2.806,5.611,7.856,5.611,12.906v14.59a3.058,3.058,0,0,0,3.928,2.806,56.37,56.37,0,0,0,35.352-52.186C114.041,24.865,85.423-1.509,51.754,2.419Z"
                  transform="translate(-2.041 -2.031)"
                />
              </svg>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=919205213241"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="112"
                height="112.476"
                viewBox="0 0 112 112.476"
              >
                <g id="icons8-whatsapp" transform="translate(-3.868 -4)">
                  <path
                    id="Path_14"
                    data-name="Path 14"
                    d="M4.868,110.243l7.4-27.023a52.166,52.166,0,1,1,45.2,26.119h-.022a52.1,52.1,0,0,1-24.927-6.35Z"
                    transform="translate(2.616 2.615)"
                    fill="#fff"
                    fillRule="evenodd"
                  />
                  <path
                    id="Path_15"
                    data-name="Path 15"
                    d="M5.752,113.357a1.383,1.383,0,0,1-1.335-1.748l7.309-26.689A53.962,53.962,0,1,1,33.453,106.14L6.1,113.31A1.266,1.266,0,0,1,5.752,113.357Z"
                    transform="translate(1.31 1.307)"
                    fill="#fff"
                    fillRule="evenodd"
                  />
                  <path
                    id="Path_16"
                    data-name="Path 16"
                    d="M60.09,6.791a52.987,52.987,0,0,1,0,105.974h-.022a52.926,52.926,0,0,1-25.32-6.449L6.659,113.683l7.518-27.446A52.993,52.993,0,0,1,60.09,6.791m0,105.974h0m0,0h0M60.09,4h0A55.79,55.79,0,0,0,11.18,86.607L3.966,112.949a2.79,2.79,0,0,0,3.4,3.435L34.4,109.3A55.781,55.781,0,1,0,60.09,4Z"
                    transform="translate(0)"
                    fill="#cfd8dc"
                    fillRule="evenodd"
                  />
                  <path
                    id="Path_17"
                    data-name="Path 17"
                    d="M77.393,20.06A40.478,40.478,0,0,0,14.426,70.14l.965,1.53L11.3,86.586l15.332-4.013,1.481.876a40.481,40.481,0,0,0,20.617,5.635h.015A40.426,40.426,0,0,0,77.393,20.06Z"
                    transform="translate(11.413 10.998)"
                    fill="#40c351"
                    fillRule="evenodd"
                  />
                  <path
                    id="Path_18"
                    data-name="Path 18"
                    d="M30.055,18.078c-1.136-2.723-2.333-2.778-3.418-2.826-.886-.041-1.9-.038-2.909-.038a5.409,5.409,0,0,0-4.048,2.047A18.942,18.942,0,0,0,14.365,30.9c0,8.044,5.44,15.819,6.2,16.908s10.5,18.125,25.933,24.68c12.822,5.445,15.434,4.363,18.218,4.091S73.7,72.622,74.961,68.8s1.264-7.089.886-7.772-1.392-1.089-2.909-1.909S63.956,54.348,62.564,53.8s-2.4-.817-3.418.82-3.92,5.318-4.806,6.407-1.773,1.23-3.29.41a41.035,41.035,0,0,1-12.208-8.113A48.915,48.915,0,0,1,30.4,42.007c-.886-1.634-.1-2.519.666-3.336.682-.734,1.517-1.909,2.278-2.864a11.387,11.387,0,0,0,1.517-2.726,3.209,3.209,0,0,0-.128-2.864C34.356,29.4,31.405,21.311,30.055,18.078Z"
                    transform="translate(14.824 14.216)"
                    fill="#fff"
                    fillRule="evenodd"
                  />
                </g>
              </svg>
            </a>
            <a href="https://www.instagram.com/abhi_81718/" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="112.39"
                height="115.392"
                viewBox="0 0 112.39 115.392"
              >
                <defs>
                  <radialGradient
                    id="radial-gradient"
                    cx="0.207"
                    cy="1.202"
                    r="1.514"
                    gradientTransform="matrix(0.644, -0.765, 0.506, 0.425, -0.534, 0.849)"
                    gradientUnits="objectBoundingBox"
                  >
                    <stop offset="0.073" stopColor="#eacc7b" />
                    <stop offset="0.184" stopColor="#ecaa59" />
                    <stop offset="0.307" stopColor="#ef802e" />
                    <stop offset="0.358" stopColor="#ef6d3a" />
                    <stop offset="0.46" stopColor="#f04b50" />
                    <stop offset="0.516" stopColor="#f03e58" />
                    <stop offset="0.689" stopColor="#db359e" />
                    <stop offset="0.724" stopColor="#ce37a4" />
                    <stop offset="0.789" stopColor="#ac3cb4" />
                    <stop offset="0.877" stopColor="#7544cf" />
                    <stop offset="0.98" stopColor="#2b4ff2" />
                  </radialGradient>
                </defs>
                <g
                  id="icons8-instagram"
                  transform="translate(-128.864 -143.968)"
                >
                  <path
                    id="Path_11"
                    data-name="Path 11"
                    d="M96.957,126.392H33.433C19.995,126.392,9,115.1,9,101.307V36.085C9,22.288,19.995,11,33.433,11H96.957C110.4,11,121.39,22.288,121.39,36.085v65.222C121.39,115.1,110.4,126.392,96.957,126.392Z"
                    transform="translate(119.864 132.968)"
                    fill="url(#radial-gradient)"
                  />
                  <path
                    id="Path_12"
                    data-name="Path 12"
                    d="M56.144,24.526c11.133,0,12.343,0,16.7.251a26.036,26.036,0,0,1,7.745,1.505,12.861,12.861,0,0,1,4.84,3.261,13.424,13.424,0,0,1,3.146,5.017,28.731,28.731,0,0,1,1.452,8.027V59.645c0,11.539,0,12.793-.242,17.309a28.732,28.732,0,0,1-1.452,8.027A13.424,13.424,0,0,1,85.187,90a12.861,12.861,0,0,1-4.84,3.261A26.036,26.036,0,0,1,72.6,94.764H56.144c-11.133,0-12.343,0-16.7-.251A26.036,26.036,0,0,1,31.7,93.008a12.861,12.861,0,0,1-4.84-3.261,13.424,13.424,0,0,1-3.146-5.017A28.731,28.731,0,0,1,22.261,76.7V59.645c0-11.539,0-12.793.242-17.309a28.731,28.731,0,0,1,1.452-8.027A13.424,13.424,0,0,1,27.1,29.292a12.861,12.861,0,0,1,4.84-3.261,26.036,26.036,0,0,1,7.745-1.505H56.144m0-7.526c-11.133,0-12.585,0-16.942.251a31.634,31.634,0,0,0-9.923,2.007,17.414,17.414,0,0,0-7.261,5.017,28.254,28.254,0,0,0-4.84,7.526,34.9,34.9,0,0,0-1.936,10.285C15,46.6,15,48.106,15,59.645s0,13.044.242,17.56a34.9,34.9,0,0,0,1.936,10.285,18.143,18.143,0,0,0,4.84,7.526,23.789,23.789,0,0,0,7.261,5.017,31.633,31.633,0,0,0,9.923,2.007c4.356.251,5.809.251,16.942.251s12.585,0,16.942-.251a31.633,31.633,0,0,0,9.923-2.007,17.414,17.414,0,0,0,7.261-5.017,24.785,24.785,0,0,0,4.84-7.526A34.9,34.9,0,0,0,97.046,77.2c.242-4.515.242-6.02.242-17.56s0-13.044-.242-17.56A34.9,34.9,0,0,0,95.109,31.8a18.143,18.143,0,0,0-4.84-7.526,27.112,27.112,0,0,0-7.261-5.017,31.633,31.633,0,0,0-9.923-2.007C68.729,17,67.277,17,56.144,17Z"
                    transform="translate(128.915 142.019)"
                    fill="#fff"
                  />
                  <path
                    id="Path_13"
                    data-name="Path 13"
                    d="M45.577,25A22.577,22.577,0,1,0,68.153,47.577,22.483,22.483,0,0,0,45.577,25Zm0,37.628A15.051,15.051,0,1,1,60.628,47.577,15.1,15.1,0,0,1,45.577,62.628Z"
                    transform="translate(139.482 154.087)"
                    fill="#fff"
                  />
                  <circle
                    id="Ellipse_5"
                    data-name="Ellipse 5"
                    cx="5.017"
                    cy="5.017"
                    r="5.017"
                    transform="translate(201.975 174.07)"
                    fill="#fff"
                  />
                </g>
              </svg>
            </a>
            <a href="https://www.facebook.com/abhii.abhishekk/" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="112.16"
                height="112.16"
                viewBox="0 0 112.16 112.16"
              >
                <defs>
                  <linearGradient
                    id="linear-gradient"
                    x1="0.15"
                    y1="0.15"
                    x2="0.915"
                    y2="0.915"
                    gradientUnits="objectBoundingBox"
                  >
                    <stop offset="0" stopColor="#2aa4f4" />
                    <stop offset="1" stopColor="#007ad9" />
                  </linearGradient>
                </defs>
                <g id="icons8-facebook" transform="translate(-4 -4)">
                  <path
                    id="Path_19"
                    data-name="Path 19"
                    d="M60.08,4a56.08,56.08,0,1,0,56.08,56.08A56.079,56.079,0,0,0,60.08,4Z"
                    transform="translate(0 0)"
                    fill="url(#linear-gradient)"
                  />
                  <path
                    id="Path_20"
                    data-name="Path 20"
                    d="M53.9,65.42h18.4l2.889-16.371H53.9V40.1c0-6.8,2.538-12.831,9.8-12.831H75.365V12.984a112.971,112.971,0,0,0-14.578-.772c-17.109,0-27.138,7.915-27.138,25.948V49.052H16.06V65.423H33.645v45a81.84,81.84,0,0,0,10.634.766,81.448,81.448,0,0,0,9.621-.635Z"
                    transform="translate(15.282 4.974)"
                    fill="#fff"
                  />
                </g>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="dev-content">
        <h3>About Me</h3>
        <p>
          Hi there! My name is Abhishek Surela and I am a passionate and
          experienced web developer. With a strong foundation in computer
          science and a love for creating functional and aesthetically pleasing
          websites, I am dedicated to helping businesses and individuals bring
          their online presence to the next level.
        </p>
        <p>
          As a full-stack developer, I am skilled in a variety of technologies
          and can create custom websites for all purposes, including online
          stores, personal portfolios, and corporate websites. I prioritize user
          experience, search engine optimization, and responsive design in all
          of my projects, ensuring that my clients' websites are not only
          visually appealing, but also perform well and are accessible on all
          devices.
        </p>
        <p>
          When I'm not coding, you can find me exploring the great outdoors,
          playing games, or trying out new recipes in the kitchen.. I am always
          looking for new challenges and opportunities to grow as a developer,
          so if you have a project in mind or just want to chat, don't hesitate
          to contact me. I would love to hear from you!
        </p>
      </section>

      <section className="dev-content">
        <h3>Contact Us</h3>
        <p>
          Thank you for visiting the developer page. If you have any questions
          or would like to get a quote, please don't hesitate to reach out to
          me.
        </p>
      </section>

      <section className="dev-content-2 pb-5">
        <h3>Contact Information</h3>
        <p>Phone: +91 9205213241</p>
        <p>Email: abhisheksurela18@gmail.com</p>
        <p className="pb-5">
          LinkedIn:{" "}
          <a
            className="link"
            href="https://www.linkedin.com/in/abhisheksurela79/"
            target="_blank"
          >
            abhisheksurela79
          </a>
        </p>
      </section>
    </div>
  );
}

export default About;
