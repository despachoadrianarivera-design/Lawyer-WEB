class HeaderComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="header">
            <div class="top-bar">
                <div class="container">
                    <div class="contact-info">
                        <span><i class="fa-solid fa-envelope"></i> <a href="mailto:adrianariverahe12@icloud.com">adrianariverahe12@icloud.com</a></span>
                        <span><i class="fa-regular fa-clock"></i> L-V: 9:00 - 14:00</span>
                        <span><i class="fa-solid fa-phone"></i> <a href="tel:+526691684098">(669) 168 4098</a></span>
                    </div>
                    <div class="social-links">
                        <a href="https://www.facebook.com/share/14hxS9ZGhko/?mibextid=wwXIfr" target="_blank" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/asesoriaprontayexpedita?igsh=MXY5M2RscTYyaWZ1Zw%3D%3D&utm_source=qr" target="_blank" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <nav class="navbar">
                <div class="container nav-container">
                    <a href="index.html" class="logo" aria-label="Inicio">
                        <img src="assets/logo.jpg" alt="Adriana Rivera Logo" class="img-logo">
                    </a>
                    <ul class="nav-menu">
                        <li><a href="index.html#inicio" class="nav-link">Inicio</a></li>
                        <li><a href="index.html#sobre-mi" class="nav-link">Sobre Mí</a></li>
                        <li><a href="index.html#servicios" class="nav-link">Servicios</a></li>
                        <li><a href="index.html#blog" class="nav-link">Blog</a></li>
                        <li><a href="index.html#contacto" class="nav-link btn-contacto">Contacto</a></li>
                    </ul>
                    <button class="hamburger" aria-label="Menu principal">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </button>
                </div>
            </nav>
        </header>
        `;
    }
}

class FooterComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer id="contacto" class="footer">
            <div class="container footer-grid">
                <div class="footer-info">
                    <h3>Adriana <span>Rivera</span></h3>
                    <p>Brindamos soluciones integrales con un alto estándar ético. Nuestra experiencia respalda nuestra trayectoria defendiendo los intereses de cada cliente.</p>
                    <div class="social-links footer-socials">
                        <a href="https://www.facebook.com/share/14hxS9ZGhko/?mibextid=wwXIfr" target="_blank" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/asesoriaprontayexpedita?igsh=MXY5M2RscTYyaWZ1Zw%3D%3D&utm_source=qr" target="_blank" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                </div>

                <div class="footer-contact">
                    <h4>Oficina Central</h4>
                    <ul>
                        <li>
                            <i class="fa-solid fa-location-dot"></i>
                            <span>Calle Ramón López Alvarado #200<br>Local 1-A, Fracc. Tellería,<br>Mazatlán, Sinaloa, México.</span>
                        </li>
                        <li>
                            <i class="fa-solid fa-phone"></i>
                            <span><a href="tel:+526691684098">Tel. (669) 168 4098</a></span>
                        </li>
                        <li>
                            <i class="fa-solid fa-envelope"></i>
                            <span><a href="mailto:adrianariverahe12@icloud.com">adrianariverahe12@icloud.com</a></span>
                        </li>
                        <li>
                            <i class="fa-regular fa-clock"></i>
                            <span>L-V: 9:00 - 14:00</span>
                        </li>
                    </ul>
                </div>

                <div class="footer-map">
                    <h4>Ubicación</h4>
                    <div class="map-placeholder">
                        <iframe
                            src="https://maps.google.com/maps?q=Ram%C3%B3n%20L%C3%B3pez%20Alvarado%20200%2C%20Mazatl%C3%A1n%2C%20Sinaloa&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade" title="Mapa de ubicación"></iframe>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="container flex-between">
                    <p>Adriana Rivera | Asesoría Legal | Todos los derechos reservados &copy; 2024</p>
                    <p><a href="aviso-de-privacidad.html">Aviso de privacidad</a> | Diseño Web</p>
                </div>
            </div>
            
            <a href="https://wa.me/5216691684098" target="_blank" class="floating-whatsapp" aria-label="Contactar por WhatsApp">
                <i class="fa-brands fa-whatsapp"></i>
            </a>
        </footer>
        `;
    }
}

customElements.define('app-header', HeaderComponent);
customElements.define('app-footer', FooterComponent);
