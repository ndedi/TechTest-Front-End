# OpenJet - Technical Test : Front-End

## Consignes

**Durée du test** : 1h15

**Exercice** : en utilisant le framework Js de votre choix (Angular2, React) et [materializeCss](http://materializecss.com), réalisez une petite application.

- Forkez ce repo dans votre compte GitHub.
- Votre developpement partira de `master`. Travaillez sur une branche dérivée de celle-ci et faites une Pull Request en fin de session (votre branche -> `master`).

## Ressources

A l'adresse : `https://mocksvc.mulesoft.com/mocks/d6ab7980-98af-4440-8a98-bf1de508de59/api/flights`

Vous avez à votre disposition les endpoint suivants (tous servent du JSON):

|Endpoint|Méthode|Description|
|---|---|---|
|`/api/flights`|GET|Un array de vols|
|`/api/aircrews/{id}`|GET|Un objets aircrew|
|`/api/states/{id}`|GET|Un objets state|
|`/api/airports/{id}`|GET|Un objets airport|

## Application

- [ ] Faire au besoin un mapping des objets json
- [ ] Lister Tous les 'flights' disponible dans un tableau html(utiliser les styles materializeCss). Les informations que l'on doit afficher sont : 
```
- paxNumber, 
- startedAtUtc(formatter la date 'MMMM Do YYYY, h:mm:ss a' via moment.js)
- endedAtUtc(formatter la date 'MMMM Do YYYY, h:mm:ss a' via moment.js)
- empty(afficher la data de manière adequat)
- airportFrom(aller chercher la data via le bon endPoint)
- airportTo(aller chercher la data via le bon endPoint)
- tailNumber
- pour aircrews et state ajouter une colonne pour chacun dans le tableau sans mettre les détails mais un simple picto
```
- [ ] En cliquant sur l'un des picto aircrews ou state, afficher l'information en allant chercher les datas sur les bons endPoint. Cet affichage se fera dans une popin en stylant les datas au mieux avec materialize.
- [ ] Si une reference vers un objet n'existe pas,(`/api/airports/kopkopk` n'est pas disponible par exemple) afficher le message suivant: 'Not available').
- [ ] Faire un code propre et découplé au maximum, en cohérence bien sur avec la durée du test.