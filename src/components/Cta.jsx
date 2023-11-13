import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Have a project in mind? <br className="sm:block hidden" /> Let&apos;s
        build something together!
      </p>

      <Link to="/contact" className="btn">
        Contact
      </Link>
    </section>
  );
};

export default Cta;
