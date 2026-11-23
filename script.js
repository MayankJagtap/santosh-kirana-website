
/* =====================================
   SANTOSH KIRANA STORE
   Modern JavaScript
===================================== */

// 1. ELEMENTS

const body = document.body;
const themeBtn = document.getElementById("themeBtn");
const langBtn = document.getElementById("langBtn");
const themeText = document.getElementById("themeText");
const themeIcon = document.getElementById("themeIcon");
const langText = document.getElementById("langText");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");


// 2. TRANSLATION DATA

const translations = {

    en: {
        brandSub: "KIRANA STORE & ATTA CHAKKI",
        navHome: "Home",
        navAbout: "About Us",
        navServices: "Services",
        navContact: "Contact",

        heroTag: "YOUR TRUSTED LOCAL STORE",
        heroTitle: "Everyday Needs.<br><span>One Trusted Place.</span>",
        heroDesc: "Your neighborhood destination for everyday grocery needs and traditional flour milling services.",
        discover: "Discover Our Store",
        contactUs: "Contact Us",
        heroNote: "A local store built on trust and relationships.",
        heroBottom: "KIRANA STORE · ATTA CHAKKI · KHATEGAON",
        scroll: "SCROLL TO EXPLORE ↓",

        value1: "Trust",
        value1Desc: "A relationship that matters",
        value2: "Convenience",
        value2Desc: "Your nearby store",
        value3: "Care",
        value3Desc: "Customers come first",
        value4: "Local Connection",
        value4Desc: "Part of your community",

        aboutTag: "ABOUT OUR STORE",
        aboutTitle: "More than a store.<br><em>A part of your everyday life.</em>",
        aboutPara1: "Welcome to Santosh Kirana Store & Atta Chakki, your neighborhood destination in Khategaon.",
        aboutPara2: "We believe in serving our customers with care, convenience and a friendly shopping experience. Our aim is to be a trusted part of your everyday life.",
        point1: "Customer-first service",
        point2: "Everyday grocery convenience",
        point3: "Traditional atta chakki service",
        knowMore: "Get in touch with us",

        serviceTag: "WHAT WE OFFER",
        serviceTitle: "Simple Services.<br><em>Everyday Convenience.</em>",
        serviceDesc: "Serving your everyday needs with care.",
        service1: "Kirana Store",
        service1Desc: "Your nearby destination for everyday household and grocery shopping needs.",
        service2: "Atta Chakki",
        service2Desc: "Traditional flour milling service for your everyday needs.",
        service3: "Customer Care",
        service3Desc: "Friendly assistance and a welcoming experience for every customer.",

        whyTag: "WHY SANTOSH KIRANA?",
        whyTitle: "Your neighborhood.<br><em>Your trusted store.</em>",
        whyDesc: "We value the relationships we build with our customers and the community we serve.",
        why1: "Customer Satisfaction",
        why1Desc: "Your needs and satisfaction matter to us.",
        why2: "Local Convenience",
        why2Desc: "A familiar store close to your neighborhood.",
        why3: "Friendly Service",
        why3Desc: "We believe in treating every customer with care.",

        contactTag: "GET IN TOUCH",
        contactTitle: "Let's stay <em>connected.</em>",
        contactDesc: "Visit our store or send us a message.",
        addressLabel: "OUR ADDRESS",
        address: "Ward No. 4, Ajnas Road, Khategaon, Madhya Pradesh",
        businessLabel: "OUR BUSINESS",
        businessName: "Santosh Kirana Store & Atta Chakki",
        timingLabel: "OPENING HOURS",
        timing: "Please contact us for store timings.",
        directions: "Open Location in Google Maps",

        formTitle: "Send an Enquiry",
        formDesc: "We would be happy to hear from you.",
        nameLabel: "Your Name",
        namePlaceholder: "Enter your name",
        phoneLabel: "Phone Number",
        phonePlaceholder: "Enter mobile number",
        messageLabel: "Your Message",
        messagePlaceholder: "Write your message...",
        sendBtn: "Send Enquiry",
        formNote: "Your enquiry will open in WhatsApp.",

        mapTag: "FIND OUR STORE",
        mapTitle: "Visit <em>Santosh Kirana.</em>",
        mapAddress: "Ward No. 4, Ajnas Road, Khategaon, Madhya Pradesh.",
        getDirections: "Get Directions",

        footerDesc: "Your trusted neighborhood store in Khategaon. Serving everyday needs with care.",
        quickLinks: "QUICK LINKS",
        visitUs: "VISIT US",
        mapLink: "View Google Maps ↗",
        footerRights: "All Rights Reserved.",

        invalidPhone: "Please enter a valid 10-digit mobile number.",
        missingWhatsApp: "Shop WhatsApp number has not been configured yet. Please contact the shop directly.",
        nameRequired: "Please enter your name.",
        messageRequired: "Please enter your message."
    },

    hi: {
        brandSub: "किराना स्टोर एवं आटा चक्की",
        navHome: "होम",
        navAbout: "हमारे बारे में",
        navServices: "हमारी सेवाएं",
        navContact: "संपर्क करें",

        heroTag: "आपकी अपनी भरोसेमंद दुकान",
        heroTitle: "हर दिन की जरूरतें।<br><span>एक भरोसेमंद जगह।</span>",
        heroDesc: "आपकी रोजमर्रा की किराना जरूरतों और पारंपरिक आटा पिसाई सेवा के लिए आपकी अपनी स्थानीय दुकान।",
        discover: "हमारी दुकान जानें",
        contactUs: "संपर्क करें",
        heroNote: "भरोसे और अच्छे संबंधों से बनी आपकी अपनी दुकान।",
        heroBottom: "किराना स्टोर · आटा चक्की · खातेगांव",
        scroll: "आगे देखने के लिए नीचे जाएं ↓",

        value1: "भरोसा",
        value1Desc: "भरोसे का रिश्ता",
        value2: "सुविधा",
        value2Desc: "आपके नजदीक अपनी दुकान",
        value3: "अपनापन",
        value3Desc: "ग्राहक हमारी प्राथमिकता",
        value4: "स्थानीय पहचान",
        value4Desc: "आपके अपने क्षेत्र का हिस्सा",

        aboutTag: "हमारी दुकान के बारे में",
        aboutTitle: "सिर्फ एक दुकान नहीं।<br><em>आपके रोजमर्रा के जीवन का हिस्सा।</em>",
        aboutPara1: "संतोष किराना स्टोर एवं आटा चक्की में आपका स्वागत है। खातेगांव में आपकी अपनी स्थानीय दुकान।",
        aboutPara2: "हम अपने ग्राहकों को अच्छी सेवा, सुविधा और अपनापन देने में विश्वास रखते हैं। हमारा उद्देश्य आपके रोजमर्रा के जीवन का एक भरोसेमंद हिस्सा बनना है।",
        point1: "ग्राहकों को प्राथमिकता",
        point2: "रोजमर्रा की किराना खरीदारी की सुविधा",
        point3: "पारंपरिक आटा चक्की सेवा",
        knowMore: "हमसे संपर्क करें",

        serviceTag: "हमारी सेवाएं",
        serviceTitle: "सरल सेवाएं।<br><em>रोजमर्रा की सुविधा।</em>",
        serviceDesc: "आपकी रोजमर्रा की जरूरतों के लिए समर्पित सेवा।",
        service1: "किराना स्टोर",
        service1Desc: "आपकी रोजमर्रा की घरेलू और किराना जरूरतों के लिए आपकी नजदीकी दुकान।",
        service2: "आटा चक्की",
        service2Desc: "आपकी रोजमर्रा की जरूरतों के लिए पारंपरिक आटा पिसाई सेवा।",
        service3: "ग्राहक सेवा",
        service3Desc: "हर ग्राहक के लिए सहयोगपूर्ण व्यवहार और अपनापन।",

        whyTag: "संतोष किराना ही क्यों?",
        whyTitle: "आपका मोहल्ला।<br><em>आपकी भरोसेमंद दुकान।</em>",
        whyDesc: "हम अपने ग्राहकों और अपने क्षेत्र के लोगों के साथ बने रिश्तों को महत्व देते हैं।",
        why1: "ग्राहक संतुष्टि",
        why1Desc: "आपकी जरूरतें और संतुष्टि हमारे लिए महत्वपूर्ण हैं।",
        why2: "आसानी से उपलब्ध",
        why2Desc: "आपके अपने क्षेत्र में आपकी नजदीकी दुकान।",
        why3: "अपनापन और सेवा",
        why3Desc: "हम हर ग्राहक के साथ अच्छे व्यवहार में विश्वास रखते हैं।",

        contactTag: "हमसे संपर्क करें",
        contactTitle: "आइए <em>जुड़े रहें।</em>",
        contactDesc: "हमारी दुकान पर आएं या हमें संदेश भेजें।",
        addressLabel: "हमारा पता",
        address: "वार्ड नंबर 4, अजनेस रोड, खातेगांव, मध्य प्रदेश",
        businessLabel: "हमारा व्यवसाय",
        businessName: "संतोष किराना स्टोर एवं आटा चक्की",
        timingLabel: "दुकान खुलने का समय",
        timing: "दुकान के समय की जानकारी के लिए संपर्क करें।",
        directions: "गूगल मैप पर लोकेशन देखें",

        formTitle: "अपना संदेश भेजें",
        formDesc: "हमें आपसे जुड़कर खुशी होगी।",
        nameLabel: "आपका नाम",
        namePlaceholder: "अपना नाम लिखें",
        phoneLabel: "मोबाइल नंबर",
        phonePlaceholder: "10 अंकों का मोबाइल नंबर लिखें",
        messageLabel: "आपका संदेश",
        messagePlaceholder: "अपना संदेश लिखें...",
        sendBtn: "संदेश भेजें",
        formNote: "आपका संदेश व्हाट्सएप पर खुलेगा।",

        mapTag: "हमारी दुकान तक पहुंचें",
        mapTitle: "<em>संतोष किराना</em> आएं।",
        mapAddress: "वार्ड नंबर 4, अजनेस रोड, खातेगांव, मध्य प्रदेश।",
        getDirections: "रास्ता देखें",

        footerDesc: "खातेगांव में आपकी अपनी भरोसेमंद दुकान। आपकी रोजमर्रा की जरूरतों के लिए समर्पित।",
        quickLinks: "महत्वपूर्ण लिंक",
        visitUs: "हमसे मिलें",
        mapLink: "गूगल मैप पर देखें ↗",
        footerRights: "सर्वाधिकार सुरक्षित।",

        invalidPhone: "कृपया सही 10 अंकों का मोबाइल नंबर लिखें।",
        missingWhatsApp: "दुकान का व्हाट्सएप नंबर अभी सेट नहीं किया गया है। कृपया सीधे दुकान से संपर्क करें।",
        nameRequired: "कृपया अपना नाम लिखें।",
        messageRequired: "कृपया अपना संदेश लिखें।"
    }
};


