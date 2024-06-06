class CustomHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header class="header">
        <!-- Logo start-->
        <div class="logo">
            <a href="index.html"><img src="images/logo.png" alt="Logo"/></a>
        </div>
        <!-- Logo end-->
        <!-- Navigation start -->
        <nav class="navigation-bar">
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="projects.html">Projects</a>
            <a href="contact.html">Contact</a>
        </nav>
        <!-- Navigation end -->
    </header>
    `
  }
}

customElements.define('custom-header', CustomHeader);

class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer class="footer-container">
        <p class="footer-text">connect with us on social media</p>
        <nav class="footer-navigation">
            <a href="#"><img src="images/facebook-icon.png" alt="Facebook"/></a>
            <a href="#"><img src="images/github-icon.png" alt="Github"/></a>
            <a href="#"><img src="images/linkedin-icon.png" alt="LinkedIn"/></a>
            <a href="#"><img src="images/instagram-icon.png" alt="Instagram"/></a>
            <a href="#"><img src="images/twitter-icon.png" alt="Twitter"/></a>
        </nav>
    </footer>
    `
  }
}

customElements.define('custom-footer', CustomFooter);
