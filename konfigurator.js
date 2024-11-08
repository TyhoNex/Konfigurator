function zobrazTypy() {
    const ucel = document.getElementById('ucelSelect').value;
    const typSelect = document.getElementById('typSelect');
    
    for (let option of typSelect.options) {
        if (option.getAttribute('data-ucel') === ucel) {
            option.style.display = 'block';
        } else {
            option.style.display = 'none';
        }
    }
    
    typSelect.value = Array.from(typSelect.options).find(option => option.style.display === 'block')?.value;
    zobrazCenuITypStanice();
    zobrazCenu();
    zobrazTypStanice();
    zobrazTypVymeniku();
    zobrazTypCerpadla();
    zobrazPodtypy();

}

function zobrazPodtypy() {
    const typ = document.getElementById('typSelect').value;
    const podtypSelect = document.getElementById('vykon');

    for (let option of podtypSelect.options) {
        if (option.getAttribute('data-typ') === typ) {
            option.style.display = 'block';
        } else {
            option.style.display = 'none';
        }
    }
    
    podtypSelect.value = Array.from(podtypSelect.options).find(option => option.style.display === 'block')?.value;
    zobrazCenuITypStanice();
    zobrazCenu();
    zobrazTypStanice();
    zobrazTypVymeniku();
    zobrazTypCerpadla();

}

function zobrazCenu() {
    const podtypSelect = document.getElementById('vykon');
    const cenaElement = document.getElementById('cena');
    
    // Získá hodnotu ceny z data atributu vybrané možnosti
    const cena = podtypSelect.options[podtypSelect.selectedIndex]?.getAttribute('data-cena');
    
    // Zobrazí cenu v elementu cena
    // cenaElement.textContent = cena ? `Cena: ${cena} Kč` : "Cena: -";
    cenaElement.textContent = cena ? `${cena} Kč` : "-";
}

function zobrazTypStanice() {
    const podtypSelect = document.getElementById('vykon');
    const typStaniceElement = document.getElementById('typStanice');
    
    // Získá název typu stanice z atributu 'data-typstanice' vybrané možnosti
    const typStanice = podtypSelect.options[podtypSelect.selectedIndex]?.getAttribute('data-typstanice');
    
    // Zobrazí typ stanice v elementu 'typStanice'
    //typStaniceElement.textContent = typStanice ? `Typ stanice: ${typStanice}` : "Typ stanice: -";
    typStaniceElement.textContent = typStanice ? `${typStanice}` : "-";
}


function zobrazCenuITypStanice(){

    zobrazCenu();
    zobrazTypStanice();
    zobrazTypVymeniku();
    zobrazTypCerpadla();
    spocitejCelkovouCenu();

}

function zobrazTypVymeniku() {
    const vykonSelect = document.getElementById('vykon');
    const vymenikSelect = document.getElementById('vymenik');
    const typVymenikuElement = document.getElementById('typVymeniku');

    const cenaVymenikuElement = document.getElementById('cenaVymeniku');

    // Získání hodnoty výběru "Chcete výměník?"
    const vymenikValue = vymenikSelect.options[vymenikSelect.selectedIndex].value;

    if (vymenikValue === "Ano") {
        // Získá typ výměníku z data atributu vybrané možnosti výkonu
        const typVymeniku = vykonSelect.options[vykonSelect.selectedIndex]?.getAttribute('data-vymenik');

        //typVymenikuElement.textContent = typVymeniku ? `Typ výměníku: ${typVymeniku}` : "Typ výměníku: -";
        typVymenikuElement.textContent = typVymeniku ? `${typVymeniku}` : "-";

        const cenaVymeniku = vykonSelect.options[vykonSelect.selectedIndex]?.getAttribute('data-cenaVymeniku');
        //cenaVymenikuElement.textContent = cenaVymeniku ? `Cena výměníku: ${cenaVymeniku}` : "Cena výměníku: -";
        cenaVymenikuElement.textContent = cenaVymeniku ? `${cenaVymeniku}` : "-";



    } else {
        //"Typ výměníku: -"
        typVymenikuElement.textContent = "-";
        //"Cena výměníku: -"
        cenaVymenikuElement.textContent = "-";
    }


}

function zobrazTypCerpadla() {
    const vykonSelect = document.getElementById('vykon');
    const cerpadloSelect = document.getElementById('cerpadlo');
    const typCerpadlaElement = document.getElementById('typCerpadla');
    const cenaCerpadlaElement = document.getElementById('cenaCerpadla');

    // Získání hodnoty výběru "Chcete výměník?"
    const cerpadloValue = cerpadloSelect.options[cerpadloSelect.selectedIndex].value;

    if (cerpadloValue === "Ano") {
        // Získá typ výměníku z data atributu vybrané možnosti výkonu
        const typCerpadla = vykonSelect.options[vykonSelect.selectedIndex]?.getAttribute('data-cerpadlo');

        //typVymenikuElement.textContent = typVymeniku ? `Typ výměníku: ${typVymeniku}` : "Typ výměníku: -";
        typCerpadlaElement.textContent = typCerpadla ? `${typCerpadla}` : "-";

        const cenaCerpadla = vykonSelect.options[vykonSelect.selectedIndex]?.getAttribute('data-cenaCerpadla');
        //cenaVymenikuElement.textContent = cenaVymeniku ? `Cena výměníku: ${cenaVymeniku}` : "Cena výměníku: -";
        cenaCerpadlaElement.textContent = cenaCerpadla ? `${cenaCerpadla}` : "-";



    } else {
        //"Typ výměníku: -"
        typCerpadlaElement.textContent = "-";
        //"Cena výměníku: -"
        cenaCerpadlaElement.textContent = "-";
    }


}


