import "./SocialNetwork.css";

const SocialNetwork = () => {
  return (
    <section
      className="social-network"
      style={{ backgroundImage: "url(./assets/instagram-bg.png)" }}
    >
      <div className="social-info">
        <h1>Our Instagram</h1>
        <p>Follow our store on Instagram</p>
        <a href="https://www.instagram.com/namanganliklar.uz/" target="_blank">
          Follow Us
        </a>
      </div>
    </section>
  );
};

export default SocialNetwork;
