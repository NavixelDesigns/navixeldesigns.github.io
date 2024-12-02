// Content for English (en)
const contentEn = {

    header: `
       <div class="logo">
        <a href="/en/index.html"><img src="/logo.png" alt="Navixel Logo"></a>
    </div>
    <button class="menu-toggle" onclick="toggleMenu()">&#9776;</button>
    <nav id="nav-menu">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
         
    </nav>
    `,
    footer: `
        <div class="footer-content">
        <!-- Brief About Navixel in English -->
        <p>
            Navixel Designs: Delivering innovative solutions in branding, websites, and creative designs to help businesses achieve their vision.
        </p>
        <!-- Navigation Links -->
        <div class="footer-links">
            <a href="/en/index.html">Home</a> | 
            <a href="/en/about.html">About Us</a> | 
            <a href="/en/services.html">Services</a> | 
            <a href="/en/contact.html">Contact Us</a>
        </div>
        <!-- Social Media Icons -->
        <div class="social-links">
            <a href="https://x.com/NavixelDesigns/" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="https://www.linkedin.com/company/navixel/" target="_blank"><i class="fab fa-linkedin"></i></a>
            <a href="https://instagram.com/navixeldesigns/" target="_blank"><i class="fab fa-instagram"></i></a>
        </div>
        <!-- Copyright -->
        <p>&copy; 2024 Navixel Designs. All Rights Reserved.</p>
    </div>
    `
};

// Content for Arabic (ar)
const contentAr = {
    head: `
         <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Meta Tags for SEO in Arabic -->
        <meta name="description" content="تصاميم نافكسل: حلول تصميم حديثة ومبتكرة لتحويل أفكارك إلى تجارب رقمية مذهلة.">
        <meta name="keywords" content="تصميم جرافيكي، تصميم مواقع، تصميم واجهات المستخدم، تصميم شعارات، هوية العلامة التجارية، حلول تصميم حديثة">
        <meta name="author" content="تصاميم نافكسل">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
        <!-- Site Icon -->
        <link rel="icon" href="/logo.png" type="image/x-icon">
        <link rel="apple-touch-icon" href="/logo.png">
        <link rel="icon" sizes="192x192" href="/logo.png">
        <meta name="msapplication-TileImage" content="https://navixeldesigns.github.io/ar/assets/banner-ar.png">
        <meta name="msapplication-TileColor" content="#ffffff">
    
        <!-- Open Graph Meta Tags in Arabic -->
        <meta property="og:title" content="تصاميم نافكسل: حلول تصميم حديثة">
        <meta property="og:description" content="تقدم نافيكسل تصاميم حديثة ومبتكرة، تشمل تصميم الشعارات، هوية العلامة التجارية، وخدمات تصميم واجهات المستخدم/UI.">
        <meta property="og:url" content="https://navixeldesigns.github.io/">
        <meta property="og:image" content="https://navixeldesigns.github.io/ar/assets/banner-ar.png">
        <meta property="og:image:alt" content="شعار تصاميم نافكسل أو صورة تمثيلية للتصميم">
        <meta property="og:type" content="website">
        <meta property="og:locale" content="ar_AR">
    
        <!-- Twitter Card Meta Tags in Arabic -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:site" content="@NavixelDesigns">
        <meta name="twitter:title" content="تصاميم نافكسل: حلول تصميم حديثة">
        <meta name="twitter:description" content="حوّل أفكارك إلى تجارب رقمية مذهلة مع تصاميم نافكسل. نقدم تصميم الشعارات، العلامة التجارية، والمزيد.">
        <meta name="twitter:image" content="https://navixeldesigns.github.io/ar/assets/banner-ar.png">
        <meta name="twitter:image:alt" content="شعار تصاميم نافكسل أو صورة تمثيلية للتصميم">
    `,
    header: `
        <div class="logo">
        <a href="/ar/index.html"><img src="/logo.png" alt="شعار نافكسل"></a>
    </div>
    <button class="menu-toggle" onclick="toggleMenu()">&#9776;</button>
    <nav id="nav-menu">
        <a href="#about">حول</a>
        <a href="#services">الخدمات</a>
        <a href="#portfolio">محفظة الأعمال</a>
        <a href="#contact">اتصل بنا</a>
    </nav>
    `,
    footer: `
        <div class="footer-content">
            <!-- Brief About Navixel in Arabic -->
            <p>
                Navixel Designs: نقدم حلولًا مبتكرة في تصميم العلامات التجارية، المواقع، والتصاميم الإبداعية لدعم الشركات في تحقيق رؤيتها.
            </p>
            <!-- Navigation Links -->
            <div class="footer-links">
                <a href="/ar/index.html">الصفحة الرئيسية</a> | 
                <a href="/ar/about.html">من نحن</a> | 
                <a href="/ar/services.html">الخدمات</a> | 
                <a href="/ar/contact.html">اتصل بنا</a>
            </div>
            <!-- Social Media Icons -->
            <div class="social-links">
                <a href="https://x.com/NavixelDesigns/" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
                <a href="https://www.linkedin.com/company/navixel/" target="_blank"><i class="fab fa-linkedin"></i></a>
                <a href="https://instagram.com/navixeldesigns/" target="_blank"><i class="fab fa-instagram"></i></a>
            </div>
            <!-- Copyright -->
            <p>&copy; 2024 Navixel Designs. جميع الحقوق محفوظة.</p>
        </div>
    `
};

// Function to load content dynamically based on language
function loadContent(language) {
    const content = language === 'ar' ? contentAr : contentEn; // Choose content based on language

    // Inject head content
    document.head.innerHTML += content.head;

    // Inject header content
    document.querySelector("header").innerHTML = content.header;

    // Inject footer content
    document.querySelector("footer").innerHTML = content.footer;
    const bodyElement = document.querySelector("body");
}

// Detect language from HTML lang attribute and load content
document.addEventListener("DOMContentLoaded", () => {
    const lang = document.documentElement.lang; // Get lang attribute from <html>
    loadContent(lang);
});
