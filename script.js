function adaugaCardTraseu(imagine, descriere, data) {
    // Accesează containerul pentru carduri
    var carouselInner = document.getElementById('carouselInner');

    if (carouselInner.children.length === 0 || 
    (carouselInner.lastElementChild && 
     carouselInner.lastElementChild.classList.contains('carousel-item') &&
     carouselInner.lastElementChild.querySelector('.row') &&
     carouselInner.lastElementChild.querySelector('.row').children.length === 6)) {
    
        // Creează un nou carousel-item
        var newCarouselItem = document.createElement('div');
        newCarouselItem.className = 'carousel-item';

        // Creează un nou row în cadrul carousel-item-ului
        var newRow = document.createElement('div');
        newRow.className = 'row';

        // Adaugă noul row la noul carousel-item
        newCarouselItem.appendChild(newRow);

        // Adaugă noul carousel-item la carusel
        carouselInner.appendChild(newCarouselItem);

        // Dacă este primul carousel-item, activează-l
        if (carouselInner.children.length === 1) {
            newCarouselItem.classList.add('active');
        }
    }
    // Accesează ultimul carousel-item adăugat
    var lastCarouselItem = carouselInner.lastElementChild;

    // Creează elementul pentru col-md-2
    var colMd2 = document.createElement('div');
    colMd2.className = 'col-md-2';

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

    colMd2.appendChild(card);

    // Adaugă col-md-2 în rândul curent
    lastCarouselItem.firstElementChild.appendChild(colMd2);
}

adaugaCardTraseu('images/capelasuhard2.webp', 'Capela Șuhard, Luizi Călugăra; Septembrie 2023');
adaugaCardTraseu('images/dealulcarlomanu.webp', 'Dealul Cârlomanu, Vf. Bobeica, Vf. Prihodiștea; Septembrie 2023');
adaugaCardTraseu('images/canionul7scari.webp', 'Canionul 7 Scări, Brașov; Septembrie 2023');
adaugaCardTraseu('images/varfultampa.webp', 'Vârful Tâmpa, Brașov; Septembrie 2023');
adaugaCardTraseu('images/coloaneledebalzalt.webp', 'Coloanele de Balzalt; Septembrie 2023');
adaugaCardTraseu('images/vulcanulstins.webp', 'Vulcanul Stins de la Racoș; Septembrie 2023');

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