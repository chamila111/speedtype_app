 const listofwords = [
     'Bitcoin’s wild speculation and surging popularity has caused scientists and economic analysts to rate the digital cryptocurrency as a danger to the environment. More than 60% of Bitcoin’s mining cost is in the electricity it uses. And as its value rises, so does the entire currency’s energy consumption and its potential impact on climate change.',
     'Stop. Listen. Do you hear anything? Perhaps the sound of quiet conversation or laughter, the distant thrum of traffic, the buzz of fluorescent lighting, or the whirring of a fan in your air-conditioning unit. These are all sounds that are influenced or determined by architectural design and building acoustics.',
     'Some food impulses are hard to resist. The smell of bacon or hot buttered popcorn, the sight of cream cakes or burgers--these can lead to an impulse buy within seconds. Delicious food in any form can trigger a response that bypasses rational thought and wrecks our best intentions.',
     'Hurricane season is a fearful and anxious time of year for many people. Tropical cyclones and storms occur in a geographical belt affecting mostly US coastal states, but the physical and financial destruction they cause mean that science must improve constantly to minimize their effects on society.',
     'The fourth largest piece of space debris ever re-entered the earths atmosphere yesterday and made a splash just off the coast of Africa. Narrowly missing some major landmarks in its path, this piece of a rocket could have caused some major damage.',
     'monk kandy popcorn desert blanket warm cutlet health monkey kandian pop dessert blank warn cutet healthy',
     '“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”',
     'Life is like riding a bicycle. To keep your balance, you must keep moving.',
     'What word in the English language does the following: The first two letters signify a male, the first three letters signify a female, the first four letters signify a great, while the entire world signifies a great woman. What is the word?heroine',
     'I am a word that begins with the letter “i.” If you add the letter “a” to me, I become a new word with a different meaning, but that sounds exactly the same. What word am I?isle'
     
     
 ]
 const random = Math.floor(Math.random() * listofwords.length)
 const wordcloud = listofwords[random]
         .split(' ')
        //  .sort(() => Math.random() > .5 ? 1 : -1 )
export default wordcloud;

    


