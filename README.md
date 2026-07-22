# Lukáš Lasák — digitální CV

Prémiová onepage digitální vizitka / životopis. Tmavý editorial-startup design,
plynulé animace a smooth scroll.

## Tech stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** (animace, parallax, magnetická tlačítka)
- **Lenis** (smooth scroll)

## Spuštění

```bash
npm install       # instalace závislostí
npm run dev       # vývojový server na http://localhost:3000
npm run build     # produkční build
npm run start     # spuštění produkce (plynulé, pro reálný výkon)
```

> Pro reálný výkon vždy testuj přes `build` + `start` — dev mód je výrazně pomalejší.

## Struktura

```
app/                 layout, globální styly, stránka
components/           jednotlivé sekce a UI (Hero, Journey, Skills, …)
lib/content.ts       veškerý obsah/texty na jednom místě
public/              fotka (lukas.jpg), PDF životopis, placeholder
```

## Úpravy obsahu

Texty, zkušenosti, dovednosti a vzdělání jsou v `lib/content.ts`.
Profilovou fotku vyměníš přepsáním `public/lukas.jpg`.
PDF životopis leží v `public/cv-lukas-lasak.pdf`.
