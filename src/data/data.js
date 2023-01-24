export const data = {
    goods: {
        pistols:[
            {
                id: "1.1",
                name: "Colt 1911",
                image: "../assets/pictures/M1911A1.png",
                caliber: "45ACP",
                manufacturer: "Colt Manufacturing Company",
                description: `The M1911 (Colt 1911 or Colt Government) is a single-action, 
                recoil-operated, semi-automatic pistol chambered for the .45 ACP cartridge. 
                The pistol's formal U.S. military designation as of 1940 was Automatic Pistol, 
                Caliber .45, M1911 for the original model adopted in March 1911, and Automatic Pistol, 
                Caliber .45, M1911A1 for the improved M1911A1 model which entered service in 1926. 
                The designation changed to Pistol, Caliber .45, Automatic, M1911A1 in the Vietnam War era.`,
                feedSystem: "7-round or 8-round (.45 ACP)",
                mass: 1100,
                cost: 508,
                
            },
            {
                id: "1.2",
                name: "Smith & Wesson Model 39",
                image: "../assets/pictures/SW39.jpg",
                caliber: "9mm",
                manufacturer: "Smith & Wesson",
                description: `During World War II, the German Walther P38 double action/single action 
                pistol impressed American ordnance personnel so much that the Army Ordnance Corps issued 
                a proposal for an American equivalent to the P38. In 1949, Smith & Wesson began development 
                of the Model 39 chambered in 9×19mm Luger and it entered the market in 1955. 
                It was the first U.S. designed double action (DA) semi-automatic pistol,
                 and was designed to replace the venerable M1911A1.
                  The 1911 was still extremely popular with law enforcement, military and civilian use, 
                  but only offered a single action trigger and a heavy steel frame.`,
                feedSystem: "8-round single column, detachable",
                mass: 780,
                cost: 390,   
            },
            {
                id: "1.3",
                name: "Beretta M9",
                image: "../assets/pictures/BerettaM9.jpg",
                caliber: "9mm",
                manufacturer: "Beretta",
                description: `The Beretta M9, officially the Pistol, Semiautomatic, 
                9mm, M9, is the designation for the Beretta 92FS semi-automatic pistol 
                used by the United States Armed Forces. The M9 was adopted 
                by the United States military as their service pistol in 1985.
                The 92FS won a competition in the 1980s to replace the M1911A1 
                as the primary sidearm of the U.S. military, beating many other 
                contenders, and only narrowly defeating the SIG Sauer P226 for 
                cost reasons. It officially entered service in 1990. Some other 
                pistols have been adopted to a lesser extent, namely the SIG P228 pistol, 
                and other models remain in use in certain niches.`,
                feedSystem: "8-round single column, detachable",
                mass: 970,
                cost: 460,   
            },
            {
                id: "1.4",
                name: "Mauser C96",
                image: "../assets/pictures/MauserM712.png",
                caliber: "7.65×21 Parabellum",
                manufacturer: "Mauser",
                description: `The Mauser C96 (Construktion 96) is a semi-automatic pistol that was originally 
                produced by German arms manufacturer Mauser from 1896 to 1937. Unlicensed copies of the gun were 
                also manufactured in Spain and China in the first half of the 20th century.
                The distinctive characteristics of the C96 are the integral box magazine in front of the trigger, 
                the long barrel, the wooden shoulder stock, which gives it the stability of a short-barreled rifle 
                and doubles as a holster or carrying case, and a grip shaped like the handle of a broom. The grip 
                earned the gun the nickname "broomhandle" in the English-speaking world, and in China the C96 was 
                nicknamed the "box cannon" because of its rectangular internal 
                magazine and because it could be holstered in its wooden box-like detachable stock.`,
                feedSystem: "10-round internal magazine fed by stripper clip",
                mass: 1130,
                cost: 600,   
            },
            {
                id: "1.5",
                name: "Smith & Wesson Model 4006",
                image: "../assets/pictures/SW4006.jpg",
                caliber: "9 mm",
                manufacturer: "Smith & Wesson",
                description: `The S&W 4006 features a stainless steel frame and slide, 
                double action/single action handgun with 4-inch barrel, slide-mounted de-cock/safety 
                and an 11-round staggered-column magazine. It was one of the new 3rd-generation S&W semi-autos, 
                designed with input from famed gunsmith Wayne Novak of Parkersburg, WV. 
                The 4006 introduced the new .40 S&W cartridge and featured a wraparound one-piece grip 
                made of Xenoy versus the earlier standard 2-piece grip panels, as well as low-profile 
                3-dot Novak sights.[citation needed]`,
                feedSystem: "11-round magazine",
                mass: 1050,
                cost: 470,   
            },

        ],
        revolvers:[
            {
                id: "2.1",
                name: "Colt Single Action Army",
                image: "../assets/pictures/ColtArmy.jpg",
                caliber: "45ACP",
                manufacturer: "Colt Manufacturing Company",
                description: `The Colt Single Action Army (also known as the SAA, Model P, Peacemaker, or M1873) 
                is a single-action revolver handgun. It was designed for the U.S. government service revolver trials
                of 1872 by Colt's Patent Firearms Manufacturing Company (today known as Colt's Manufacturing Company)
                and was adopted as the standard-issued pistol of the U.S. Army from 1873 until 1892.
                The Colt SAA has been offered in over 30 different calibers and various barrel lengths. 
                Its overall appearance has remained consistent since 1873. Colt has cancelled its production twice,
                 but brought it back due to popular demand. The revolver was dubbed the "Peacemaker", 
                 and is a famous piece of Americana and the American Wild West era, due to its popularity with ranchers, 
                 lawmen, and outlaws alike. Today, they are mainly bought as memorabilia by collectors and re-enactors. 
                 Its design has influenced the production of numerous other models from other companies.`,
                feedSystem: "6-round(.45 ACP)",
                mass: 1048,
                cost: 500,
            },
            {
                id: "2.2",
                name: "Colt Police Positive",
                image: "../assets/pictures/ColtPolice.png",
                caliber: "38 S&W",
                manufacturer: "Colt Manufacturing Company",
                description: `The Colt Police Positive is a small-frame, 
                double-action revolver featuring a six-round cylinder, 
                chambered for either .32 or .38 caliber. A .22 caliber model was also offered. 
                Designed primarily for sale to federal, state, or local law enforcement agencies, 
                the Police Positive was introduced into the firearms 
                market by Colt's Manufacturing Company in 1905.`,
                feedSystem: "6-round (.38 S&W)",
                mass: 990,
                cost: 550,
            },
            {
                id: "2.3",
                name: "Enfield No. 2",
                image: "../assets/pictures/EnfieldNo2.jpg",
                caliber: "38 S&W",
                manufacturer: "	RSAF Enfield",
                description: `The Enfield No. 2 was a British top-break revolver using the .38 S&W 
                round manufactured from 1930 to 1957. It was the standard British/Commonwealth sidearm 
                in the Second World War, alongside the Webley Mk IV and Smith & Wesson Victory Model 
                revolvers chambered in the same calibre.`,
                feedSystem: "6-round (.38 S&W)",
                mass: 765,
                cost: 490,
            },
            {
                id: "2.4",
                name: "Smith & Wesson Model 586",
                image: "../assets/pictures/SAW586.jpg",
                caliber: ".357 Magnum",
                manufacturer: "	Smith & Wesson",
                description: `The Smith & Wesson Model 586, is a six- or seven-shot 
                double-action revolver chambered for the .357 Magnum cartridge; 
                it will also chamber and fire .38 Special cartridges. 
                The Model 586 has a carbon steel construction and is available 
                in a blued or nickel finish; it is essentially the same firearm as the Model 686, 
                which has stainless steel construction. It is also known as 
                the Distinguished Combat Magnum.`,
                feedSystem: "6-round (.357 Magnum)",
                mass: 765,
                cost: 490,
            },
        ],
        shotguns:[],
        rifles:[],
        ammo:[],
        accessories: [
        ]
    },

}