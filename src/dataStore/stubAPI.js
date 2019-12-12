import _ from "lodash";

class StubAPI{
    constructor(){
        this.driversF1 = [
            {
                id: 1,
                name: "Lewis Hamilton",
                description: "Lewis Carl Davidson Hamilton(born 7 January 1985) is a British racing driver who races in Formula One for Mercedes-AMG Petronas Motorsport. A six-time Formula One World Champion",
                linkInsta: "https://www.instagram.com/lewishamilton/?hl=pl",
                linkBackground: "https://en.wikipedia.org/wiki/Lewis_Hamilton",
                image: "https://www.formula1.com/content/fom-website/en/drivers/lewis-hamilton/_jcr_content/image.img.640.medium.jpg/1554818913486.jpg" 
            },
            {
                id: 2,
                name: "Valteri Bottas",
                description: "Valtteri Viktor Bottas (born 28 August 1989) is a Finnish racing driver currently competing in Formula One with Mercedes, having previously driven for Williams from 2013 to 2016.",
                linkInsta: "https://www.instagram.com/valtteribottas/?hl=pl",
                linkBackground: "https://en.wikipedia.org/wiki/Valtteri_Bottas",
                image: "https://www.formula1.com/content/fom-website/en/drivers/valtteri-bottas/_jcr_content/image.img.640.medium.jpg/1554818929157.jpg"
            },
            {
                id: 3,
                name: "Charles Leclerc",
                description: "Charles Leclerc (born 16 October 1997) is a Monégasque racing driver, currently driving in Formula One for Ferrari. Leclerc won the GP3 Series championship in 2016 and the FIA Formula 2 Championship in 2017.",
                linkInsta: "https://www.instagram.com/charles_leclerc/?hl=pl",
                linkBackground: "https://en.wikipedia.org/wiki/Charles_Leclerc",
                image: "https://www.formula1.com/content/fom-website/en/drivers/charles-leclerc/_jcr_content/image.img.640.medium.jpg/1567179277948.jpg"
            }
        ]

        this.driversF2 = [
            {
                id: 1,
                name: "Nyck de Vries",
                description: "Nyck de Vries (born 6 February 1995) is a Dutch racing driver currently competing in Formula 2 for ART Grand Prix. He won the 2010 and 2011 Karting World Championships and in 2014 the Formula Renault 2.0 Alps and Formula Renault 2.0 Eurocup Championships. He was signed to the McLaren young driver programme from January 2010 until May 2019, and Audi Sport racing academy in 2016. In 2019 he won the FIA Formula 2 World Championship",
                profile: "http://www.fiaformula2.com/Teams-and-Drivers/Drivers/Nyck-de-Vries/",
                image: "https://pbs.twimg.com/profile_images/1171794348545052672/8BYyM6DY_400x400.jpg" 
            },
            {
                id: 2,
                name: "Nicholas Latifi",
                description: "Nicholas Latifi (born 29 June 1995) is a Canadian racing driver. He formerly served as Racing Point Force India's F1 development driver, and in 2019 he became Williams's test and reserve driver.",
                profile: "http://www.fiaformula2.com/Teams-and-Drivers/Drivers/Nicholas-Latifi/",
                image: "https://www.motorsport-total.com/img/2019/190828/279039_w620_h500.jpg?ts=1566974192" 
            },
            {
                id: 3,
                name: "Luca Ghiotto",
                description: "Luca Ghiotto (born 24 February 1995) is an Italian racing driver currently competing in Formula 2 for UNI-Virtuosi Racing, and FIA WEC with Ginetta.",
                profile: "http://www.fiaformula2.com/Teams-and-Drivers/Drivers/Luca-Ghiotto/",
                image: "https://www.google.ie/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwiX3uqMvKnmAhXSoVwKHXCIA3kQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.automobilsport.com%2Frace-categories--24%2C137776%2CLuca-Ghiotto-flies-to-GP3-pole-in-Spielberg%2Cnews.htm&psig=AOvVaw0ETtpEtO8Q8yRA2bE6080i&ust=1576011928635401" 
            },
        ]

        this.driversF3 = [
            {
                id: 1,
                name: "Robert Shwartzman",
                description: "Robert Mikhailovich Shwartzman (born 16 September 1999) is a Russian racing driver currently competing in the FIA Formula 3 Championship. He is a member of the Ferrari Driver Academy. He is the 2018 Toyota Racing Series champion and the 2019 FIA Formula 3 champion.",
                profile: "http://www.fiaformula3.com/Teams-and-Drivers/Drivers/Robert-Shwartzman/",
                image: "http://smpracing.tv/upload/resize_cache/iblock/f92/736_384_2/f925bbffb357466fc80f4f9980ec7ac2.JPG"
            },
            {
                id: 2,
                name: "Marcus Armstrong",
                description: "Marcus Armstrong (born 29 July 2000) is a New Zealand motor racing driver who competes in the 2019 FIA F3 Championship for Prema Powerteam.",
                profile: "http://www.fiaformula3.com/Teams-and-Drivers/Drivers/Marcus-Armstrong/",
                image: "https://pbs.twimg.com/profile_images/1122919050219278338/tny--5SG_400x400.jpg"
            },
            {
                id: 3,
                name: "Jehan Daruvela",
                description: "Jehan Daruvala (born 1 October 1998) is an Indian racing driver, currently competing in the FIA Formula 3 Championship with Prema Powerteam. He is a protégé of the Force India F1 team, after being one of three winners of a 'One in a Billion hunt' organized by the team in 2011",
                profile: "http://www.fiaformula3.com/Teams-and-Drivers/Drivers/Jehan-Daruvala/",
                image: "https://images.financialexpress.com/2017/07/Jewan-Ashok-Twitter.jpg"
            },
        ]

        this.tracks = [
            {
                id: 1,
                name: "Melbourne Grand Prix",
                description: "The Melbourne Grand Prix Circuit is a street circuit around Albert Park Lake, only a few kilometres outh of central Melbourne. It is used annually as a racetrack for the Formula One Australian Grand Prix, Supercars Championship Melbourne 400 and associated support races. The circuit has an FIA Grade 1 licence.",
                link: "https://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit",
                image: "https://www.austadiums.com/stadiums/photos/albert-park.jpg"
            },
            {
                id: 2,
                name: "Bahrain Grand Prix",
                description: "The Bahrain International Circuit is a motorsport venue opened in 2004 and used for drag racing, GP2 Series and the annual Bahrain Grand Prix. The 2004 Grand Prix was the first held in the Middle East.",
                link: "https://en.wikipedia.org/wiki/Bahrain_Grand_Prix",
                image: "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fs3-eu-west-1.amazonaws.com%2Fhtsi-ez-prod%2Fez%2Fimages%2F5%2F8%2F5%2F0%2F930585-1-eng-GB%2F354a4235-9da4-4b7e-afef-39422288175b.jpg?width=620&dpr=1&format=jpg&source=htsi"
            },
            {
                id: 3,
                name: "Chinese Grand Prix",
                description: "The Shanghai International Circuit is a motorsport race track, situated in the Jiading District, Shanghai. The circuit is best known as the venue for the annual Formula 1 Chinese Grand Prix which has been hosted since 2004.",
                link: "https://en.wikipedia.org/wiki/Chinese_Grand_Prix",
                image: "https://i.pinimg.com/474x/f9/f4/95/f9f495fb26739fe14f84d3d2408da8d4--aerial-view-race-tracks.jpg"
            }
        ]
    }


