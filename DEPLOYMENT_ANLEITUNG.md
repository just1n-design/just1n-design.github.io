# 🚀 GitHub Pages Deployment Anleitung

## Änderungen für GitHub Pages

Ich habe folgende Anpassungen vorgenommen, damit deine Webseite auf GitHub Pages funktioniert:

### ✅ Was wurde geändert:

1. **vite.config.ts** - Base URL für username.github.io gesetzt (`/` statt `/website/`)
2. **.github/workflows/deploy.yml** - Automatisches Deployment via GitHub Actions
3. **public/404.html** - Redirect-Handling für React Router (angepasst für username.github.io)
4. **package.json** - Deploy-Script hinzugefügt

---

## 📤 Deployment Schritte

### Option 1: Automatisches Deployment (Empfohlen)

1. **Pushe alle Änderungen zu GitHub:**
   ```bash
   git push
   ```

2. **Aktiviere GitHub Pages:**
   - Gehe zu deinem Repository auf GitHub (just1n-design.github.io)
   - Klicke auf **Settings** (Einstellungen)
   - Scrolle runter zu **Pages** (im linken Menü)
   - Bei **Source** wähle: **GitHub Actions**
   - Speichern

3. **Fertig!** 🎉
   - Der Workflow startet automatisch
   - Nach 2-3 Minuten ist deine Seite live unter:
   - `https://just1n-design.github.io/`

### Option 2: Manuelles Deployment

Falls du es manuell machen möchtest:
```bash
npm install gh-pages --save-dev
npm run deploy
```

---

## 🔧 Wichtige Hinweise

### Repository Name
Die aktuelle Konfiguration ist für ein **username.github.io** Repository optimiert.

**Falls du ein normales Repository verwendest (z.B. username.github.io/project-name):**
- Öffne `vite.config.ts`
- Ändere die Zeile: `base: '/DEIN-REPO-NAME/',`
- Passe auch `public/404.html` entsprechend an

### Custom Domain (fuer-vicuschaaa.de)

Wenn du deine eigene Domain verwenden möchtest:

1. **Erstelle eine Datei `public/CNAME`:**
   ```
   fuer-vicuschaaa.de
   ```

2. **DNS-Einstellungen bei deinem Domain-Provider:**
   - Typ: **A Record**
   - Host: **@**
   - Wert: 
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   
   - Typ: **CNAME**
   - Host: **www**
   - Wert: **ownedbymeinterstellar-eng.github.io**

3. **In GitHub Settings → Pages:**
   - Trage unter "Custom domain" ein: `fuer-vicuschaaa.de`
   - Aktiviere "Enforce HTTPS"

4. **Ändere `vite.config.ts`:**
   ```typescript
   base: mode === 'production' ? '/' : '/',
   ```

---

## 🎆 Easter Eggs Zusammenfassung

Die Easter Eggs sind jetzt vollständig integriert:

- **🎆 Silvester (30.12.2025, 00:00)**: Link zu `/silvester`
- **🎁 Geburtstag (16.01.2026, 00:00)**: Link zu `/geburtstag`

Die Emojis:
- Erscheinen an zufälligen Positionen
- Sind subtil sichtbar (40% Opacity)
- Leuchten beim Hover auf (goldener Glow)
- Funktionieren automatisch zum richtigen Zeitpunkt

---

## 🧪 Lokal Testen

Bevor du pushst, kannst du lokal testen:

```bash
npm install
npm run build
npm run preview
```

Öffne dann: `http://localhost:4173/website/`

---

## ❓ Troubleshooting

### Seite ist blank
- Prüfe ob der Repository-Name in `vite.config.ts` korrekt ist
- Prüfe ob GitHub Pages aktiviert ist (Settings → Pages)
- Warte 2-3 Minuten nach dem Push

### Easter Eggs werden nicht angezeigt
- Prüfe das Datum auf deinem Computer
- Öffne Browser-Konsole (F12) für Fehlermeldungen
- Leere den Browser-Cache (Strg + F5)

### 404 Fehler bei Unterseiten
- Die `404.html` sollte das automatisch beheben
- Falls nicht, refreshe die Seite einmal

---

**Viel Erfolg! 🎉**
