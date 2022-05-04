const spring=document.getElementById('spring')
const summer=document.getElementById('summer')
const fall=document.getElementById('fall')
const winter=document.getElementById('winter')
spring.addEventListener('click',function(event){
    if(event.target.tagName==='IMG' && event.target.parentElement.nextElementSibling.innerText==='The Beginning of Spring' ){
        event.target.nextElementSibling.innerHTML='Everything recovers, cultivates and sows, sings warblers and dances swallows, green buds sprout, and stingers begin to vibrate Yang.'
        event.target.nextElementSibling.classList.remove('hide')
    }
    if(event.target.tagName==='IMG' && event.target.parentElement.nextElementSibling.innerText==='Rain Water' ){
        event.target.nextElementSibling.innerHTML='Its drizzling, the day is getting warmer, and the rain is sending fertilizer and busy one after another.'
        event.target.nextElementSibling.classList.remove('hide')
    }
    if(event.target.tagName==='IMG' && event.target.parentElement.nextElementSibling.innerText==='The Waking of Insects' ){
        event.target.nextElementSibling.innerHTML='Spring thunder rings, everything grows, a thunderbolt wakes up snakes and insects, the weather warms up and rain falls.'
        event.target.nextElementSibling.classList.remove('hide')
    }
    if(event.target.tagName==='IMG' && event.target.parentElement.nextElementSibling.innerText==='The Spring Equinox' ){
        event.target.nextElementSibling.innerHTML='The courtyard is a little deep. Willows and willows brush the heart. The day and night are divided equally, and the swallows return in spring.'
        event.target.nextElementSibling.classList.remove('hide')
    }
    if(event.target.tagName==='IMG' && event.target.parentElement.nextElementSibling.innerText==='Pure Brightness' ){
        event.target.nextElementSibling.innerHTML='Drizzle in succession, spring tea is fragrant, tomb sweeping and ancestor worship, spring outing, afforestation and willow evergreen.'
        event.target.nextElementSibling.classList.remove('hide')
    }
    if(event.target.tagName==='IMG' && event.target.parentElement.nextElementSibling.innerText==='Grain Rain' ){
        event.target.nextElementSibling.innerHTML='Rain begets a hundred valleys, rain breaks frost, pray for disaster elimination and sacrifice Cangjie'
        event.target.nextElementSibling.classList.remove('hide')
    }
    if(event.target.tagName==='B'){
        event.target.classList.add('hide')
    }
})
summer.addEventListener('click',function(event){
    if(event.target.tagName==='IMG' && event.target.parentElement.nextElementSibling.innerText==='The Beginning of Summer' ){
        event.target.nextElementSibling.innerHTML='Mole crows, earthworms come out, and wild vegetables grow day by day'
        event.target.nextElementSibling.classList.remove('hide')
    }
    if(event.target.tagName==='IMG' && event.target.parentElement.nextElementSibling.innerText==='Lesser Fullness of Grain' ){
        event.target.nextElementSibling.innerHTML='Birds with cherry blossoms smile at transplanting seedlings, and the ridge head wheat ears begin to fill.'
        event.target.nextElementSibling.classList.remove('hide')
    }
    if(event.target.tagName==='IMG' && event.target.parentElement.nextElementSibling.innerText==='Grain in Beard' ){
        event.target.nextElementSibling.innerHTML='In grain in ear season, everything is busy, birds and fish sing, and plum rain rises up the pond'
        event.target.nextElementSibling.classList.remove('hide')
    }
    if(event.target.tagName==='IMG' && event.target.parentElement.nextElementSibling.innerText==='The Summer Solstice' ){
        event.target.nextElementSibling.innerHTML='Antlers fall off, cicadas chirp endlessly, plum rain continues in the south of the Yangtze River, and Koi swim in the pond.'
        event.target.nextElementSibling.classList.remove('hide')
    }
    if(event.target.tagName==='IMG' && event.target.parentElement.nextElementSibling.innerText==='Lesser Heat' ){
        event.target.nextElementSibling.innerHTML='Its hot and windy. Ice cream can relieve the summer heat. Pedestrians go out with umbrellas. Dumplings are used to appetize their appetites.'
        event.target.nextElementSibling.classList.remove('hide')
    }
    if(event.target.tagName==='IMG' && event.target.parentElement.nextElementSibling.innerText==='Greater Heat' ){
        event.target.nextElementSibling.innerHTML='In dog days of high temperature and extreme heat, the lazy fan is cool, the pond is playing to avoid the heat, and the watermelon is delicious and sweet.'
        event.target.nextElementSibling.classList.remove('hide')
    }
    if(event.target.tagName==='B'){
        event.target.classList.add('hide')
    }
   
})
fall.addEventListener('click',function(event){
    if(event.target.tagName==='IMG' && event.target.parentElement.nextElementSibling.innerText==='The Beginning of Autumn' ){
        event.target.nextElementSibling.innerHTML='When the summer is gone, the leaves fall and the autumn is known. The cicadas are sad and the grain is ripe.'
        event.target.nextElementSibling.classList.remove('hide')
    }
    if(event.target.tagName==='IMG' && event.target.parentElement.nextElementSibling.innerText==='The End of Heat' ){
        event.target.nextElementSibling.innerHTML='The autumn rain is cold, the granary is full of grain, the autumn is high and crisp, and the world is thundering.'
        event.target.nextElementSibling.classList.remove('hide')
    }
    if(event.target.tagName==='IMG' && event.target.parentElement.nextElementSibling.innerText==='White Dew' ){
        event.target.nextElementSibling.innerHTML='The cool wind comes, the white dew falls, the cold cicadas chirp and the wild geese return, just when the citrus is plump.'
        event.target.nextElementSibling.classList.remove('hide')
    }
    if(event.target.tagName==='IMG' && event.target.parentElement.nextElementSibling.innerText==='The Autumn Equinox' ){
        event.target.nextElementSibling.innerHTML='The autumnal equinox is dedicated to the moon, day and night are long, the water is dry, the field is cracked, and the osmanthus fragrance.'
        event.target.nextElementSibling.classList.remove('hide')
    }
    if(event.target.tagName==='IMG' && event.target.parentElement.nextElementSibling.innerText==='Cold Dew' ){
        event.target.nextElementSibling.innerHTML='Curling up cool breeze, drinking chrysanthemum, wine, night cool as water, grass Wutong yellow.'
        event.target.nextElementSibling.classList.remove('hide')
    }
    if(event.target.tagName==='IMG' && event.target.parentElement.nextElementSibling.innerText==='Frosts Descent' ){
        event.target.nextElementSibling.innerHTML='The weather is getting colder, the dew is freezing, the red persimmon is sweet and soft, and the maple leaves are like fire.'
        event.target.nextElementSibling.classList.remove('hide')
    }
    if(event.target.tagName==='B'){
        event.target.classList.add('hide')
    }
    
})
winter.addEventListener('click',function(event){
    if(event.target.tagName==='IMG' && event.target.parentElement.nextElementSibling.innerText==='The Beginning of Winter' ){
        event.target.nextElementSibling.innerHTML='When the river water begins to condense, it is shocked by thunder in winter. All things are collected to avoid the cold.'
        event.target.nextElementSibling.classList.remove('hide')
    }
    if(event.target.tagName==='IMG' && event.target.parentElement.nextElementSibling.innerText==='Lesser Snow' ){
        event.target.nextElementSibling.innerHTML='At the beginning of Taihang, snow fell and birds flew away from thousands of mountains. Farmers were busy storing vegetables to keep out the winter cold.'
        event.target.nextElementSibling.classList.remove('hide')
    }
    if(event.target.tagName==='IMG' && event.target.parentElement.nextElementSibling.innerText==='Greater Snow' ){
        event.target.nextElementSibling.innerHTML='Thousands of miles of ice, thousands of miles of snow, cold weather, bacon incense.'
        event.target.nextElementSibling.classList.remove('hide')
    }
    if(event.target.tagName==='IMG' && event.target.parentElement.nextElementSibling.innerText==='The Winter Solstice' ){
        event.target.nextElementSibling.innerHTML='Blizzard low temperature, no business for thousands of tourists, south hot pot, North dumplings and Chimonanthus grandiflorum.'
        event.target.nextElementSibling.classList.remove('hide')
    }
    if(event.target.tagName==='IMG' && event.target.parentElement.nextElementSibling.innerText==='Lesser Cold' ){
        event.target.nextElementSibling.innerHTML='Light cold and heavy cold, cold into ice, you close the snow, red stove warm.'
        event.target.nextElementSibling.classList.remove('hide')
    }
    if(event.target.tagName==='IMG' && event.target.parentElement.nextElementSibling.innerText==='Greater Cold' ){
        event.target.nextElementSibling.innerHTML='Rain and snow, Laba fragrance, firecracker sound, strong annual flavor.'
        event.target.nextElementSibling.classList.remove('hide')
    }
    if(event.target.tagName==='B'){
        event.target.classList.add('hide')
    }
   
})
