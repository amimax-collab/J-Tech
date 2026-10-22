import { useEffect, useState } from "react";
import { X, ArrowRight } from "lucide-react";
import { projects } from "../data/siteData";
import { Icon } from "./Icons";
import Reveal from "./Reveal";
import "./Projects.css";

const categories = ["All", ...new Set(projects.map((p) => p.category))];

function visualStyle(project) {
  return project.image
    ? { backgroundImage: `url(${project.image})`, backgroundSize: "cover", backgroundPosition: "center" }
    : { background: project.gradient };
}

export default function Projects({ onQuote }) {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  // Close the pop-up with Escape and stop the page scrolling behind it.
  useEffect(() => {
    if (!selected) return;
    document.body.classList.add("no-scroll");
    const onKey = (e) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("no-scroll");
      window.removeEventListener("keydown", onKey);
    };
  }, [selected]);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Our work</span>
          <h2 className="section-title">Recent installations</h2>
          <p className="section-sub">A look at the kind of work we do for homes, offices and estates.</p>
        </Reveal>

        <Reveal>
          <div className="filters" role="tablist" aria-label="Filter projects">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={filter === cat}
                className={`chip ${filter === cat ? "active" : ""}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="project-grid">
          {visible.map((project, i) => (
            <button
              key={project.title}
              className="project-tile"
              style={{ ...visualStyle(project), "--i": i }}
              onClick={() => setSelected(project)}
              aria-label={`View ${project.title}`}
            >
              {!project.image && (
                <span className="tile-icon">
                  <Icon name={project.icon} size={72} strokeWidth={1.25} />
                </span>
              )}
              {!project.image && <span className="sample-tag">Sample</span>}
              <span className="tile-caption">
                <small>{project.category}</small>
                <strong>{project.title}</strong>
              </span>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div className="modal" role="dialog" aria-modal="true" aria-label={selected.title} onClick={() => setSelected(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)} aria-label="Close">
              <X size={20} />
            </button>
            <div className="modal-visual" style={visualStyle(selected)}>
              {!selected.image && <Icon name={selected.icon} size={96} strokeWidth={1.25} />}
            </div>
            <div className="modal-body">
              <span className="eyebrow">{selected.category}</span>
              <h3>{selected.title}</h3>
              <p>{selected.desc}</p>
              <button
                className="btn btn-primary"
                onClick={() => {
                  const service = selected.service;
                  setSelected(null);
                  onQuote({ service });
                }}
              >
                Request something similar <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}