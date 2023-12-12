import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join for our Daily Newsletter!
        </p>
        <p className="footer-subscription-text">You can unsubscribe anytime</p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>My Account</h2>
            <Link to="/react-travel-website/sign-up">How it works</Link>
            <Link to="/react-travel-website/">Testimonials</Link>
            <Link to="/react-travel-website/">Careers</Link>
            <Link to="/react-travel-website/">Investors</Link>
            <Link to="/react-travel-website/">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>About</h2>
            <Link to="/react-travel-website/sign-up">How it works</Link>
            <Link to="/react-travel-website/">Testimonials</Link>
            <Link to="/react-travel-website/">Careers</Link>
            <Link to="/react-travel-website/">Investors</Link>
            <Link to="/react-travel-website/">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact</h2>
            <Link to="/react-travel-website/sign-up">How it works</Link>
            <Link to="/react-travel-website/">Testimonials</Link>
            <Link to="/react-travel-website/">Careers</Link>
            <Link to="/react-travel-website/">Investors</Link>
            <Link to="/react-travel-website/">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Careers</h2>
            <Link to="/react-travel-website/sign-up">How it works</Link>
            <Link to="/react-travel-website/">Testimonials</Link>
            <Link to="/react-travel-website/">Careers</Link>
            <Link to="/react-travel-website/">Investors</Link>
            <Link to="/react-travel-website/">Terms of Service</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
