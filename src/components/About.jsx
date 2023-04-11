import "../styles/About.css";
import A from "../assets/mario-and-adrian-a.jpg";
import B from "../assets/mario-and-adrian-b.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <div className="aboutText">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
            expedita voluptatem asperiores sapiente eveniet excepturi? Dolore
            aperiam doloribus ducimus natus porro, qui quam culpa quae corrupti
            perspiciatis. Illum possimus blanditiis et in accusantium. Placeat,
            hic! Tempore laboriosam dignissimos eum commodi! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Est quibusdam nulla modi
            eveniet voluptatem id. Earum vitae enim quisquam magni? Vero ipsa
            hic quaerat voluptatibus illo laborum fuga alias nemo, deserunt sunt
            voluptatem fugit vel et esse quisquam. Porro ex nihil magni nam
            necessitatibus nemo, reiciendis distinctio ratione dignissimos fugit
            officiis accusamus soluta sequi dolorem vitae, quos dicta cum et!
          </p>
        </div>
        <div className="aboutPhotos">
          <img src={A} alt="Photos of Adrian & Mario" />
          <img src={B} alt="Photos of Adrian & Mario" />
        </div>
      </div>
    </div>
  );
};

export default About;
