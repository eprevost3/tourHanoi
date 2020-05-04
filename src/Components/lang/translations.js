const translations = {
    'fr' : {
        'titleFlag' : 'Cliquez ici pour changer la langue',
        'titleHome' : 'Accueil',
        'image' : 'fr',
        'welcome' : "Les Tours d'Hanoi, exemple illustrant la puissance de la récursivité",
        "slideToMoveTitle" : "Glissez pour modifier la vitesse",
        'nbMoves' : 'Coups joués',
        'changeNumberDisksTitle' : 'Glissez pour changer le nombre de disques',
        'speed' : 'Vitesse',
        'numberOfDisks' : 'Nombre de disques ',
        'stop' : 'Stop',
        'play' : 'Commencer',
        'pause' : 'Pause',
        'alertNoSlidingDuringPlaying' : "Pas de changements de paramètres autorisés lors de l'animation. Appuyez sur pause ou stop puis changez les paramètres",
        'expTitle' : 'Les Tours d\'Hanoi',
        'expIntro' : "Les tours d'Hanoi sont un jeu inventé par le mathématicien " +
                      "Français Edouard Lucas (XIXème). Le principe est le suivant : " +
                      "on dispose des disques de tailles différentes sur un même support " +
                      "(choisissons le support le plus à gauche). Un disque ne peut être " +
                      "mit sur un autre que s'il est moins grand. Ainsi les " +
                      "disques sont empilés du plus grand au plus petit. L'objectif est " +
                      "de déplacer la pile sur un autre support, en bougeant les disques " +
                      "un par un, avec interdiction de poser un disque sur un disque " +
                      "plus petit que lui.",
        'expInter' : "Différentes méthodes permettent de résoudre ce problème en un minimum " +
                      "de coups. La plus intéressante étant sans aucun doute la méthode récursive. " +
                      "En effet 6 lignes de code (dont la déclaration de la fonction et le return) suffisent. " +
                      "La sobriété et l'efficacité de cette résolution expliquent sans doute pourquoi " +
                      "les tours d'Hanoi sont un grand classique lorsque l'on enseigne " +
                      "la récursivité.",
    },
    'us' : {
        'titleFlag' : 'Click here to change the language',
        'titleHome' : 'Homepage',
        'image' : 'us',
        'welcome' : "Hanoi Towers, an example emphasizing the power of recursivity",
        "slideToMoveTitle" : "Slide to modify speed",
        'nbMoves' : 'Moves played',
        'changeNumberDisksTitle' : 'Slide to change the number of disks',
        'speed' : 'Speed',
        'numberOfDisks' : 'Number of disks ',
        'stop' : 'Stop',
        'play' : 'Play',
        'pause' : 'Pause',
        'alertNoSlidingDuringPlaying' : 'No change of parameters allowed when animation is played. Press pause or stop button first, then change parameters',
        'expTitle' : 'The Hanoi Towers',
        'expIntro' :  "The Hanoi Towers are a simple game invented by the French mathematician" +
                      " Edouard Lucas (19th century). The principle is as follows: " +
                      "we have discs of different size on the same rack" +
                      "(let's choose the left-most support). A disc can be " +
                      "placed on another one only if it is smaller. So the " +
                      "discs are stacked from largest to smallest. The objective is "+
                      " then to move the stack to another rack, moving the discs " +
                      "one by one, with a ban on putting one larger disc on top of a smaller one ",
        'expInter' : "Different methods can solve this problem in a minimum amount of moves. " +
                      "The most interesting method is undoubtedly the recursive method. " +
                      "Indeed, six lines of code (including the function declaration and the return) are sufficient." +
                      " The sobriety and effectiveness of this resolution explain why " +
                      "the towers of Hanoi are a classic when teaching recursivity.",
    }
}


export default translations
