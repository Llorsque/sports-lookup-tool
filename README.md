# Sports Lookup Tool

Deze repository bevat een monorepo voor een sportinformatie‑tool gericht op snelle en accurate lookup van sporters en wedstrijdinformatie. Het project is ontworpen voor sportcommentatoren die tijdens live‑wedstrijden direct over relevante gegevens willen beschikken.

## Structuur

* `frontend/` – Een **Next.js** applicatie met TypeScript en Tailwind CSS. Deze interface biedt een command‑palette om atleten te zoeken, een kaartcomponent voor sporters, een vergelijkingsweergave en een importeur voor startlijsten.
* `backend/` – (**Nog leeg**) Hier kan later een API of scraper worden toegevoegd om gegevens van verschillende bronnen te verzamelen en te normaliseren.

## Features (in aanbouw)

* **Command‑palette**: Zoek snel door alle sporters en uitslagen met behulp van een intuïtieve zoekbalk.
* **Atleetkaart**: Presenteert informatie over een individuele sporter, zoals nationaliteit, leeftijd en persoonlijke records.
* **Pair‑Compare**: Vergelijkt twee sporters naast elkaar om bijvoorbeeld de snelste rondetijden of head‑to‑head statistieken te tonen.
* **Startlijst import**: Importeert CSV‑bestanden met startlijsten en toont relevante informatie voor iedere deelnemer.

## Getting started

Hoewel deze repository geen volledig geïnstalleerde dependenties bevat (omdat netwerkverkeer tijdens de creatie beperkt was), is de structuur opgezet voor een Next.js project. Om lokaal aan de slag te gaan:

    cd frontend
    # Installeer npm‑pakketjes (node & npm geïnstalleerd noodzakelijk)
    npm install

    # Start ontwikkelserver
    npm run dev

Het commando `npm install` haalt alle benodigde packages op zoals `next`, `react`, `tailwindcss` en TypeScript.

Vervolgens kun je de applicatie openen op `http://localhost:3000`.

## To‑do

* Data‑scraping of API‑integratie in de `backend` map.
* UI‑finesses, toetsenbordnavigatie voor het command‑palette en betere feedback bij het importeren van startlijsten.
* Authenticatie/autoristatie indien persoonsgegevens beschikbaar komen via externe bronnen.
