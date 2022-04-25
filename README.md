# Monnayeur Web

## Fonctionnement de l'algorithme



### Les données sont stocké dans un dictionnaire

````javascript
var item = new Map(); 
item.set("chocolat", 50);//La valeur correspont au prix en centime
item.set("bonbon", 100);
item.set("bonbon", 100);
item.set("café", 150);
````

### Les variables sont initialisées

On possède une liste `pieceDispo = [200, 100, 50, 20, 10, 5, 2, 1]` qui répertorie les valeurs de pièce disponible.

Lors du clique sur le bouton payer on récupère :

- `itemchoice` soit l'objet a acheter. 
- `tot` le montant total donné par l'utilisateur

Puis on créé une liste `piecearendre = []` qui contiendra les pièces a rendre.

### Cœur du programme

On vérifie qu'il n'y est qu'un seul objet sélectionné:

````javascript
    if(itemchoice.length != 1){
        alert("Le nombre d'objets a acheter n'est pas bon")
        return
    }
````

On vérifie que l'utilisateur ait donné assez d'argent:

````javascript
    let prixapayer = parseInt(itemchoice[0].dataset.prix)// correspond au prix de l'objet
    if(tot < prixapayer){
        alert("vous n'avez pas donné assez d'argent")
        return
    }
````



La fonction commenté ci-dessous représente le cœur du programme il permet de connaitre le montant a rendre.

On vérifie pour chaque pièces disponible si le montant a rendre est plus grand que le montant de la pièce.

````javascript
pieceDispo.forEach(function(el){ // el est succesivement egal aux elements de pièceDispo
	while(el<=tot -prixapayer){ // tant que la pièce dispo est < aux montant à rendre
	piecearendre.push(el) //on ajoute la piece dans la liste des pièce a rendre
	tot -= el //on retire la pièce ajouter du montant total
}//On repète le processus pour chaque piece disponible.
````

> nb: le reste du fichier `app.js` est utilisé pour les animations dont certaines sont détaillées plus bas  



### Résultat en HTML

 <img  src=".\image\readme\blocs.jpg" width='100%'>

- A gauche on sélectionne l'objet 

- Au centre les pièces que vous utilisez pour payer 

- A droite les pièces a rendre

    

    On sélectionne les pièces a utiliser grâce a la liste en dessous

    

    <img  src=".\image\readme\listePiece.jpg" width='100%'>

## Animations / fonctionnalités supplémentaire

### Mode jour/nuit

En haut a droite de du site vous avez un `switch` qui permet de basculer le site dans un mode diffèrent jour / nuit  

<img src=".\image\readme\darkmodeTggler.jpg" width='15%'>

> nb: si votre système d'exploitation est en préférence sombre le site bascule en mode nuit automatiquement a votre arrivé. 

Le titre de l'onglet vous indique dans quel mode vous vous trouvez:

 <img src=".\image\readme\modejour.jpg" width='25%'> `Mode jour Soleil`

<img src=".\image\readme\modenuit.jpg" width='25%'>`Mode nuit Lune`

> cela permet de se préparer si vous revenez sur la page après un long moment surtout si vous êtes dans le noir 😉

### Ajouter un objet

<img src=".\image\readme\ajouterBtn.jpg" width='5%'>Le bouton ajouter vous permet d'ajouter un objet 

<img src=".\image\readme\ajouterInput.jpg" width='45%'> 

### Navigation mobile

<img src=".\image\readme\phoneSite.jpg" width='45%'>

Le site est adapté a une navigation sur mobile.