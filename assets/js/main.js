document.addEventListener('DOMContentLoaded', async () => {

    // HEADER yükle
const loadHeader = async () => {
        const headerElement = document.getElementById('main-header');
        if (headerElement) {
            try {
                const response = await fetch('../header.html');
                if (!response.ok) throw new Error('Header yüklenemedi: ' + response.status);
                headerElement.innerHTML = await response.text();
            } catch (error) {
                console.error('Header yüklenemedi:', error);
            }
        }
    };

    // FOOTER yükle
const loadFooter = async () => {
        const footerElement = document.getElementById('main-footer');
        if (footerElement) {
            try {
                const response = await fetch('../footer.html');
                if (!response.ok) throw new Error('Footer yüklenemedi: ' + response.status);
                footerElement.innerHTML = await response.text();
            } catch (error) {
                console.error('Footer yüklenemedi:', error);
            }
        }
    };

    // Header ve Footer’ı aynı anda yükle
    await Promise.all([loadHeader(), loadFooter()]);

    // Artık header yüklendi, dil butonlarını bulabiliriz
    const langTrButton = document.getElementById('lang-tr');
    const langEnButton = document.getElementById('lang-en');

    // --- ÇEVİRİLER ---
    const translations = {
        'en': {
            // Ana sayfa
            'home_welcome_title': "Engineering Legends, Designing Fun.",
            'home_welcome_subtitle': "At Lore and Role, we are architects of digital realms. From sprawling RPG universes that captivate the soul to delightful casual games that brighten your day, our passion is your next adventure.",
            'home_about_title': "About Us",
            'home_about_intro': "Lore and Role was born from a shared love for interactive storytelling and compelling gameplay. We are an independent studio dedicated to crafting high-quality games that resonate with players worldwide. Our expertise spans from deep, narrative-driven RPGs to polished and engaging casual titles.",
            'home_vision_title': "Our Vision",
            'home_vision_text': "To be a globally recognized studio that redefines interactive storytelling, creating games that are not just played, but lived and remembered for generations.",
            'home_mission_title': "Our Mission",
            'home_mission_text': "To merge deep, narrative-driven RPG experiences with the accessible joy of casual games. We commit to exceptional quality, player-focused design, and building vibrant communities around our worlds.",
            'home_principles_title': "Our Principles",
            'home_principles_list': `
                <li><strong>Story First:</strong> An unforgettable narrative is the heart of every great RPG.</li>
                <li><strong>Player-Centric:</strong> The player is our compass in every design decision.</li>
                <li><strong>Quality in Detail:</strong> True immersion comes from polished, seamless experiences.</li>
                <li><strong>Passionate Creation:</strong> We are gamers building games for gamers, fueled by passion.</li>
            `,
            'home_mobile_games': "Mobile Games",
            'home_pc_games': "PC Games",
            'home_console_games': "Console Games",
            'home_coming_soon_pc': "We are brewing something epic for PC players. Stay tuned!",
            'home_coming_soon_console': "New adventures are on the horizon. See you on console!",

            // Oyun sayfaları
            'features_title': "Key Features",
            'available_on': "Available On",

            'wacky_title': "Wacky Pieces: Swap Puzzle",
            'wacky_subtitle': "Puzzle Game!",
            'wacky_description': "Wacky Pieces: Swap Puzzle is the brilliantly simple, endlessly hilarious game you didn't know you needed.",
            'wacky_features_list': `<li><strong>One-Tap Gameplay:</strong> Deceptively simple, impossibly fun.</li>`,

            'stack_title': "Stack Rivals: Hotseat Physics",
            'stack_subtitle': "Puzzle Game!",
            'stack_description': "Stack Rivals: Hotseat Physics is the brilliantly simple, endlessly hilarious game you didn't know you needed.",
            'stack_features_list': `<li><strong>One-Tap Gameplay:</strong> Deceptively simple, impossibly fun.</li>`,

            'tile_title': "Tile Echoes",
            'tile_subtitle': "Puzzle Game!",
            'tile_description': "Tile Echoes is the brilliantly simple, endlessly hilarious game you didn't know you needed.",
            'tile_features_list': `<li><strong>One-Tap Gameplay:</strong> Deceptively simple, impossibly fun.</li>`,

            'bawk_title': "Bawk 'n' Laugh",
            'bawk_subtitle': "The Ultimate Chicken Scream Simulator!",
            'bawk_description': "Bawk 'n' Laugh is the brilliantly simple, endlessly hilarious game you didn't know you needed.",
            'bawk_features_list': `<li><strong>One-Tap Gameplay:</strong> Deceptively simple, impossibly fun.</li>`,

            'knotty_title': "Tangle Trails",
            'knotty_subtitle': "Puzzle Game!",
            'knotty_description': "Tangle Trails is a fun, simple and challenging puzzle adventure.",
            'knotty_features_list': `<li><strong>Simple Yet Addictive:</strong> Easy to play, hard to master!</li>`,

            'wow_title': "Warmasters",
            'wow_subtitle': "Your Legend Awaits.",
            'wow_description': "Step into a realm where forgotten myths awaken and shadows hunger for power.",
            'wow_features_list': `<li><strong>Explore:</strong> Discover vast lands full of secrets and legends.</li>`,

            // Footer
            'footer_support': "Support",
            'footer_rights': "All rights reserved."
        },
        'tr': {
            // Ana sayfa
            'home_welcome_title': "Efsaneler Yaratır, Eğlence Tasarlarız.",
            'home_welcome_subtitle': "Lore and Role'de bizler dijital dünyaların mimarlarıyız. Ruhu esir alan RPG evrenlerinden keyifli casual oyunlara kadar, bizim tutkumuz sizin maceranızdır.",
            'home_about_title': "Hakkımızda",
            'home_about_intro': "Lore and Role, interaktif hikaye anlatımına ve sürükleyici oynanışa duyulan ortak bir sevgiden doğdu. Bağımsız bir oyun stüdyosuyuz.",
            'home_vision_title': "Vizyonumuz",
            'home_vision_text': "Oyunların sadece oynanmadığı, yaşandığı dünyalar yaratmak.",
            'home_mission_title': "Misyonumuz",
            'home_mission_text': "Derin RPG deneyimlerini, casual oyunların keyfiyle birleştirmek.",
            'home_principles_title': "Prensiplerimiz",
            'home_principles_list': `
                <li><strong>Önce Hikaye:</strong> Her RPG'nin kalbinde unutulmaz bir anlatı vardır.</li>
                <li><strong>Oyuncu Odaklılık:</strong> Oyuncu, her tasarım kararında pusulamızdır.</li>
                <li><strong>Detaylarda Kalite:</strong> Gerçek sürükleyicilik, kusursuz deneyimlerden gelir.</li>
                <li><strong>Tutkuyla Yaratım:</strong> Biz, tutkuyla oyun yapan oyuncularız.</li>
            `,
            'home_mobile_games': "Mobil Oyunlar",
            'home_pc_games': "PC Oyunları",
            'home_console_games': "Konsol Oyunları",
            'home_coming_soon_pc': "PC oyuncuları için destansı bir şeyler hazırlıyoruz. Takipte kalın!",
            'home_coming_soon_console': "Yeni maceralar yakında. Konsolda görüşmek üzere!",

            // Oyun sayfaları
            'features_title': "Temel Özellikler",
            'available_on': "Platformlar",

            'wacky_title': "Wacky Pieces: Swap Puzzle",
            'wacky_subtitle': "Bulmaca Oyunu!",
            'wacky_description': "Wacky Pieces: Swap Puzzle, inanılmaz basit, eğlenceli ve rahatlatıcı bir oyundur.",
            'wacky_features_list': `<li><strong>Tek Dokunuşla Oynanış:</strong> Basit, eğlenceli, bağımlılık yapıcı!</li>`,

            'stack_title': "Stack Rivals: Hotseat Physics",
            'stack_subtitle': "Bulmaca Oyunu!",
            'stack_description': "Stack Rivals: Hotseat Physics, inanılmaz basit, eğlenceli ve rahatlatıcı bir oyundur.",
            'stack_features_list': `<li><strong>Tek Dokunuşla Oynanış:</strong> Basit, eğlenceli, bağımlılık yapıcı!</li>`,

            'tile_title': "Tile Echoes",
            'tile_subtitle': "Bulmaca Oyunu!",
            'tile_description': "Tile Echoes, inanılmaz basit, eğlenceli ve rahatlatıcı bir oyundur.",
            'tile_features_list': `<li><strong>Tek Dokunuşla Oynanış:</strong> Basit, eğlenceli, bağımlılık yapıcı!</li>`,

            'bawk_title': "Bawk 'n' Laugh",
            'bawk_subtitle': "Nihai Tavuk Çığlığı Simülatörü!",
            'bawk_description': "Bawk 'n' Laugh, inanılmaz basit ama kahkaha dolu bir oyundur.",
            'bawk_features_list': `<li><strong>Tek Dokunuşla Oynanış:</strong> Basit, eğlenceli, bağımlılık yapıcı!</li>`,

            'knotty_title': "Tangle Trails",
            'knotty_subtitle': "Bulmaca Oyunu!",
            'knotty_description': "Tangle Trails, eğlenceli ve rahatlatıcı bir bulmaca oyunudur.",
            'knotty_features_list': `<li><strong>Basit ama Zorlayıcı:</strong> Her düğüm yeni bir bulmaca!</li>`,

            'wow_title': "Warmasters",
            'wow_subtitle': "Efsanen Seni Bekliyor.",
            'wow_description': "Unutulmuş efsanelerin uyandığı bir diyara adım atın.",
            'wow_features_list': `<li><strong>Keşfet:</strong> Sırlar ve efsanelerle dolu geniş topraklar.</li>`,

            // Footer
            'footer_support': "Destek",
            'footer_rights': "Tüm hakları saklıdır."
        }
    };

    // --- DİL DEĞİŞTİRME ---
    const setLanguage = (lang) => {
        document.querySelectorAll('[data-translate-key]').forEach(element => {
            const key = element.getAttribute('data-translate-key');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });

        localStorage.setItem('language', lang);

        if (langTrButton && langEnButton) {
            if (lang === 'tr') {
                langTrButton.classList.add('active');
                langEnButton.classList.remove('active');
            } else {
                langEnButton.classList.add('active');
                langTrButton.classList.remove('active');
            }
        }
    };

    if (langTrButton && langEnButton) {
        langTrButton.addEventListener('click', () => setLanguage('tr'));
        langEnButton.addEventListener('click', () => setLanguage('en'));
    }

    const currentLang = localStorage.getItem('language') || 'en';
    setLanguage(currentLang);
});
