Intro
-------------
Durée du test 1h15

A l'adresse: https://mocksvc.mulesoft.com/mocks/fd8b82e2-2a74-4ef1-ad5e-05645745fbe2


Vous avez à votre disposition les endPoint suivants(tous servent du Json):




/api/flights : qui sert en Get un Json qui contient un array de vols.
  
/api/aircrews/{id} : qui recupère un objets aircrew
  
/api/states/{id} : qui recupère un objets state
  
/api/airports/{id} : qui recupère un objets airport
  


Le but de l'exercice est en utilisant le framework Js de votre choix (Angular2, React) et materializeCss(http://materializecss.com) de réaliser une petite application:
- Les sources seront push sur le repos https://gitlab.com/OpenjetSA/js-test.git (login pour push frederic.bourbigot@openjet.com / js-test-candidat)
- votre developpement partira de master, travaillez sur une branche dérivée de celle-ci et faire une Merge Request en fin de session.(votre branche -> master)

Application
-------------
- [ ] faire au besoin un mapping des objets json
- [ ] Lister Tous les 'flights' disponible dans un tableau html(utiliser les style materializeCss). Les informations que l'on doit afficher sont : 
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
- [ ] En cliquant sur l'un des picto aircrews ou state, afficher l'information en allant chercher les datas sur les bons endPoint. Cet affichage se fera dans une popin en stylant les datas au mieux avec materialize
- [ ] Si une reference vers un objet n'existe pas,(/api/airports/kopkopk n'est pas disponible par exemple) afficher le message suivant: 'Not available')  
- [ ] Faire un code propre et découplé au maximum.(En cohérance bien sur avec la durée du test)









