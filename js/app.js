randomGodApp = angular.module('randomGodApp', ['ngAnimate'])

randomGodApp.controller('RandomGodController', ['$scope', '$sce', function($scope, $sce) {

$scope.showFilters = false;
  var init = function() {
    $scope.randomize();
  }

  $scope.filters= {
    "Pantheon": [],
    "Class": [],
    "Power_Type": []
  }

  $scope.toggleFilter = function(type, entry) {
    location = $scope.filters[type].indexOf(entry)
    //it's in there, so remove it
    if(location > -1)
      $scope.filters[type].splice(location, 1);
  }

  $scope.customFilter = function(god){
		var inPantheon = ($scope.filters.Pantheon.indexOf(god.Pantheon) < 0)
		var inClass = ($scope.filters.Class.indexOf(god.Class) < 0)
		var inPType = ($scope.filters.Power_Type.indexOf(god.Power_Type) < 0)

		return (inPantheon && inClass && inPType);
	};

  $scope.fading = false;
  $scope.appearing = false;
  $scope.pantheons = ["Japanese", "Norse", "Greek", "Roman", "Chinese", "Hindu", "Mayan"]
  $scope.godClasses = ["Hunter", "Guardian", "Mage", "Warrior", "Assassin"]
  $scope.powerTypes = ["Magical", "Physical"]

  $scope.pantheonIsActive = false
  $scope.powerTypeIsActive = false
  $scope.classIsActive - false

  $scope.getImage = function(god) {
    newName = god.Name.replace(/ /g, '')
    newName = newName.replace("'", "").toLowerCase()
    return newName.charAt(0).toUpperCase() + newName.slice(1) + ".jpg"
  }

  $scope.randomize = function() {

    value = Math.floor((Math.random() * $scope.gods.length));
    while($scope.gods[value] === $scope.chosen) {
      value = Math.floor((Math.random() * $scope.gods.length));
    }
    $scope.chosen = $scope.gods[value];
  }

  $scope.checkActivated = function() {
    if($scope.pantheonIsActive){
      return 'activated'
    }
  }

  $scope.gods = [
    {
      "Name": "Agni",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/2/29/SkinArt_Agni_Default.jpg",
      "Pantheon": "Hindu",
      "Subtitle": "God of Fire",
      "Attack_Type": "Ranged",
      "Power_Type": "Magical",
      "Class": "Mage"
    },
    {
      "Name": "Ah Muzen Cab",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/1/10/SkinArt_AhMuzenCab_Default.jpg",
      "Pantheon": "Mayan",
      "Subtitle": "God of Bees",
      "Attack_Type": "Ranged",
      "Power_Type": "Physical",
      "Class": "Hunter"
    },
    {
      "Name": "Ah Puch",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/c/c9/SkinArt_AhPuch_Default.jpg",
      "Pantheon": "Mayan",
      "Subtitle": "Horrific God of Decay",
      "Attack_Type": "Ranged",
      "Power_Type": "Magical",
      "Class": "Mage"
    },
    {
      "Name": "Amaterasu",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/8/8a/SkinArt_Amaterasu_Default.jpg",
      "Pantheon": "Japanese",
      "Subtitle": "The Shining Light",
      "Attack_Type": "Melee",
      "Power_Type": "Physical",
      "Class": "Warrior"
    },
    {
      "Name": "Anhur",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/1/1e/SkinArt_Anhur_Default.jpg",
      "Pantheon": "Egyptian",
      "Subtitle": "Slayer of Enemies",
      "Attack_Type": "Ranged",
      "Power_Type": "Physical",
      "Class": "Hunter"
    },
    {
      "Name": "Anubis",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/5/59/SkinArt_Anubis_Default.jpg",
      "Pantheon": "Egyptian",
      "Subtitle": "God of the Dead",
      "Attack_Type": "Ranged",
      "Power_Type": "Magical",
      "Class": "Mage"
    },
    {
      "Name": "Ao Kuang",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/3/3b/SkinArt_AoKuang_Default.jpg",
      "Pantheon": "Chinese",
      "Subtitle": "Dragon King of the Eastern Seas",
      "Attack_Type": "Melee",
      "Power_Type": "Magical",
      "Class": "Mage"
    },
    {
      "Name": "Aphrodite",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/3/3b/SkinArt_Aphrodite_Default.jpg",
      "Pantheon": "Greek",
      "Subtitle": "Goddess of Beauty",
      "Attack_Type": "Ranged",
      "Power_Type": "Magical",
      "Class": "Mage"
    },
    {
      "Name": "Apollo",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/8/8e/SkinArt_Apollo_Default.jpg",
      "Pantheon": "Greek",
      "Subtitle": "God of Music",
      "Attack_Type": "Ranged",
      "Power_Type": "Physical",
      "Class": "Hunter"
    },
    {
      "Name": "Arachne",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/a/a8/SkinArt_Arachne_Default.jpg",
      "Pantheon": "Greek",
      "Subtitle": "The Weaver",
      "Attack_Type": "Melee",
      "Power_Type": "Physical",
      "Class": "Assassin"
    },
    {
      "Name": "Ares",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/3/33/SkinArt_Ares_Default.jpg",
      "Pantheon": "Greek",
      "Subtitle": "God of War",
      "Attack_Type": "Melee",
      "Power_Type": "Magical",
      "Class": "Guardian"
    },
    {
      "Name": "Artemis",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/5/53/SkinArt_Artemis_Default.jpg",
      "Pantheon": "Greek",
      "Subtitle": "Goddess of the Hunt",
      "Attack_Type": "Ranged",
      "Power_Type": "Physical",
      "Class": "Hunter"
    },
    {
      "Name": "Athena",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/d/d7/SkinArt_Athena_Default.jpg",
      "Pantheon": "Greek",
      "Subtitle": "Goddess of Wisdom",
      "Attack_Type": "Melee",
      "Power_Type": "Magical",
      "Class": "Guardian"
    },
    {
      "Name": "Awilix",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/0/00/SkinArt_Awilix_Default.jpg",
      "Pantheon": "Mayan",
      "Subtitle": "Goddess of the Moon",
      "Attack_Type": "Melee",
      "Power_Type": "Physical",
      "Class": "Assassin"
    },
    {
      "Name": "Bacchus",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/d/d0/SkinArt_Bacchus_Default.jpg",
      "Pantheon": "Roman",
      "Subtitle": "God of Wine",
      "Attack_Type": "Melee",
      "Power_Type": "Magical",
      "Class": "Guardian"
    },
    {
      "Name": "Bakasura",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/f/fd/SkinArt_Bakasura_Default.jpg",
      "Pantheon": "Hindu",
      "Subtitle": "The Great Devourer",
      "Attack_Type": "Melee",
      "Power_Type": "Physical",
      "Class": "Assassin"
    },
    {
      "Name": "Bastet",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/c/c7/SkinArt_Bastet_Default.jpg",
      "Pantheon": "Egyptian",
      "Subtitle": "Goddess of Cats",
      "Attack_Type": "Melee",
      "Power_Type": "Physical",
      "Class": "Assassin"
    },
    {
      "Name": "Bellona",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/a/aa/SkinArt_Bellona_Default.jpg",
      "Pantheon": "Roman",
      "Subtitle": "Goddess of War",
      "Attack_Type": "Melee",
      "Power_Type": "Physical",
      "Class": "Warrior"
    },
    {
      "Name": "Cabrakan",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/a/a9/SkinArt_Cabrakan_Default.jpg",
      "Pantheon": "Mayan",
      "Subtitle": "Destroyer of Mountains",
      "Attack_Type": "Melee",
      "Power_Type": "Magical",
      "Class": "Guardian"
    },
    {
      "Name": "Chaac",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/e/e4/SkinArt_Chaac_Default.jpg",
      "Pantheon": "Mayan",
      "Subtitle": "God of Rain",
      "Attack_Type": "Melee",
      "Power_Type": "Physical",
      "Class": "Warrior"
    },
    {
      "Name": "Chang'e",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/9/95/SkinArt_ChangE_Default.jpg",
      "Pantheon": "Chinese",
      "Subtitle": "Faerie of the Moon",
      "Attack_Type": "Ranged",
      "Power_Type": "Magical",
      "Class": "Mage"
    },
    {
      "Name": "Chiron",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/8/8b/SkinArt_Chiron_Default.jpg",
      "Pantheon": "Greek",
      "Subtitle": "The Great Teacher",
      "Attack_Type": "Ranged",
      "Power_Type": "Physical",
      "Class": "Hunter"
    },
    {
      "Name": "Chronos",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/a/a8/SkinArt_Chronos_Default.jpg",
      "Pantheon": "Greek",
      "Subtitle": "Keeper of Time",
      "Attack_Type": "Ranged",
      "Power_Type": "Magical",
      "Class": "Mage"
    },
    {
      "Name": "Cupid",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/6/69/SkinArt_Cupid_Default.jpg",
      "Pantheon": "Roman",
      "Subtitle": "God of Love",
      "Attack_Type": "Ranged",
      "Power_Type": "Physical",
      "Class": "Hunter"
    },
    {
      "Name": "Erlang Shen",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/0/01/SkinArt_ErlangShen_Default.jpg",
      "Pantheon": "Chinese",
      "Subtitle": "The Illustrious Sage",
      "Attack_Type": "Melee",
      "Power_Type": "Physical",
      "Class": "Warrior"
    },
    {
      "Name": "Fafnir",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/4/49/SkinArt_Fafnir_Default.jpg",
      "Pantheon": "Norse",
      "Subtitle": "Lord of Glittering Gold",
      "Attack_Type": "Melee",
      "Power_Type": "Magical",
      "Class": "Guardian"
    },
    {
      "Name": "Fenrir",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/6/68/SkinArt_Fenrir_Default.jpg",
      "Pantheon": "Norse",
      "Subtitle": "The Unbound",
      "Attack_Type": "Melee",
      "Power_Type": "Physical",
      "Class": "Assassin"
    },
    {
      "Name": "Freya",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/c/c9/SkinArt_Freya_Default_V2.jpg",
      "Pantheon": "Norse",
      "Subtitle": "Queen of the Valkyries",
      "Attack_Type": "Melee",
      "Power_Type": "Magical",
      "Class": "Mage"
    },
    {
      "Name": "Geb",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/8/89/SkinArt_Geb_Default.jpg",
      "Pantheon": "Egyptian",
      "Subtitle": "God of Earth",
      "Attack_Type": "Melee",
      "Power_Type": "Magical",
      "Class": "Guardian"
    },
    {
      "Name": "Guan Yu",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/5/50/SkinArt_GuanYu_Default.jpg",
      "Pantheon": "Chinese",
      "Subtitle": "Saint of War",
      "Attack_Type": "Melee",
      "Power_Type": "Physical",
      "Class": "Warrior"
    },
    {
      "Name": "Hades",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/8/81/SkinArt_Hades_Default.jpg",
      "Pantheon": "Greek",
      "Subtitle": "King of the Underworld",
      "Attack_Type": "Ranged",
      "Power_Type": "Magical",
      "Class": "Guardian"
    },
    {
      "Name": "He Bo",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/e/e2/SkinArt_HeBo_Default.jpg",
      "Pantheon": "Chinese",
      "Subtitle": "God of the Yellow River",
      "Attack_Type": "Ranged",
      "Power_Type": "Magical",
      "Class": "Mage"
    },
    {
      "Name": "Hel",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/b/b6/SkinArt_Hel_Default.jpg",
      "Pantheon": "Norse",
      "Subtitle": "Goddess of the Underworld",
      "Attack_Type": "Ranged",
      "Power_Type": "Magical",
      "Class": "Mage"
    },
    {
      "Name": "Hercules",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/d/da/SkinArt_Hercules_Default.jpg",
      "Pantheon": "Roman",
      "Subtitle": "Champion of Rome",
      "Attack_Type": "Melee",
      "Power_Type": "Physical",
      "Class": "Warrior"
    },
    {
      "Name": "Hou Yi",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/4/4c/SkinArt_HouYi_Default.jpg",
      "Pantheon": "Chinese",
      "Subtitle": "Defender of the Earth",
      "Attack_Type": "Ranged",
      "Power_Type": "Physical",
      "Class": "Hunter"
    },
    {
      "Name": "Hun Batz",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/5/56/SkinArt_HunBatz_Default.jpg",
      "Pantheon": "Mayan",
      "Subtitle": "The Howler Monkey God",
      "Attack_Type": "Melee",
      "Power_Type": "Physical",
      "Class": "Assassin"
    },
    {
      "Name": "Isis",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/0/0a/SkinArt_Isis_Default.jpg",
      "Pantheon": "Egyptian",
      "Subtitle": "Goddess of Magic",
      "Attack_Type": "Ranged",
      "Power_Type": "Magical",
      "Class": "Mage"
    },
    {
      "Name": "Janus",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/0/04/SkinArt_Janus_Default.jpg",
      "Pantheon": "Roman",
      "Subtitle": "God of Portals and Transitions",
      "Attack_Type": "Ranged",
      "Power_Type": "Magical",
      "Class": "Mage"
    },
    {
      "Name": "Jing Wei",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/0/0d/SkinArt_JingWei_Default.jpg",
      "Pantheon": "Chinese",
      "Subtitle": "The Oathkeeper",
      "Attack_Type": "Ranged",
      "Power_Type": "Physical",
      "Class": "Hunter"
    },
    {
      "Name": "Kali",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/d/d8/SkinArt_Kali_Default.jpg",
      "Pantheon": "Hindu",
      "Subtitle": "Goddess of Destruction",
      "Attack_Type": "Melee",
      "Power_Type": "Physical",
      "Class": "Assassin"
    },
    {
      "Name": "Khepri",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/e/e3/SkinArt_Khepri_Default.jpg",
      "Pantheon": "Egyptian",
      "Subtitle": "The Dawn Bringer",
      "Attack_Type": "Melee",
      "Power_Type": "Magical",
      "Class": "Guardian"
    },
    {
      "Name": "Kukulkan",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/7/73/SkinArt_Kukulkan_Default.jpg",
      "Pantheon": "Mayan",
      "Subtitle": "Serpent of the Nine Winds",
      "Attack_Type": "Ranged",
      "Power_Type": "Magical",
      "Class": "Mage"
    },
    {
      "Name": "Kumbhakarna",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/3/33/SkinArt_Kumbhakarna_Default.jpg",
      "Pantheon": "Hindu",
      "Subtitle": "The Sleeping Giant",
      "Attack_Type": "Melee",
      "Power_Type": "Magical",
      "Class": "Guardian"
    },
    {
      "Name": "Loki",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/8/88/SkinArt_Loki_Default.jpg",
      "Pantheon": "Norse",
      "Subtitle": "The Trickster God",
      "Attack_Type": "Melee",
      "Power_Type": "Physical",
      "Class": "Assassin"
    },
    {
      "Name": "Medusa",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/0/03/SkinArt_Medusa_Default.jpg",
      "Pantheon": "Greek",
      "Subtitle": "The Gorgon",
      "Attack_Type": "Ranged",
      "Power_Type": "Physical",
      "Class": "Hunter"
    },
    {
      "Name": "Mercury",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/6/60/SkinArt_Mercury_Default.jpg",
      "Pantheon": "Roman",
      "Subtitle": "Messenger of the Gods",
      "Attack_Type": "Melee",
      "Power_Type": "Physical",
      "Class": "Assassin"
    },
    {
      "Name": "Ne Zha",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/d/d4/SkinArt_NeZha_Default.jpg",
      "Pantheon": "Chinese",
      "Subtitle": "The Third Lotus Prince",
      "Attack_Type": "Melee",
      "Power_Type": "Physical",
      "Class": "Assassin"
    },
    {
      "Name": "Neith",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/5/5b/SkinArt_Neith_Default.jpg",
      "Pantheon": "Egyptian",
      "Subtitle": "Weaver of Fate",
      "Attack_Type": "Ranged",
      "Power_Type": "Physical",
      "Class": "Hunter"
    },
    {
      "Name": "Nemesis",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/c/c3/SkinArt_Nemesis_Default.jpg",
      "Pantheon": "Greek",
      "Subtitle": "Goddess of Vengeance",
      "Attack_Type": "Melee",
      "Power_Type": "Physical",
      "Class": "Assassin"
    },
    {
      "Name": "Nox",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/e/e1/SkinArt_Nox_Default.jpg",
      "Pantheon": "Roman",
      "Subtitle": "Goddess of Night",
      "Attack_Type": "Ranged",
      "Power_Type": "Magical",
      "Class": "Mage"
    },
    {
      "Name": "Nu Wa",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/c/cd/SkinArt_NuWa_Default.jpg",
      "Pantheon": "Chinese",
      "Subtitle": "Guardian of Heaven",
      "Attack_Type": "Ranged",
      "Power_Type": "Magical",
      "Class": "Mage"
    },
    {
      "Name": "Odin",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/1/1e/SkinArt_Odin_Default.jpg",
      "Pantheon": "Norse",
      "Subtitle": "The Allfather",
      "Attack_Type": "Melee",
      "Power_Type": "Physical",
      "Class": "Warrior"
    },
    {
      "Name": "Osiris",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/d/db/SkinArt_Osiris_Default.jpg",
      "Pantheon": "Egyptian",
      "Subtitle": "Broken God of the Afterlife",
      "Attack_Type": "Melee",
      "Power_Type": "Physical",
      "Class": "Warrior"
    },
    {
      "Name": "Poseidon",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/6/63/SkinArt_Poseidon_Default.jpg",
      "Pantheon": "Greek",
      "Subtitle": "God of the Oceans",
      "Attack_Type": "Ranged",
      "Power_Type": "Magical",
      "Class": "Mage"
    },
    {
      "Name": "Ra",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/0/0e/SkinArt_Ra_Default.jpg",
      "Pantheon": "Egyptian",
      "Subtitle": "Sun God",
      "Attack_Type": "Ranged",
      "Power_Type": "Magical",
      "Class": "Mage"
    },
    {
      "Name": "Raijin",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/d/dd/SkinArt_Raijin_Default.jpg",
      "Pantheon": "Japanese",
      "Subtitle": "Master of Thunder",
      "Attack_Type": "Ranged",
      "Power_Type": "Magical",
      "Class": "Mage"
    },
    {
      "Name": "Rama",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/0/00/SkinArt_Rama_Default.jpg",
      "Pantheon": "Hindu",
      "Subtitle": "Seventh Avatar of Vishnu",
      "Attack_Type": "Ranged",
      "Power_Type": "Physical",
      "Class": "Hunter"
    },
    {
      "Name": "Ratatoskr",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/0/0b/SkinArt_Ratatoskr_Default.jpg",
      "Pantheon": "Norse",
      "Subtitle": "The Sly Messenger",
      "Attack_Type": "Melee",
      "Power_Type": "Physical",
      "Class": "Assassin"
    },
    {
      "Name": "Ravana",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/1/16/SkinArt_Ravana_Default.jpg",
      "Pantheon": "Hindu",
      "Subtitle": "Demon King of Lanka",
      "Attack_Type": "Melee",
      "Power_Type": "Physical",
      "Class": "Warrior"
    },
    {
      "Name": "Scylla",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/c/c7/SkinArt_Scylla_Default.jpg",
      "Pantheon": "Greek",
      "Subtitle": "Horror of the Sea",
      "Attack_Type": "Ranged",
      "Power_Type": "Magical",
      "Class": "Mage"
    },
    {
      "Name": "Serqet",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/9/9b/SkinArt_Serqet_Default.jpg",
      "Pantheon": "Egyptian",
      "Subtitle": "Goddess of Venom",
      "Attack_Type": "Melee",
      "Power_Type": "Physical",
      "Class": "Assassin"
    },
    {
      "Name": "Skadi",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/5/58/SkinArt_Skadi_Default.jpg",
      "Pantheon": "Norse",
      "Subtitle": "Goddess of Winter",
      "Attack_Type": "Ranged",
      "Power_Type": "Physical",
      "Class": "Hunter"
    },
    {
      "Name": "Sobek",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/b/b8/SkinArt_Sobek_Default.jpg",
      "Pantheon": "Egyptian",
      "Subtitle": "God of the Nile",
      "Attack_Type": "Melee",
      "Power_Type": "Magical",
      "Class": "Guardian"
    },
    {
      "Name": "Sol",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/d/dc/SkinArt_Sol_Default.jpg",
      "Pantheon": "Norse",
      "Subtitle": "Goddess of the Sun",
      "Attack_Type": "Ranged",
      "Power_Type": "Magical",
      "Class": "Mage"
    },
    {
      "Name": "Sun Wukong",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/b/b7/SkinArt_SunWukong_Default.jpg",
      "Pantheon": "Chinese",
      "Subtitle": "The Monkey King",
      "Attack_Type": "Melee",
      "Power_Type": "Physical",
      "Class": "Warrior"
    },
    {
      "Name": "Susano",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/6/6b/SkinArt_Susano_Default.jpg",
      "Pantheon": "Japanese",
      "Subtitle": "God of the Summer Storm",
      "Attack_Type": "Melee",
      "Power_Type": "Physical",
      "Class": "Assassin"
    },
    {
      "Name": "Sylvanus",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/2/23/SkinArt_Sylvanus_Default.jpg",
      "Pantheon": "Roman",
      "Subtitle": "Keeper of the Wild",
      "Attack_Type": "Ranged",
      "Power_Type": "Magical",
      "Class": "Guardian"
    },
    {
      "Name": "Terra",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/b/b9/SkinArt_Terra_Default.jpg",
      "Pantheon": "Roman",
      "Subtitle": "The Earth Mother",
      "Attack_Type": "Melee",
      "Power_Type": "Magical",
      "Class": "Guardian"
    },
    {
      "Name": "Thanatos",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/8/82/SkinArt_Thanatos_Default.jpg",
      "Pantheon": "Greek",
      "Subtitle": "Hand of Death",
      "Attack_Type": "Melee",
      "Power_Type": "Physical",
      "Class": "Assassin"
    },
    {
      "Name": "Thor",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/7/7e/SkinArt_Thor_Default.jpg",
      "Pantheon": "Norse",
      "Subtitle": "God of Thunder",
      "Attack_Type": "Melee",
      "Power_Type": "Physical",
      "Class": "Assassin"
    },
    {
      "Name": "Tyr",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/9/93/SkinArt_Tyr_Default.jpg",
      "Pantheon": "Norse",
      "Subtitle": "The Lawgiver",
      "Attack_Type": "Melee",
      "Power_Type": "Physical",
      "Class": "Warrior"
    },
    {
      "Name": "Ullr",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/1/1c/SkinArt_Ullr_Default.jpg",
      "Pantheon": "Norse",
      "Subtitle": "The Glorious One",
      "Attack_Type": "Ranged",
      "Power_Type": "Physical",
      "Class": "Hunter"
    },
    {
      "Name": "Vamana",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/3/3d/SkinArt_Vamana_Default.jpg",
      "Pantheon": "Hindu",
      "Subtitle": "Fifth Avatar of Vishnu",
      "Attack_Type": "Melee",
      "Power_Type": "Physical",
      "Class": "Warrior"
    },
    {
      "Name": "Vulcan",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/5/54/SkinArt_Vulcan_Default.jpg",
      "Pantheon": "Roman",
      "Subtitle": "Smith of the Gods",
      "Attack_Type": "Ranged",
      "Power_Type": "Magical",
      "Class": "Mage"
    },
    {
      "Name": "Xbalanque",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/3/3d/SkinArt_Xbalanque_Default.jpg",
      "Pantheon": "Mayan",
      "Subtitle": "Hidden Jaguar Sun",
      "Attack_Type": "Ranged",
      "Power_Type": "Physical",
      "Class": "Hunter"
    },
    {
      "Name": "Xing Tian",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/0/0b/SkinArt_XingTian_Default.jpg",
      "Pantheon": "Chinese",
      "Subtitle": "The Relentless",
      "Attack_Type": "Melee",
      "Power_Type": "Magical",
      "Class": "Guardian"
    },
    {
      "Name": "Ymir",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/1/17/SkinArt_Ymir_Default.jpg",
      "Pantheon": "Norse",
      "Subtitle": "Father of the Frost Giants",
      "Attack_Type": "Melee",
      "Power_Type": "Magical",
      "Class": "Guardian"
    },
    {
      "Name": "Zeus",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/e/e3/SkinArt_Zeus_Default.jpg",
      "Pantheon": "Greek",
      "Subtitle": "God of the Sky",
      "Attack_Type": "Ranged",
      "Power_Type": "Magical",
      "Class": "Mage"
    },
    {
      "Name": "Zhong Kui",
      "Image": "https://hydra-media.cursecdn.com/smite.gamepedia.com/9/91/SkinArt_ZhongKui_Default.jpg",
      "Pantheon": "Chinese",
      "Subtitle": "The Demon Queller",
      "Attack_Type": "Ranged",
      "Power_Type": "Magical",
      "Class": "Mage"
    }
  ]

  $scope.chosen = $scope.gods[75]

  init();
}]);