    getAllf1(){
        return this.driversF1;
    }

    getAllf2(){
        return this.driversF2;
    }

    getAllf3(){
        return this.driversF3;
    }

    getAlltracks(){
        return this.tracks;
    }

    addf1(name, description, linkInsta, linkBackground, image){
        let id = 1;
        let last = _.last(this.driversF1);
        if(last){
            id = last.id + 1;
        }
        let len = this.driversF1.length;
        let newLen = this.driversF1.push(
            {
                id,
                name,
                description,
                linkInsta,
                linkBackground,
                image
            });
            return newLen > len;
    }

    addf2(name, description, profile, image){
        let id = 1;
        let last = _.last(this.driversF2);
        if(last){
            id = last.id + 1;
        }
        let len = this.driversF2.length;
        let newLen = this.driversF2.push(
            {
                id,
                name,
                description,
                profile,
                image
            });
            return newLen > len;
    }

    addf3(name, description, profile, image){
        let id = 1;
        let last = _.last(this.driversF3);
        if(last){
            id = last.id + 1;
        }
        let len = this.driversF3.length;
        let newLen = this.driversF3.push(
            {
                id,
                name,
                description,
                profile,
                image
            });
            return newLen > len;
    }
    
    addtracks(name, description, link, image){
        let id = 1;
        let last = _.last(this.tracks);
        if(last){
            id = last.id + 1;
        }
        let len = this.tracks.length;
        let newLen = this.tracks.push(
            {
                id,
                name,
                description,
                link,
                image
            });
            return newLen > len;
    }

    getDriverf1(id){
        let index = _.findIndex(this.driversF1, driver => driver.id === id);
        let result = index !== -1 ? this.driversF1[index] : null;
        return result;
    }

    getDriverf2(id){
        let index = _.findIndex(this.driversF2, driver => driver.id === id);
        let result = index !== -1 ? this.driversF2[index] : null;
        return result;
    }

    getDriverf3(id){
        let index = _.findIndex(this.driversF3, driver => driver.id === id);
        let result = index !== -1 ? this.driversF3[index] : null;
        return result;
    }

    getTracks(id){
        let index = _.findIndex(this.tracks, track => track.id === id);
        let result = index !== -1 ? this.tracks[index] : null;
        return result;
    }
}

export default new StubAPI();