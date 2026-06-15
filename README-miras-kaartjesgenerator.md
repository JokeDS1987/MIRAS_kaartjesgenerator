# MIRAS Kaartjesgenerator

Een webapplicatie voor het genereren van warme, persoonlijke kaartteksten voor medewerkers van cvo MIRAS. De teksten worden live gegenereerd via AI (Claude van Anthropic), zodat elke combinatie uniek is.

---

## Wat doet deze tool?

De MIRAS Kaartjesgenerator helpt HR-medewerkers en collega's om snel een passende kaarttekst te schrijven voor bijzondere momenten: een pensioen, een jubileum, een moeilijke periode, een bedanking en meer.

De tool genereert altijd **twee varianten** per aanvraag:
- **Variant 1** — kort, direct en bondig (3 à 4 zinnen)
- **Variant 2** — warmer, persoonlijker en beeldender (5 à 6 zinnen)

Beide varianten zijn direct bruikbaar voor een handgeschreven kaartje.

---

## Vereisten

- **Node.js** versie 18 of hoger → https://nodejs.org
- Een **Anthropic API-sleutel** → https://console.anthropic.com

De app heeft geen extra npm-pakketten nodig. Alles werkt met de ingebouwde Node.js-modules.

---

## Installatie en opstarten

### Stap 1 — Bestanden klaarzetten

Zorg dat deze drie bestanden in dezelfde map staan:
```
miras-kaartjesgenerator.html
server.js
package.json
```

### Stap 2 — API-sleutel instellen

Stel je Anthropic API-sleutel in als omgevingsvariabele.

**Mac/Linux:**
```bash
export ANTHROPIC_API_KEY=sk-ant-jouwsleutelhier
```

**Windows (Command Prompt):**
```cmd
set ANTHROPIC_API_KEY=sk-ant-jouwsleutelhier
```

**Windows (PowerShell):**
```powershell
$env:ANTHROPIC_API_KEY="sk-ant-jouwsleutelhier"
```

### Stap 3 — Server starten

```bash
node server.js
```

Je ziet:
```
MIRAS Kaartjesgenerator draait op http://localhost:3000
```

### Stap 4 — App openen

Open je browser en ga naar:
```
http://localhost:3000
```

De app is klaar voor gebruik.

### Stoppen

Druk op `Ctrl+C` in de terminal om de server te stoppen.

---

## Situaties

| Situatie | Toelichting |
|---|---|
| Pensioen | Afscheid na een loopbaan |
| Vertrek uit de organisatie | Medewerker verlaat MIRAS |
| Nieuwe professionele uitdaging | Stap naar een nieuwe job of rol |
| Bijzondere inzet | Erkenning voor extra engagement |
| Bedanking | Algemene dankbetuiging |
| Jubileum | Mijlpaal in dienstjaren |
| Moeilijke periode | Persoonlijke of professionele moeilijkheden |
| Ziekte of herstel | Beterschap of langdurige afwezigheid |
| Iemand die veel betekend heeft voor MIRAS | Erfenis en impact |
| Andere | Vrije situatie |

---

## Tonen

| Toon | Wanneer gebruiken |
|---|---|
| 🌱 Warm en waarderend | Bedankjes, jubilea, inzet, samenwerking |
| 🎉 Feestelijk en enthousiast | Mijlpalen, diploma's, nieuwe functies, afgeronde projecten |
| ❤️ Zorgzaam en ondersteunend | Beterschap, moeilijke momenten, afscheid |
| 🤝 Verbindend en collegiaal | Welkomst, afscheid, teammomenten |
| 🌟 Inspirerend en activerend | Aanmoedigen, potentieel ontdekken, nieuwe stappen |

Je kan meerdere tonen combineren.

---

## Schrijfprincipes

De gegenereerde teksten volgen de MIRAS-schrijfstijl:

- Aanspreekvorm: **jij / je / jou**
- Organisatienaam: altijd **MIRAS** (hoofdletters) of **cvo MIRAS**
- Taal: helder, eenvoudig en toegankelijk
- Geen managementtaal, geen clichés, geen overdreven emoties
- Persoonlijk via vakgebied, functie of bijdrage aan cursisten en collega's
- Persoonlijke kenmerken en extra context worden nooit letterlijk overgenomen — de AI vertaalt de inhoud naar een eigen, vloeiende zin

---

## Bestandsstructuur

```
miras-kaartjesgenerator/
├── miras-kaartjesgenerator.html   ← de app (frontend)
├── server.js                      ← de lokale server (backend)
├── package.json                   ← projectinformatie
└── README-miras-kaartjesgenerator.md
```

---

## Hoe werkt het technisch?

1. De browser stuurt het formulier naar de lokale server (`/genereer`)
2. De server stuurt een verzoek naar de Anthropic API met de MIRAS-schrijfinstructies
3. Claude genereert twee unieke kaartteksten
4. De server stuurt de teksten terug naar de browser
5. De app toont de twee varianten

De API-sleutel blijft op de server — die is nooit zichtbaar in de browser.

---

## Huisstijl

| Element | Waarde |
|---|---|
| Primaire kleur | `#EA5B0C` (MIRAS-oranje) |
| Tekstkleur | `#1D1D1B` (zwart) |
| Achtergrond | `#F7F6F3` |
| Accentkleuren | `#89CCCA` (mintgroen), `#DBBFDD` (lila), `#FFCC00` (geel) |
| Lettertype | Avenir, Calibri, Segoe UI |

---

*cvo MIRAS · Personeel en Organisatie*
