---
to: "/portfolio/mateuszwroblewski"
name: 'mateuszwroblewski.com'
description: 'My portfolio website contains: information about me, my skills, projects showing my experience, blog where I write about frontend development, contact form with validation. Bilingual site.'
image: '/images/projects/mateuszwroblewski/project3.png'
linkGithub: 'https://github.com/mwroblewski95/mateuszwroblewski.com'
linkLive: 'https://www.mateuszwroblewski.com/'
date: '04/14/2021'
---

### Technologies and libraries:
- Next.js
- next-i18next
- GSAP
- EmailJS
- Formik
- Yup
- react-markdown
- gray-matter
- react-syntax-highlighter
- react-scroll

### Monitoring the performance, accessibility and search engine optimization of websites:

Google PageSpeed Insights score for desktop and mobile:

![Google PageSpeed Insights score for desktop](pageSpeedInsightsDesktop3.png)

![Google PageSpeed Insights score for mobile](pageSpeedInsightsMobile3.png)

Lighthouse score on Desktop and Mobile:

![Lighthouse score on desktop](lighthouseDesktop3.png)

![Lighthouse score on mobile](lighthouseMobile3.png)

### Project description

I used Next.js technology to write this project.

The first reason for this choice was the desire to learn this framework, since it is largely based on the syntax of React, which I had already managed to learn.

The second reason was the additional functionality it offered to easily create powerful websites that are well optimized for SEO, which is what I wanted when creating the project.

I used CSS Modules to style the page.

The next-i18next library allowed me to create a bilingual website in a fast and easy way.

In this project I also used GSAP library with ScrollTrigger plugin to make animations appearing on the page in just a few lines of code.

Smooth navigation between sections on the page with smooth scroll effect was provided by react-scroll package.

EmailJS service allows me to send message from contact form directly to my email only by using JavaScript code on client side without writing server side code. The user also immediately gets an email back with information that his message was delivered correctly and in what time he should receive a reply.

The Formik library allowed us to quickly build a form whose validation was written easily with the Yup library.

Blog posts and project entries are created using markdown files, which are then converted to html code which is later used to create a subpage with the entry. I chose this option because I was looking for a way to create entries locally without having to connect and configure external services like Headless CMS. Besides, it was a good way to learn and practice the syntax.
The react-markdown library and gray-matter made it easy for me to read conent from markdown files and then convert them into html code representing the post. Entries that contain examples with Html, CSS and JavaScript code snippets are converted to readable form with syntax highlighting using react-syntax-highlighter package.


