---
to: "/portfolio/mateuszwroblewski"
name: 'mateuszwroblewski.com'
description: 'Moja strona internetowa zawiera: informacje o mnie, posiadane umiejętności, projekty pokazujace moje doświadczenie, blog na którym piszę o frontend developmencie, formularz kontaktowy z walidacją. Strona dwujęzyczna.'
image: '/images/projects/mateuszwroblewski/project3.png'
linkGithub: 'https://github.com/mwroblewski95/mateuszwroblewski.com'
linkLive: 'https://www.mateuszwroblewski.com/pl'
date: '04/14/2021'
---

### Technologie oraz biblioteki:
- Next.js
- CSS modules
- next-i18next
- GSAP
- EmailJS
- Formik
- Yup
- react-markdown
- gray-matter
- react-syntax-highlighter
- react-scroll

### Kontrola wydajności, dostępności i optymalizacji stron internetowych pod kątem wyszukiwarek:

Wynik Google PageSpeed Insights na desktop oraz mobile:

![Wynik Google PageSpeed Insights na desktop](pageSpeedInsightsDesktop3.png)

![Wynik Google PageSpeed Insights na mobile](pageSpeedInsightsMobile3.png)

Wynik Lighthouse na Desktop oraz Mobile:

![Wynik Lighthouse na desktop](lighthouseDesktop3.png)

![Wynik Lighthouse na mobile](lighthouseMobile3.png)

### Opis projektu

Do napisania tego projektu wykorzystałem technologię Next.js.

Pierwszym powodem tego wyboru była chęć nauki tego frameworka, ponieważ w dużej części opiera się on na składni Reacta, którego już wcześniej zdąrzyłem poznać.

Drugim powodem były oferowane przez niego dodatkowe funkcjonalności umożliwiające łatwe tworzenie wydajnych stron internetowych, które są dobrze zoptymalizowane pod kątem SEO, a na tym zależało mi tworząc projekt.

Do stylowania strony użyłem CSS Modules.

Biblioteka next-i18next w szybki i prosty sposób pozwaliła mi stworzyć stronę dwójęzyczną.

W projekcie użyłem takżę biblitekę GSAP wraz z pluginem ScrollTrigger, by w zaledwie kilka liniejek kodu wykonać animacje występujące na stronie.

Płynną nawigację między sekcjami na stronie z efektem smooth scroll zapewniła paczka react-scroll.

Serwis EmailJS umożliwia wysyłanie wiadomości z formularza kontaktowego znajdującego się na stronie bezpośrednio na mojego maila tylko przy użycu kodu JavaScript po stronie klienta bez potrzeby pisania kodu po stronie serwera. Użytkownik także odrazu dostaje maila zwrotnego z informacją, że jego wiadomość poprawnie została dostarczona oraz z informacją w jakim czasie powinnien otrzymać odpowiedź.

Biblioteka Formik pozwoliła na szybkie zbudowanie formularza, którego walidacja została napisana w prosty sposób dzięki bibliotece Yup.

Posty na blogu oraz wpisy dotyczące projektów zostały stworzone za pomocą plików markdown, które następnie są konwertowane do kodu html na podstawie, którego później tworzona jest podstrona z danym wpisem. Wybrałem taką opcję, ponieważ szukałem sposobu tworzenia wpisów lokalnie bez konieczości podłączania i konfiguracji zewnętrznych serwisów typu Headless CMS. Poza tym był to dobry sposób na naukę oraz przećwiczenie składni.
Biblioteka react-markdown oraz gray-matter ułatwiły mi odczytanie konentu z plików markdown, a następnie zamiane ich na kod html przedstawiający dany post. Wpisy, które zawierają przykłady z fragmentami kodu Html, CSS oraz JavaScript są przy użyciu paczki react-syntax-highlighter konwertowane do postaci czytelnej z kolorowaniem składni, by ułatwić czytelność tego fragmentu kodu.