import React from 'react';


const skills = [
  { name: 'HTML5', percent: 95 },
  { name: 'CSS3 ', percent: 90 },
  { name: 'JavaScript', percent: 85 },
  { name: 'React', percent: 90 },
  { name: 'Responsive Design', percent: 95 },
  { name: 'Bootstrap 5', percent: 85 },
  { name: 'UI/UX Design', percent: 75 }
];

const tools = [
  'Git & GitHub', 'VS Code',
  'Figma', 'Chrome DevTools',
  'npm/yarn', 
  
];

const coreCompetencies = [
  'Responsive Web Design',
  'Cross-Browser Compatibility',
  'Performance Optimization',
 ' Frontend Testing',
'SEO Best Practices',
'Component-Based Architecture'
];

function Skills() {
  return (
    <section className="skills-section container py-5">
      <h2 className="mb-4"><span role="img" aria-label="code">&lt;/&gt;</span> Skills</h2>
      <div className="row">
        <div className="col-md-6">
          <h4 className="mb-3">Technical Skills</h4>
          {skills.map((skill, index) => (
            <div key={index} className="mb-3">
              <div className="d-flex justify-content-between">
                <strong>{skill.name}</strong>
                <span>{skill.percent}%</span>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-6">
          <h4 className="mb-3">Tools & Technologies</h4>
          <div className="d-flex flex-wrap gap-2 mb-4">
            {tools.map((tool, index) => (
              <div key={index} className="tool-box p-2 border rounded">
                {tool}
              </div>
            ))}
          </div>
          <h4 className="mb-2">Core Competencies</h4>
          <ul>
            {coreCompetencies.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
