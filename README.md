Weather-App
Creați o pagină HTML, în care să includeți elemente de JavaScript și CSS (fișiere separate), care să implementeze funcționalitățile necesare unei aplicații de tip prognoză meteo, folosind tehnica AJAX.

Funcționalități
Vremea Acum
Creați un div pentru funcționalitatea "vremea acum", care să afișeze următoarele informații:

Descriere
Umiditate
Presiune
Temperatura curentă
Minima zilei
Maxima zilei
Prognoza meteo
Afișați și o imagine care reprezintă o ilustrație grafică a descrierii din câmpul de mai sus.

Funcționalitate Opțională
Inserarea unei hărți a orașului folosind Google Maps. (Căutați cum se utilizează API-ul de Google Maps)

Prognoza Meteo
Creați un div pentru funcționalitatea "afișează prognoza", care să afișeze următoarele informații:

Ora
Temperatura
Descrierea vremii
Afișați prognoza meteo pentru următoarele 6 zile. Pentru fiecare zi, prognoza va fi afișată din 3 în 3 ore.

Pentru fiecare prognoză afișată, afișați și o imagine care reprezintă interpretarea prognozei pentru fiecare interval orar.

API-uri
Pentru a prelua datele necesare pentru fiecare oraș în parte, puteți folosi URL-urile de mai jos:

Vremea Curentă

javascript
Copiază codul
var URL_CURRENT_WEATHER = "https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";
Prognoza Meteo

javascript
Copiază codul
var URL_FORECAST_WEATHER = "https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";
Prefix Iconiță Meteo

javascript
Copiază codul
var URL_WEATHER_ICON_PREFIX = "http://openweathermap.org/img/w/"; // sufix .png
Pentru a putea folosi cu succes URL-urile pentru API-ul de weather, adăugați la sfârșitul fiecărui URL numele orașului pentru care doriți să interogați serverul.

Exemple
Cerințele de mai sus sunt reprezentate în gif-ul de mai jos:
![Weather App Example](https://lh5.googleusercontent.com/CLV70G_v9ff7fD5cMxiR_CVl0sCMftZcMKNlOmw3VdTI7yY1vOt3ccnrkPeYQAfmK-F-pSwZNzIlQVwqBxzbjlbkSELEh2pCJrxYu8YfH57VVgodLbX-FzmqSVsgkeyPKQfPP50V)

