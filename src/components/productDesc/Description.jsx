import "./Description.css";

const Description = () => {
  return (
    <section className="description">
      <p>
        The Mirage AT MR-172 265/65 R17 is a multipurpose all-terrain light
        truck tyre. It has been engineered to deliver high mileage. Mirage MR
        AT-172 Performs best in on road and off road driving conditions. The
        Mirage AT MR-172 265/65 R17 has an aggressive tread design. Its
        aggressive tread delivers excellent wet and dry traction. It also offers
        even tread wear hence longer tread life is achieved.stable tread block
        design provides better traction and improves cornering and braking in
        all weather conditions. Mirage AT MR-172 265/65 R17 Lateral sipes also
        help in improving mud snow and wet qualities.
      </p>

      <div className="description-images">
        <div className="img">
          <img src="./assets/desc-image1.png" alt="image 1" />
        </div>
        <div className="img">
          <img src="./assets/desc-image2.png" alt="image 2" />
        </div>
      </div>
    </section>
  );
};

export default Description;
