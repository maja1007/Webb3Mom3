# Gulp, Sass and Git together - Start Template
_A basic template, just to know how it works_

## Verktyg
Som verktyg har jag använt mig av Visual Studi Code och Git Bash

## Automatisering
Automatiseringen syftar till att man som utvecklare kan granska sina ändringar i webbläsaren utan att man manuellt behöver uppdatera sidan. Processen syftar till att man arbetar i en källmapp och automatiserar ändringar i en publiseringsmapp. Det kan exempelvis handla om att komprimera bilder, sammaslå flera filer till en eller att göra sass-fler till css-filer.

#Att starta upp Automatisk uppdatering används kommandot gump i kommandotolken

#Att avsluta Automatisk uppdatering används kommandot Ctrl + C i kommandotolken

## System
_Gulp_ startar upp systemet och default_/_run_ kör sedan igenom de tasks som angivits i gulpfile.js.

Med Hjälpav funktionen _"watch"_ ligger hela tiden systemet och lyssnar på om ändringar i filerna görs. 

**CopyHtml** -används för att kopiera alla html-filer från src till publiseringsmappen

**Run**- används för att köra task

**Watch** - Används för att övervaka förändringar som görs i filerna och kör automatiskt vissa uppgifter

## Paket
1. **Concat** - används för att sammanföra filer i en src-katalog till en och samma fil i önskad pub-pubbliseringskatalog
2. **Imagemin** - används för att komprimera bilder - mindre filstorlek utan minskad kvalité 
3. **Uglify** - används för att komprimera (minify) javascriptsfiler - ta bort onödigt innehåll så som kommentarer och radbrytningar 
4. **Uglifycss** - används för att komprimera (minify) css-filer - ta bort onödigt innehåll så som kommentarer och radbrytningar 
5. **Sass** - används till att konvertera scss till css


##Sass-kod innehållande:
**Variabler

**Nesing

**Mixins

**Selector inheritance (nyckelordet "@extend")

**If/else-satser

**Color functions (lighten, darken)
