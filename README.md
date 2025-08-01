<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Afriza Fazl Shifa Naula | Frontend Developer</title>
  <link rel="stylesheet" href="style.css" />
  <script defer src="script.js"></script>
 <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
/>

</head>
<body>
 
 <div class="theme-toggle-wrapper">
  <input type="checkbox" id="theme-toggle" />
  <label for="theme-toggle" class="toggle-label">
    <span class="icon">🌙</span>
    <span class="icon">☀️</span>
    <span class="ball"></span>
  </label>
</div>

  <!-- MAIN WRAPPER -->
  <main>

    <!-- HERO SECTION -->
    <header class="hero fade-in visible">
      <div class="container hero-flex">
        <div class="hero-text">
          <h1>Hi, I'm <br><span>Afriza Fazl Shifa Naula</span></h1>
          <p>Frontend Developer • Creative Coder</p>
          <div class="hero-buttons">
            <a href="#about">About Me</a>
            <a href="#projects">Projects</a>
          </div>
        </div>
        <div class="profile-section">
          <img src="images/profile-new.jpg" alt="Foto Profil" class="hero-img" />
          <div class="social-icons">
            <a href="https://instagram.com/afriza.fazl" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="mailto:jaulisdead@gmail.com"><i class="fas fa-envelope"></i></a>
            <a href=https://github.com/afrizafazl target="_blank"><i class="fab fa-github"></i> </a>
          </div>
        </div>
      </div>
    </header>

    <!-- ABOUT SECTION -->
    <section class="about fade-in visible" id="about">
      <h2>About Me</h2>
      <div class="about-content">
        <p>I’m a passionate frontend developer with a strong eye for detail and user experience. My work is focused on crafting interactive, accessible, and responsive web interfaces that blend form and function.</p>
        <p>I love exploring new technologies, improving UI/UX flows, and building seamless web apps that solve real-world problems. Whether it's plain HTML/CSS or modern frameworks, I aim for clean and maintainable code.</p>
      </div>
      <div class="skills-icons">
        <img src="images/html.png" alt="HTML" />
        <img src="images/css.png" alt="CSS" />
        <img src="images/js.png" alt="JavaScript" />
        <img src="images/react.png" alt="React" />
      </div>
    </section>

    <!-- PROJECT SECTION -->
    <section class="projects fade-in visible" id="projects">
      <h2>My Projects</h2>
      <div class="project-list">
        <div class="project-card">
          <h3>Portfolio Website</h3>
          <p>HTML • CSS • JavaScript</p>
          <p>A responsive portfolio site to showcase my skills and projects.</p>
          <div class="project-links">
            <a href="#">View</a>
            <a href="#">Code</a>
          </div>
        </div>
        <div class="project-card">
          <h3>Task Manager App</h3>
          <p>React • Firebase</p>
          <p>A simple task management app with authentication and real-time database.</p>
          <div class="project-links">
            <a href="#">View</a>
            <a href="#">Code</a>
          </div>
        </div>
        <div class="project-card">
          <h3>Weather Dashboard</h3>
          <p>JavaScript • API</p>
          <p>Displays real-time weather data from OpenWeather API with search feature.</p>
          <div class="project-links">
            <a href="#">View</a>
            <a href="#">Code</a>
          </div>
        </div>
      </div>
    </section>

  </main>

  <!-- FOOTER -->
  <footer>
    <p>&copy; 2025 Afriza Fazl Shifa Naula. All rights reserved.</p>
  </footer>

</body>
</html>