function zobrazTypMerice() {
    const merictepla = document.getElementById("merictepla").value;
    const cenaMerice = document.getElementById("cenaMerice");

    // Nastaví cenu na 5000 Kč při volbě "Ano", jinak nastaví "-"
    if (merictepla === "Ano") {
        cenaMerice.textContent = "5000 Kč";
    } else {
        cenaMerice.textContent = "-";
    }
}

function zobrazTypRegulatoru() {
    const regulator = document.getElementById("regulator").value;
    const cenaRegulatoru = document.getElementById("cenaRegulatoru");

    // Nastaví cenu na 5000 Kč při volbě "Ano", jinak nastaví "-"
    if (regulator === "Ano") {
        cenaRegulatoru.textContent = "6000 Kč";
    } else {
        cenaRegulatoru.textContent = "-";
    }
}


function zobrazTypDopousteni() {
    const dopousteni = document.getElementById("dopousteni").value;
    const cenaDopousteni = document.getElementById("cenaDopousteni");

    // Nastaví cenu na 5000 Kč při volbě "Ano", jinak nastaví "-"
    if (dopousteni === "Ano") {
        cenaDopousteni.textContent = "7000 Kč";
    } else {
        cenaDopousteni.textContent = "-";
    }
}

function zobrazTypVentilu() {
    const ventil = document.getElementById("ventil").value;
    const typVentilu = document.getElementById("typVentilu");
    const cenaVentilu = document.getElementById("cenaVentilu");

    // Nastaví cenu na 5000 Kč při volbě "Ano", jinak nastaví "-"
    if (ventil === "Ano") {
        typVentilu.textContent = "RV113";
        cenaVentilu.textContent = "4000 Kč";
    } else {
        typVentilu.textContent = "-";
        cenaVentilu.textContent = "-";
    }
}


function spocitejCelkovouCenu() {
    // Načítáme ceny jednotlivých komponent
    const cenaStanice = parseInt(document.getElementById("cena").textContent.replace("Cena: ", "")) || 0;
    const cenaVymeniku = parseInt(document.getElementById("cenaVymeniku").textContent.replace("Cena výměníku: ", "")) || 0;
    const cenaCerpadla = parseInt(document.getElementById("cenaCerpadla").textContent.replace("Cena čerpadla: ", "")) || 0;
    const cenaVentilu = parseInt(document.getElementById("cenaVentilu").textContent.replace("Cena regulačního ventilu: ", "")) || 0;
    const cenaMerice = parseInt(document.getElementById("cenaMerice").textContent.replace("Cena měřiče tepla: ", "")) || 0;
    const cenaRegulatoru = parseInt(document.getElementById("cenaRegulatoru").textContent.replace("Cena regulátoru dif. tlaku: ", "")) || 0;
    const cenaDopousteni = parseInt(document.getElementById("cenaDopousteni").textContent.replace("Cena dopouštění: ", "")) || 0;

    // Výpočet celkové ceny
    const celkovaCena = cenaStanice + cenaVymeniku + cenaCerpadla + cenaVentilu + cenaMerice + cenaRegulatoru + cenaDopousteni;

    // Zobrazení celkové ceny
    document.getElementById("celkovaCena").textContent = `Celková cena: ${celkovaCena} Kč`;
}

// Volání funkce při změně výběru jednotlivých komponent
document.getElementById("ucelSelect").addEventListener("change", spocitejCelkovouCenu);
document.getElementById("typSelect").addEventListener("change", spocitejCelkovouCenu);
document.getElementById("vykon").addEventListener("change", spocitejCelkovouCenu);
document.getElementById("vymenik").addEventListener("change", spocitejCelkovouCenu);
document.getElementById("cerpadlo").addEventListener("change", spocitejCelkovouCenu);
document.getElementById("ventil").addEventListener("change", spocitejCelkovouCenu);
document.getElementById("merictepla").addEventListener("change", spocitejCelkovouCenu);
document.getElementById("regulator").addEventListener("change", spocitejCelkovouCenu);
document.getElementById("dopousteni").addEventListener("change", spocitejCelkovouCenu);



//start
document.addEventListener("DOMContentLoaded", () => {
    // Zkontroluj hodnotu měřiče tepla při načtení stránky
    if (document.getElementById("merictepla").value === "Ano") {
        zobrazTypMerice();
        spocitejCelkovouCenu();
    }

    // Pokud máš i další select prvky, které potřebují podobné ověření, můžeš přidat další podmínky
    if (document.getElementById("vymenik").value === "Ano") {
        zobrazTypVymeniku();
        spocitejCelkovouCenu();
    }

    if (document.getElementById("cerpadlo").value === "Ano") {
        zobrazTypCerpadla();
        spocitejCelkovouCenu();
    }

    if (document.getElementById("ventil").value === "Ano") {
        zobrazTypVentilu();
        spocitejCelkovouCenu();
    }

    if (document.getElementById("regulator").value === "Ano") {
        zobrazTypRegulatoru();
        spocitejCelkovouCenu();
    }

    if (document.getElementById("dopousteni").value === "Ano") {
        zobrazTypDopousteni();
        spocitejCelkovouCenu();
    }

    // Zkontroluj hodnotu pro "vykon" a aktualizuj typ stanice a cenu při načtení
    const vykonSelect = document.getElementById("vykon");
    const selectedVykon = vykonSelect.value;
    
    if (selectedVykon) {
        // Aktualizuj typ stanice a cenu podle zvoleného výkonu
        zobrazTypStanice();
        zobrazCenuITypStanice();
    }
});
