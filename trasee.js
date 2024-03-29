function adaugaCardTraseu(imagine, descriere, data) {
    // Accesează containerul pentru carduri
    var cardContainer = document.getElementById('cardContainer');

    // Verifică dacă există deja un rând, altfel creează unul
    var currentRow = cardContainer.lastElementChild;
    if (!currentRow || (currentRow && currentRow.children.length === 3)) {
        // Creează un nou rând (row) în containerul cardurilor
        var newRow = document.createElement('div');
        newRow.className = 'row';

        // Adaugă noul rând la containerul cardurilor
        cardContainer.appendChild(newRow);

        // Actualizează referința la rândul curent
        currentRow = newRow;
    }

    // Creează elementul pentru col-md-4
    var colMd4 = document.createElement('div');
    colMd4.className = 'col-md-4 mb-4';

    // Creează elementele cardului
    var card = document.createElement('div');
    card.className = 'card h-100';

    var img = document.createElement('img');
    img.className = 'card-img-top img-fluid';
    img.src = imagine;
    img.alt = 'Image';

    var cardBody = document.createElement('div');
    cardBody.className = 'card-body d-flex flex-column text-center';

    var title = document.createElement('h5');
    title.className = 'card-title flex-fill';
    title.textContent = descriere;

    var link = document.createElement('a');
    link.href = '#';
    link.className = 'btn btn-primary mt-auto';
    link.textContent = 'Citește mai mult';

    // Adaugă data traseului sub card title
    var dateElement = document.createElement('p');
    dateElement.className = 'card-date';
    dateElement.textContent = data;

    card.appendChild(img);
    card.appendChild(cardBody);

    // Adaugă data în card body
    cardBody.appendChild(dateElement);

    // Asamblează elementele cardului
    cardBody.appendChild(title);
    cardBody.appendChild(link);

    colMd4.appendChild(card);

    // Adaugă col-md-4 în rândul curent
    currentRow.appendChild(colMd4);
}

