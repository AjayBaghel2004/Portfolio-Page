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
            <a href="#">About</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
        </nav>
        <!-- Navigation end -->
    </header>
    `
  }
}

customElements.define('custom-header', CustomHeader);
