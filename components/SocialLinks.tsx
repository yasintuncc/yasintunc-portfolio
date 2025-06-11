import React from "react";
import { Button, UncontrolledTooltip } from "reactstrap";
import { socialLinks } from "../portfolio";

const SocialLinks = () => {
  return (
    <div className="btn-wrapper text-lg">
      {socialLinks.email && (
        <Button
          id="email-btn"
          className="btn-icon-only rounded-circle ml-1"
          color="white"
          rel="noopener"
          aria-label="Email"
          href={`mailto:${socialLinks.email}`}
          target="_blank"
          style={{
            background: "#fff",
            color: "#222",
            width: "40px",
            height: "40px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
            margin: "0 6px",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseOver={e => {
            e.currentTarget.style.transform = "scale(1.13)";
            e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.18)";
          }}
          onMouseOut={e => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.10)";
          }}
        >
          <span className="btn-inner--icon">
            <i className="fa fa-envelope" style={{ color: "#222", fontSize: "21px" }} />
          </span>
        </Button>
      )}
      {socialLinks.linkedin && (
        <Button
          id="linkedin-btn"
          className="btn-icon-only rounded-circle ml-1"
          color="twitter"
          rel="noopener"
          aria-label="Linkedin"
          href={socialLinks.linkedin}
          target="_blank"
          style={{
            background: "#0077b5",
            color: "#fff",
            width: "40px",
            height: "40px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
            margin: "0 6px",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseOver={e => {
            e.currentTarget.style.transform = "scale(1.13)";
            e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.18)";
          }}
          onMouseOut={e => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.10)";
          }}
        >
          <span className="btn-inner--icon">
            <i className="fa fa-linkedin" style={{ color: "#fff", fontSize: "20px" }} />
          </span>
        </Button>
      )}
      {socialLinks.github && (
        <Button
          id="github-btn"
          className="btn-icon-only rounded-circle ml-1"
          color="github"
          href={socialLinks.github}
          rel="noopener"
          aria-label="Github"
          target="_blank"
          style={{
            background: "#24292e",
            color: "#fff",
            width: "40px",
            height: "40px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
            margin: "0 6px",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseOver={e => {
            e.currentTarget.style.transform = "scale(1.13)";
            e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.18)";
          }}
          onMouseOut={e => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.10)";
          }}
        >
          <span className="btn-inner--icon">
            <i className="fa fa-github" style={{ color: "#fff", fontSize: "20px" }} />
          </span>
        </Button>
      )}
      {socialLinks.instagram && (
        <Button
          id="instagram-btn"
          className="btn-icon-only rounded-circle ml-1"
          color="instagram"
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
          style={{
            background:
              "radial-gradient(circle at 30% 110%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
            color: "#fff",
            width: "40px",
            height: "40px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
            margin: "0 6px",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseOver={e => {
            e.currentTarget.style.transform = "scale(1.13)";
            e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.18)";
          }}
          onMouseOut={e => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.10)";
          }}
        >
          <span className="btn-inner--icon">
            <i className="fa fa-instagram" style={{ color: "#fff", fontSize: "20px" }} />
          </span>
        </Button>
      )}
      {socialLinks.facebook && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="facebook"
          href={socialLinks.facebook}
          target="_blank"
          rel="noopener"
          aria-label="Facebook"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-facebook-square" />
          </span>
        </Button>
      )}
      {socialLinks.twitter && (
        <Button
          className="btn-icon-only rounded-circle"
          color="twitter"
          href={socialLinks.twitter}
          target="_blank"
          rel="noopener"
          aria-label="Twitter"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-twitter" />
          </span>
        </Button>
      )}
      {socialLinks.email && (
        <UncontrolledTooltip placement="top" target="email-btn">
          Email
        </UncontrolledTooltip>
      )}
      {socialLinks.linkedin && (
        <UncontrolledTooltip placement="top" target="linkedin-btn">
          LinkedIn
        </UncontrolledTooltip>
      )}
      {socialLinks.github && (
        <UncontrolledTooltip placement="top" target="github-btn">
          GitHub
        </UncontrolledTooltip>
      )}
      {socialLinks.instagram && (
        <UncontrolledTooltip placement="top" target="instagram-btn">
          Instagram
        </UncontrolledTooltip>
      )}
    </div>
  );
};

export default SocialLinks;
