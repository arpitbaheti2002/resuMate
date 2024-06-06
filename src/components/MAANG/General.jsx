import React, { useEffect, useState } from "react";
import "./maang-resume.css";

function General(props) {
  const [name, setName] = useState("");
  const [city, setRegNo] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [portfolio_site, setPortfolioSite] = useState("");
  const [portfolio_site_link, setPortfolioSiteLink] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [linkedinDisplay, setLinkedinDisplay] = useState("");
  const [gitHub, setGitHub] = useState("");
  const [gitHubDisplay, setGitHubDisplay] = useState("");
  const [displayEditor, toggleEditor] = useState(false);

  useEffect(() => {
    const storedResume = localStorage.getItem("maangresume");
    if (storedResume) {
      const resumeData = JSON.parse(storedResume);
      setName(resumeData.name || "");
      setRegNo(resumeData.city || "");
      setEmail(resumeData.email || "");
      setPhone(resumeData.phone || "");
      setPortfolioSite(resumeData.portfolio || "");
      setPortfolioSiteLink(resumeData.portfolioLink || "");
      setLinkedin(resumeData.linkedin || "");
      setLinkedinDisplay(resumeData.linkedinDisplay || "");
      setGitHub(resumeData.github || "");
      setGitHubDisplay(resumeData.githubDisplay || "");
    }
  }, []);

  const handleChange = (e, item) => {
    const storedResume = localStorage.getItem("maangresume");
    let resumeData = {};

    if (storedResume) {
      resumeData = JSON.parse(storedResume);
    }

    if (item === "name") {
      resumeData.name = e.target.value;
    } else if (item === "city") {
      resumeData.city = e.target.value;
    } else if (item === "email") {
      resumeData.email = e.target.value;
    } else if (item === "phone") {
      resumeData.phone = e.target.value;
    } else if (item === "portfolioLink") {
      resumeData.portfolioLink = e.target.value;
    } else if (item === "portfolio") {
      resumeData.portfolio = e.target.value;
    } else if (item === "linkedin") {
      resumeData.linkedin = e.target.value;
    } else if (item === "linkedinDisplay") {
      resumeData.linkedinDisplay = e.target.value;
    } else if (item === "github") {
      resumeData.github = e.target.value;
    } else if (item === "githubDisplay") {
      resumeData.githubDisplay = e.target.value;
    }

    localStorage.setItem("maangresume", JSON.stringify(resumeData));
  };

  const handleClick = (e) => {
    // Check if the click is on an input element
    if (e.target.tagName.toLowerCase() === "input") {
      // Click is on the input, do not toggle
    } else {
      // Click is not on the input, toggle the editor
      toggleEditor(!displayEditor);
    }
  };

  return (
    <div
      className="maang-general"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div>
        <input
          className="maang-name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            handleChange(e, "name");
          }}
          placeholder="Full Name"
        />
      </div>

      <hr className="horizontal-rule" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="info-container" onClick={handleClick}>
          <p>
            {city? city:'City, Country'} | {(props.displayPhone) ? (phone) ? phone : 'Phone Number' + ' | ' : null}<a href={`mailto:${email}`}>{email? email: 'Email address'} </a> 
            | <a href={linkedin}>{linkedinDisplay? linkedinDisplay:'Linkedin Profile'} </a> 
            | <a href={gitHub}>{gitHubDisplay? gitHubDisplay: 'Github Profile'}</a>
            {portfolio_site.length > 0 ? (
              <a href={portfolio_site_link}> | {portfolio_site}</a>
            ) : null}
          </p>
        </div>

        {displayEditor ? (
          <div className="info-editor">
            <input
              value={city}
              onChange={(e) => {
                setRegNo(e.target.value);
                handleChange(e, "city");
              }}
              placeholder="city"
            />
            <br />
            <input
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                handleChange(e, "phone");
              }}
              placeholder="Phone number"
            />
            <br />
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                handleChange(e, "email");
              }}
              placeholder="Email"
            />
            <br />
            <input
              value={linkedinDisplay}
              onChange={(e) => {
                setLinkedinDisplay(e.target.value);
                handleChange(e, "linkedinDisplay");
              }}
              placeholder="LinkedIn link name"
            />
            <br />
            <input
              value={linkedin}
              onChange={(e) => {
                setLinkedin(e.target.value);
                handleChange(e, "linkedin");
              }}
              placeholder="LinkedIn link"
            />
            <br />
            <input
              value={gitHubDisplay}
              onChange={(e) => {
                setGitHubDisplay(e.target.value);
                handleChange(e, "githubDisplay");
              }}
              placeholder="GitHub link name"
            />
            <br />
            <input
              value={gitHub}
              onChange={(e) => {
                setGitHub(e.target.value);
                handleChange(e, "github");
              }}
              placeholder="GitHub link"
            />
            <br />
            <input
              value={portfolio_site}
              onChange={(e) => {
                setPortfolioSite(e.target.value);
                handleChange(e, "portfolio");
              }}
              placeholder="Portfolio site Display (optional)"
            />
            <br />
            <input
              value={portfolio_site_link}
              onChange={(e) => {
                setPortfolioSiteLink(e.target.value);
                handleChange(e, "portfolioLink");
              }}
              placeholder="Portfolio site Link (optional)"
            />
            <br />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default General;
