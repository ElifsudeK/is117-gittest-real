# Professional Web Portfolio System (Eleventy)

This repository is a production-ready Eleventy (11ty) project built around a clean, Nordic-minimal aesthetic. The site is intended for GitHub Pages and outputs to `docs/`.

Quick commands

```
npm install
npm run start   # local dev with eleventy --serve
npm run build   # build static files into docs/
```

Structure

- `src/` — Eleventy source files
- `src/_includes/` — layouts and partials
- `src/assets/` — css, js, images (copied to `docs/assets/`)
- `docs/` — generated site (for GitHub Pages)

Notes

- The site is intentionally lightweight: minimal JS, semantic HTML, accessible components, and reduced-motion support.
- Where third-party embeds are required (Calendly, Analytics, Zapier), the code is present as commented placeholders with instructions.
# Git Test - 30 Minutes

## IMPORTANT: Enable GitHub Actions First!

After forking this repo:
1. Go to **Actions** tab in YOUR fork
2. Click **"I understand my workflows, go ahead and enable them"**
3. Then start the test

---

## Do This Pattern 15 Times

```bash
git checkout -b question-01
# Write answer in answers/question-01.md
git add answers/question-01.md
git commit -m "docs: answer question 1"
git checkout main
git merge question-01
```

Change to question-02, question-03, etc.

---

## The 15 Questions

1. What does git status do?
2. What is git add vs git commit?
3. What is a Git branch?
4. What does git merge do?
5. What is git pull vs git push?
6. What does pwd do?
7. How do you use cd? Show 3 ways.
8. What does ls -la show?
9. How do you create a directory?
10. What are absolute vs relative paths?
11. How do you create an empty file?
12. What is cp vs mv?
13. Why is rm -rf dangerous?
14. What does cat do?
15. How do you view last 20 lines of a file?

---

## Commit Rules

Start with: docs: or chore: or fix:

Example: docs: answer question 5

---

## Grading

- 20 pts: 15+ commits
- 25 pts: Correct prefixes
- 20 pts: 15 branches
- 15 pts: Branches merged
- 15 pts: All files exist
- 5 pts: Files have content

---

## Start

**Step 1: Test that Actions work**
```bash
# Make a small change to verify Actions are enabled
echo "Starting test" > test.txt
git add test.txt
git commit -m "chore: verify actions are enabled"
git push origin main
```

Check the **Actions** tab - you should see the workflow run. If not, enable Actions (see top).

**Step 2: Begin the test**
```bash
mkdir answers
git add answers/
git commit -m "chore: create answers directory"
```

Then repeat the pattern 15 times.

---

## You Can Use Google/ChatGPT

We grade Git workflow, not answers!

---

## Push When Done

```bash
git push origin main
git push --all
```
