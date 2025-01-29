<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Personal Website</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
      color: #333;
    }
    header {
      background-color: #333;
      color: #fff;
      padding: 20px;
      text-align: center;
    }
    nav {
      display: flex;
      justify-content: center;
      background-color: #444;
      padding: 10px;
    }
    nav a {
      color: #fff;
      text-decoration: none;
      margin: 0 15px;
    }
    nav a:hover {
      text-decoration: underline;
    }
    section {
      padding: 20px;
      margin: 20px auto;
      max-width: 800px;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    footer {
      text-align: center;
      padding: 10px;
      background-color: #333;
      color: #fff;
      position: fixed;
      bottom: 0;
      width: 100%;
    }
  </style>
</head>
<body>
  <header>
    <h1>Welcome to My Website</h1>
  </header>
  <nav>
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </nav>
  <section id="about">
    <h2>About Me</h2>
    <p>Hello! I'm a web developer passionate about creating awesome websites.</p>
  </section>
  <section id="projects">
    <h2>Projects</h2>
    <p>Here are some of my projects:</p>
    <ul>
      <li>Project 1: A portfolio website</li>
      <li>Project 2: A blog platform</li>
      <li>Project 3: An e-commerce site</li>
    </ul>
  </section>
  <section id="contact">
    <h2>Contact</h2>
    <p>You can reach me at <a href="mailto:example@example.com">example@example.com</a>.</p>
  </section>
  <footer>
    <p>&copy; 2025 My Personal Website</p>
  </footer>
</body>
</html>
