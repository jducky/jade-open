const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

$("name").textContent = PROFILE.name;
$("role").textContent = PROFILE.role;
$("tagline").textContent = PROFILE.tagline;
$("loc").textContent = "📍 " + PROFILE.location;

$("stats").innerHTML = STATS.map((s) => `<div class="stat"><b>${esc(s.value)}</b><span>${esc(s.label)}</span></div>`).join("");
$("about-body").innerHTML = PROFILE.about.map((p) => `<p>${esc(p)}</p>`).join("");
$("now").innerHTML = TIMELINE_NOW.map((t) => `<li>${esc(t)}</li>`).join("");

$("skills-body").innerHTML = SKILLS.map((g) => `
  <div class="panel"><h3>${esc(g.group)}</h3>
  ${g.items.map(([n, v]) => `<div class="bar"><div class="bar-top"><span>${esc(n)}</span><span>${v}%</span></div>
    <div class="track"><i style="width:${v}%"></i></div></div>`).join("")}
  </div>`).join("");

const tags = ["전체", ...new Set(PROJECTS.map((p) => p.tag))];
let active = "전체";
function renderProjects() {
  $("filters").innerHTML = tags.map((t) => `<button class="${t === active ? "on" : ""}" data-t="${esc(t)}">${esc(t)}</button>`).join("");
  $("projects-body").innerHTML = PROJECTS.filter((p) => active === "전체" || p.tag === active).map((p) => `
    <article class="card"><div class="card-top"><span class="badge">${esc(p.tag)}</span><span class="muted">${p.year} · ★ ${p.stars}</span></div>
    <h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p>
    <ul class="tags">${p.stack.map((s) => `<li>${esc(s)}</li>`).join("")}</ul></article>`).join("");
}
$("filters").addEventListener("click", (e) => {
  if (e.target.dataset.t) { active = e.target.dataset.t; renderProjects(); }
});
renderProjects();

$("exp-body").innerHTML = EXPERIENCE.map((e) => `
  <div class="t-item"><div class="t-date">${esc(e.period)}</div>
  <div><h4>${esc(e.title)} <small>@ ${esc(e.company)}</small></h4><ul>${e.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul></div></div>`).join("");
$("edu-body").innerHTML = EDUCATION.map((e) => `
  <div class="t-item"><div class="t-date">${esc(e.period)}</div>
  <div><h4>${esc(e.major)} <small>@ ${esc(e.school)}</small></h4><p class="muted">${esc(e.note)}</p></div></div>`).join("");

$("articles").innerHTML = ARTICLES.map((a) => `<li><span class="muted">${esc(a.date)} · ${esc(a.read)}</span><br>${esc(a.title)}</li>`).join("");
$("talks").innerHTML = TALKS.map((t) => `<li><span class="muted">${esc(t.date)} · ${esc(t.event)}</span><br>${esc(t.title)}</li>`).join("");
$("awards").innerHTML = AWARDS.map((a) => `<li>🏆 ${esc(a)}</li>`).join("");
$("reviews-body").innerHTML = TESTIMONIALS.map((t) => `<blockquote class="panel">“${esc(t.text)}”<footer>— ${esc(t.who)}</footer></blockquote>`).join("");

const c = PROFILE.contact;
$("contact-body").innerHTML = `
  <li>✉️ <a href="mailto:${esc(c.email)}">${esc(c.email)}</a></li>
  <li>🐙 <a href="${esc(c.github)}">GitHub</a></li>
  <li>💼 <a href="${esc(c.linkedin)}">LinkedIn</a></li>
  <li>📝 <a href="${esc(c.blog)}">블로그</a></li>
  <li>📞 ${esc(c.phone)}</li>`;

// 테마 전환
const root = document.documentElement;
try { const t = localStorage.getItem("theme"); if (t) root.dataset.theme = t; } catch (e) {}
$("theme").addEventListener("click", () => {
  const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme = dark ? "light" : "dark";
  try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
});
