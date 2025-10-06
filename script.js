// Données des produits organisées par catégories
const productsData = {
    lissante: {
        title: "Gamme Lissante - Phospholipides & Glycine de Soja",
        description: "Formules innovantes pour des cheveux lisses et brillants, enrichies en phospholipides et glycine de soja pour une protection optimale.",
        products: [
            { name: "Shampooing Lissant", price: 28.50, image: "p1 shp.png", description: "Nettoyage doux et lissant" },
            { name: "Masque Lissant", price: 32.00, image: "p2 shp.png", description: "Soin intensif lissant" },
            { name: "Sérum Lissant", price: 35.00, image: "p3 shp.png", description: "Protection et brillance" },
            { name: "Spray Lissant", price: 25.50, image: "p4 shp.png", description: "Lissage instantané" }
        ]
    },
    curly: {
        title: "Gamme Curly - Protéines de Maïs",
        description: "Spécialement conçue pour les cheveux bouclés et frisés, avec des protéines de maïs pour définir et nourrir les boucles.",
        products: [
            { name: "Shampooing Curly", price: 28.50, image: "p1 shp.png", description: "Définition des boucles" },
            { name: "Masque Curly", price: 32.00, image: "p2 shp.png", description: "Nourrissement intensif" },
            { name: "Gel Curly", price: 30.00, image: "p3 shp.png", description: "Fixation des boucles" },
            { name: "Crème Curly", price: 29.50, image: "p4 shp.png", description: "Hydratation longue durée" }
        ]
    },
    nourrissante: {
        title: "Gamme Nourrissante",
        description: "Formules riches en actifs nourrissants pour redonner vitalité et douceur aux cheveux secs et abîmés.",
        products: [
            { name: "Shampooing Nourrissant", price: 26.50, image: "p1 shp.png", description: "Nourrissement en profondeur" },
            { name: "Masque Nourrissant", price: 34.00, image: "p2 shp.png", description: "Soin réparateur intensif" },
            { name: "Huile Nourrissante", price: 38.00, image: "p3 shp.png", description: "Nutrition et brillance" },
            { name: "Sérum Nourrissant", price: 36.50, image: "p4 shp.png", description: "Protection quotidienne" }
        ]
    },
    purifiante: {
        title: "Gamme Purifiante - Blue Seakale & Kimarine",
        description: "Formules purifiantes avec blue seakale et kimarine pour éliminer les impuretés et revitaliser le cuir chevelu.",
        products: [
            { name: "Shampooing Purifiant", price: 27.50, image: "p1 shp.png", description: "Purification en douceur" },
            { name: "Masque Purifiant", price: 31.00, image: "p2 shp.png", description: "Détoxification profonde" },
            { name: "Gel Douche Purifiant", price: 24.50, image: "p3 shp.png", description: "Nettoyage corporel" },
            { name: "Sérum Purifiant", price: 33.00, image: "p4 shp.png", description: "Équilibre du cuir chevelu" }
        ]
    },
    repulpe: {
        title: "Gamme HA Repulpe",
        description: "Technologie HA (Acide Hyaluronique) pour repulper et redensifier les cheveux fins et clairsemés.",
        products: [
            { name: "Shampooing Repulpe", price: 29.50, image: "p1 shp.png", description: "Action repulpante" },
            { name: "Masque Repulpe", price: 35.00, image: "p2 shp.png", description: "Densification intensive" },
            { name: "Sérum Repulpe", price: 40.00, image: "p3 shp.png", description: "Concentration HA" },
            { name: "Spray Repulpe", price: 26.00, image: "p4 shp.png", description: "Volume instantané" }
        ]
    },
    protecteur: {
        title: "Protecteur de Couleurs",
        description: "Formules spécialement développées pour préserver l'éclat et la durée de vie des colorations.",
        products: [
            { name: "Shampooing Protecteur", price: 30.50, image: "p1 shp.png", description: "Protection des couleurs" },
            { name: "Masque Protecteur", price: 36.00, image: "p2 shp.png", description: "Soin color-safe" },
            { name: "Sérum Protecteur", price: 42.00, image: "p3 shp.png", description: "Barrière UV" },
            { name: "Spray Protecteur", price: 28.50, image: "p4 shp.png", description: "Protection thermique" }
        ]
    },
    cremes: {
        title: "Les Crèmes",
        description: "Collection de crèmes hydratantes et nourrissantes pour tous types de cheveux.",
        products: [
            { name: "Crème Hydratante", price: 25.00, image: "p1 shp.png", description: "Hydratation quotidienne" },
            { name: "Crème Nourrissante", price: 28.00, image: "p2 shp.png", description: "Nutrition profonde" },
            { name: "Crème Lissante", price: 30.00, image: "p3 shp.png", description: "Lissage naturel" },
            { name: "Crème Volume", price: 27.50, image: "p4 shp.png", description: "Volume et texture" }
        ]
    },
    serum: {
        title: "Sérum",
        description: "Sérums concentrés pour des soins ciblés et des résultats visibles immédiatement.",
        products: [
            { name: "Sérum Anti-Frisottis", price: 35.00, image: "p1 shp.png", description: "Contrôle des frisottis" },
            { name: "Sérum Brillance", price: 38.00, image: "p2 shp.png", description: "Éclat et lumière" },
            { name: "Sérum Réparateur", price: 42.00, image: "p3 shp.png", description: "Réparation intensive" },
            { name: "Sérum Volume", price: 36.00, image: "p4 shp.png", description: "Volume et densité" }
        ]
    },
    huile: {
        title: "Huile",
        description: "Huiles précieuses pour nourrir, protéger et sublimer la beauté naturelle des cheveux.",
        products: [
            { name: "Huile d'Argan", price: 45.00, image: "p1 shp.png", description: "Nourrissement intense" },
            { name: "Huile de Jojoba", price: 42.00, image: "p2 shp.png", description: "Équilibre naturel" },
            { name: "Huile de Coco", price: 40.00, image: "p3 shp.png", description: "Protection et douceur" },
            { name: "Huile de Ricin", price: 38.00, image: "p4 shp.png", description: "Fortification" }
        ]
    },
    homme: {
        title: "Gamme Homme",
        description: "Soins spécialement formulés pour les besoins spécifiques des cheveux masculins.",
        products: [
            { name: "Shampooing Homme", price: 24.50, image: "p1 shp.png", description: "Nettoyage énergisant" },
            { name: "Gel Coiffant Homme", price: 22.00, image: "p2 shp.png", description: "Tenue longue durée" },
            { name: "Sérum Homme", price: 28.00, image: "p3 shp.png", description: "Soin quotidien" },
            { name: "Spray Homme", price: 20.50, image: "p4 shp.png", description: "Volume et texture" }
        ]
    },
    shampooing: {
        title: "Shampooing et Gel Douche",
        description: "Produits de nettoyage doux et efficaces pour le corps et les cheveux.",
        products: [
            { name: "Shampooing Doux", price: 22.00, image: "p1 shp.png", description: "Nettoyage quotidien" },
            { name: "Gel Douche Hydratant", price: 20.00, image: "p2 shp.png", description: "Hydratation corporelle" },
            { name: "Shampooing Volume", price: 24.00, image: "p3 shp.png", description: "Volume et densité" },
            { name: "Gel Douche Purifiant", price: 21.50, image: "p4 shp.png", description: "Purification" }
        ]
    },
    masque: {
        title: "Masque",
        description: "Masques de soin intensifs pour des résultats visibles et durables.",
        products: [
            { name: "Masque Hydratant", price: 32.00, image: "p1 shp.png", description: "Hydratation intensive" },
            { name: "Masque Nourrissant", price: 35.00, image: "p2 shp.png", description: "Nutrition profonde" },
            { name: "Masque Réparateur", price: 38.00, image: "p3 shp.png", description: "Réparation intensive" },
            { name: "Masque Brillance", price: 34.00, image: "p4 shp.png", description: "Éclat et lumière" }
        ]
    },
    barbe: {
        title: "Sérum Barbe & Huile à Barbe",
        description: "Soins spécialisés pour entretenir et sublimer la barbe masculine.",
        products: [
            { name: "Huile à Barbe", price: 28.00, image: "p1 shp.png", description: "Nourrissement barbe" },
            { name: "Sérum Barbe", price: 32.00, image: "p2 shp.png", description: "Soin quotidien" },
            { name: "Baume à Barbe", price: 26.00, image: "p3 shp.png", description: "Coiffage et fixation" },
            { name: "Shampooing Barbe", price: 24.00, image: "p4 shp.png", description: "Nettoyage barbe" }
        ]
    },
    cires: {
        title: "Les Cires",
        description: "Cires de coiffage naturelles pour des looks personnalisés et durables.",
        products: [
            { name: "Cire Modélante", price: 18.00, image: "p1 shp.png", description: "Coiffage flexible" },
            { name: "Cire Fixante", price: 20.00, image: "p2 shp.png", description: "Tenue longue durée" },
            { name: "Cire Matifiante", price: 19.50, image: "p3 shp.png", description: "Effet naturel" },
            { name: "Cire Brillante", price: 21.00, image: "p4 shp.png", description: "Éclat et brillance" }
        ]
    },
    coffrets: {
        title: "Coffrets",
        description: "Ensembles soigneusement sélectionnés pour une routine de soins complète et harmonieuse.",
        products: [
            { name: "Coffret Lissant Complet", price: 95.00, image: "p1 shp.png", description: "Shampooing + Masque + Sérum + Spray" },
            { name: "Coffret Curly Essentiel", price: 89.50, image: "p2 shp.png", description: "Shampooing + Masque + Gel + Crème" },
            { name: "Coffret Nourrissant Intensif", price: 108.00, image: "p3 shp.png", description: "Shampooing + Masque + Huile + Sérum" },
            { name: "Coffret Homme Premium", price: 75.00, image: "p4 shp.png", description: "Shampooing + Gel + Sérum + Spray" },
            { name: "Coffret Protecteur Couleurs", price: 118.50, image: "p1 shp.png", description: "Shampooing + Masque + Sérum + Spray" },
            { name: "Coffret Repulpe Densité", price: 125.00, image: "p2 shp.png", description: "Shampooing + Masque + Sérum + Spray" }
        ]
    }
};