// 3. LANGUAGE MANAGEMENT

let currentLanguage =
    localStorage.getItem("santosh-language") || "en";

function changeLanguage(language) {

    currentLanguage = language;

    localStorage.setItem("santosh-language", language);

    document.documentElement.lang =
        language === "hi" ? "hi" : "en";

    body.classList.toggle("hindi", language === "hi");

    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.dataset.i18n;

        if (translations[language][key]) {
            element.innerHTML = translations[language][key];
        }

    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {

        const key = element.dataset.i18nPlaceholder;

        element.placeholder = translations[language][key];

    });

    langText.textContent =
        language === "en" ? "हिन्दी" : "English";

}

langBtn.addEventListener("click", () => {

    changeLanguage(currentLanguage === "en" ? "hi" : "en");

});

changeLanguage(currentLanguage);


// 4. DARK / LIGHT THEME

let currentTheme =
    localStorage.getItem("santosh-theme") || "light";

function changeTheme(theme) {

    currentTheme = theme;

    body.classList.toggle("dark-mode", theme === "dark");

    localStorage.setItem("santosh-theme", theme);

    themeIcon.textContent =
        theme === "dark" ? "☀" : "☾";

    themeText.textContent =
        theme === "dark"
            ? (currentLanguage === "hi" ? "लाइट" : "Light")
            : (currentLanguage === "hi" ? "डार्क" : "Dark");

}

