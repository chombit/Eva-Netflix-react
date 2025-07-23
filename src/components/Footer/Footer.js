import React from "react";
import "./footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__social">
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube /></a>
      </div>

      <div className="footer__links">
        <a href="/faq">FAQ</a>
        <a href="/help">Help Center</a>
        <a href="/terms">Terms of Use</a>
        <a href="/privacy">Privacy</a>
        <a href="/contact">Contact Us</a>
        <a href="/jobs">Jobs</a>
        <a href="/cookie">Cookie Preferences</a>
        <a href="/corporate">Corporate Information</a>
      </div>

      <div className="footer__language">
        <label htmlFor="language">🌐 Language:</label>
        <select id="language" name="language">
          <option value="en">English</option>
          <option value="am">Amharic</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
        </select>
      </div>

      <p className="footer__text">© {new Date().getFullYear()} Netflix Clone by Nahom</p>
    </footer>
  );
};

export default Footer;
