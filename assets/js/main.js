document.addEventListener('DOMContentLoaded', async () => {

    const loadHeader = async () => {
        const headerElement = document.getElementById('main-header');
        if (headerElement) {
            try {
                const response = await fetch('_header.html');
                headerElement.innerHTML = await response.text();
            } catch (error) {
                console.error('Header could not be loaded:', error);
            }
        }
    };

    // 1. Dinamik olarak footer'ı yükleyen fonksiyon
    const loadFooter = async () => {
        const footerElement = document.getElementById('main-footer');
        if (footerElement) {
            try {
                // _footer.html dosyasının içeriğini fetch ile al
                const response = await fetch('_footer.html');
                const footerHTML = await response.text();
                // Alınan HTML'i footer elementinin içine yerleştir
                footerElement.innerHTML = footerHTML;
            } catch (error) {
                console.error('Footer could not be loaded:', error);
            }
        }
    };

    // 2. Önce footer'ı yükle
    // Önce hem header'ın hem de footer'ın yüklenmesini bekle.
    // Promise.all ikisinin aynı anda yüklenmesini sağlar, bu daha verimlidir.
    await Promise.all([
        loadHeader(),
        loadFooter()
    ]);

    // 3. Çevirileri tanımla (bu kısım aynı)
    const translations = {
    'en': {
        // Ana Sayfa - GÜNCELLENDİ
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
        'home_games_title': "Our Games",
        'home_mobile_games': "Mobile Games",
        'home_pc_games': "PC Games",
        'home_console_games': "Console Games",
        'home_coming_soon_pc': "We are brewing something epic for PC players. Stay tuned!",
        'home_coming_soon_console': "New adventures are on the horizon. See you on console!",

        // Oyun Sayfaları
        'features_title': "Key Features",
        'available_on': "Available On",
        
        'bawk_title': "Bawk 'n' Laugh",
        'bawk_subtitle': "The Ultimate Chicken Scream Simulator!",
        'bawk_description': "Bawk 'n' Laugh is the brilliantly simple, endlessly hilarious game you didn't know you needed. The mission? Tap the chicken. The result? A symphony of absurd and comedic squawks that will have you in stitches. It's the perfect way to relieve stress and share a laugh with friends!",
        'bawk_features_list': `<li><strong>One-Tap Gameplay:</strong> Deceptively simple, impossibly fun. Just tap the screen and let the chaos begin!</li><li><strong>Hilarious Sound Effects:</strong> A huge library of custom, side-splitting chicken screams awaits. You'll never hear the same Bawk! twice.</li><li><strong>Pure, Unfiltered Fun:</strong> No complex mechanics, no high scores to stress about. Just pure, unadulterated chicken-tapping joy.</li>`,

        'knotty_title': "Knotty Critters",
        'knotty_subtitle': "Puzzle Game!",
        'knotty_description': "Knotty Critters is the brilliantly simple, endlessly hilarious game you didn't know you needed. It's the perfect way to relieve stress and share a laugh with friends!",
        'knotty_features_list': `<li><strong>One-Tap Gameplay:</strong> Deceptively simple, impossibly fun. Just tap the screen and let the chaos begin!</li><li><strong>Hilarious Sound Effects:</strong> A huge library of custom, side-splitting chicken screams awaits. twice.</li><li><strong>Pure, Unfiltered Fun:</strong> No complex mechanics, no high scores to stress about. Just pure, unadulterated joy.</li>`,
                
        'wow_title': "World of Warmasters",
        'wow_subtitle': "Your Legend Awaits.",
        'wow_description': "Step into a realm where forgotten myths awaken and shadows hunger for power. World of Warmasters is a classic RPG forged in the spirit of the genre's greatest legends. Embark on a perilous journey across a war-torn continent, forge alliances, and confront the ancient evil that threatens to consume everything.",
        'wow_features_list': `<li><strong>Explore a Boundless World:</strong> Traverse vast, hand-crafted landscapes filled with hidden dungeons, bustling cities, and dark secrets.</li><li><strong>Master Tactical Combat:</strong> Engage in thrilling, real-time combat that rewards strategy, skill, and mastery of your unique abilities.</li><li><strong>Forge Your Champion:</strong> Customize your character with distinct classes, powerful skill trees, and legendary gear found in the farthest corners of the world.</li><li><strong>Unravel an Epic Saga:</strong> Experience a deep, immersive narrative with memorable characters, difficult choices, and world-altering consequences.</li>`,

        // Footer
        'footer_support': "Support",
        'footer_rights': "All rights reserved.",
    },
    'tr': {
        // Ana Sayfa - GÜNCELLENDİ
        'home_welcome_title': "Efsaneler Yaratır, Eğlence Tasarlarız.",
        'home_welcome_subtitle': "Lore and Role'de bizler dijital dünyaların mimarlarıyız. Ruhu esir alan devasa RPG evrenlerinden, gününüzü aydınlatan keyifli casual oyunlara kadar, bizim tutkumuz sizin bir sonraki maceranızdır.",
        'home_about_title': "Hakkımızda",
        'home_about_intro': "Lore and Role, interaktif hikaye anlatımına ve sürükleyici oynanışa duyulan ortak bir sevgiden doğdu. Dünya çapındaki oyuncularla rezonans kuran yüksek kaliteli oyunlar yaratmaya adanmış bağımsız bir stüdyoyuz. Uzmanlığımız, derin, anlatı odaklı RPG'lerden şık ve ilgi çekici casual oyunlara kadar uzanmaktadır.",
        'home_vision_title': "Vizyonumuz",
        'home_vision_text': "Sadece oynanan değil, aynı zamanda içinde yaşanılan ve nesiller boyu hatırlanan oyunlar yaratarak interaktif hikaye anlatımını yeniden tanımlayan, dünya çapında tanınan bir stüdyo olmak.",
        'home_mission_title': "Misyonumuz",
        'home_mission_text': "Derin, anlatı odaklı RPG deneyimlerini, casual oyunların erişilebilir keyfiyle birleştirmek. Olağanüstü kaliteye, oyuncu odaklı tasarıma ve dünyalarımızın etrafında canlı topluluklar oluşturmaya kararlıyız.",
        'home_principles_title': "Prensiplerimiz",
        'home_principles_list': `
            <li><strong>Önce Hikaye:</strong> Unutulmaz bir anlatı, her harika RPG'nin kalbidir.</li>
            <li><strong>Oyuncu Odaklılık:</strong> Her tasarım kararımızda pusulamız oyuncudur.</li>
            <li><strong>Detaylarda Kalite:</strong> Gerçek sürükleyicilik, kusursuz ve özenle hazırlanmış deneyimlerden gelir.</li>
            <li><strong>Tutkuyla Yaratım:</strong> Biz, tutkuyla beslenen ve oyuncular için oyunlar yapan oyuncularız.</li>
        `,
        'home_games_title': "Oyunlarımız",
        'home_mobile_games': "Mobil Oyunlar",
        'home_pc_games': "PC Oyunları",
        'home_console_games': "Konsol Oyunları",
        'home_coming_soon_pc': "PC oyuncuları için destansı bir şeyler hazırlıyoruz. Takipte kalın!",
        'home_coming_soon_console': "Ufukta yeni maceralar var. Konsolda görüşmek üzere!",
        
        // oyun sayfaları
        'features_title': "Temel Özellikler",
        'available_on': "Platformlar",

        'bawk_title': "Bawk 'n' Laugh",
        'bawk_subtitle': "Nihai Tavuk Çığlığı Simülatörü!",
        'bawk_description': "Bawk 'n' Laugh, ihtiyacınız olduğunu bilmediğiniz o inanılmaz basit ve kahkaha dolu bir oyundur. Göreviniz mi? Sadece tavuğa dokunun. Sonuç? Sizi kahkahalara boğacak absürt ve komik bir gıdaklama senfonisi. Stres atmak ve arkadaşlarla gülmek için mükemmel bir yol!",
        'bawk_features_list': `<li><strong>Tek Dokunuşla Oynanış:</strong> Aldatıcı derecede basit, inanılmaz eğlenceli. Sadece ekrana dokunun ve kaos başlasın!</li><li><strong>Komik Ses Efektleri:</strong> Özel olarak hazırlanmış, kahkaha krizine sokacak dev bir tavuk çığlığı arşivi sizi bekliyor. Asla aynı 'Gıdak!' sesini iki kez duymayacaksınız.</li><li><strong>Saf ve Filtresiz Eğlence:</strong> Karmaşık mekanikler yok, strese sokacak yüksek skorlar yok. Sadece saf, katıksız tavuk-dokunma keyfi.</li>`,

        'knotty_title': "Knotty Critters",
        'knotty_subtitle': "Puzzle Game!",
        'knotty_description': "Knotty Critters, ihtiyacınız olduğunu bilmediğiniz o inanılmaz basit ve kahkaha dolu bir oyundur. Sizi kahkahalara boğacak absürt ve komik bir gıdaklama senfonisi. Stres atmak ve arkadaşlarla gülmek için mükemmel bir yol!",
        'knotty_features_list': `<li><strong>Tek Dokunuşla Oynanış:</strong> Aldatıcı derecede basit, inanılmaz eğlenceli. Sadece ekrana dokunun ve kaos başlasın!</li><li><strong>Komik Ses Efektleri:</strong> Özel olarak hazırlanmış, kahkaha krizine sokacak dev bir tavuk çığlığı arşivi sizi bekliyor. Asla aynı 'Gıdak!' sesini iki kez duymayacaksınız.</li><li><strong>Saf ve Filtresiz Eğlence:</strong> Karmaşık mekanikler yok, strese sokacak yüksek skorlar yok. Sadece saf, katıksız tavuk-dokunma keyfi.</li>`,
                
        'wow_title': "World of Warmasters",
        'wow_subtitle': "Efsanen Seni Bekliyor.",
        'wow_description': "Unutulmuş efsanelerin uyandığı ve gölgelerin güce aç olduğu bir diyara adım atın. World of Warmasters, türünün en büyük efsanelerinin ruhuyla dövülmüş klasik bir RPG'dir. Savaşla parçalanmış bir kıtada tehlikeli bir yolculuğa çıkın, ittifaklar kurun ve her şeyi tüketmekle tehdit eden kadim kötülükle yüzleşin.",
        'wow_features_list': `<li><strong>Sınırsız Bir Dünyayı Keşfedin:</strong> Gizli zindanlar, hareketli şehirler ve karanlık sırlarla dolu, elle hazırlanmış geniş manzaraları dolaşın.</li><li><strong>Taktiksel Dövüşte Ustalaşın:</strong> Stratejiyi, beceriyi ve benzersiz yeteneklerinizdeki ustalığı ödüllendiren heyecan verici, gerçek zamanlı savaşlara katılın.</li><li><strong>Şampiyonunuzu Yaratın:</strong> Karakterinizi farklı sınıflar, güçlü yetenek ağaçları ve dünyanın en uzak köşelerinde bulunan efsanevi ekipmanlarla özelleştirin.</li><li><strong>Destansı Bir Efsaneyi Ortaya Çıkarın:</strong> Unutulmaz karakterler, zorlu seçimler ve dünyayı değiştiren sonuçlarla dolu derin, sürükleyici bir anlatıyı deneyimleyin.</li>`,
        
        // footer
        'footer_support': "Destek",
        'footer_rights': "Tüm hakları saklıdır.",
    }
    };

    // 4. Dil değiştirme fonksiyonları (Bu kısım da aynı, ama artık dinamik yüklenen footer'dan sonra çalışıyor)
    const langTrButton = document.getElementById('lang-tr');
    const langEnButton = document.getElementById('lang-en');

    const setLanguage = (lang) => {
        document.querySelectorAll('[data-translate-key]').forEach(element => {
            const key = element.getAttribute('data-translate-key');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });

        localStorage.setItem('language', lang);

        if (lang === 'tr') {
            langTrButton.classList.add('active');
            langEnButton.classList.remove('active');
        } else {
            langEnButton.classList.add('active');
            langTrButton.classList.remove('active');
        }
    };

    langTrButton.addEventListener('click', () => setLanguage('tr'));
    langEnButton.addEventListener('click', () => setLanguage('en'));

    const currentLang = localStorage.getItem('language') || 'en';
    
    // Önemli: Dil fonksiyonu, footer'daki çevrilecek metinler DOM'a eklendikten sonra çalıştırılır.
    setLanguage(currentLang);
});