adaugaCardTraseu('images/piatra_singuratica_17_02_2024.webp', 'Piatra Singuratică & Vârful Hăsmașu Mare', '17 Februarie 2024');
adaugaCardTraseu('images/vf_batrana_06_01_2024.webp', 'Vârful Bătrâna', '6 Ianuarie 2024');
adaugaCardTraseu('images/vf_ciucas_26_12_2023.webp', 'Vârful Ciucas', '26 Decembrie 2023');
adaugaCardTraseu('images/vf_rarau_02_12_2023.webp', 'Pietrele Doamnei & Vârful Rarău', '2 Decembrie 2023');
adaugaCardTraseu('images/vf_giumalau_01_12_2023.webp', 'Vârful Giumalău', '1 Decembrie 2023');
adaugaCardTraseu('images/cascada_duras_5_noiembrie_2023.webp', 'Cascada Duras & Piatra Soimului', '5 Noiembrie 2023');
adaugaCardTraseu('images/varful_pietricica_15_10_2023.webp', 'Vâful Pietricica', '15 Octombrie 2023');
adaugaCardTraseu('images/capelasuhard2.webp', 'Capela Șuhard, Luizi Călugăra', 'Septembrie 2023');
adaugaCardTraseu('images/dealulcarlomanu.webp', 'Dealul Cârlomanu, Vf. Bobeica, Vf. Prihodiștea', 'Septembrie 2023');
adaugaCardTraseu('images/canionul7scari.webp', 'Canionul 7 Scări, Brașov', 'Septembrie 2023');
adaugaCardTraseu('images/varfultampa.webp', 'Vârful Tâmpa, Brașov', 'Septembrie 2023');
adaugaCardTraseu('images/coloaneledebalzalt.webp', 'Coloanele de Balzalt', 'Septembrie 2023');
adaugaCardTraseu('images/vulcanulstins.webp', 'Vulcanul Stins de la Racoș', 'Septembrie 2023');
adaugaCardTraseu('images/laculdesmarald_392x522.webp', 'Lacul de Smarald', 'Septembrie 2023');
adaugaCardTraseu('images/cascadanasoleamare_392x522.webp', 'Cascada Nasolea Mare, Bacău', 'Septembrie 2023');
adaugaCardTraseu('images/cascadaduras_392x522.webp', 'Cascada Duras, Roznov', 'August 2023');
adaugaCardTraseu('images/cabanamalaesti-min.webp', 'Râșnov - Cabana Mălăești', 'August 2023');
adaugaCardTraseu('images/laculvulturilor_392x522.webp', 'Lacul Vulturilor, Buzău', 'Iulie 2023');
adaugaCardTraseu('images/babeledelaulmet-min_392x522.webp', 'Babele de la Ulmet, Buzău', 'Iulie 2023');
adaugaCardTraseu('images/capelainaltarealuiiisuslacer-min.webp', 'Capela "Înălțarea lui Iisus la Cer"', 'Iulie 2023');
adaugaCardTraseu('images/vfmoldoveanuvisteamare.webp', 'Vf. Moldoveanu, Vf. Viștea Mare', 'Iulie 2023');
adaugaCardTraseu('images/piatrasinguratica-min.webp', 'Piatra Singuratică', 'Iunie 2023');
adaugaCardTraseu('images/treicruci-min.webp', 'Trei Cruci, Cleja', 'Mai 2023');
adaugaCardTraseu('images/lacul_cuejdel_card.webp', 'Lacul Cuejdel', 'Mai 2022');
adaugaCardTraseu('images/trei_caldari-min.webp', 'Trei Caldări, Piatra Neamț', 'Aprilie 2022');
adaugaCardTraseu('images/cheile_bicajelului.webp', 'Cheile Bicăjelului', 'Martie 2023');
adaugaCardTraseu('images/delaul_cosna.webp', 'Dealul Coșna', 'Februarie 2023');
adaugaCardTraseu('images/la_stanca-min.webp', 'La Stâncă, Slănic Moldova', 'Ianuarie 2023');
adaugaCardTraseu('images/suhardul_mare-min.webp', 'Șuhardul Mare', 'Ianuarie 2023');
adaugaCardTraseu('images/ceahlau_noiembrie_2022.webp', 'Ceahlău', 'Noiembrie 2022');
adaugaCardTraseu('images/cascada_bucias.webp', 'Cascada Buciaș', 'Noiembrie 2022');
adaugaCardTraseu('/images/suhardul_mic_oct_2022.webp', 'Șuhardul Mic', 'Octombrie 2022');
adaugaCardTraseu('/images/pietrele_doamnei_octombrie_2022.webp', 'Pietrele Doamnei, Vf. Rarău, Peștera', 'Octombrie 2022');
adaugaCardTraseu('/images/varful_ciucas_septembrie_2022-min.webp', 'Vf. Ciucaș', 'Septembrie 2022');
adaugaCardTraseu('/images/avion_valea_budului.webp', 'Avion Valea Budului', 'Septembrie 2022');
adaugaCardTraseu('/images/lacul_osoi-min.webp', 'Lacul Osoi', 'Septembrie 2022');
adaugaCardTraseu('/images/varful_omu_august_2022-min.webp', 'Vâful Omu', 'August 2022');
adaugaCardTraseu('/images/cascada_valea_spumoasa_august_2022-min.webp', 'Cascada Valea Spumoasă', 'August 2022');
adaugaCardTraseu('/images/lacul_scropoasa-min.webp', 'Lacul Scropoasa, Cascada 7 Izvoare, Peștera Ialomiței', 'Iulie 2022');
adaugaCardTraseu('/images/babe_sfinx_iulie_2022-min.webp', 'Babele & Sfinxul', 'Iulie 2022');
adaugaCardTraseu('/images/varful_ghilcos_iunie_2022-min.webp', 'Vârful Ucigașul', 'Iunie 2022');
adaugaCardTraseu('/images/cheile_bicajelului_iunie_2022-min.webp', 'Cheile Bicăjelului', 'Iunie 2022');
adaugaCardTraseu('/images/cheile_bicajelului_mai_2022-min.webp', 'Cheile Bicăjelului', 'Mai 2022');