import assert from "node:assert/strict";
import test from "node:test";
import { navLinks, profile, projects, socials } from "../src/data/portfolio.js";

test("portfolio data has a complete profile and project collection", () => {
  assert.ok(profile.name);
  assert.ok(profile.specialization);
  assert.ok(profile.about.length >= 2);
  assert.ok(projects.length >= 4);
});

test("projects expose valid demos, previews, and technology details", () => {
  for (const project of projects) {
    assert.match(project.href, /^https:\/\//);
    assert.match(project.preview, /^\/projects\/.*\.jpg$/);
    assert.ok(project.tech.length >= 3);
    assert.ok(!project.tech.includes("Vercel"));
  }
});

test("navigation targets are unique and contact email uses mailto", () => {
  assert.equal(new Set(navLinks.map((link) => link.id)).size, navLinks.length);
  const email = socials.find((social) => social.id === "email");
  assert.match(email.href, /^mailto:/);
});