// Fonction pour générer les produits avec filtrage
function generateProducts(filter = 'all') {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    Object.keys(productsData).forEach(categoryKey => {
        if (filter === 'all' || filter === categoryKey) {
            const category = productsData[categoryKey];
            
            const categorySection = document.createElement('div');
            categorySection.className = 'product-category';
            categorySection.dataset.category = categoryKey;
            
            categorySection.innerHTML = `
                <h3 class="category-title">${category.title}</h3>
                <p class="category-description">${category.description}</p>
                <div class="products-grid">
                    ${category.products.map(product => `
                        <div class="product-card">
                            <img src="${product.image}" alt="${product.name}" class="product-image">
                            <div class="product-info">
                                <h4 class="product-title">${product.name}</h4>
                                <p class="product-description">${product.description}</p>
                                <p class="product-price">${product.price.toFixed(2)} €</p>
                                <button class="add-to-cart-btn" onclick="addToCart('${product.name}', ${product.price}, '${product.image}')">
                                    Ajouter au panier
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
            
            productsGrid.appendChild(categorySection);
            
            // Animation d'apparition
            setTimeout(() => {
                categorySection.classList.add('show');
            }, 100);
        }
    });
}

// Fonction pour filtrer les produits
function filterProducts(filter) {
    // Mettre à jour les boutons de filtre
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Masquer toutes les catégories avec animation
    document.querySelectorAll('.product-category').forEach(category => {
        category.classList.add('hide');
    });
    
    // Régénérer les produits après l'animation
    setTimeout(() => {
        generateProducts(filter);
    }, 300);
}

