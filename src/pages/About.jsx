import React from "react";
import styled from "styled-components";

// Styled components
const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2rem;
`;

const AboutHeading = styled.h1`
  margin-bottom: 10px;
`;

const Highlights = styled.p`
  font-size: 1.1rem;
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: 10px;

  a {
    color: rgba(30, 30, 100, 0.8);

    &:hover {
      background-color: rgba(30, 30, 100, 1);
      color: #fff;
    }
  }
`;

const Details = styled.details`
  margin: 1rem 0;
`;

const Summary = styled.summary`
  cursor: pointer;
  font-weight: bold;
  font-size: 1.2rem;
`;

const AboutFooter = styled.div`
  margin: 2rem 0;
  text-align: center;

  p {
    color: #999;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutHeading>About</AboutHeading>
      <Highlights>
        Grammerhub is a meetup for new Devs pursuing their first Dev job, those
        leveling up their skills for mid-level positions, or just starting in
        programming looking for a career switch -
        <span> Although all are welcome to join the conversation!</span>
      </Highlights>
      <Details open>
        <Summary>
          Our goals for Grammerhub&#39;s weekly Monday coding nights*:
        </Summary>
        <ul>
          <li>Support independent projects and collaboration</li>
          <li>Build a community and provide accountability</li>
          <li>Provide opportunities to grow professionally with technology</li>
        </ul>
      </Details>
      <Highlights>
        Who We Are: A grassroots group of volunteers applying our skills in
        technology, design, research, and more to support those looking to reach
        the next level in their Dev careers.
      </Highlights>
      <Details>
        <Summary>How it works:</Summary>
        <ul>
          <li>
            6:30 pm EST: We open our general video conference call (Intros, Q&A,
            Show-and-Tell, etc.)
          </li>
          <li>7:00 pm EST: Work on Project(s)</li>
          <li>8:15 pm EST: Wrap-up, announcements</li>
        </ul>
      </Details>
      <Highlights>
        New to Grammerhub? No problem! We have volunteer organizers to help you
        get started.
      </Highlights>
      <Details>
        <Summary>What you&#39;ll learn:</Summary>
        <ul>
          <li>
            Web development techniques and syntax for programming in multiple
            languages
          </li>
          <li>How to deploy your code</li>
          <li>Resources for continued learning</li>
        </ul>
      </Details>
      <Highlights>
        Grammerhub workspace on Slack:{" "}
        <a
          href="http://bit.ly/grammerhub-slack"
          target="_blank"
          rel="noreferrer"
        >
          http://bit.ly/grammerhub-slack
        </a>
      </Highlights>
      <AboutFooter>
        <p>Looking forward to working with you all!</p>
        <h3>
          The Grammerhub Team _ *Going strong every Monday since March 9th,
          2020*
        </h3>
      </AboutFooter>
    </AboutContainer>
  );
};

export default About;