themeBtn.addEventListener("click", () => {

    changeTheme(currentTheme === "light" ? "dark" : "light");

});

changeLanguage(currentLanguage);
changeTheme(currentTheme);


// 5. MOBILE NAVIGATION

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("open");

    menuBtn.textContent =
        navLinks.classList.contains("open") ? "✕" : "☰";

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuBtn.textContent = "☰";

    });

});


// 6. SCROLL PROGRESS AND HEADER

const header = document.getElementById("header");

const progress = document.getElementById("progress");

let scrollPending = false;

function updateScroll() {

    const scrollTop = window.scrollY;

    const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const percentage = scrollHeight > 0
        ? (scrollTop / scrollHeight) * 100
        : 0;

    progress.style.width = `${percentage}%`;

    header.classList.toggle("scrolled", scrollTop > 30);

    scrollPending = false;

}

window.addEventListener("scroll", () => {

    if (!scrollPending) {

        requestAnimationFrame(updateScroll);

        scrollPending = true;

    }

}, { passive: true });

updateScroll();


// 7. SCROLL REVEAL

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});

revealElements.forEach(element => {

    revealObserver.observe(element);

});


// 8. CONTACT FORM - WHATSAPP

const contactForm = document.getElementById("contactForm");

// IMPORTANT: Add the shop's real WhatsApp number here.
// Format: 91 followed by the 10-digit number.

const shopWhatsAppNumber = "919174401435";

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const message = document.getElementById("message").value.trim();

    const t = translations[currentLanguage];

    if (!name) {
        alert(t.nameRequired);
        return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        alert(t.invalidPhone);
        return;
    }

    if (!message) {
        alert(t.messageRequired);
        return;
    }

    if (!/^[0-9]{12}$/.test(shopWhatsAppNumber)) {
        alert(t.missingWhatsApp);
        return;
    }

    const whatsappMessage = `
Hello Santosh Kirana Store & Atta Chakki!

Name: ${name}
Phone: ${phone}
Message: ${message}
    `;

    const whatsappURL =
        `https://wa.me/${shopWhatsAppNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");

});


// 9. COPYRIGHT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();