// Initialisation des filtres
function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const filter = e.target.dataset.filter;
            filterProducts(filter);
        });
    });
}

// Panier
let cart = [];

// Éléments DOM
const productsGrid = document.getElementById('productsGrid');
const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');

// Ajouter au panier
function addToCart(productName, productPrice, productImage) {
    const existingItem = cart.find(item => item.name === productName);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: productName,
            price: productPrice,
            image: productImage,
            quantity: 1
        });
    }
    
    updateCartDisplay();
    showNotification('Produit ajouté au panier !');
}

// Supprimer du panier
function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    updateCartDisplay();
    showNotification('Produit retiré du panier');
}

// Mettre à jour la quantité
function updateQuantity(productName, change) {
    const item = cart.find(item => item.name === productName);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productName);
        } else {
            updateCartDisplay();
        }
    }
}

// Mettre à jour l'affichage du panier
function updateCartDisplay() {
    // Mettre à jour le compteur
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) cartCount.textContent = totalItems;
    
    // Mettre à jour l'apparence du bouton panier
    if (cartBtn) {
        if (totalItems > 0) {
            cartBtn.classList.add('has-items');
        } else {
            cartBtn.classList.remove('has-items');
        }
    }
    
    // Mettre à jour les éléments du panier
    if (cartItems) {
        cartItems.innerHTML = '';
        
        if (cart.length === 0) {
            cartItems.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">Votre panier est vide</p>';
            if (cartTotal) cartTotal.textContent = '0.00 €';
            return;
        }
        
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">${item.price.toFixed(2)} €</div>
                </div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity('${item.name}', -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity('${item.name}', 1)">+</button>
                </div>
                <button class="remove-btn" onclick="removeFromCart('${item.name}')">Supprimer</button>
            `;
            cartItems.appendChild(cartItem);
        });
        
        // Calculer le total
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        if (cartTotal) cartTotal.textContent = total.toFixed(2) + ' €';
    }
}

// Afficher/masquer le panier
function toggleCart() {
    if (cartModal) {
        if (cartModal.style.display === 'flex') {
            cartModal.style.display = 'none';
        } else {
            cartModal.style.display = 'flex';
        }
    }
}

// Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #27ae60;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        z-index: 3000;
        font-weight: 600;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        notification.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}

// Commander
function checkout() {
    if (cart.length === 0) {
        showNotification('Votre panier est vide !');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Commande confirmée !\nTotal: ${total.toFixed(2)} €\n\nMerci pour votre achat !`);
    
    // Vider le panier
    cart = [];
    updateCartDisplay();
    toggleCart();
}

