# MIRAS Kaartjesgenerator

Een webapplicatie voor het genereren van warme, persoonlijke kaartteksten voor medewerkers van cvo MIRAS. De teksten worden live gegenereerd via AI, zodat elke combinatie uniek is.

---

## Wat doet deze tool?

De MIRAS Kaartjesgenerator helpt HR-medewerkers en collega's om snel een passende kaarttekst te schrijven voor bijzondere momenten: een pensioen, een jubileum, een moeilijke periode, een bedanking en meer.

De tool genereert altijd **twee varianten** per aanvraag:
- **Variant 1** — kort, direct en bondig (3 à 4 zinnen)
- **Variant 2** — warmer, persoonlijker en beeldender (5 à 6 zinnen)

Beide varianten zijn direct bruikbaar voor een handgeschreven kaartje.

---

## Vereisten

De app heeft een **internetverbinding** nodig. De kaartteksten worden live gegenereerd via de Anthropic API (Claude). Zonder verbinding werkt de generator niet.

---

## Hoe gebruiken?

1. Open `miras-kaartjesgenerator.html` in een webbrowser (Chrome, Edge, Firefox)
2. Vul het formulier in:
   - **Naam ontvanger** *(verplicht)*
   - Functie
   - Opleiding of dienst
   - Lesdomein / vakgebied / expertise
   - Persoonlijke kenmerken of sterktes
3. Kies een **situatie** uit de lijst *(verplicht)*
4. Kies één of meerdere **tonen** *(verplicht)*
5. Voeg optioneel extra context toe
6. Klik op **Genereer kaarttekst**
7. Wacht enkele seconden terwijl de tekst wordt aangemaakt
8. Kopieer de gewenste variant via de **Kopieer tekst**-knop

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

## Hoe worden de teksten gegenereerd?

De app stuurt de ingevulde gegevens naar de Anthropic API (Claude). Het model genereert op basis daarvan twee unieke kaartteksten volgens de MIRAS-schrijfstijl.

Persoonlijke kenmerken en extra context worden nooit letterlijk overgenomen — de AI vertaalt de inhoud naar een vloeiende, natuurlijke zin die past bij de situatie.

Elke keer dat je genereert, krijg je een nieuwe, unieke tekst — ook bij dezelfde invoer.

---

## Schrijfprincipes

De gegenereerde teksten volgen de MIRAS-schrijfstijl:

- Aanspreekvorm: **jij / je / jou**
- Organisatienaam: altijd **MIRAS** (hoofdletters) of **cvo MIRAS**
- Taal: helder, eenvoudig en toegankelijk
- Geen managementtaal, geen clichés, geen overdreven emoties
- Persoonlijk via vakgebied, functie of bijdrage aan cursisten en collega's

**Verboden clichés:**
- "woorden schieten tekort"
- "je bent een topper"
- "bedankt voor alles"
- "geniet van je welverdiende rust"
- "onmisbaar"
- "een nieuwe bladzijde omslaan"

---

## Structuur van een gegenereerde tekst

1. **Aanspreking** — `Beste [naam],`
2. **Tooninstap** *(indien van toepassing)*
3. **Kern** — persoonlijke boodschap afgestemd op situatie, vakgebied en toon
4. **Afsluiting** — passend bij de situatie

---

## Technische informatie

- Eén zelfstandig HTML-bestand
- Geen installatie vereist
- Werkt in elke moderne browser
- Vereist internetverbinding voor het genereren van teksten (Anthropic API)
- API-sleutel is ingebakken en wordt automatisch beheerd

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
