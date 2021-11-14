Vid planering av detta projekt började jag med att fundera på vilken typ av data jag eftersökte 
och på vilket sätt jag ville behandla datan.

Jag visste från början att denna uppgift primärt skulle handla om att behandla arrayer på olika sätt samt manipulera DOM.

Jag skapade variabler kring mängden "rounds" som varit, en array för totala hus samt array för att spara ner
information kring mängden "rounds". Denna array använder jag sedan för att räkna ut medelvärdet
på mängden dagar det tar att infektera staden.

Jag skapade mina hus genom en loop av createElement i javascript och bestämde mig för att visa på 
infekterade hus genom klasser i css. 

För att visa tillvägagångssättet sätter jag en setInterval på min primära funktion "run()" som startar processen i 
samtliga funktioner samt kontrollerar hur många gånger den behöver köra
beroende på mängden "dagar" som varit samt hur många "rounds" som gått.
Jag gör en clearInterval när staden är "infekterad". och 
Jag kontrollerar detta genom att gå igenom vilka klasser som är satta till "Zhouse" istället för "house".

Man kan spara väldigt mycket tid i dessa projekt om man gör ordentligt grundarbete, att fundera och gärna rita upp sin planering.
Det är väldigt lätt att bara börja koda och det är då lätt hänt att man dyker ner i "kaninhål" i lång tid som kan visa sig oanvändbara.
Det är bättre att fundera igenom sina val innan man börjar arbeta med det.

Jag spenderade lite ytterligare tid i efterhand för att snygga till koden och lägga till lite av
ett CSS ramverk vid namn "bulma" som jag tycker om för mindre projekt.