const quotes = {
    happiness: [
        "Then We changed their affliction into ease, until they grew and multiplied and said: 'Our fathers were touched with both hardship and ease.' – (Quran 7:95)",
        "And We have certainly created man and We know what his soul whispers to him, and We are closer to him than [his] jugular vein. – (Quran 50:16)",
        "So remember Me; I will remember you. – (Quran 2:152)",
        "And He will give you from where you do not expect. – (Quran 65:3)",
        "Indeed, those who have believed and done righteous deeds – their Lord will guide them because of their faith. – (Quran 10:9)",
        "And We have not sent you, [O Muhammad], except as a mercy to the worlds. – (Quran 21:107)",
        "They will have whatever they desire with their Lord. – (Quran 39:34)",
        "And your Lord is going to give you, and you will be satisfied. – (Quran 93:5)",
        "Whoever does righteousness, whether male or female, while being a believer, We will surely grant them a good life. – (Quran 16:97)",
        "And you will see the angels surrounding the Throne, exalting [Allah] with praise of their Lord. – (Quran 39:75)"
    ],
    sadness: [
        "Do not grieve; indeed, Allah is with us. – (Quran 9:40)",
        "And be patient, for indeed, Allah does not allow the reward of those who do good to be lost. – (Quran 11:115)",
        "Indeed, your Lord is vast in forgiveness. – (Quran 53:32)",
        "And seek help through patience and prayer. – (Quran 2:45)",
        "Say, 'O My servants who have transgressed against themselves [by sinning], do not despair of the mercy of Allah.' – (Quran 39:53)",
        "So verily, with the hardship, there is relief. – (Quran 94:5)",
        "And Allah loves the patient. – (Quran 3:146)",
        "Perhaps Allah will bring about after that a different matter. – (Quran 65:1)",
        "And rely upon Allah; and sufficient is Allah as Disposer of affairs. – (Quran 33:3)",
        "Unquestionably, the help of Allah is near. – (Quran 2:214)"
    ],
    anxiety: [
        "Verily, in the remembrance of Allah do hearts find rest. – (Quran 13:28)",
        "And whoever fears Allah, He will make for him a way out. – (Quran 65:2)",
        "Allah does not burden a soul beyond that it can bear. – (Quran 2:286)",
        "Indeed, Allah is with the patient. – (Quran 8:46)",
        "And whoever puts his trust in Allah, then He will suffice him. – (Quran 65:3)",
        "And those who strive for Us – We will surely guide them to Our ways. – (Quran 29:69)",
        "Indeed, with hardship comes ease. – (Quran 94:6)",
        "But they plan, and Allah plans. And Allah is the best of planners. – (Quran 8:30)",
        "And He found you lost and guided [you]. – (Quran 93:7)",
        "So be patient. Indeed, the promise of Allah is truth. – (Quran 30:60)"
    ],
    anger: [
        "And when they are angry, they forgive. – (Quran 42:37)",
        "And do not be angry, for indeed, anger consumes good deeds just as fire consumes wood. – (Hadith)",
        "Those who restrain anger and pardon people – Allah loves the doers of good. – (Quran 3:134)",
        "And if an evil suggestion comes to you from Satan, then seek refuge in Allah. – (Quran 7:200)",
        "Indeed, Allah is with those who fear Him and those who are doers of good. – (Quran 16:128)",
        "The strong is not the one who overcomes people by his strength, but the strong is the one who controls himself while in anger. – (Hadith)",
        "So forgive with gracious forgiveness. – (Quran 15:85)",
        "And hasten to forgiveness from your Lord. – (Quran 3:133)",
        "Do not turn away from people with pride, nor walk in arrogance. – (Quran 31:18)",
        "And speak to people kindly. – (Quran 2:83)"
    ],
    loneliness: [
        "Indeed, with hardship comes ease. – (Quran 94:6)",
        "Say, 'Allah is sufficient for me. There is no deity except Him. In Him I put my trust.' – (Quran 9:129)",
        "Your ally is none but Allah and His Messenger. – (Quran 5:55)",
        "And be not like those who forgot Allah, so He made them forget themselves. – (Quran 59:19)",
        "And He is with you wherever you are. – (Quran 57:4)",
        "And We are closer to him than [his] jugular vein. – (Quran 50:16)",
        "So remember Me; I will remember you. – (Quran 2:152)",
        "If My servants ask about Me, I am near. – (Quran 2:186)",
        "Indeed, Allah does not wrong the people at all. – (Quran 10:44)",
        "Indeed, they will meet their Lord. – (Quran 6:31)"
    ],
    fear: [
        "And do not fear them but fear Me, if you are believers. – (Quran 3:175)",
        "And We will surely test you with something of fear and hunger and a loss of wealth. But give good tidings to the patient. – (Quran 2:155)",
        "Say, 'Never will we be struck except by what Allah has decreed for us.' – (Quran 9:51)",
        "Then Allah sent down His tranquility upon His Messenger and upon the believers. – (Quran 48:26)",
        "And whoever relies upon Allah – then He is sufficient for him. – (Quran 65:3)",
        "And they planned, but Allah planned. And Allah is the best of planners. – (Quran 3:54)",
        "If Allah should aid you, no one can overcome you. – (Quran 3:160)",
        "And put your trust in the Ever-Living, who does not die. – (Quran 25:58)",
        "And to Allah belong the unseen aspects of the heavens and the earth. – (Quran 16:77)",
        "Indeed, my Lord is near and responsive. – (Quran 11:61)"
    ]
};

function showQuote(emotion) {
    const quoteList = quotes[emotion];
    const randomIndex = Math.floor(Math.random() * quoteList.length);
    document.getElementById('quote').textContent = quoteList[randomIndex];
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
