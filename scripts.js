const darkModeToggle = document.getElementById('darkModeToggle');
const footerDarkModeToggle = document.getElementById('footerDarkModeToggle');

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const icon = darkModeToggle.querySelector('i');
    const footerIcon = footerDarkModeToggle.querySelector('i');
    
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.replace('bi-moon-fill', 'bi-sun-fill');
        footerIcon.classList.replace('bi-moon-fill', 'bi-sun-fill');
        darkModeToggle.textContent = ' Modo Claro';
        footerDarkModeToggle.textContent = ' Modo Claro';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        icon.classList.replace('bi-sun-fill', 'bi-moon-fill');
        footerIcon.classList.replace('bi-sun-fill', 'bi-moon-fill');
        darkModeToggle.textContent = ' Modo Oscuro';
        footerDarkModeToggle.textContent = ' Modo Oscuro';
        localStorage.setItem('darkMode', 'disabled');
    }
}

darkModeToggle.addEventListener('click', toggleDarkMode);
footerDarkModeToggle.addEventListener('click', toggleDarkMode);

if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '<i class="bi bi-sun-fill"></i> Modo Claro';
    footerDarkModeToggle.innerHTML = '<i class="bi bi-sun-fill"></i> Modo Claro';
}

function showDetails(id) {
    const element = document.getElementById(id);
    element.classList.toggle('d-none');
    
    const button = event.target;
    if (element.classList.contains('d-none')) {
        button.textContent = 'Ver detalles completos';
    } else {
        button.textContent = 'Ocultar detalles';
    }
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    
    if (!email.includes('@') || !email.includes('.')) {
        alert('Por favor ingresa un email válido');
    } else {
        const modal = new bootstrap.Modal(document.getElementById('successModal'));
        modal.show();
        this.reset();
    }
});

document.querySelectorAll('.copiar-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const formula = this.parentElement.querySelector('code').textContent;
        navigator.clipboard.writeText(formula).then(() => {
            const originalHTML = this.innerHTML;
            this.innerHTML = '<i class="bi bi-check2"></i> Copiado!';
            this.classList.add('btn-success');
            
            setTimeout(() => {
                this.innerHTML = originalHTML;
            }, 2000);
        }).catch(err => {
            console.error('Error al copiar: ', err);
            alert('No se pudo copiar la fórmula');
        });
    });
});

const helpBtn = document.getElementById('helpBtn');
new bootstrap.Tooltip(helpBtn);
helpBtn.addEventListener('click', function() {
    window.location.href = "contacto.html";
});

setTimeout(() => {
    if (!sessionStorage.getItem('alertShown')) {
        const alerta = document.createElement('div');
        alerta.className = 'alert alert-info alert-dismissible fade show position-fixed bottom-0 start-0 m-3';
        alerta.style.maxWidth = '350px';
        alerta.style.zIndex = '1100';
        alerta.innerHTML = `
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            <strong><i class="bi bi-question-circle-fill me-2"></i>¿Necesitas ayuda?</strong> 
            <p class="mb-0 mt-2">Visita nuestra sección de contacto o haz clic en el botón de ayuda.</p>
        `;
        document.body.appendChild(alerta);
        
        setTimeout(() => {
            bootstrap.Alert.getOrCreateInstance(alerta).close();
        }, 15000);
        
        sessionStorage.setItem('alertShown', 'true');
    }
}, 10000);

document.querySelectorAll('.hover-effect').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});