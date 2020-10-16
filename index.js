let champions = [
{"name": "Aatrox", "role": ['top', 'jungle']},
{"name": "Ahri", "role": ['mid']},
{"name": "Akali", "role": ['top', 'mid']},
{"name": "Alistar", "role": ['sup']},
{"name": "Amumu", "role": ['jungle']},
{"name": "Anivia", "role": ['mid']},
{"name": "Annie", "role": ['mid']},
{"name": "Aphelios", "role": ['bot']},
{"name": "Ashe", "role": ['bot']},
{"name": "Aurelion Sol", "role": ['mid']},
{"name": "Azir", "role": ['mid']},
{"name": "Bard", "role": ['sup']},
{"name": "Blitzcrank", "role": ['sup']},
{"name": "Brand", "role": ['sup', 'mid']},
{"name": "Braum", "role": ['sup']},
{"name": "Caitlyn", "role": ['bot']},
{"name": "Camille", "role": ['top']},
{"name": "Cassiopeia", "role": ['mid']},
{"name": "ChoGath", "role": ['top']},
{"name": "Corki", "role": ['mid']},
{"name": "Darius", "role": ['top']},
{"name": "Diana", "role": ['mid']},
{"name": "DrMundo", "role": ['top', 'jungle']},
{"name": "Draven", "role": ['bot']},
{"name": "Ekko", "role": ['mid', 'jungle']},
{"name": "Elise", "role": ['jungle']},
{"name": "Evelynn", "role": ['jungle']},
{"name": "Ezreal", "role": ['bot', 'mid']},
{"name": "Fiddlesticks", "role": ['jungle', 'top']},
{"name": "Fiora", "role": ['top']},
{"name": "Fizz", "role": ['jungle']},
{"name": "Galio", "role": ['mid', 'sup']},
{"name": "Gangplank", "role": ['top']},
{"name": "Garen", "role": ['top']},
{"name": "Gnar", "role": ['top']},
{"name": "Gragas", "role": ['jungle']},
{"name": "Graves", "role": ['jungle']},
{"name": "Hecarim", "role": ['jungle']},
{"name": "Heimerdinger", "role": ['mid']},
{"name": "Illaoi", "role": ['top']},
{"name": "Irelia", "role": ['top']},
{"name": "Ivern", "role": ['jungle']},
{"name": "Janna", "role": ['sup']},
{"name": "Jarvan IV", "role": ['jungle']},
{"name": "Jax", "role": ['top', 'jungle']},
{"name": "Jayce", "role": ['top']},
{"name": "Jhin", "role": ['bot']},
{"name": "Jinx", "role": ['bot']},
{"name": "KaiSa", "role": ['bot']},
{"name": "Kalista", "role": ['bot']},
{"name": "Karma", "role": ['sup']},
{"name": "Karthus", "role": ['mid', 'jungle']},
{"name": "Kassadin", "role": ['mid']},
{"name": "Katarina", "role": ['mid']},
{"name": "Kayle", "role": ['top']},
{"name": "Kayn", "role": ['jungle']},
{"name": "Kennen", "role": ['top']},
{"name": "KhaZix", "role": ['jungle']},
{"name": "Kindred", "role": ['jungle']},
{"name": "Kled", "role": ['top']},
{"name": "KogMaw", "role": ['bot']},
{"name": "LeBlanc", "role": ['mid']},
{"name": "Lee Sin", "role": ['jungle']},
{"name": "Leona", "role": ['sup']},
{"name": "Lillia", "role": ['jungle']},
{"name": "Lissandra", "role": ['mid']},
{"name": "Lucian", "role": ['mid', 'bot']},
{"name": "Lulu", "role": ['sup']},
{"name": "Lux", "role": ['mid', 'sup']},
{"name": "Malphite", "role": ['top', 'sup']},
{"name": "Malzahar", "role": ['mid']},
{"name": "Maokai", "role": ['mid', 'sup']},
{"name": "Master Yi", "role": ['jungle']},
{"name": "Miss Fortune", "role": ['bot']},
{"name": "Mordekaiser", "role": ['top', 'jungle', 'mid']},
{"name": "Morgana", "role": ['sup']},
{"name": "Nami", "role": ['sup']},
{"name": "Nasus", "role": ['top']},
{"name": "Nautilus", "role": ['sup']},
{"name": "Neeko", "role": ['mid']},
{"name": "Nidalee", "role": ['jungle']},
{"name": "Nocturne", "role": ['jungle']},
{"name": "NunuWillump", "role": ['jungle']},
{"name": "Olaf", "role": ['jungle']},
{"name": "Orianna", "role": ['mid']},
{"name": "Ornn", "role": ['top']},
{"name": "Pantheon", "role": ['jungle', 'sup']},
{"name": "Poppy", "role": ['top']},
{"name": "Pyke", "role": ['sup']},
{"name": "Qiyana", "role": ['mid']},
{"name": "Quinn", "role": ['top']},
{"name": "Rakan", "role": ['sup']},
{"name": "Rammus", "role": ['jungle']},
{"name": "RekSai", "role": ['jungle']},
{"name": "Renekton", "role": ['top']},
{"name": "Rengar", "role": ['jungle']},
{"name": "Riven", "role": ['top']},
{"name": "Rumble", "role": ['top']},
{"name": "Ryze", "role": ['mid']},
{"name": "Samira", "role": ['bot', 'mid']},
{"name": "Sejuani", "role": ['jungle']},
{"name": "Senna", "role": ['sup', 'bot']},
{"name": "Sett", "role": ['sup', 'top']},
{"name": "Shaco", "role": ['jungle']},
{"name": "Shen", "role": ['top', 'sup']},
{"name": "Shyvana", "role": ['jungle']},
{"name": "Singed", "role": ['top']},
{"name": "Sion", "role": ['top']},
{"name": "Sivir", "role": ['bot']},
{"name": "Skarner", "role": ['jungle']},
{"name": "Sona", "role": ['sup']},
{"name": "Soraka", "role": ['sup']},
{"name": "Swain", "role": ['sup', 'mid']},
{"name": "Sylas", "role": ['mid', 'top']},
{"name": "Syndra", "role": ['mid']},
{"name": "Tahm Kench", "role": ['top', 'sup']},
{"name": "Taliyah", "role": ['mid']},
{"name": "Talon", "role": ['mid']},
{"name": "Taric", "role": ['sup']},
{"name": "Teemo", "role": ['top']},
{"name": "Thresh", "role": ['sup']},
{"name": "Tristana", "role": ['bot']},
{"name": "Trundle", "role": ['jungle']},
{"name": "Tryndamere", "role": ['top']},
{"name": "Twisted Fate", "role": ['mid']},
{"name": "Twitch", "role": ['bot']},
{"name": "Udyr", "role": ['jungle']},
{"name": "Urgot", "role": ['top']},
{"name": "Varus", "role": ['bot']},
{"name": "Vayne", "role": ['bot']},
{"name": "Veigar", "role": ['mid']},
{"name": "VelKoz", "role": ['mid', 'sup']},
{"name": "Vi", "role": ['jungle']},
{"name": "Viktor", "role": ['mid', 'top']},
{"name": "Vladimir", "role": ['mid', 'top']},
{"name": "Volibear", "role": ['jungle', 'top']},
{"name": "Warwick", "role": ['jungle']},
{"name": "Wukong", "role": ['jungle']},
{"name": "Xayah", "role": ['bot']},
{"name": "Xerath", "role": ['mid', 'sup']},
{"name": "Xin Zhao", "role": ['jungle']},
{"name": "Yasuo", "role": ['bot', 'mid', 'top']},
{"name": "Yone", "role": ['top', 'mid']},
{"name": "Yorick", "role": ['top']},
{"name": "Yuumi", "role": ['sup']},
{"name": "Zac", "role": ['jungle']},
{"name": "Zed", "role": ['mid']},
{"name": "Ziggs", "role": ['mid']},
{"name": "Zilean", "role": ['sup']},
{"name": "Zoe", "role": ['mid']},
{"name": "Zyra","role": ['sup']}
]

let role = 'top';
let roleArray = champions.filter(filterChemps)

function filterChemps(champ){
  if (champ.role.includes(role)){
    return true
  } return false
};

function setRole(value){
  role = value;

  let btns = document.getElementsByClassName('role');

  for (let i = 0; i < btns.length; i += 1) {
    btns[i].classList.remove('selected')
  }

  document.getElementById(value).classList.add('selected');
  roleArray = champions.filter(filterChemps);
}


function chooseChemp(){
   let number = Math.random() * (roleArray.length - 0) + 0;
   number = Math.floor(number);

   let name = roleArray[number].name;
   let el = document.getElementById('photo');

   // el.textContent = name;
   el.style.backgroundImage = `url(./photos/${name}.jpg)`;
}
