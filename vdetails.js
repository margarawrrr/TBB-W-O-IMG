const places = {
    mooncoffee: {
        name: "Moon Coffee",
        address: "Ma. Theresa, Cabanatuan City, Philippines 3100",
        hours: "11 am - 11 pm",
        contact: "0960 213 4912",
        price: "₱140 - ₱500",
        rating: "4.1",
        images: [
            "cafe/moon/mooncoffee (1).jpg",
            "cafe/moon/mooncoffee-2.jpg",
            "cafe/moon/mooncoffee-3.jpg",
            "cafe/moon/mooncoffee-4.jpg",
        ]
    },
    bgcafe: {
        name: "Board Game Cafe",
        address: "The Medical Hub Bldg., Cabanatuan City",
        hours: "11 am - 9 pm",
        contact: "@bgcboardgamecafe",
        price: "₱125 - ₱400",
        rating: "3.8",
        images: [

            "cafe/bgc/bgc.jpg",
            "cafe/bgc/bgc-3.jpg",
            "cafe/bgc/bgc-4.jpg",
            "cafe/bgc/bgc-2.jpg",
        ]
    },
    cafecove: {
        name: "Cafe Cove by Lukas",
        address: "29th street general extension kapitan pepe phase II Cabanatuan City, Philippines 3100",
        hours: "8 am - 9:30 pm",
        contact: "0917 134 3600",
        price: "₱108 - ₱399",
        rating: "4.5",
        images: [
            "cafe/cafecove/cafecove.jpg",
            "cafe/cafecove/cafecove-1.jpg",
            "cafe/cafecove/cafecove-2.jpg",
            "cafe/cafecove/cafecove-3.jpg",
        ]
    },
    streetshack: {
        name: "Street Shacks",
        address: "19th street kapitan pepe subdivision, Cabanatuan City, Philippines 3100",
        hours: "8 am - 10 pm",
        contact: "0995 964 8189",
        price: "₱144 - ₱470",
        rating: "4.4",
        images: [
            "cafe/streetshack/streetshack.jpg",
            "cafe/streetshack/streetshack-3.jpg",
            "cafe/streetshack/streetshack-4.jpg",
            "cafe/streetshack/streetshack-1.jpg",
        ]
    },
    happythoughts: {
        name: "Happy Thoughts Cafe",
        address: "Brgy. Nabao, Cabanatuan City, Philippines 3100",
        hours: "11 am - 11 pm",
        contact: "0966 778 1777",
        price: "₱130 - ₱475",
        rating: "4.9",
        images: [
            "cafe/happythoughts/happythoughts-1.jpg",
            "cafe/happythoughts/happythoughts-2.jpg",
            "cafe/happythoughts/happythoughts-3.jpg",
            "cafe/happythoughts/happythoughts-4.jpg",
        ]
    },
    manacafe: {
        name: "Mana Cafe",
        address: "Mana Cafe Lakewood Avenue, lakewood subdivision, sumacab este, Cabanatuan City 3100",
        hours: "7 am - 10 pm",
        contact: "0917 168 9888",
        price: "₱100 - ₱1,000",
        rating: "4.3", 
        images: [
            "cafe/mana/mana.jpg",
            "cafe/mana/mana-1.jpg",
            "cafe/mana/mana-2.jpg",
            "cafe/mana/mana-3.jpg",
        ]
    },
    hulma: {
        name: "Hulma",
        address: "Clamonte Street, Aduas Centro, Cabanatuan City, Philippines 3100",
        hours: "12 pm - 9 pm",
        contact: "@hulma.local",
        price: "₱70 - ₱500",
        rating: "4.4",
        images: [
            "cafe/hulma/hulma.jpg",
            "cafe/hulma/hulma-1.jpg",
            "cafe/hulma/hulma-3.jpg",
            "cafe/hulma/hulma-4.jpg",
        ]
    },
    centralblends: {
        name: "Central Blends & Co",
        address: "12 Jimenez Street, Kapitan Pepe, Cabanatuan City, Philippines 3100",
        hours: "12 pm - 10 pm",
        contact: "@Central Blends & Co",
        price: " ₱145 - ₱365",
        rating: "4.3",
        images: [
            "cafe/centralblend/centralblendsco.jpg",
            "cafe/centralblend/cbc.jpg",
            "cafe/centralblend/cbc-2.jpg",
            "cafe/centralblend/cbc-3.jpg",
        ]
    },
    horti: {
        name: "HORTI Café",
        address: "Valdefuente, Cabanatuan City, Philippines, 3100",
        hours: "12 am - 10 pm",
        contact: "(044) 511 2656",
        price: " ₱65 - ₱398",
        rating: "4.8",
        images: [
            "cafe/horti/horti-2.jpg",
            "cafe/horti/horti.jpg",
            "cafe/horti/horti-1.jpg",
            "cafe/horti/horti-4.jpg",
        ]
    },
    bereans: {
        name: "La Berean’s Café",
        address: "Purok 6 Santander Street, Corner St. Joseph Ave., Kapitan Pepe, Cabanatuan City, Philippines, 3100",
        hours: "10 am - 9 pm",
        contact: "0985 089 2120",
        price: "₱114 - ₱800",
        rating: "4.6",
        images: [
            "cafe/labereans/labereans-1.jpg",
            "cafe/labereans/laberean-1.jpg",
            "cafe/labereans/laberean-2.jpg",
            "cafe/labereans/laberean-3.jpg",
        ]
    },
    caffeinated: {
        name: "Caffeinated & Co",
        address: "General Tinio Extension, Kapitan Pepe subdivision, Cabanatuan City, Philippines, 3100",
        hours: "9 am - 9 pm",
        contact: "(044) 940 9525",
        price: "₱114 - ₱800",
        rating: "4.4",
        images: [
            "cafe/caffeinated/caffeinated.jpg",
            "cafe/caffeinated/caffeinated-1.jpg",
            "cafe/caffeinated/caffeinated-2.jpg",
            "cafe/caffeinated/caffeinated-4.jpg",
        ]
    },
    nala: {
        name: "Nala Café",
        address: "ICG Building, Kapitan Pepe, Cabanatuan City, Philippines, 3100",
        hours: "11 am - 10 pm",
        contact: "@nalacafeph",
        price: "₱114 - ₱800",
        rating: "4.6",
        images: [
            "cafe/nala/nala-1.jpg",
            "cafe/nala/nala-2.jpg",
            "cafe/nala/nala-3.jpg",
            "cafe/nala/nala-6.jpg",
        ]
    },
    kayoubi: {
        name: "Kayoubi Café",
        address: "Circumferential Road (near terminal), Cabanatuan City, Philippines, 3100",
        hours: "11 am - 10 pm",
        contact: "0956 644 2431",
        price: "₱88 - ₱500",
        rating: "4.7",
        images: [
            "cafe/kayoubi/kayoubi.webp",
            "cafe/kayoubi/kayoubi-1.jpg",
            "cafe/kayoubi/kayoubi-2.jpg",
            "cafe/kayoubi/kayoubi-4.jpg",
        ]
    },
    lattea: {
        name: "Lattea Café",
        address: "Near Wesleyan Church, Block 9 Camp Tinio, Cabanatuan City, Nueva Ecija 3100",
        hours: "9 pm - 10 pm",
        contact: "0956 644 2431",
        price: "₱88 - ₱500",
        rating: "5.0",
        images: [
            "cafe/lattea/lattea-1.jpg",
            "cafe/lattea/lattea-2.jpg",
            "cafe/lattea/lattea-3.jpg",
            "cafe/lattea/lattea-5.jpg",
        ]
    },
    meow: {
        name: "Hello Meow Café",
        address: "1, Magsaysay South, Brgy, Cabanatuan City, 3100 Nueva Ecija",
        hours: "10:00 am - 6:00 pm",
        contact: "0917 827 7206",
        price: "₱120 – ₱195",
        rating: "4.8",
        images: [
            "cafe/meow/hellomeow-1.jpg",
            "cafe/meow/hellomeow-2.jpg",
            "cafe/meow/hellomeow-3.jpg",
            "cafe/meow/hellomeow-4.jpg",
        ]
    },
    thirdspace: {
        name: "3rd Space Café",
        address: "485, Brgy. H Concepcion, Cabanatuan City, 3100 Nueva Ecija",
        hours: "6:00 pm onwards",
        contact: "0956 627 7949",
        price: "₱70 – ₱500",
        rating: "5.0",
        images: [
            "cafe/3rdspace/3rd_space.jpg",
            "cafe/3rdspace/3rd_space-1.jpg",
            "cafe/3rdspace/3rd_space-3.jpg",
            "cafe/3rdspace/3rd_space-6.jpg",
        ]
    },
    trinidad: {
        name: "Trinidad il Baretto",
        address: "Tandang Sora Extension, Magsaysay Forte, Cabanatuan City, Philippines, 3100",
        hours: "11 am - 11:10 pm",
        contact: "0968 406 7785",
        price: "₱160 - ₱720",
        rating: "4.5",
        images: [
            "resto/trinidad/1.jpeg",
            "resto/trinidad/2.jpeg",
            "resto/trinidad/3.jpeg",
            "resto/trinidad/4.jpeg",
        ]
    },
    estoria: {
        name: "Estoria Bistro",
        address: "Estoria Bistro, Cabanatuan City, Philippines, 3105",
        hours: "11 am - 10 pm",
        contact: "0928 352 5931",
        price: "₱110 - ₱2,000",
        rating: "3.8",
        images: [
            "resto/estoria/1.jpeg",
            "resto/estoria/2.jpeg",
            "resto/estoria/3.jpeg",
            "resto/estoria/4.jpeg",
        ]
    },
    bistro: {
        name: "Bistro 360",
        address: "1093 Del Pilar Street, Barangay Sangitan West, Cabanatuan City, Philippines, 3100",
        hours: "10:30 am - 10 pm",
        contact: "0943 836 0360",
        price: "₱500 – 1,000/pax.",
        rating: "4.2",
        images: [
            "resto/bistro/1.jpeg",
            "resto/bistro/2.jpeg",
            "resto/bistro/3.jpeg",
            "resto/bistro/4.jpeg",
        ]
    },
    rustica: {
        name: "Rustica Restaurant",
        address: "Maharlika Highway Across from Zulueta Street, Cabanatuan City, 3100 Philippines",
        hours: "10:30 am - 10 pm",
        contact: "0944 940 7927",
        price: "₱500 – 1,000/pax.",
        rating: "4.3",
        images: [
            "resto/rustica/1.jpeg",
            "resto/rustica/2.jpeg",
            "resto/rustica/3.jpeg",
            "resto/rustica/4.jpeg",
        ]
    },
    vicenticos: {
        name: "Hapag Vicenticos",
        address: "1077 Del Pilar Street, Cabanatuan City, Luzon 3100 Philippines",
        hours: "10 am - 9 pm",
        contact: "0917 565 7860",
        price: "₱500 – 1,060/pax.",
        rating: "4.5",
        images: [
            "resto/hapag.jpg",
            "resto/hapag/1.jpeg",
            "resto/hapag/2.jpeg",
            "resto/hapag/3.jpeg",
        ]
    },
    lamarang: {
        name: "Lamarang Restaurant",
        address: "1077 Del Pilar Street, Cabanatuan City, Luzon 3100 Philippines",
        hours: "9 am - 10 pm",
        contact: "0933 017 8581",
        price: "₱100 - ₱3,000",
        rating: "4.3",
        images: [
            "resto/lamarang.jpg",
            "resto/lamarang/1.jpeg",
            "resto/lamarang/2.jpeg",
            "resto/lamarang/3.jpeg",
        ]
    },
    maru: {
        name: "Maru Korean Restaurant",
        address: "General Tinio Extension, Cabanatuan City 3100",
        hours: "11 am - 9 pm",
        contact: "0915 894 0111",
        price: "₱150 - ₱500",
        rating: "4.1",
        images: [
            "resto/maru.jpg",
            "resto/maru/1.jpeg",
            "resto/maru/2.jpeg",
            "resto/maru/3.jpeg",
        ]
    },
    ednas: {
        name: "Edna’s Cakeland ",
        address: "#1Don Manuel Avenue, Kapitan Pepe Subdivision, Cabanatuan City 3100",
        hours: "6:30 am - 5:30 pm",
        contact: "0917 574 2727",
        price: "₱100 – 1,466/pax.",
        rating: "4.6",
        images: [
            "resto/edna/1.jpeg",
            "resto/edna/2.jpeg",
            "resto/edna/3.jpeg",
            "resto/edna/4.jpeg",
        ]
    },
    finecut: {
        name: "Fine Cut Butchery",
        address: "Gen. Tinio Ave. Villa Benita H. Conception, Cabanatuan City, 3100",
        hours: "10:30 am - 10 pm",
        contact: "0922 794 4246",
        price: "₱630 – 1,600/pax.",
        rating: "3.8",
        images: [
            "resto/finecut.jpg",
            "resto/finecut/1.jpeg",
            "resto/finecut/2.jpeg",
            "resto/finecut/3.jpeg",
        ]
    },
    giligans: {
        name: "Giligan’s Restaurant",
        address: "2nd level SM city, Cabanatuan City, 3100",
        hours: "10 am - 9 pm",
        contact: "0929 613 0548",
        price: "₱150 - ₱500",
        rating: "4.9",
        images: [
            "resto/giligan/1.jpeg",
            "resto/giligan/2.jpeg",
            "resto/giligan/3.jpeg",
            "resto/giligan/4.jpeg",
        ]
    },
    woodside: {
        name: "Woodside Restaurant",
        address: "Corner Del Pilar & Parumog Streets, Cabanatuan City, 3100",
        hours: "10:30 am - 9 pm",
        contact: "0917 636  5814",
        price: "₱220 – 4,000",
        rating: "4.4",
        images: [
            "resto/woodside.jpg",
            "resto/woodside/1.jpeg",
            "resto/woodside/2.jpeg",
            "resto/woodside/3.jpeg",
        ]
    },
    nanayzeny: {
        name: "Nanay Zeny",
        address: "Lot 30, Blk 26, 18th Street, Kapitan Pepe (Phase II), San Josef Sur, Cabanatuan City, Nueva Ecija (Across Boss Tano Mamihan / Former Paleta & Omiaki by Ambula)",
        hours: "10:30 am - 9 pm",
        contact: "Nanay Zeny 2.0 on Facebook",
        price: "₱130 – 1,599/pax.",
        rating: "3.1",
        images: [
            "resto/nanayzeny.jpg",
            "resto/nanayzeny/1.jpeg",
            "resto/nanayzeny/2.jpeg",
            "resto/nanayzeny/3.jpeg",
        ]
    },
    cilantro: {
        name: "Cilantro Restaurant",
        address: "Sanciangco Street, Dating University of Pares,  Near Old LTO Office, Eco oil Gas Station, Going Cabanatuan Bus terminal Road. , Cabanatuan City, Philippines, 3100",
        hours: "9 am - 9 pm",
        contact: "0927 172 6806",
        price: "₱125 – 1,800/pax.",
        rating: "4.8",
        images: [
            "resto/cilantro.jpg",
            "resto/cilantro/1.jpeg",
            "resto/cilantro/2.jpeg",
            "resto/cilantro/3.jpeg",
        ]
    },
    panyeros: {
        name: "Panyeros Restaurant",
        address: "Gen. Tinio Extension Brgy. H. Concepcion Cabanatuan City, Nueva Ecija, 3100",
        hours: "11 am - 11 pm",
        contact: "0962 288 2589",
        price: "₱35 – 1,559/pax.",
        rating: "3.0",
        images: [
            "resto/panyeros.jpg",
            "resto/panyeros/1.jpeg",
            "resto/panyeros/2.jpeg",
            "resto/panyeros/3.jpeg",
        ]
    },
    primitive: {
        name: "Hidden Primitive Pancit Cabagan and Pancit Batil Patong",
        address: "38 1, Valdefuente, Cabanatuan City, 3100 Nueva Ecija",
        hours: "7:00 am - 8:30 pm",
        contact: "0975 585 3167",
        price: "₱90 – 200/pax.",
        rating: "4.4",
        images: [
            "resto/primitive.jpg",
            "resto/hidden/1.jpeg",
            "resto/hidden/2.jpeg",
            "resto/hidden/3.jpeg",
        ]
    },
    kopibreak: {
        name: "Coffee Break",
        address: "A. Valino Street, Cabanatuan City, 3100 Nueva Ecija",
        hours: "9 am - 9 pm",
        contact: "09456091226",
        price: "₱100 – 500/pax.",
        rating: "4.4",
        images: [
            "cafe/coffeebreak/kopibreak.jpg",
            "cafe/coffeebreak/coffeebreak-3.jpg",
            "cafe/coffeebreak/coffeebreak-4.jpg",
            "cafe/coffeebreak/coffeebreak-5.jpg",
        ]
    },
    ninetiescafe: {
        name: "90’s Café",
        address: "Brgy DS garcia, Circumferential Rd, Cabanatuan City, Philippines, 3100",
        hours: "9 am - 1 pm",
        contact: "0936 405 7472",
        price: "₱89 - ₱299",
        rating: "4.5",
        images: [
            "cafe/90s/90'scafe.jpg",
            "cafe/90s/90'scafe-2.jpg",
            "cafe/90s/90'scafe-3.jpg",
            "cafe/90s/90'scafe-5.jpg",
        ]
    },
    ash: {
        name: "ASH",
        address: "St. franciss street, Brgy. Kapitan Pepe, Cabanatuan City, Philippines 3100",
        hours: "6:30 am - 9:30 pm",
        contact: "0998 841 1224",
        price: "₱80 - ₱250",
        rating: "4.8",
        images: [
            "cafe/ash/ash-2.jpg",
            "cafe/ash/ash-3.jpg",
            "cafe/ash/ash-4.jpg",
            "cafe/ash/ash-5.jpg",
        ]
    },
    bfc: {
        name: "But First, Coffee",
        address: "Wellspring Complex, Villaluz Corner Mabini St. Extension, Cabanatuan City, Philippines, 3100",
        hours: "9 am - 9:15 pm",
        contact: "0939 456 5196",
        price: "₱99 - ₱250",
        rating: "4.6",
        images: [
            "cafe/butfirst/bfc.jpg",
            "cafe/butfirst/bfc-2.jpg",
            "cafe/butfirst/bfc-4.jpg",
            "cafe/butfirst/bfc-5.jpg",
        ]
    },
    timpla: {
        name: "Timpla Café",
        address: "32nd street General Tinio Street Extension, Cabanatuan City, 3100",
        hours: "10 am - 10 pm",
        contact: "0912 102 6953",
        price: " ₱75 - ₱249",
        rating: "5.0",
        images: [
            "cafe/timpla/timpla.jpg",
            "cafe/timpla/timpla-1.jpg",
            "cafe/timpla/timpla-2.jpg",
            "cafe/timpla/timpla-4.jpg",
        ]
    },
    theo: {
        name: "Theo's Diner",
        address: "Del Pilar Street, Cabanatuan City, Nueva Ecija",
        hours: "9 am - 9 pm",
        contact: "0970 710 7128",
        price: "₱100-500/pax",
        rating: "4.5",
        images: [
            "resto/theo'sdiner.jpg",
            "resto/theo/1.jpeg",
            "resto/theo/2.jpeg",
            "resto/theo/3.jpeg",
        ]
    },
    dads: {
        name: "Dad's Family Restaurant-Cabanatuan",
        address: "Fortaleza, Brgy. Bangad 3100 Cabanatuan City, Philippines",
        hours: "11 am - 9 pm",
        contact: "0939 507 0868",
        price: "₱200-400/pax.",
        rating: "4.6",
        images: [
            "resto/dad's.jpg",
            "resto/dad's/1.jpeg",
            "resto/dad's/2.jpeg",
            "resto/dad's/3.jpeg",
        ]
    },
    malamacau: {
        name: "Mala Macau",
        address: "Fernandez Building, Brgy. D.S Garcia, Circum. Road, Cabanatuan City, Philippines, 3100",
        hours: "Tuesday to Sunday (4:00 PM – 12:00 MN)",
        contact: "0952 472 7793",
        price: "₱100-500/pax.",
        rating: "4.9",
        images: [
            "resto/m.macau.jpg",
            "resto/mala/1.jpeg",
            "resto/mala/2.jpeg",
            "resto/mala/3.jpeg",
        ]
    },
    takusa: {
        name: "Takusa Ramen",
        address: "RCB Annex Sangitan East, Cabanatuan City, Philippines, 3100",
        hours: "2:00 pm - 10:00 pm",
        contact: "0924 171 1859",
        price: "₱89 - ₱288",
        rating: "4.7",
        images: [
            "resto/takusa.jpg",
            "resto/takusa/1.jpeg",
            "resto/takusa/2.jpeg",
            "resto/takusa/3.jpeg",
        ]
    },
    grazy: {
        name: "Grazy’s Biriani Cabanatuan",
        address: "M.De Leon, Cabanatuan City, Philippines, 3100",
        hours: "11:00 am - 10:00 pm",
        contact: "grazysbirianirestaurant0601@gmail.com",
        price: "₱54 - ₱500",
        rating: "5.0",
        images: [
            "resto/grazy.jpg",
            "resto/grazy's/1.jpeg",
            "resto/grazy's/2.jpeg",
            "resto/grazy's/3.jpeg",
        ]
    },
};

const params = new URLSearchParams(window.location.search);
const place = params.get("place");

const data = places[place];

document.getElementById("place-name").textContent = data.name;
document.getElementById("place-address").textContent = data.address;
document.getElementById("place-hours").textContent = data.hours;
document.getElementById("place-contact").textContent = data.contact;
document.getElementById("place-price").textContent = data.price;
document.getElementById("place-rating").textContent = "★".repeat(Math.round(data.rating)) + "☆".repeat(5 - Math.round(data.rating)) + " " + data.rating + "/5";

document.getElementById("place-image1").src = data.images[0];
document.getElementById("place-image2").src = data.images[1];
document.getElementById("place-image3").src = data.images[2];
document.getElementById("place-image4").src = data.images[3];