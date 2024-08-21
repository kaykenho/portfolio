import React, { useEffect, useState } from 'react';
import { Link, Element } from 'react-scroll';
import './App.css';

function App() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch('/profile.json')
      .then(response => response.json())
      .then(data => setProfile(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <ul>
            <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="about" smooth={true} duration={500}>About</Link></li>
            <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
            <li><Link to="experience" smooth={true} duration={500}>Experience</Link></li>
            <li><Link to="education" smooth={true} duration={500}>Education</Link></li>
            <li><Link to="certifications" smooth={true} duration={500}>Certifications</Link></li>
            <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
          </ul>
        </nav>
        
        <Element name="home" className="section home">
          <h1>{profile ? profile.name : 'Loading...'}</h1>
          <p>{profile ? profile.summary : 'Loading...'}</p>
        </Element>

        <Element name="about" className="section about">
          <h2>About Me</h2>
          <p>{profile ? profile.about : 'Loading...'}</p>
        </Element>

        <Element name="skills" className="section skills">
          <h2>Skills</h2>
          <ul>
            {profile ? profile.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            )) : 'Loading...'}
          </ul>
        </Element>

        <Element name="experience" className="section experience">
          <h2>Experience</h2>
          <ul>
            {profile ? profile.experience.map((exp, index) => (
              <li key={index}>
                <strong>{exp.title}</strong> at {exp.company} ({exp.start_date} - {exp.end_date})
                <p>{exp.description}</p>
              </li>
            )) : 'Loading...'}
          </ul>
        </Element>

        <Element name="education" className="section education">
          <h2>Education</h2>
          <ul>
            {profile ? profile.education.map((edu, index) => (
              <li key={index}>
                <strong>{edu.degree}</strong> from {edu.institution} ({edu.completion_date})
                <p>{edu.additional_info}</p>
              </li>
            )) : 'Loading...'}
          </ul>
        </Element>

        <Element name="certifications" className="section certifications">
          <h2>Certifications</h2>
          <ul>
            {profile ? profile.certifications.map((cert, index) => (
              <li key={index}>
                <strong>{cert.title}</strong> – {cert.description}
              </li>
            )) : 'Loading...'}
          </ul>
        </Element>

        <Element name="contact" className="section contact">
          <h2>Contact</h2>
          <p>Email: <a href={`mailto:${profile ? profile.contact.email : '#'}`}>{profile ? profile.contact.email : 'Loading...'}</a></p>
          <p>LinkedIn: <a href={profile ? profile.contact.linkedin : '#'} target="_blank" rel="noopener noreferrer">{profile ? profile.contact.linkedin : 'Loading...'}</a></p>
          <p>GitHub: <a href={profile ? profile.contact.github : '#'} target="_blank" rel="noopener noreferrer">{profile ? profile.contact.github : 'Loading...'}</a></p>
          <p>Coursera: <a href={profile ? profile.contact.coursera : '#'} target="_blank" rel="noopener noreferrer">{profile ? profile.contact.coursera : 'Loading...'}</a></p>
        </Element>
      </header>
    </div>
  );
}

export default App;