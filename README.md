# OpenClassrooms Projet 5 : Construire un site e-commerce -- partie front-end

Créer un premier MVP pour démontrer le fonctionnement de l'application

L’application web est composée de 4 pages :
- une page de vue sous forme de liste, montrant tous les articles disponibles à la vente ;
- une page “produit”, qui affiche de manière dynamique l'élément sélectionné par l'utilisateur et lui permet de personnaliser le produit et de l'ajouter à son panier ;
- une page “panier” contenant un résumé des produits dans le panier, le prix total et un formulaire permettant de passer une commande. Les données du formulaire doivent être correctes et bien formatées avant d'être renvoyées au back-end. Par exemple, pas de texte dans les champs date ;
- une page de confirmation de commande, remerciant l'utilisateur pour sa commande, et indiquant le prix total et l'identifiant de commande envoyé par le serveur.

Dans un premier temps, une seule catégorie de produits sera présentée -- caméras vintage. 

Pour le MVP, la personnalisation du produit n'est pas fonctionnelle : la page contenant un seul article aura un menu déroulant permettant à l'utilisateur de
choisir une option de personnalisation, mais celle-ci ne sera ni envoyée au serveur ni reflétée dans la réponse du serveur.
Le code source devra être indenté et utiliser des commentaires. Il devra également utiliser des fonctions globales.
Concernant l’API, des promesses devront être utilisées pour éviter les rappels. Les inputs des utilisateurs doivent être validés avant l’envoi à l’API.
