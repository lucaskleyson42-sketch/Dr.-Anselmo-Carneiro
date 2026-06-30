/*
 * HOME PAGE — Dr. Anselmo Carneiro
 * Design: "Engenharia da Face" — Editorial Masculino de Luxo
 *
 * Sections:
 * 1. Hero — Editorial assimétrico com parallax
 * 2. Filosofia — Posicionamento do médico
 * 3. Casos Clínicos — Before/After premium
 * 4. Procedimentos — Full Face Man
 * 5. PROFISSIONAL CAPACITADO — Autoridade
 * 6. Depoimentos — Social proof
 * 7. Experiência — Jornada do paciente
 * 8. FAQ — Perguntas estratégicas
 * 9. CTA Final — Conversão
 * 10. Footer
 */

import Header from "@/components/Header";
import BeforeAfterCarousel from "@/components/BeforeAfterCarousel";
import { useReveal } from "@/hooks/useReveal";
import { useBeforeAfterImages } from "@/hooks/useBeforeAfterImages";
import { useEffect, useRef, useState } from "react";

// ─── Asset URLs ───────────────────────────────────────────────────────────────
const HERO_DOCTOR = "/medico.jpg";
const HERO_BG = "/Hero.jpg";
const PROCEDURE_MANDIBLE = "/before-after/case-1.jpg.jpeg"; // fallback if needed
const CLINIC_DETAIL = "/before-after/case-2.jpg.jpeg"; // fallback if needed

