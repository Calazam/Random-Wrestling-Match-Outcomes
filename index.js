let wrestlers =  ['Jon Moxley', 'Bryan Danielson', 'Wheeler Yuta', 'Katsuyori Shibata', 'Kazuchika Okada', 'Miyu Yamashita', 'Shingo Takagi']
let  conditions = ['pinfall', 'submission', 'disqualification']

        // Moves
        const JonMoxley = {
        Pinfall: ['with the Death Rider', 'with a curb stomp', 'after an Avalanche Butterfly Suplex'],
        Submission: ['with the Bulldog Choke', 'after applying a Fujiwara Armbar']
        }
        const BryanDanielson = {
                Pinfall: ['after delivering the Busaiku Knee', 'with a bridging Dragon Suplex', 'with the Regal Plex'],
                Submission: ['after applying the LeBell Lock', 'with the Cattle Mutilation']
        }
        const WheelerYuta = {
                Pinfall: ['after a Diving DDT', 'with the Seatbelt Clutch'],
                Submission: ['with the Yuta Lock', 'with the Bulldog Choke']
        }
        const KatsuyoriShibata = {
                Pinfall: ['after delivering a G2PK', 'with a Penalty Kick'],
                Submission: ['upon applying an Octopus Hold', 'with a Triangle Armbar']
        }
        const KazuchikaOkada = {
                Pinfall: ['after a Rainmaker', 'with a Bridging German Suplex'],
                Submission: ['with the Money Clip']
        }
        const MiyuYamashita = {
                Pinfall: ['after delivering Crash Rabbit Heat', 'after a Skull Kick'],
                Submission: ['with the Tough Rolling Hook']
        }
        const ShingoTakagi = {
                Pinfall: ['with the Last of the Dragon', 'after a Made in Japan', 'after landing the Pumping Bomber'],
                Submission: ['with a Manjigatame']
        }


//Determine Wrestler1
let wrestler1 = wrestlers[Math.floor(Math.random() * wrestlers.length)];


//Determine Wrestler 2
let wrestler2 = wrestlers[Math.floor(Math.random() * wrestlers.length)];
while(wrestler2 === wrestler1) {
        wrestler2 = wrestlers[Math.floor(Math.random() * wrestlers.length)];
}

//Determine Condition
let condition = conditions[Math.floor(Math.random() * conditions.length)]

//DetermineMove
let method = undefined
let wrassler = undefined



if (wrestler1 === "Jon Moxley") {
        wrassler = JonMoxley
} else if (wrestler1 === "Bryan Danielson") {
        wrassler = BryanDanielson
}else if (wrestler1 === "Wheeler Yuta") {
        wrassler = WheelerYuta
}else if (wrestler1 === "Kazuchika Okada") {
        wrassler = KazuchikaOkada
}else if (wrestler1 === "Katsuyori Shibata") {
        wrassler = KatsuyoriShibata
}else if (wrestler1 === "Miyu Yamashita") {
        wrassler = MiyuYamashita
}else if (wrestler1 === "Shingo Takagi") {
        wrassler = ShingoTakagi
}
if (condition === 'pinfall') {
        method = wrassler.Pinfall
} else if (condition === 'submission') {
        method = wrassler.Submission
}

let move = method[Math.floor(Math.random() * method.length)]






// Final Log
         console.log(`${wrestler1} defeats ${wrestler2} via ${condition} ${move}`)