// Navigation fluide
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Gestionnaire d'événements
document.addEventListener('DOMContentLoaded', function() {
    // Afficher les produits seulement sur la page produits
    const productsGrid = document.getElementById('productsGrid');
    if (productsGrid) {
        generateProducts('all'); // Afficher toutes les catégories par défaut
        initializeFilters();
    }
    
    // Événements du panier (seulement si les éléments existent)
    if (cartBtn) cartBtn.addEventListener('click', toggleCart);
    if (closeCart) closeCart.addEventListener('click', toggleCart);
    if (checkoutBtn) checkoutBtn.addEventListener('click', checkout);
    
    // Fermer le panier en cliquant à l'extérieur
    if (cartModal) {
        cartModal.addEventListener('click', function(e) {
            if (e.target === cartModal) {
                toggleCart();
            }
        });
    }
    
    // Effet de scroll sur la navbar
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    if (header) {
        console.log('Header trouvé:', header);
        
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollDelta = scrollTop - lastScrollTop;
            
            console.log('Scroll:', scrollTop, 'Delta:', scrollDelta);
            
            // Retirer la navbar quand on scroll vers le bas (delta positif)
            if (scrollDelta > 5 && scrollTop > 100) {
                header.style.transform = 'translateY(-100%)';
                header.style.opacity = '0';
                header.style.visibility = 'hidden';
                console.log('Navbar cachée - Scroll vers le bas');
            }
            // Faire réapparaître la navbar seulement quand on est tout en haut de la page
            else if (scrollTop <= 50) {
                header.style.transform = 'translateY(0)';
                header.style.opacity = '1';
                header.style.visibility = 'visible';
                console.log('Navbar visible - En haut de la page');
            }
            
            // Ajouter la classe scrolled pour le style
            if (scrollTop > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            lastScrollTop = scrollTop;
        });
    } else {
        console.log('Header non trouvé');
    }
    
    // Navigation fluide
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            smoothScroll(this.getAttribute('href'));
        });
    });
    
    // Gestion du formulaire de contact
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showNotification('Message envoyé ! Nous vous répondrons bientôt.');
            this.reset();
        });
    }
    
    // Animation au scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observer les éléments pour l'animation
    document.querySelectorAll('.product-card, .about-content, .contact-content').forEach(el => {
        // Exclure la navbar des animations
        if (!el.closest('.header') && !el.closest('.nav')) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        }
    });
    
    // Gestion du menu mobile
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const icon = this.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });
        
        // Fermer le menu mobile quand on clique sur un lien
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.className = 'fas fa-bars';
            });
        });
    }
}); 