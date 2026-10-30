document.addEventListener("DOMContentLoaded", () => {
    const saudacao = document.getElementById("saudacao");
    const hora = new Date().getHours();

    if (saudacao) {
        if (hora >= 5 && hora < 12) {
            saudacao.textContent = "Bom dia!";
        } else if (hora >= 12 && hora < 18) {
            saudacao.textContent = "Boa tarde!";
        } else {
            saudacao.textContent = "Boa noite!";
        }
    }

    const anoAtual = document.getElementById("ano-atual");
    if (anoAtual) {
        anoAtual.textContent = new Date().getFullYear();
    }

    const avatar = document.getElementById("avatar-pedro");
    const avatarFoto = avatar?.querySelector(".avatar-photo");
    if (avatar && avatarFoto) {
        const mostrarFoto = () => avatar.classList.add("has-photo");
        avatarFoto.addEventListener("load", mostrarFoto);
        if (avatarFoto.complete && avatarFoto.naturalWidth > 0) {
            mostrarFoto();
        }
    }

    const menuBtn = document.getElementById("menu-btn");
    const navMenu = document.getElementById("nav-menu");

    if (menuBtn && navMenu) {
        menuBtn.addEventListener("click", () => {
            const menuAberto = navMenu.classList.toggle("active");
            menuBtn.setAttribute("aria-expanded", String(menuAberto));
            menuBtn.setAttribute("aria-label", menuAberto ? "Fechar menu" : "Abrir menu");
        });

        navMenu.querySelectorAll(".nav-link").forEach((link) => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
                menuBtn.setAttribute("aria-expanded", "false");
                menuBtn.setAttribute("aria-label", "Abrir menu");
            });
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && navMenu.classList.contains("active")) {
            navMenu.classList.remove("active");
                menuBtn.setAttribute("aria-expanded", "false");
                menuBtn.setAttribute("aria-label", "Abrir menu");
                menuBtn.focus();
            }
        });
    }

    const themeToggleBtn = document.getElementById("theme-toggle");
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            const temaEscuro = document.documentElement.getAttribute("data-theme") !== "dark";
            if (temaEscuro) {
                document.documentElement.setAttribute("data-theme", "dark");
            } else {
                document.documentElement.removeAttribute("data-theme");
            }

            themeToggleBtn.textContent = temaEscuro ? "☀" : "☾";
            themeToggleBtn.setAttribute("aria-pressed", String(temaEscuro));
            themeToggleBtn.setAttribute("aria-label", temaEscuro ? "Ativar tema claro" : "Ativar tema noturno");
        });
    }
});