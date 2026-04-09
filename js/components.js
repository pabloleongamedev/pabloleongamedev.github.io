// js/components.js

class PortfolioNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <nav class="navbar">
            <div class="nav-container">
                <a href="#home" class="nav-logo">Pablo León</a>

                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul class="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#work">Projects</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>`;

        const hamburger = this.querySelector('.hamburger');
        const navLinks = this.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            navLinks.classList.toggle('active');
        });
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
            hamburger.classList.remove('open');
            navLinks.classList.remove('active');
        });
    });
        
    }
}

class PortfolioHero extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="hero" id="home">
            <div class="hero-container">
                <p class="user-name">Junior Unity Developer</p>
                <h1 class="main-title">Gameplay Developer</h1>
                <div class="title-underline"></div>
                <p class="hero-bio">
                    Prototype Gameplay Developer especializado en la creación de experiencias jugables en entornos 3D. 
                    Disfruto especialmente desarrollar controladores de personaje, sistemas de combate, cámaras, 
                    lógica de interacción y estructuras modulares orientadas a la escalabilidad.
                </p>
                
                <div class="hero-socials">
                    <a href="https://linkedin.com/in/pablo-leon-diaz-game-developer" target="_blank" class="hero-social-link">
                        <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/pabloleongamedev" target="_blank" class="hero-social-link">
                        <i class="fa-brands fa-github"></i>
                    </a>
                    <a href="Discord: pleond83" target="_blank" class="hero-social-link">
                        <i class="fa-brands fa-discord"></i>
                    </a>
                </div>

                <div class="video-placeholder">
                    <img src="assets/img/wild-farm.jpg" alt="Demo Reel Preview">
                    <div class="play-overlay">
                        <i class="fas fa-play"></i>
                    </div>
                </div>
                <p class="video-caption">Demo Reel</p>
            </div>
        </header>`;
    }
}

class PortfolioStats extends HTMLElement {
    connectedCallback() {}
}

class ProjectItem extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute('title');
        const img = this.getAttribute('img');
        const tags = this.getAttribute('tags').split(',');
        const description = this.getAttribute('description');
        const repo = this.getAttribute('repo') || "#";
        const preview = this.getAttribute('preview') || "#";
        const demo = this.getAttribute('demo') || "#";

        this.innerHTML = `
        <article class="project-item">
            <div class="project-image-wrapper">
                <img src="${img}" alt="${title}">
            </div>
            <div class="project-info-aligned">
                <h3 class="project-title-large">${title}</h3>
                <div class="tech-tags">
                    ${tags.map(tag => {
                        const tagTrimmed = tag.trim();
                        const tagClass = tagTrimmed.toLowerCase().split(' ')[0];
                        let icon = 'fa-code';
                        if(tagClass.includes('unity')) icon = 'fa-brands fa-unity';
                        if(tagClass.includes('c#')) icon = 'fa-solid fa-code';
                        if(tagClass.includes('git')) icon = 'fa-brands fa-git-alt';
                        return `<span class="tag tag-${tagClass}"><i class="${icon}"></i> ${tagTrimmed}</span>`;
                    }).join('')}
                </div>
                <p class="project-full-desc">${description}</p>
                <div class="project-actions">
                    <a href="${repo}" class="btn-action" target="_blank"><i class="fa-brands fa-github"></i> Source Code</a>
                    <a href="${preview}" class="btn-action" target="_blank"><i class="fa-brands fa-youtube"></i> Watch Preview</a>
                    <a href="${demo}" class="btn-action" target="_blank"><i class="fa-solid fa-up-right-from-square"></i> Play Demo</a>
                </div>
            </div>
        </article>`;
    }
}

