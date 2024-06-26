const locations = [
  {
    title: "A Restaurant",
    address1: "3334 West Coast Hwy",
    address2: "Orange County, CA",
    coords: { lat: 33.6215233, lng: -117.9280581 },
  },
  {
    title: "Ace Hotel Downtown Los Angeles",
    address1: "929 S Broadway",
    address2: "Los Angeles, CA",
    coords: { lat: 34.041934, lng: -118.2570021 },
  },
  {
    title: "Agave Azul Kitchen & Tequila Bar",
    address1: "1320 Hermosa Ave",
    address2: "Los Angeles, CA",
    coords: { lat: 33.863327, lng: -118.4000165 },
  },
  {
    title: "Armando's Mexican Restaurant",
    address1: "9611 Garvey Ave Ste 126",
    address2: "Los Angeles, CA",
    coords: { lat: 34.06314589999999, lng: -118.0594993 },
  },
  {
    title: "Barbarella Restaurant & Bar",
    address1: "2171 Avenida De La Playa",
    address2: "San Diego, CA",
    coords: { lat: 32.8536352, lng: -117.2561066 },
  },
  {
    title: "Bestia",
    address1: "2121 E 7th Pl",
    address2: "Los Angeles, CA",
    coords: { lat: 34.0338622, lng: -118.2293054 },
  },
  {
    title: "Beverage Warehouse",
    address1: "4935 McConnell Ave Suite 21",
    address2: "Los Angeles, CA",
    coords: { lat: 33.9828832, lng: -118.4238938 },
  },
  {
    title: "Big Bar",
    address1: "1927 Hillhurst Ave",
    address2: "Los Angeles, CA",
    coords: { lat: 34.1062223, lng: -118.2877828 },
  },
  {
    title: "Bob’s Fine Wines",
    address1: "470 Camino De Estrella",
    address2: "Orange County, CA",
    coords: { lat: 33.4558787, lng: -117.6564912 },
  },
  {
    title: "Bullpen",
    address1: "8199 Clairemont Mesa Blvd",
    address2: "San Diego, CA",
    coords: { lat: 32.83228020000001, lng: -117.1480747 },
  },
  {
    title: "Caló Kitchen + Tequila",
    address1: "2191 Rosecrans Ave",
    address2: "Los Angeles, CA",
    coords: { lat: 33.9021613, lng: -118.3854521 },
  },
  {
    title: "Cannery Seafood of the Pacific",
    address1: "3010 Lafayette Ave",
    address2: "Orange County, CA",
    coords: { lat: 33.61503617524931, lng: -117.92744261969247 },
  },
  {
    title: "Cardiff Seaside Market",
    address1: "2087 San Elijo Ave",
    address2: "San Diego, CA",
    coords: { lat: 33.0219795, lng: -117.2819862 },
  },
  {
    title: "Casa Vieja",
    address1: "18401 Soledad Canyon Rd",
    address2: "Los Angeles, CA",
    coords: { lat: 34.4168507, lng: -118.4541455 },
  },
  {
    title: "Cha Cha’s Latin Kitchen",
    address1: "110 W Birch St #7",
    address2: "Los Angeles, CA",
    coords: { lat: 33.91873534612352, lng: -117.90046263133333 },
  },
  {
    title: "Champs Liquor #3",
    address1: "9414 Telegraph Rd",
    address2: "Downey, CA",
    coords: { lat: 33.95618622683681, lng: -118.1024973846596 },
  },
  {
    title: "Chris' Liquor & Deli",
    address1: "2275 Sunset Cliffs Blvd",
    address2: "San Diego, CA",
    coords: { lat: 32.7507597, lng: -117.2421321 },
  },
  {
    title: "Cove House",
    address1: "8030 Girard Ave",
    address2: "San Diego, CA",
    coords: { lat: 32.8492816809035, lng: -117.27477459204232 },
  },
  {
    title: "Crest Liquor",
    address1: "3787 Ingraham St",
    address2: "San Diego, CA",
    coords: { lat: 32.7885982, lng: -117.2370969 },
  },
  {
    title: "Death by Tequila",
    address1: "5965 Village Way e107",
    address2: "San Diego, CA",
    coords: { lat: 32.9618373, lng: -117.1894402 },
  },
  {
    title: "Dick’s Liquor",
    address1: "737 Pearl St #101a",
    address2: "San Diego, CA",
    coords: { lat: 32.83966762378282, lng: -117.27517161602174 },
  },
  {
    title: "Dominic's Ristorante Italiano",
    address1: "9921 Walker St",
    address2: "Orange County, CA",
    coords: { lat: 33.81867849758556, lng: -118.03788095832552 },
  },
  {
    title: "Downtown LA Proper Hotel",
    address1: "1100 S Broadway",
    address2: "Los Angeles, CA",
    coords: { lat: 34.039315, lng: -118.258852 },
  },
  {
    title: "E.P. & L.P.",
    address1: "603 N La Cienega Blvd",
    address2: "Los Angeles, CA",
    coords: { lat: 34.0821937, lng: -118.3767853 },
  },
  {
    title: "El Agave Restaurant & Tequileria",
    address1: "2304 San Diego Ave # B",
    address2: "San Diego, CA",
    coords: { lat: 32.749674580980354, lng: -117.19213458718909 },
  },
  {
    title: "El Matador",
    address1: "1768 Newport Blvd",
    address2: "Orange County, CA",
    coords: { lat: 33.6395965, lng: -117.9198153 },
  },
  {
    title: "El Paseo Inn",
    address1: "11 Olvera St",
    address2: "Los Angeles, CA",
    coords: { lat: 34.0575265, lng: -118.2376643 },
  },
  {
    title: "Emilio's Trattoria",
    address1: "16234 Ventura Blvd",
    address2: "Los Angeles, CA",
    coords: { lat: 34.1565334, lng: -118.4867402 },
  },
  {
    title: "En Fuego Cantina & Grill",
    address1: "1342 Camino Del Mar",
    address2: "San Diego, CA",
    coords: { lat: 32.95900868274983, lng: -117.26559086874427 },
  },
  {
    title: "Encanto Restaurant",
    address1: "2121 Hillhurst Ave",
    address2: "Los Angeles, CA",
    coords: { lat: 34.1106391, lng: -118.2877096 },
  },
  {
    title: "Esperanza Cocina de la Playa",
    address1: "309 Manhattan Beach Blvd",
    address2: "Los Angeles, CA",
    coords: { lat: 33.885467, lng: -118.4095577 },
  },
  {
    title: "Fast Times",
    address1: "3065 Clairemont Dr",
    address2: "San Diego, CA",
    coords: { lat: 32.7952142, lng: -117.1930586 },
  },
  {
    title: "Gracias Madre West Hollywood",
    address1: "8905 Melrose Ave",
    address2: "Los Angeles, CA",
    coords: { lat: 34.0810417, lng: -118.3869706 },
  },
  {
    title: "Harbor Market",
    address1: "901 Bayfront Ct #111",
    address2: "San Diego, CA",
    coords: { lat: 32.71653925021417, lng: -117.17187750253028 },
  },
  {
    title: "Harvard and Stone",
    address1: "5221 Hollywood Blvd",
    address2: "Los Angeles, CA",
    coords: { lat: 34.1019041, lng: -118.3042997 },
  },
  {
    title: "Hi-Time Wine Cellars",
    address1: "250 Ogle St",
    address2: "Orange County, CA",
    coords: { lat: 33.6329196, lng: -117.9178517 },
  },
  {
    title: "Hilltop Market & Liquor",
    address1: "815 Indianapolis Ave",
    address2: "Orange County, CA",
    coords: { lat: 33.66563802010785, lng: -117.9888892779339 },
  },
  {
    title: "Hippo",
    address1: "5916 1/2 N Figueroa St",
    address2: "Los Angeles, CA",
    coords: { lat: 34.1106427, lng: -118.1903372 },
  },
  {
    title: "Home & Away",
    address1: "2222 San Diego Ave",
    address2: "San Diego, CA",
    coords: { lat: 32.747922, lng: -117.1911227 },
  },
  {
    title: "House of Liquor",
    address1: "465 W. Broadway",
    address2: "Glendale, CA",
    coords: { lat: 34.147407316722116, lng: -118.26408326931923 },
  },
  {
    title: "Jensen’s Foods",
    address1: "955 Catalina Blvd #101",
    address2: "San Diego, CA",
    coords: { lat: 32.72249440823919, lng: -117.24549006302867 },
  },
  {
    title: "Jimmy’s Famous American Tavern",
    address1: "25001 Dana Point Harbor Dr",
    address2: "Orange County, CA",
    coords: { lat: 33.4628682, lng: -117.6945021 },
  },
  {
    title: "Jimmy’s Famous American Tavern",
    address1: "4990 N Harbor Dr",
    address2: "San Diego, CA",
    coords: { lat: 32.725089, lng: -117.2243299 },
  },
  {
    title: "John & Pete's Fine Wine & Spirits",
    address1: "621 N La Cienega Blvd",
    address2: "Los Angeles, CA",
    coords: { lat: 34.0826095, lng: -118.3768055 },
  },
  {
    title: "K&L Wine Merchants",
    address1: "1400 Vine St",
    address2: "Los Angeles, CA",
    coords: { lat: 34.096494, lng: -118.3263445 },
  },
  {
    title: "Komo’s Cocina",
    address1: "5730 2nd St",
    address2: "Los Angeles, CA",
    coords: { lat: 33.756697741028155, lng: -118.12229438716228 },
  },
  {
    title: "Kona Kai Resort & Spa",
    address1: "1551 Shelter Island Dr",
    address2: "San Diego, CA",
    coords: { lat: 32.7105077, lng: -117.2312113 },
  },
  {
    title: "L'Auberge Del Mar",
    address1: "1540 Camino Del Mar",
    address2: "San Diego, CA",
    coords: { lat: 32.9605783, lng: -117.2659123 },
  },
  {
    title: "LA Cha Cha Chá",
    address1: "812 E 3rd St",
    address2: "Los Angeles, CA",
    coords: { lat: 34.0457249, lng: -118.235827 },
  },
  {
    title: "La Cabañita",
    address1: "3445 N Verdugo Rd",
    address2: "Los Angeles, CA",
    coords: { lat: 34.201656, lng: -118.2280147 },
  },
  {
    title: "La Doña",
    address1: "1852 Bacon St",
    address2: "San Diego, CA",
    coords: { lat: 32.74630045221813, lng: -117.25179218718904 },
  },
  {
    title: "Longhorn Bar & Grill",
    address1: "6519 Mission Gorge Rd",
    address2: "San Diego, CA",
    coords: { lat: 32.7916463, lng: -117.096577 },
  },
  {
    title: "Luce Bar & Kitchen",
    address1: "1959 Morena Blvd",
    address2: "San Diego, CA",
    coords: { lat: 32.7815266, lng: -117.2069332 },
  },
  {
    title: "Luciana's Ristorante",
    address1: "24312 Del Prado Ave",
    address2: "Orange County, CA",
    coords: { lat: 33.4652342, lng: -117.7053098 },
  },
  {
    title: "Major Market",
    address1: "845 S Main Ave",
    address2: "Fallbrook, CA",
    coords: { lat: 33.37656440287675, lng: -117.2527188 },
  },
  {
    title: "Major Market Inc",
    address1: "1855 S Centre City Pkwy",
    address2: "San Diego, CA",
    coords: { lat: 33.10101960000001, lng: -117.0754548 },
  },
  {
    title: "Majordomo",
    address1: "1725 Naud St",
    address2: "Los Angeles, CA",
    coords: { lat: 34.0690822, lng: -118.2261672 },
  },
  {
    title: "Manuela",
    address1: "907 E 3rd St",
    address2: "Los Angeles, CA",
    coords: { lat: 34.0461032, lng: -118.2346604 },
  },
  {
    title: "McGregor's Grill",
    address1: "10475 San Diego Mission Rd",
    address2: "San Diego, CA",
    coords: { lat: 32.7844474, lng: -117.1110096 },
  },
  {
    title: "Mega Liquor",
    address1: "2020 W Valley Blvd",
    address2: "Los Angeles, CA",
    coords: { lat: 34.0770238, lng: -118.1459974 },
  },
  {
    title: "Miguel's Cocina",
    address1: "2912 Shelter Island Dr",
    address2: "San Diego, CA",
    coords: { lat: 32.723143294707, lng: -117.2299645 },
  },
  {
    title: "Mission Wine & Spirits - Pasadena",
    address1: "1785 E. Washington Blvd.",
    address2: "Pasadena, CA 91104",
    coords: { lat: 34.1693832, lng: -118.1136518 },
  },
  {
    title: "Mission Wine & Spirits - Glendale",
    address1: "825 W. Glenoaks Blvd.",
    address2: "Glendale, CA 91202",
    coords: { lat: 34.1608945, lng: -118.2739948 },
  },
  {
    title: "Mission Wine & Spirits - South Glendale",
    address1: "708 S. Glendale Ave.",
    address2: "Glendale, CA 91205",
    coords: { lat: 34.1386689, lng: -118.2506066 },
  },
  {
    title: "Mission Wine & Spirits - Woodland Hills",
    address1: "6307 Platt Ave.",
    address2: "Woodland Hills, CA 91367",
    coords: { lat: 34.1858869, lng: -118.6433 },
  },
  {
    title: "Monarch Ocean Pub",
    address1: "1555 Camino Del Mar Suite 322",
    address2: "San Diego, CA",
    coords: { lat: 32.9602439, lng: -117.2648027 },
  },
  {
    title: "Nueva",
    address1: "822 Washington Blvd",
    address2: "Los Angeles, CA",
    coords: { lat: 33.9880494, lng: -118.4517884 },
  },
  {
    title: "Old Town Mexican Café",
    address1: "2489 San Diego Ave",
    address2: "San Diego, CA",
    coords: { lat: 32.7523207, lng: -117.1947126 },
  },
  {
    title: "Old Town Tequila",
    address1: "2304 San Diego Ave Ste A",
    address2: "San Diego, CA",
    coords: { lat: 32.7496601, lng: -117.192142 },
  },
  {
    title: "Old Venice Restaurant",
    address1: "2910 Cañon St",
    address2: "San Diego, CA",
    coords: { lat: 32.721280931399434, lng: -117.2309833846596 },
  },
  {
    title: "Olivetti",
    address1: "9010 Melrose Ave",
    address2: "Los Angeles, CA",
    coords: { lat: 34.0805673, lng: -118.3882603 },
  },
  {
    title: "Open Bar",
    address1: "4302 Mission Blvd",
    address2: "San Diego, CA",
    coords: { lat: 32.7938168, lng: -117.2548206 },
  },
  {
    title: "Otium",
    address1: "222 S Hope St",
    address2: "Los Angeles, CA",
    coords: { lat: 34.0544161, lng: -118.2512461 },
  },
  {
    title: "Pink Dot West Hollywood",
    address1: "8495 Sunset Blvd",
    address2: "Los Angeles, CA",
    coords: { lat: 34.0947664, lng: -118.3759153 },
  },
  {
    title: "Pizza Nova",
    address1: "5050 N Harbor Dr",
    address2: "San Diego, CA",
    coords: { lat: 32.7250301, lng: -117.225528 },
  },
  {
    title: "Porch & Swing",
    address1: "2010 Main St Suite 170",
    address2: "Orange County, CA",
    coords: { lat: 33.684028549331885, lng: -117.85194237366947 },
  },
  {
    title: "Pueblo",
    address1: "877 Hornblend St",
    address2: "San Diego, CA",
    coords: { lat: 32.7957343, lng: -117.2535116 },
  },
  {
    title: "Riviera Liquor House",
    address1: "4114 W Point Loma Blvd",
    address2: "San Diego, CA",
    coords: { lat: 32.75386400000001, lng: -117.2243898 },
  },
  {
    title: "Roadrunner Spirits",
    address1: "10680 Los Alamitos Blvd",
    address2: "Orange County, CA",
    coords: { lat: 33.8077609, lng: -118.0712294 },
  },
  {
    title: "San Diego Mission Bay Resort",
    address1: "1775 E Mission Bay Dr",
    address2: "San Diego, CA",
    coords: { lat: 32.7791722, lng: -117.2110678 },
  },
  {
    title: "Sand 'n' Sea",
    address1: "3006 Garrison St",
    address2: "San Diego, CA",
    coords: { lat: 32.72607679377857, lng: -117.22859606020033 },
  },
  {
    title: "Shore Rider Bar",
    address1: "2168 Avenida De La Playa",
    address2: "San Diego, CA",
    coords: { lat: 32.8540854, lng: -117.2562852 },
  },
  {
    title: "Stars & Stripes Mart",
    address1: "2907 Shelter Island Dr #111",
    address2: "San Diego, CA",
    coords: { lat: 32.72163549095175, lng: -117.23045971602491 },
  },
  {
    title: "Stump's Family Marketplace",
    address1: "3770 Voltaire St",
    address2: "San Diego, CA",
    coords: { lat: 32.7411855, lng: -117.2291442 },
  },
  {
    title: "Tannins Restaurant & Wine Bar",
    address1: "27211 Ortega Hwy",
    address2: "Orange County, CA",
    coords: { lat: 33.5044959, lng: -117.6538717 },
  },
  {
    title: "Tequila’s Bar & Grill",
    address1: "13627 Victory Blvd",
    address2: "Los Angeles, CA",
    coords: { lat: 34.1868891, lng: -118.429935 },
  },
  {
    title: "The Black Cat",
    address1: "3909 Sunset Blvd",
    address2: "Los Angeles, CA",
    coords: { lat: 34.0922208, lng: -118.2796587 },
  },
  {
    title: "The Cordova Bar",
    address1: "1319 Morena Blvd",
    address2: "San Diego, CA",
    coords: { lat: 32.77234755541613, lng: -117.20195923136393 },
  },
  {
    title: "The Coyote Bar & Grill",
    address1: "300 Carlsbad Village Dr",
    address2: "San Diego, CA",
    coords: { lat: 33.159249, lng: -117.3503546 },
  },
  {
    title: "The Draycott",
    address1: "15255 Palisades Village Ln",
    address2: "Los Angeles, CA",
    coords: { lat: 34.0473331, lng: -118.5250515 },
  },
  {
    title: "The Hollywood Roosevelt",
    address1: "7000 Hollywood Blvd",
    address2: "Los Angeles, CA",
    coords: { lat: 34.1012445, lng: -118.341766 },
  },
  {
    title: "The Maybourne Beverly Hills",
    address1: "225 N Canon Dr",
    address2: "Los Angeles, CA",
    coords: { lat: 34.0681258, lng: -118.3985971 },
  },
  {
    title: "The Pennant Bar",
    address1: "2893 Mission Blvd",
    address2: "San Diego, CA",
    coords: { lat: 32.7655444, lng: -117.2510543 },
  },
  {
    title: "The Regal Bar",
    address1: "8344 La Mesa Blvd",
    address2: "La Mesa, CA",
    coords: { lat: 32.766129854516635, lng: -117.01819749999997 },
  },
  {
    title: "The Village Store",
    address1: "1145 Rosecrans St",
    address2: "San Diego, CA",
    coords: { lat: 32.7216852, lng: -117.23129 },
  },
  {
    title: "The West Hollywood EDITION",
    address1: "9040 Sunset Blvd",
    address2: "Los Angeles, CA",
    coords: { lat: 34.090481, lng: -118.3892207 },
  },
  {
    title: "The Wine House",
    address1: "2311 Cotner Ave",
    address2: "Los Angeles, CA",
    coords: { lat: 34.0374898, lng: -118.438192 },
  },
  {
    title: "Thompson Hollywood",
    address1: "1541 Wilcox Ave",
    address2: "Los Angeles, CA",
    coords: { lat: 34.0989016, lng: -118.3314309 },
  },
  {
    title: "Thunderbolt",
    address1: "1263 W Temple St",
    address2: "Los Angeles, CA",
    coords: { lat: 34.0664107, lng: -118.254126 },
  },
  {
    title: "Toca Madera West Hollywood",
    address1: "8450 W 3rd St",
    address2: "Los Angeles, CA",
    coords: { lat: 34.0730053, lng: -118.3749382 },
  },
  {
    title: "Tortilla Jo's",
    address1: "Downtown Disney",
    address2: "Los Angeles, CA",
    coords: { lat: 33.8091327, lng: -117.9236622 },
  },
  {
    title: "Valley Liquor",
    address1: "1201 Hotel Cir S",
    address2: "San Diego, CA",
    coords: { lat: 32.7590551, lng: -117.1735775 },
  },
  {
    title: "World Famous",
    address1: "711 Pacific Beach Dr",
    address2: "San Diego, CA",
    coords: { lat: 32.7909501, lng: -117.2548337 },
  },
  {
    title: "Yucatan Grill",
    address1: "550 E Pacific Coast Hwy",
    address2: "Los Angeles, CA",
    coords: { lat: 33.74533720000001, lng: -118.1060446 },
  },
  {
    title: "Zebulon",
    address1: "2478 Fletcher Dr",
    address2: "Los Angeles, CA",
    coords: { lat: 34.1071925, lng: -118.2547744 },
  },
  {
    title: "Zel's Del Mar",
    address1: "1247 Camino Del Mar",
    address2: "San Diego, CA",
    coords: { lat: 32.9573997, lng: -117.2642764 },
  },
  {
    title: "Cache Creek Casino",
    address1: "14455 CA-16",
    address2: "Brooks, CA 95606",
    coords: { lat: 38.7348656, lng: -122.1419608 },
  },
  {
    title: "Casa Orozco",
    address1: "7995 Amador Valley Blvd",
    address2: "Dublin, CA 94568",
    coords: { lat: 37.7060508, lng: -121.936245 },
  },
  {
    title: "Cielito Cocina",
    address1: "445 Railroad Ave",
    address2: "Danville, CA 94526",
    coords: { lat: 37.8186567, lng: -121.9969389 },
  },
  {
    title: "El Nido",
    address1: "107 Town And Country Dr",
    address2: "Danville, California",
    coords: { lat: 37.8142099, lng: -121.9985233 },
  },
  {
    title: "Los Panchos",
    address1: "480 San Ramon Valley Blvd",
    address2: "Danville, CA 94526",
    coords: { lat: 37.81883310000001, lng: -121.9957396 },
  },
  {
    title: "Luna Loca",
    address1: "500 Sycamore Valley Rd W",
    address2: "Danville, CA 94526",
    coords: { lat: 37.8134748, lng: -121.996739 },
  },
  {
    title: "Mikuni Sushi",
    address1: "1530 J St STE 150",
    address2: "Sacramento, CA 95814",
    coords: { lat: 38.57776500000001, lng: -121.4856464 },
  },
  {
    title: "Piatti",
    address1: "571 Pavilions Ln",
    address2: "Sacramento, CA 95825",
    coords: { lat: 38.5748093, lng: -121.4095306 },
  },
  {
    title: "Piatti",
    address1: "625 Redwood Hwy",
    address2: "Mill Valley, CA 94941",
    coords: { lat: 37.8905477, lng: -122.5177824 },
  },
  {
    title: "Piatti",
    address1: "100 Sycamore Valley Rd",
    address2: "Danville, CA 94526",
    coords: { lat: 37.8116748, lng: -121.9965835 },
  },
  {
    title: "PlumpJack Wine & Spirits",
    address1: "4011 24th St",
    address2: "San Francisco, CA 94114",
    coords: { lat: 37.7513179, lng: -122.4322542 },
  },
  {
    title: "PlumpJack Wine & Spirits",
    address1: "3201 Fillmore St",
    address2: "San Francisco, CA 94123",
    coords: { lat: 37.7990968, lng: -122.4361294 },
  },
  {
    title: "The Cantina",
    address1: "651 E Blithedale Ave",
    address2: "Mill Valley, CA 94941",
    coords: { lat: 37.9012041, lng: -122.5276392 },
  },
  {
    title: "Depot Liquor",
    address1: "1001 Vine St",
    address2: "Brownwood, TX",
    coords: { lat: 31.7150719, lng: -98.9787542 },
  },
  {
    title: "D and D Liquor Store",
    address1: "1507 W Front St",
    address2: "Goldthwaite, TX",
    coords: { lat: 31.4556391, lng: -98.5702774 },
  },
  {
    title: "FILO'S Liqours",
    address1: "4301 Rio Mesa Dr",
    address2: "Abilene, TX",
    coords: { lat: 32.3636294, lng: -99.7816369 },
  },
  {
    title: "Hootin Holler Package",
    address1: "759 Gun Barrel Ln",
    address2: "Gun Barrel City, TX",
    coords: { lat: 32.3144711, lng: -96.1128195 },
  },
  {
    title: "Longhorn Wine & Spirits",
    address1: "2500 S Hwy 183 Suite 610",
    address2: "Austin, TX",
    coords: { lat: 30.2115698, lng: -97.68615299999999 },
  },
  {
    title: "Lone Star Spirits",
    address1: "3283 South 14th Street",
    address2: "2990 Pine St, TX",
    coords: { lat: 31.9685988, lng: -99.9018131 },
  },
  {
    title: "On The Rocks Liquor",
    address1: "808 TX-16",
    address2: "San Saba, TX",
    coords: { lat: 31.1771819, lng: -98.7203942 },
  },
  {
    title: "Papi's Liquor",
    address1: "413 W 12th St",
    address2: "Monahans, TX",
    coords: { lat: 31.5823793, lng: -102.8930592 },
  },
  {
    title: "Total Wine & More",
    address1: "11066 Pecan Park Blvd Suite 117",
    address2: "Cedar Park, TX",
    coords: { lat: 30.46985, lng: -97.799194 },
  },
  {
    title: "Total Wine & More",
    address1: "9350 N Central Expy",
    address2: "Dallas, TX",
    coords: { lat: 32.8745338, lng: -96.76830919999999 },
  },
  {
    title: "Total Wine & More",
    address1: "5016 San Felipe St",
    address2: "Houston, TX",
    coords: { lat: 29.7512355, lng: -95.4623002 },
  },
];

//convert locations to csv
const fs = require("fs");
const csv = locations
  .map(
    (location) => `${location.title},${location.address1},${location.address2}`,
  )
  .join("\n");
fs.writeFileSync("locations.csv", csv);