// ─── FAQ Item ─────────────────────────────────────────────────────────────────
function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <button className="faq-trigger" onClick={() => setOpen(!open)}>
        <span style={{ fontWeight: 400, fontSize: "0.95rem", paddingRight: "1rem" }}>{question}</span>
        <svg className="faq-icon" viewBox="0 0 20 20" fill="none">
          <line x1="10" y1="4" x2="10" y2="16" stroke="var(--olive)" strokeWidth="1" strokeLinecap="round"/>
          <line x1="4" y1="10" x2="16" y2="10" stroke="var(--olive)" strokeWidth="1" strokeLinecap="round"/>
        </svg>
      </button>
      <div className="faq-content">
        <p style={{ fontSize: "0.9rem", color: "var(--graphite)", lineHeight: 1.8, fontWeight: 300 }}>
          {answer}
        </p>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Home() {
  const beforeAfterCases = useBeforeAfterImages();
  useReveal(0.12);

  // Hero is static (no parallax scroll effect)

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ background: "var(--warm-white)", overflowX: "hidden" }}>
      <Header />

      {/* ══════════════════════════════════════════════════════════════════
          1. HERO SECTION
      ══════════════════════════════════════════════════════════════════ */}
      <section
        id="inicio"
        className="hero-section"
        style={{
          minHeight: "100vh",
          display: "grid",
          gridTemplateColumns: "1fr",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background image — full bleed */}
        <div
          className="hero-background"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            backgroundImage: `url(${HERO_BG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Content */}
        <div
          className="container hero-content"
          style={{
            position: "relative",
            zIndex: 1,
            display: "grid",
            gridTemplateColumns: "1fr",
            alignItems: "center",
            minHeight: "100vh",
            paddingTop: "120px",
            paddingBottom: "80px",
            gap: "4rem",
          }}
        >
          {/* Left: Text */}
          <div style={{ maxWidth: "560px" }}>
            <div className="reveal" style={{ marginBottom: "2rem" }}>
              <span className="label-tag">CRO 111.023 · São Paulo, SP</span>
              <div
                style={{
                  width: "32px",
                  height: "1px",
                  background: "var(--olive)",
                  marginTop: "0.75rem",
                }}
              />
            </div>

            <h1
              className="reveal delay-100"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "clamp(3rem, 5.5vw, 5.5rem)",
                lineHeight: 1.0,
                color: "var(--charcoal)",
                marginBottom: "4.5rem",
                letterSpacing: "-0.02em",
              }}
            >
              Dr. Anselmo Carneiro
              <br />
              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 300,
                  color: "var(--charcoal-mid)",
                }}
              >
                
              </em>
            </h1>

            <p
              className="reveal delay-200"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 300,
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "var(--black)",
                marginBottom: "2.5rem",
                maxWidth: "400px",
              }}
            >
              Atuação em harmonização facial com foco em naturalidade. Abordagem personalizada que respeita suas características.
            </p>

            <div
              className="reveal delay-300 hero-buttons"
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
            >
              <a
                href="https://wa.me/5511954885446"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
              >
                Agendar Consulta
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                </svg>
              </a>
              <button
                className="btn-secondary"
                onClick={() => scrollTo("#resultados")}
              >
                Casos Clínicos
              </button>
            </div>

            {/* Stats */}
            <div
              className="reveal delay-400 hero-stats"
              style={{
                display: "flex",
                gap: "2.5rem",
                marginTop: "3.5rem",
                paddingTop: "2rem",
                borderTop: "0.5px solid var(--border)",
              }}
            >
              {[
                { n: "11", label: "Anos de experiência" },
                { n: "+5k", label: "Procedimentos realizados" },
                { n: "100%", label: "Foco em naturalidade e equilíbrio facial" },
              ].map((s) => (
                <div key={s.n}>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 300,
                      fontSize: "2rem",
                      lineHeight: 1,
                      color: "var(--charcoal)",
                    }}
                  >
                    {s.n}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 400,
                      fontSize: "0.65rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--graphite)",
                      marginTop: "4px",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="hero-widget reveal">
              <img
                src="/Hero-mobile.jpg"
                alt="Dr. Anselmo Carneiro"
                className="hero-widget-image"
              />
            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            zIndex: 1,
          }}
        >
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--graphite)",
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: "1px",
              height: "40px",
              background: "var(--border)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "40%",
                background: "var(--olive)",
                animation: "scrollLine 1.8s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          2. FILOSOFIA / POSICIONAMENTO
      ══════════════════════════════════════════════════════════════════ */}
      <section
        id="filosofia"
        style={{
          padding: "clamp(5rem, 10vw, 9rem) 0",
          background: "var(--warm-white)",
          position: "relative",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(3rem, 6vw, 8rem)",
              alignItems: "center",
            }}
            className="grid-cols-1 lg:grid-cols-2"
          >
            {/* Left: Image */}
            <div
              className="reveal-left img-zoom"
              style={{ position: "relative" }}
            >
              <img
                src="/logos/logo-2.png"
                alt="GAS Man Clinic"
                style={{
                  width: "100%",
                  aspectRatio: "4/3",
                  objectFit: "contain",
                  objectPosition: "center",
                  display: "block",
                }}
              />
            </div>

            {/* Right: Text */}
            <div style={{ paddingTop: "2rem" }}>
              <div className="reveal" style={{ marginBottom: "1.5rem" }}>
                <span className="label-tag">Filosofia</span>
                <div className="section-line-olive" style={{ marginTop: "0.75rem" }} />
              </div>

              <h2
                className="reveal delay-100"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                  lineHeight: 1.15,
                  color: "var(--charcoal)",
                  marginBottom: "1.75rem",
                }}
              >
                Harmonizar é preservar
                <br />
                <em style={{ fontStyle: "italic", color: "var(--charcoal-mid)" }}>
                  quem você já é.
                </em>
              </h2>

              <p
                className="reveal delay-200"
                style={{
                  fontSize: "0.95rem",
                  color: "var(--graphite)",
                  lineHeight: 1.85,
                  marginBottom: "1.5rem",
                }}
              >
                Preenchimento não é tudo igual. A técnica, o olhar e o planejamento
                fazem diferença na abordagem estética. Cada procedimento começa
                com uma análise da face — suas proporções, estrutura e
                características individuais.
              </p>

              <p
                className="reveal delay-300"
                style={{
                  fontSize: "0.95rem",
                  color: "var(--graphite)",
                  lineHeight: 1.85,
                  marginBottom: "2.5rem",
                }}
              >
                Com 11 anos de atuação na área, seguimos uma abordagem que une
                avaliação criteriosa, métodos reconhecidos e senso estético. O
                objetivo não é transformar — é valorizar o que já existe com
                equilíbrio.
              </p>

              <div
                className="reveal delay-400"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.5rem",
                }}
              >
                {[
                  { title: "Naturalidade", desc: "Respeito às características individuais" },
                  { title: "Planejamento", desc: "Avaliação e definição personalizada" },
                  { title: "Abordagem", desc: "Indicação conforme cada caso" },
                  { title: "Individualidade", desc: "Cada face tratada de forma única" },
                ].map((item) => (
                  <div
                    key={item.title}
                    style={{
                      borderTop: "0.5px solid var(--border)",
                      paddingTop: "1rem",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 500,
                        fontSize: "0.8rem",
                        color: "var(--charcoal)",
                        marginBottom: "4px",
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 300,
                        fontSize: "0.78rem",
                        color: "var(--graphite)",
                        lineHeight: 1.5,
                      }}
                    >
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          STATS STRIP
      ══════════════════════════════════════════════════════════════ */}
      <section
        style={{
          padding: "4rem 0",
          background: "var(--charcoal)",
          borderTop: "0.5px solid rgba(248,246,242,0.06)",
          borderBottom: "0.5px solid rgba(248,246,242,0.06)",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "2rem",
            }}
            className="stats-grid"
          >
            {[
              { n: "11", label: "Anos de Experiência" },
              { n: "+5.000", label: "Procedimentos Realizados" },
              { n: "100%", label: "Foco em Resultados Naturais" },
              { n: "São Paulo", label: "GAS Man Clinic" },
            ].map((stat, i) => (
              <div
                key={stat.n}
                className={`reveal delay-${i * 100}`}
                style={{
                  borderLeft: i > 0 ? "0.5px solid rgba(248,246,242,0.08)" : "none",
                  paddingLeft: i > 0 ? "2rem" : "0",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 300,
                    fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                    color: "var(--warm-white)",
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                  }}
                >
                  {stat.n}
                </div>
                <div
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 400,
                    fontSize: "0.65rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(248,246,242,0.35)",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          3. RESULTADOS — Before/After
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="Resultados"
        style={{
          padding: "clamp(5rem, 10vw, 9rem) 0",
          background: "var(--charcoal)",
          position: "relative",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "4rem",
              flexWrap: "wrap",
              gap: "2rem",
            }}
          >
            <div>
              <div className="reveal" style={{ marginBottom: "1.5rem" }}>
                <span className="label-tag" style={{ color: "rgba(248,246,242,0.5)" }}>
                  Casos Clínicos
                </span>
                <div
                  style={{
                    width: "32px",
                    height: "0.5px",
                    background: "var(--olive)",
                    marginTop: "0.75rem",
                  }}
                />
              </div>
              <h2
                className="reveal delay-100"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                  color: "var(--warm-white)",
                  lineHeight: 1.1,
                }}
              >
                Transformações que
                <br />
                <em style={{ fontStyle: "italic", color: "rgba(248,246,242,0.6)" }}>
                  falam por si.
                </em>
              </h2>
            </div>
            <p
              className="reveal delay-200"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 300,
                fontSize: "0.9rem",
                color: "rgba(248,246,242,0.5)",
                maxWidth: "320px",
                lineHeight: 1.8,
              }}
            >
              Cada imagem representa uma transformação completa. Resultados que
              respeitam a identidade — precisos, naturais e duradouros.
            </p>
          </div>

          {/* Before/After Carousel */}
          <div className="reveal">
            <BeforeAfterCarousel cases={beforeAfterCases} />
          </div>

          <div
            className="reveal"
            style={{ textAlign: "center", marginTop: "3rem" }}
          >
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 300,
                fontSize: "0.8rem",
                color: "rgba(248,246,242,0.3)",
                letterSpacing: "0.05em",
              }}
            >
              
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          4. PROCEDIMENTOS — Full Face Man
      ══════════════════════════════════════════════════════════════════ */}
      <section
        id="procedimentos"
        style={{
          padding: "clamp(5rem, 10vw, 9rem) 0",
          background: "var(--warm-white)",
          position: "relative",
        }}
      >
        <div className="container">
          {/* Section header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              marginBottom: "5rem",
              alignItems: "end",
            }}
            className="grid-cols-1 lg:grid-cols-2"
          >
            <div>
              <div className="reveal" style={{ marginBottom: "1.5rem" }}>
                <span className="label-tag">Procedimentos</span>
                <div className="section-line-olive" style={{ marginTop: "0.75rem" }} />
              </div>
              <h2
                className="reveal delay-100"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                  color: "var(--charcoal)",
                  lineHeight: 1.1,
                }}
              >
                Full Face Man —
                <br />
                <em style={{ fontStyle: "italic", color: "var(--charcoal-mid)" }}>
                  Estética facial masculina com abordagem personalizada.

                </em>
              </h2>
            </div>
            <p
              className="reveal delay-200"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 300,
                fontSize: "0.95rem",
                color: "var(--graphite)",
                lineHeight: 1.85,
                alignSelf: "end",
              }}
            >
              A harmonização facial masculina é um conjunto de procedimentos
              minimamente invasivos que trabalham em sinergia para definir,
              equilibrar e fortalecer os contornos do rosto — sem perder a
              naturalidade e a identidade do paciente.
            </p>
          </div>

          {/* Procedures list */}
          <div>
            {[
              {
                n: "01",
                title: "Preenchimento Definitivo",
                subtitle: "Ácido Hialurônico de Alta Densidade",
                desc: "Técnicas reconhecidas com materiais aprovados, definidos conforme avaliação individual. Resultados que dispensam a frustração de refazer todo ano — harmonização que permanece com você.",
                tags: ["Mandíbula", "Mento", "Têmporas", "Maçãs"],
              },
              {
                n: "02",
                title: "Implantes Faciais",
                subtitle: "Estrutura e Definição Permanente",
                desc: "Implantes de silicone médico para definição permanente do ângulo de mandíbula, mento e maçãs do rosto.",
                tags: ["Mandíbula", "Mento", "Maçãs"],
              },
              {
                n: "03",
                title: "Ângulo de Mandíbula",
                subtitle: "Atuação em definição e proporção facial masculina.",
                desc: "Especialidade do Dr. Anselmo Carneiro. Técnica precisa para criar ou acentuar o ângulo mandibular — o detalhe que transforma a leitura do rosto masculino.",
                tags: ["Preenchimento", "Implante", "Combinado"],
              },
              {
                n: "04",
                title: "Otomodelação",
                subtitle: "Harmonia das Orelhas sem Cirurgia",
                desc: "Correção da posição e forma das orelhas com fios e técnicas minimamente invasivas. Técnica minimamente invasiva com indicação conforme avaliação individual.",
                tags: ["Sem Cirurgia", "Resultado Imediato"],
              },
              {
                n: "05",
                title: "Toxina Botulínica",
                subtitle: "Precisão Muscular",
                desc: "Aplicação estratégica para relaxamento muscular, suavização de linhas de expressão e harmonização do terço superior e médio da face.",
                tags: ["Testa", "Glabela", "Pescoço", "Masseter"],
              },
              {
                n: "06",
                title: "Lipo de Papada",
                subtitle: "Definição do Contorno Cervical",
                desc: "Lipoaspiração facial minimamente invasiva para eliminar o excesso de gordura na região submentoniana — Procedimento para melhora do contorno facial, conforme indicação clínica.",
                tags: ["Lipoaspiração", "Contorno Facial"],
              },
            ].map((proc, i) => (
              <div
                key={proc.n}
                className={`procedure-block reveal delay-${Math.min(i * 100, 500)}`}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "80px 1fr auto",
                    gap: "2rem",
                    alignItems: "start",
                  }}
                  className="procedure-inner"
                >
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontStyle: "italic",
                      fontWeight: 300,
                      fontSize: "0.85rem",
                      color: "var(--olive)",
                      letterSpacing: "0.05em",
                      paddingTop: "4px",
                    }}
                  >
                    {proc.n}
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: "1rem",
                        marginBottom: "0.5rem",
                        flexWrap: "wrap",
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontWeight: 400,
                          fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
                          color: "var(--charcoal)",
                          margin: 0,
                        }}
                      >
                        {proc.title}
                      </h3>
                      <span
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontWeight: 300,
                          fontSize: "0.8rem",
                          color: "var(--graphite)",
                        }}
                      >
                        {proc.subtitle}
                      </span>
                    </div>
                    <p
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 300,
                        fontSize: "0.88rem",
                        color: "var(--graphite)",
                        lineHeight: 1.75,
                        marginBottom: "1rem",
                        maxWidth: "600px",
                      }}
                    >
                      {proc.desc}
                    </p>
                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                      {proc.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontWeight: 400,
                            fontSize: "0.62rem",
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            color: "var(--olive)",
                            border: "0.5px solid var(--olive)",
                            padding: "3px 8px",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="hidden lg:block">
                    <button
                      className="btn-secondary"
                      style={{ fontSize: "0.65rem", padding: "0.6rem 1.2rem" }}
                      onClick={() => scrollTo("#contato")}
                    >
                      Saiba mais
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          5. PROFISSIONAL CAPACITADO — Autoridade
      ══════════════════════════════════════════════════════════════════ */}
      <section
        id="profissional-capacitado"
        style={{
          padding: "clamp(5rem, 10vw, 9rem) 0",
          background: "var(--off-white)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(3rem, 6vw, 8rem)",
              alignItems: "center",
            }}
            className="grid-cols-1 lg:grid-cols-2"
          >
            {/* Left: Text */}
            <div>
              <div className="reveal" style={{ marginBottom: "1.5rem" }}>
                <span className="label-tag">PROFISSIONAL CAPACITADO</span>
                <div className="section-line-olive" style={{ marginTop: "0.75rem" }} />
              </div>

              <h2
                className="reveal delay-100"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                  color: "var(--charcoal)",
                  lineHeight: 1.1,
                  marginBottom: "2rem",
                }}
              >
                Formação sólida.
                <br />
                <em style={{ fontStyle: "italic", color: "var(--charcoal-mid)" }}>
                  Olhar apurado.
                </em>
              </h2>

              <p
                className="reveal delay-200"
                style={{
                  fontSize: "0.95rem",
                  color: "var(--graphite)",
                  lineHeight: 1.85,
                  marginBottom: "1.5rem",
                }}
              >
                Cirurgião-Dentista formado em 2013, com mais de uma década
                de experiência clínica. Fundador
                da GAS Man Clinic em São Paulo.
              </p>

              <p
                className="reveal delay-300"
                style={{
                  fontSize: "0.95rem",
                  color: "var(--graphite)",
                  lineHeight: 1.85,
                  marginBottom: "2.5rem",
                }}
              >
                Sua abordagem envolve avaliação individualizada e planejamento
                cuidadoso, considerando as características de cada paciente ao longo
                de todo o processo. O Dr. Anselmo
                Carneiro é reconhecido por resultados que somam, não substituem.
              </p>

              {/* Credentials */}
              <div
                className="reveal delay-400"
                style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}
              >
                {[
                  { label: "Formação", value: "Cirurgião-Dentista · CRO 111.023" },
                  { label: "Especialidade", value: "Harmonização Facial Definitiva" },
                  { label: "Clínica", value: "GAS Man Clinic · São Paulo, SP" },
                  { label: "Experiência", value: "11 anos · +5.000 procedimentos" },
                ].map((cred) => (
                  <div
                    key={cred.label}
                    style={{
                      display: "flex",
                      gap: "1.5rem",
                      alignItems: "baseline",
                      borderBottom: "0.5px solid var(--border)",
                      paddingBottom: "0.75rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 500,
                        fontSize: "0.65rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--olive)",
                        minWidth: "100px",
                      }}
                    >
                      {cred.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 300,
                        fontSize: "0.88rem",
                        color: "var(--charcoal)",
                      }}
                    >
                      {cred.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Brand signature */}
              <div className="reveal delay-500" style={{ marginTop: "2rem" }}>
                <img
                  src="/logos/logo-3.png"
                  alt="GAS Man Clinic"
                  style={{
                    height: "48px",
                    width: "auto",
                    objectFit: "contain",
                    opacity: 0.7,
                  }}
                />
              </div>
            </div>

            {/* Right: Single Portrait */}
            <div
              className="reveal-right delay-200"
              style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr", gap: "1rem" }}
            >
              <div
                className="img-zoom"
                style={{
                  position: "relative",
                  background: "var(--charcoal)",
                  borderRadius: "16px",
                  overflow: "hidden",
                  minHeight: "400px",
                }}
              >
                <img
                  src="/medico.jpg"
                  alt="Dr. Anselmo Carneiro"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                    display: "block",
                    background: "var(--warm-white)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          6. DEPOIMENTOS — Social Proof
      ══════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          padding: "clamp(5rem, 10vw, 9rem) 0",
          background: "var(--charcoal)",
        }}
      >
        <div className="container">
          <div className="reveal" style={{ marginBottom: "4rem" }}>
            <span className="label-tag" style={{ color: "rgba(248,246,242,0.4)" }}>
              Depoimentos
            </span>
            <div
              style={{
                width: "32px",
                height: "0.5px",
                background: "var(--olive)",
                marginTop: "0.75rem",
              }}
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "3rem",
            }}
          >
            {[
              {
                quote:
                  "Resultado completamente natural. Ninguém percebe que fiz algo — só notam que estou com uma aparência melhor. Exatamente o que eu queria.",
                name: "Ricardo M.",
                detail: "Preenchimento de Mandíbula · São Paulo",
              },
              {
                quote:
                  "Fui com muito medo de parecer artificial. O Dr. Anselmo me explicou cada etapa, planejou com cuidado. Me senti seguro durante todo o atendimento.",
                name: "Fernando L.",
                detail: "Harmonização Completa · São Paulo",
              },
              {
                quote:
                  "Já tinha feito em outros lugares e nunca fiquei satisfeito. Aqui entenderam o que eu precisava e entregaram um resultado que respeita meu rosto.",
                name: "Marcos T.",
                detail: "Implante de Mento · São Paulo",
              },
            ].map((t, i) => (
              <div
                key={t.name}
                className={`reveal delay-${(i + 1) * 100}`}
                style={{
                  borderTop: "0.5px solid rgba(248,246,242,0.12)",
                  paddingTop: "2rem",
                }}
              >
                <svg
                  width="24"
                  height="18"
                  viewBox="0 0 24 18"
                  fill="none"
                  style={{ marginBottom: "1.5rem", opacity: 0.3 }}
                >
                  <path
                    d="M0 18V10.8C0 4.8 3.6 1.2 10.8 0L12 2.4C8.4 3.2 6.4 5.2 6 8.4H10.8V18H0ZM13.2 18V10.8C13.2 4.8 16.8 1.2 24 0L25.2 2.4C21.6 3.2 19.6 5.2 19.2 8.4H24V18H13.2Z"
                    fill="var(--warm-white)"
                  />
                </svg>
                <p className="testimonial-quote" style={{ color: "var(--warm-white)", marginBottom: "2rem" }}>
                  {t.quote}
                </p>
                <div>
                  <div
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 500,
                      fontSize: "0.85rem",
                      color: "var(--warm-white)",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 300,
                      fontSize: "0.75rem",
                      color: "rgba(248,246,242,0.4)",
                      marginTop: "2px",
                    }}
                  >
                    {t.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          7. EXPERIÊNCIA DO PACIENTE — Jornada
      ══════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          padding: "clamp(5rem, 10vw, 9rem) 0",
          background: "var(--warm-white)",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: "4rem",
              alignItems: "start",
            }}
            className="grid-cols-1 lg:grid-cols-3"
          >
            <div>
              <div className="reveal" style={{ marginBottom: "1.5rem" }}>
                <span className="label-tag">Experiência</span>
                <div className="section-line-olive" style={{ marginTop: "0.75rem" }} />
              </div>
              <h2
                className="reveal delay-100"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontSize: "clamp(2rem, 3vw, 2.8rem)",
                  color: "var(--charcoal)",
                  lineHeight: 1.1,
                }}
              >
                Do primeiro
                <br />
                contato ao
                <br />
                <em style={{ fontStyle: "italic" }}>resultado final.</em>
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0",
                gridColumn: "span 2",
              }}
              className="col-span-1 lg:col-span-2"
            >
              {[
                {
                  n: "01",
                  title: "Consulta de Avaliação",
                  desc: "Análise completa da estrutura facial, histórico e expectativas. Diagnóstico preciso antes de qualquer decisão.",
                },
                {
                  n: "02",
                  title: "Planejamento Personalizado",
                  desc: "Criamos um protocolo exclusivo para o seu rosto — combinando técnicas, materiais e sequência ideal de procedimentos.",
                },
                {
                  n: "03",
                  title: "Execução com Precisão",
                  desc: "Cada procedimento realizado com técnica validada, materiais premium e atenção absoluta ao detalhe.",
                },
                {
                  n: "04",
                  title: "Acompanhamento Contínuo",
                  desc: "Suporte pós-procedimento, revisões e ajustes quando necessário. Acompanhamento contínuo com orientações e revisões conforme necessidade.",
                },
              ].map((step, i) => (
                <div
                  key={step.n}
                  className={`reveal delay-${(i + 1) * 100}`}
                  style={{
                    padding: "2.5rem 2rem",
                    borderTop: "0.5px solid var(--border)",
                    borderRight: i % 2 === 0 ? "0.5px solid var(--border)" : "none",
                    position: "relative",
                  }}
                >
                  <div className="process-step-number" style={{ marginBottom: "1rem" }}>
                    {step.n}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 400,
                      fontSize: "1.2rem",
                      color: "var(--charcoal)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 300,
                      fontSize: "0.85rem",
                      color: "var(--graphite)",
                      lineHeight: 1.75,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          8. FAQ
      ══════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          padding: "clamp(5rem, 10vw, 9rem) 0",
          background: "var(--off-white)",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: "clamp(3rem, 6vw, 8rem)",
              alignItems: "start",
            }}
            className="grid-cols-1 lg:grid-cols-3"
          >
            <div style={{ position: "sticky", top: "100px" }}>
              <div className="reveal" style={{ marginBottom: "1.5rem" }}>
                <span className="label-tag">Perguntas Frequentes</span>
                <div className="section-line-olive" style={{ marginTop: "0.75rem" }} />
              </div>
              <h2
                className="reveal delay-100"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontSize: "clamp(2rem, 3vw, 2.8rem)",
                  color: "var(--charcoal)",
                  lineHeight: 1.1,
                  marginBottom: "1.5rem",
                }}
              >
                Tire suas
                <br />
                <em style={{ fontStyle: "italic" }}>dúvidas.</em>
              </h2>
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 300,
                  fontSize: "0.88rem",
                  color: "var(--graphite)",
                  lineHeight: 1.75,
                }}
              >
                Transparência faz parte do nosso processo. Qualquer outra
                dúvida pode ser esclarecida na consulta de avaliação.
              </p>
            </div>

            <div style={{ gridColumn: "span 2" }} className="col-span-1 lg:col-span-2">
              <div className="reveal">
                {[
                  {
                    q: "O procedimento mantém aspecto natural?",
                    a: "A abordagem busca respeitar as características individuais, com planejamento baseado em proporções faciais e avaliação clínica.",
                  },
                  {
                    q: "Qual a diferença entre preenchimento definitivo e temporário?",
                    a: "Os preenchimentos definitivos utilizam materiais de alta durabilidade que permanecem por muitos anos, eliminando a necessidade de manutenções frequentes. São indicados para pacientes que buscam um resultado estável e duradouro, sem a frustração de refazer o procedimento anualmente.",
                  },
                  {
                    q: "Quanto tempo dura a recuperação?",
                    a: "A maioria dos procedimentos tem recuperação mínima — entre 24 e 72 horas para inchaço inicial. Procedimentos como lipo de papada podem exigir até 7 dias de cuidados. Na consulta de avaliação, detalhamos o protocolo de recuperação específico para o seu caso.",
                  },
                  {
                    q: "Sou um bom candidato para harmonização facial?",
                    a: "A melhor forma de descobrir é através de uma consulta de avaliação. De forma geral, candidatos ideais são pessoas que buscam melhorar proporções e definição facial de forma natural, sem querer mudanças drásticas de aparência. Avaliamos saúde geral, histórico de procedimentos e expectativas.",
                  },
                  {
                    q: "Os procedimentos são seguros?",
                    a: "Todos os procedimentos são realizados com materiais certificados e técnicas validadas internacionalmente. O Dr. Anselmo Carneiro possui mais de 11 anos de experiência e mais de 5.000 procedimentos realizados. A segurança do paciente é a prioridade absoluta em cada etapa.",
                  },
                  {
                    q: "Como agendar uma consulta de avaliação?",
                    a: "Você pode agendar diretamente pelo WhatsApp ou pelo formulário de contato nesta página. A consulta de avaliação é o primeiro passo — sem compromisso, sem pressão. É o momento para entender suas necessidades e apresentar as melhores opções para o seu caso.",
                  },
                ].map((item) => (
                  <FaqItem key={item.q} question={item.q} answer={item.a} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          9. CTA FINAL
      ══════════════════════════════════════════════════════════════════ */}
      <section
        id="contato"
        style={{
          padding: "clamp(5rem, 12vw, 10rem) 0",
          background: "var(--charcoal)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${HERO_BG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.08,
          }}
        />

        <div
          className="container"
          style={{ position: "relative", zIndex: 1, textAlign: "center" }}
        >
          <div className="reveal" style={{ marginBottom: "1.5rem" }}>
            <span className="label-tag" style={{ color: "rgba(248,246,242,0.4)" }}>
              Agende sua Consulta
            </span>
          </div>

          <h2
            className="reveal delay-100"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "clamp(2.5rem, 5vw, 5rem)",
              color: "var(--warm-white)",
              lineHeight: 1.05,
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            O primeiro passo é
            <br />
            <em style={{ fontStyle: "italic", color: "rgba(248,246,242,0.6)" }}>
              uma conversa.
            </em>
          </h2>

          <p
            className="reveal delay-200"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 300,
              fontSize: "1rem",
              color: "rgba(248,246,242,0.55)",
              lineHeight: 1.8,
              maxWidth: "480px",
              margin: "0 auto 3rem",
            }}
          >
            Agende sua consulta de avaliação para entender as possibilidades de
            abordagem conforme o seu caso.
          </p>

          <div
            className="reveal delay-300"
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "4rem",
            }}
          >
            <a
              href="https://wa.me/5511954885446?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20de%20avalia%C3%A7%C3%A3o."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ background: "var(--warm-white)", color: "var(--charcoal)", borderColor: "var(--warm-white)" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Agendar pelo WhatsApp
            </a>
            <a
              href="https://www.instagram.com/dr_anselmo_carneiro/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Ver no Instagram
            </a>
          </div>

          {/* Contact info */}
          <div
            className="reveal delay-400"
            style={{
              display: "flex",
              gap: "3rem",
              justifyContent: "center",
              flexWrap: "wrap",
              paddingTop: "2.5rem",
              borderTop: "0.5px solid rgba(248,246,242,0.1)",
            }}
          >
            {[
              { label: "Localização", value: "São Paulo, SP" },
              { label: "Instagram", value: "@dr_anselmo_carneiro" },
              { label: "CRO", value: "111.023" },
            ].map((info) => (
              <div key={info.label} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 400,
                    fontSize: "0.6rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(248,246,242,0.3)",
                    marginBottom: "4px",
                  }}
                >
                  {info.label}
                </div>
                <div
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 300,
                    fontSize: "0.9rem",
                    color: "rgba(248,246,242,0.7)",
                  }}
                >
                  {info.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          10. FOOTER
      ══════════════════════════════════════════════════════════════════ */}
      <footer
        style={{
          padding: "2.5rem 0",
          background: "#0E0E0E",
          borderTop: "0.5px solid rgba(248,246,242,0.06)",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <img
                src="/logos/logo-1.png"
                alt="GAS Man Clinic"
                style={{
                  height: "36px",
                  width: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
            <div
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 300,
                fontSize: "0.72rem",
                color: "rgba(248,246,242,0.2)",
                letterSpacing: "0.05em",
              }}
            >
              © 2026 · Todos os direitos reservados · CRO 111.023
            </div>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              {[
                { label: "Instagram", href: "https://www.instagram.com/dr_anselmo_carneiro/" },
                { label: "WhatsApp", href: "https://wa.me/5511954885446" }
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 400,
                    fontSize: "0.65rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(248,246,242,0.3)",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "rgba(248,246,242,0.7)")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(248,246,242,0.3)")}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/5511954885446?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20de%20avalia%C3%A7%C3%A3o."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Agendar pelo WhatsApp"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* Scroll animation keyframe */}
      <style>{`
        @keyframes scrollLine {
          0% { top: -40%; }
          100% { top: 140%; }
        }

        @media (max-width: 1023px) {
          .procedure-inner {
            grid-template-columns: 60px 1fr !important;
          }
          .procedure-inner > *:last-child {
            display: none;
          }
        }

        @media (max-width: 767px) {
          .grid-cols-1 {
            grid-template-columns: 1fr !important;
          }
          .col-span-1 {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </div>
  );
}