class PortfolioAbout extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="about" id="about">
            <div class="container">
                <h2 class="section-label">02 / About Me</h2>
                <div class="about-grid">
                    <div class="about-title-wrapper">
                        <h3 class="focus-text">
                            ¿Quién está detrás<br> <span class="text-highlight"> del Código?</span>.
                        </h3>
                    </div>
                    <div class="about-text">
                        <p class="main-bio">
                            Hola! yo soy Pablo Leon, Desarrollador de videojuegos enfocado en la creación de experiencias jugables 3D 
                            mediante la implementación de prototipos y sistemas jugables. Disfruto especialmente desarrollar 
                            controladores de personaje, sistemas de combate, cámaras, lógica de interacción y estructuras 
                            modulares orientadas a la escalabilidad.<br><br>

                            Mi viaje en el desarrollo de videojuegos comenzó hace varios años, impulsado por mi pasión por los juegos 
                            y la tecnología. Desde entonces, he dedicado tiempo a aprender y perfeccionar mis habilidades en 
                            programación, especialmente en el ámbito del desarrollo de juegos.
                        </p>
                        <div class="btn-cv-container">
                            <a href="assets/cv/PabloLeon_CV.pdf" class="btn-action" target="_blank">
                                <i class="fa-solid fa-download"></i> Curriculum Vitae
                            </a>
                        </div>
                    </div>
                    <div class="skills-wrapper">
                        <ul class="skills-list">
                            <li><i class="fa-brands fa-unity icon-unity"></i> Unity 6 / C#</li>
                            <li><i class="fa-solid fa-diagram-project icon-oop"></i> OOP | POO</li>
                            <li><i class="fa-solid fa-cube icon-solid"></i> SOLID Principles</li>
                            <li><i class="fa-solid fa-layer-group icon-pooling"></i> Object Pooling</li>
                            <li><i class="fa-solid fa-swatchbook icon-patterns"></i> Design Patterns</li>
                            <li><i class="fa-solid fa-vr-cardboard icon-ui"></i> UI Toolkit & 3D</li>
                            <li><i class="fa-solid fa-gauge-high icon-perf"></i> Performance Optimization</li>
                            <li><i class="fa-solid fa-bug icon-debug"></i> Debugging & Profiling</li>
                            <li><i class="fa-solid fa-bullseye icon-detail"></i> Attention to Detail</li>
                            <li><i class="fa-solid fa-hands-helping icon-team"></i> Teamwork</li>
                            <li><i class="fa-solid fa-code-branch icon-git"></i> Version Control</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>`;
    }
}

class PortfolioContact extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="contact" id="contact">
            <div class="container">
                <h2 class="section-label">03 / Contact</h2>
                <div class="email-box">
                    <h2>¿Tienes un projecto en mente?</h2><br>
                    <p>Estoy disponible para colaborar en nuevos proyectos.</p><br>
                    <a href="mailto:jomkoistudio@gmail.com" class="email-link"><strong>jomkoistudio@gmail.com</strong></a>
                </div>
                <div class="social-buttons">
                    <a href="https://pleond.itch.io/" target = "blank" class="social-btn itch">
                        <i class="fa-brands fa-itch-io"></i><span>My itch.io profile</span>
                    </a>
                    <a href="https://x.com/realpleon" target = "blank" class="social-btn twitter">
                        <i class="fa-brands fa-x-twitter"></i><span>My Twitter</span>
                    </a>
                    <a href="https://github.com/pabloleongamedev" target = "blank" class="social-btn github">
                        <i class="fa-brands fa-github"></i><span>My Github</span>
                    </a>
                </div>
            </div>
        </section>`;
    }
}

