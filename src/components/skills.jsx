import { Row, Col, Card, Container } from "react-bootstrap";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaDatabase,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiC,
  SiCplusplus,
  SiFlask,
  SiMysql,
  SiSqlite,
  SiPrettier,
  SiPostman,
  SiTrello,
  SiVercel,
  SiRender,
  SiNetlify,
} from "react-icons/si";

function Skills() {
  const SKILLS = [
    { label: "C", icon: <SiC size={28} color="#283593" /> },
    { label: "C++", icon: <SiCplusplus size={28} color="#00599C" /> },
    { label: "HTML5", icon: <FaHtml5 size={28} color="#E34F26" /> },
    { label: "CSS3", icon: <FaCss3Alt size={28} color="#1572B6" /> },
    { label: "JavaScript", icon: <FaJsSquare size={28} color="#F7DF1E" /> },
    { label: "PHP", icon: <FaPhp size={28} color="#8993BE" /> },
    { label: "Python", icon: <FaPython size={28} color="#306998" /> },
    { label: "Flask", icon: <SiFlask size={28} color="#000000" /> },
    { label: "React", icon: <FaReact size={28} color="#61DBFB" /> },
    { label: "SQLite", icon: <SiSqlite size={28} color="#003B57" /> },
    { label: "MySQL", icon: <SiMysql size={28} color="#4479A1" /> },
    { label: "Git", icon: <FaGitAlt size={28} color="#F05032" /> },
    { label: "GitHub", icon: <FaGithub size={28} color="#181717" /> },
    { label: "Prettier", icon: <SiPrettier size={28} color="#F7B93E" /> },
    { label: "Postman", icon: <SiPostman size={28} color="#FF6C37" /> },
    { label: "Trello", icon: <SiTrello size={28} color="#0079BF" /> },
    { label: "Vercel", icon: <SiVercel size={28} color="#000000" /> },
    { label: "Render", icon: <SiRender size={28} color="#46E3B7" /> },
    { label: "Netlify", icon: <SiNetlify size={28} color="#00C7B7" /> },
  ];

  return (
    <section className="bg-light py-5">
      <Container>
        <div id="skills" className="py-5 bg-light">
          <div className="text-center mb-5">
            <h2 className="text-uppercase text-muted fw-bold">Skills</h2>
            <h3 className="fw-bold">Tools I Work With</h3>
            <p className="text-secondary">Technologies I use in my projects.</p>
          </div>

          <Row className="g-4">
            {SKILLS.map((skill) => (
              <Col xs={6} sm={4} md={3} lg={2} key={skill.label}>
                <Card className="text-center shadow-sm border-0 h-100">
                  <Card.Body>
                    <div className="mb-3">{skill.icon}</div>
                    <Card.Title className="h6">{skill.label}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default Skills;
