# LibRML Builder

Eine [Vue.js](https://vuejs.org/) Applikation um LibRML-Objekte zu erstellen und vorhandene JSON-Daten visuell zu
bearbeiten.

Jede e-Ressource ist mit Nutzungsrechten und Lizenzen verbunden. Diese Informationen befinden sich zum Großteil in
Vertragsdokumenten, E-Mails oder ausführlichen Lizenztexten. In den Metadaten der e-Ressourcen werden diese
Informationen häufig in Freitextfelder übertragen. Im Fall von standardisierten Lizenzen (CC-Lizenzen, Public Domain)
befindet sich oft nur der Link zum eigentlichen Lizenztext am digitalen Objekt.

Der Bedarf an Automatisierung zur Rechteerfassung sowie der technischen Auswertung von Berechtigungen ist groß, aber
bisher existiert kein Standard, der den Anforderungen der bibliothekarischen Praxis gerecht werden konnte.

Aus diesem Grund ist Library Rights Machine-readable Language (kurz [LibRML](https://slub.github.io/librml/index.html))
entstanden. Rechteauszeichnung mit LibRML sind durch maschinelle Unterstützung einfach zu generieren und
weiterzuverarbeiten. LibRML kann in bestehende Metadatensätzen integriert werden oder unabhängig davon verarbeitet
werden. Damit eröffnen sich zahlreiche Möglichkeiten in der Automatisierung bibliothekarischer Workflows. LibRML wurde
gezielt für die Anforderungen und Bedarfe des bibliothekarischen Sektors entwickelt.

Diese Applikation ist ein Prototyp um diese Datensätze zu erzeugen und die Möglichkeiten zu entdecken.

Technologien:

* [Vue.js](https://vuejs.org/)
* [BootstrapVue](https://bootstrap-vue.org/)

### Project Setup

```
npm install
```

### Entwicklungsversion starten

```
npm run serve
```

### Produktivversion erstellen

```
npm run build
```