// NUEVO COMPONENTE: FONDO DE GUERRA ESPACIAL AVANZADO
class PixelWarBackground extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<canvas id="pixelCanvas" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; pointer-events: none;"></canvas>`;
        this.initCanvas();
    }

    initCanvas() {
        const canvas = this.querySelector('#pixelCanvas');
        const ctx = canvas.getContext('2d');
        let stars = [];
        let enemies = [];
        let bullets = [];
        let explosions = [];
        let mouseX = window.innerWidth / 2;
        let lastTime = 0;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
        });
        resize();

        const colorNeoBlue = '#00d2ff';
        const colorDeepSpace = '#010103';

        for(let i=0; i<180; i++) {
            stars.push({ 
                x: Math.random()*canvas.width, 
                y: Math.random()*canvas.height, 
                s: 0.2 + Math.random()*1.5,
                r: 0.5 + Math.random()*1.2,
                a: 0.5 + Math.random()*0.5
            });
        }

        function drawShip(ctx, x, y, width, height, color, isPlayer = false) {
            ctx.save();
            ctx.shadowBlur = 15;
            ctx.shadowColor = color;
            ctx.fillStyle = color;
            ctx.beginPath();
            
            if (isPlayer) {
                ctx.moveTo(x, y - height/2);
                ctx.lineTo(x + width/2, y + height/2);
                ctx.lineTo(x, y + height/3);
                ctx.lineTo(x - width/2, y + height/2);
            } else {
                ctx.moveTo(x - width/2, y - height/2);
                ctx.lineTo(x + width/2, y - height/2);
                ctx.lineTo(x, y + height/2);
            }
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }

        function createExplosion(x, y, color) {
            for(let i=0; i<15; i++) {
                explosions.push({
                    x: x,
                    y: y,
                    vx: (Math.random()-0.5) * 6,
                    vy: (Math.random()-0.5) * 6,
                    r: 1 + Math.random()*3,
                    life: 30 + Math.random()*20,
                    color: color
                });
            }
        }

        function animate(currentTime) {
            const deltaTime = currentTime - lastTime;
            lastTime = currentTime;

            ctx.fillStyle = colorDeepSpace;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            stars.forEach(s => {
                s.y += s.s * (deltaTime/16);
                if(s.y > canvas.height) s.y = -10;
                
                const alpha = s.a + Math.sin(currentTime * 0.005 + s.x) * 0.2;
                ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.1, Math.min(1, alpha))})`;
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
                ctx.fill();
            });

            if (Math.random() > 0.93) {
                bullets.push({ x: mouseX, y: canvas.height - 70, speed: 12 });
            }

            ctx.save();
            ctx.shadowBlur = 20;
            ctx.shadowColor = colorNeoBlue;
            ctx.fillStyle = colorNeoBlue;
            bullets.forEach((b, i) => {
                b.y -= b.speed * (deltaTime/16);
                ctx.fillRect(b.x - 1.5, b.y, 3, 20);
                if(b.y < -30) bullets.splice(i, 1);
            });
            ctx.restore();

            if (Math.random() > 0.975) {
                enemies.push({ 
                    x: Math.random()*canvas.width, 
                    y: -40, 
                    w: 25,
                    h: 35,
                    speed: 2 + Math.random()*2.5 
                });
            }

            enemies.forEach((e, i) => {
                e.y += e.speed * (deltaTime/16);
                drawShip(ctx, e.x, e.y, e.w, e.h, colorNeoBlue);

                bullets.forEach((b, bi) => {
                    if (Math.abs(b.x - e.x) < e.w/1.5 && Math.abs(b.y - e.y) < e.h/1.5) {
                        createExplosion(e.x, e.y, colorNeoBlue);
                        enemies.splice(i, 1);
                        bullets.splice(bi, 1);
                    }
                });

                if(e.y > canvas.height + 40) enemies.splice(i, 1);
            });

            explosions.forEach((p, i) => {
                p.x += p.vx;
                p.y += p.vy;
                p.life -= 1;
                p.r *= 0.96;

                ctx.fillStyle = p.color;
                ctx.globalAlpha = p.life / 50;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
                ctx.fill();
                ctx.globalAlpha = 1;

                if(p.life <= 0 || p.r < 0.1) explosions.splice(i, 1);
            });

            const playerW = 35;
            const playerH = 45;
            const playerY = canvas.height - 60;
            
            ctx.save();
            ctx.shadowBlur = 25;
            ctx.shadowColor = colorNeoBlue;
            ctx.fillStyle = `rgba(0, 210, 255, ${0.4 + Math.sin(currentTime*0.02)*0.2})`;
            ctx.beginPath();
            ctx.moveTo(mouseX - playerW/4, playerY + playerH/3);
            ctx.lineTo(mouseX + playerW/4, playerY + playerH/3);
            ctx.lineTo(mouseX, playerY + playerH/1.5);
            ctx.closePath();
            ctx.fill();
            ctx.restore();

            drawShip(ctx, mouseX, playerY, playerW, playerH, colorNeoBlue, true);

            requestAnimationFrame(animate);
        }

        animate(0);
    }
}

customElements.define('portfolio-navbar', PortfolioNavbar);
customElements.define('portfolio-hero', PortfolioHero);
customElements.define('portfolio-stats', PortfolioStats);
customElements.define('project-item', ProjectItem);
customElements.define('portfolio-about', PortfolioAbout);
customElements.define('portfolio-contact', PortfolioContact);
customElements.define('pixel-war-background', PixelWarBackground);