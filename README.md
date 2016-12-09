Intro
-------------

A l'adresse: https://mocksvc.mulesoft.com/mocks/fd8b82e2-2a74-4ef1-ad5e-05645745fbe2\n\n

Vous avez à votre disposition les endPoint suivants(tous servent du Json):

/api
  /flights : qui sert en Get un Json qui contient un array de vols.
  /aircrews/{id} : qui recupère un objets aircrew
  /states/{id} : qui recupère un objets state
  /airports/{id} : qui recupère un objets airport

Le but de l'exercice est en utilisant le framework Js de votre choix (Angular2, React) et materializeCss de réaliser une petite application:
- Les sources seront push sur le repos https://gitlab.com/OpenjetSA/js-test.git (login pour push frederic.bourbigot@openjet.com / js-test-candidat)
- votre developpement partira de master, travaillez sur une branche dérivée de celle-ci et faire une Merge Request en fin de session.(votre branche -> master)