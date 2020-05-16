# Projet P4<br>
## IT News<br>
> Dans ce projet on a créer une application web ergonomique qui respect la norme UX (User Experience)
avec un design modern et des couleurs qui encourage le visiteur à passer plus de temps dans le site web

![IT news website](https://github.com/ayoub-bani/Angular-dashboard/blob/master/screen/smartmockups_ka8rzbh4.png)

## Browser Support

Nous visons à prendre en charge les deux dernières versions des navigateurs suivants:

<img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/chrome.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/firefox.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/edge.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/safari.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/opera.png" width="64" height="64"><br><br>

## Team Group 
<span align="center">

![bouchra](https://github.com/ayoub-bani/Angular-dashboard/blob/master/screen/bouchra-circle.png)
![Sara](https://github.com/ayoub-bani/Angular-dashboard/blob/master/screen/sara-circle.png)
![ayoub](https://github.com/ayoub-bani/Angular-dashboard/blob/master/screen/ayoub-circle_2.png)
</span>



## Table des Matières
1. [ Présentation Du Projet](#desc)
2. [ Etude de Besoin ](#usage)
3. [ Les Cibles ](#cible)
4. [ Outils de Développement ](#deve)
5. [ Diagramme ](#diagram)
6. [ Les API Consommer dans le Projet ](#api)
7. [ Validation des Formulaire ](#valid)

<a name="desc"></a>
## 1. Présentation Du Projet

* Identification de besoin: <br>
    Après la réunion avec M. Jaafar DAHBI (personnel de IT6 à Rabat), organisée dans le cadre de l'identification des problèmes confrontés par les gens intéressés par les nouveautés de la technologies et de l'informatique . À ce stade on a pu identifier les difficultés au niveau du nombre énorme des sites informatiques, et la nécessité d’une plateforme qui facilite l'accès aux nouveautés proposés par ces sites .

* Spécification des exigences <br>
    Description de l'existant :
    Si on prend par exemple le site web 01Net.com créé en 1999 constitué de plusieurs catégories et parmi ses catégories on trouve l'actualité informatique, la façon dont le site web est composé perturbe la bonne expérience de l’utilisateur par le nombre de rubriques et de pages proposés par le site et la façon de présentation des articles.<br><br>
    parmi les site web qui existe et attaque le même marcher en site ci-dessous quelque exemple:
```
https://www.01net.com/
https://www.clubic.com/
https://www.lemondeinformatique.fr/
https://www.itnews.com/
```



<a name="usage"></a>
## 2. Etudes de besoin 

Les besoins décrivent toutes les contraintes auxquelles est soumis le système pour sa réalisation et son bon fonctionnement.

B1. Ergonomie et souplesse : <br>
L'application doit offrir une interface facile et pratique exploitable par les acteurs du système en envisageant toutes les interactions possibles à l'écran du support tenu.<br><br>
B2. Rapidité <br>
L'application doit optimiser les traitements pour avoir un temps d’exécution raisonnable.<br><br>
B3. Efficacité <br>
L'application doit être fonctionnelle indépendamment de toutes circonstances pouvant entourer l'utilisateur.<br><br>
B4. Maintenabilité et scalabilité (flexibilité) <br>
Le code de l'application doit être lisible et compréhensible afin d'assurer son état évolutif et extensible par rapport aux besoins du marché.

<a name="cible"></a>
## 3. Les cibles 

l'application va cibler : <br>
*  Les utilisateurs qui ont envie d’optimiser le temps de navigation
*  Les gens qui veulent un bon service                  
*  Les internautes qui souffrent des interfaces non structurées et illisibles des autres sites

<a name="deve"></a>
## Outils de développement 

Le Langage de Modélisation Unifié: UML<br>
Système de Gestion de Base de Données (SGBD) : MySql<br><br>
### Front-End:
Visual Studio Code<br>
HTML5, CSS3 et la librairie Bootstrap<br>
Json TypScript<br>
Angular 8

### Back-End
Visual Studio 2019<br>
ASP.net  MVC 5<br>
Entity Framework<br>
Rest API

<a name="diagram"></a>
## Diagramme

> Base de Donnée <br>

![use case](https://github.com/ayoub-bani/Angular-dashboard/blob/master/screen/base-donnee.png)

>Diagramme Use Case <br>

![use case](https://github.com/ayoub-bani/Angular-dashboard/blob/master/screen/LastOne.png)

>Diagramme Séquence <br>

![séquence](https://github.com/ayoub-bani/Angular-dashboard/blob/master/screen/sequence.png)<br>
![séquence 02](https://github.com/ayoub-bani/Angular-dashboard/blob/master/screen/sequence-02.png)

>Diagramme de Classe <br>

![diagramme de class](https://github.com/ayoub-bani/Angular-dashboard/blob/master/screen/Diagramme-classe.png)

<a name="api"></a>
## Les API Consommer dans le Projet

pour les API on a travailler avec un provider externe dans le projet plus 
le REST API que on a configurer nous meme 

* API externe <br>
    pour l'API externe on a utiliser un service gratuit online pour les news puis on a integrer dans notre projet 

    ```
    http://newsapi.org/ 
    ```
    > API pour International News dans le SideBar 
    ```
    http://newsapi.org/v2/everything?domains=wsj.com&apiKey=f2e84538b0bc429cb89634751fc88c63
    ```
    ![International news](https://github.com/ayoub-bani/Angular-dashboard/blob/master/screen/api-internationalnews.JPG)

>API pour Popular Resources dans le SideBar 
```
    http://newsapi.org/v2/everything?q=apple&from=2020-05-01&to=2020-05-01&sortBy=popularity&apiKey=2e84538b0bc429cb89634751fc88c63
```
![popular resources](https://github.com/ayoub-bani/Angular-dashboard/blob/master/screen/api-popular-resources.jpg)

>API pour Top Strories dans le SideBar 
```
http://newsapi.org/v2/everything?domains=wsj.com&apiKey=f2e84538b0bc429cb89634751fc88c63
```
![top stories](https://github.com/ayoub-bani/Angular-dashboard/blob/master/screen/top-stories.jpg)


>Dans le footer on a filtrer les données recuperer depuis l'API pour afficher les articles du meme jour, hier et avant hier 

```
https://localhost:44339/api/ArtcileByDate/GetArticleByDate
```
![footer articles](https://github.com/ayoub-bani/Angular-dashboard/blob/master/screen/footer-articles.png)

* Api Locale 

    >Recuperer les articles de chaque journaliste depuis l'API 
    ```
    https://localhost:44339/api/articles/id
    ```
![api articles](https://github.com/ayoub-bani/Angular-dashboard/blob/master/screen/articles-home.png)

> Api pour recuperer les articles par category 
```
https://localhost:44339/api/Categories/id
```
![api id category](https://github.com/ayoub-bani/Angular-dashboard/blob/master/screen/id-category.png)

> Api pour aficher les articles de chaque journaliste 
```
https://localhost:44339/api/Journalist/id
```
![api journaliste](https://github.com/ayoub-bani/Angular-dashboard/blob/master/screen/api-journaliste.png)

> Authentification avec token 
```
https://localhost:44339/token
```
![login](https://github.com/ayoub-bani/Angular-dashboard/blob/master/screen/login.png)


> Rogister pour l'Admin Journaliste et chef de redaction
```
https://localhost:44339/api/Account/Register
```
![register](https://github.com/ayoub-bani/Angular-dashboard/blob/master/screen/register.png)


> Dashboard avec list des articles 
```
https://localhost:44339/api/articles
```
![dash articles](https://github.com/ayoub-bani/Angular-dashboard/blob/master/screen/dash-articles.png)

> API pour ajouter les articles a l'aide du methode POST aussi on recupere les category avec une autre api des categories qui existe dans le site web  
```
https://localhost:44339/api/Categories  
https://localhost:44339/api/articles  
```
![new articles](https://github.com/ayoub-bani/Angular-dashboard/blob/master/screen/new-articles.png)

> API pour suprimer les articles par ID avec l'aide du methode Delete
```
https://localhost:44339/api/articles/id  
```
![delete](https://github.com/ayoub-bani/Angular-dashboard/blob/master/screen/delete.png)

> API pour editer les articles par id avec l'aide du methode UPDATE
```
https://localhost:44339/api/articles/id 
```
![delete](https://github.com/ayoub-bani/Angular-dashboard/blob/master/screen/edite-article.png)

> API pour manager les gategories  
```
https://localhost:44339/api/Categories
```
![manage categories](https://github.com/ayoub-bani/Angular-dashboard/blob/master/screen/manage-categories.png)

> API pour suprimer les categories avec l'aide du methode DELETE, en peut pas suprimer les categories avec des articles en peux just la desactiver  
```
https://localhost:44339/api/Categories/id
```
![manage categories](https://github.com/ayoub-bani/Angular-dashboard/blob/master/screen/delete-category.png)

> API pour editer les categories avec l'aide du methode UPDATE  
```
https://localhost:44339/api/Categories/id
```
![manage categories](https://github.com/ayoub-bani/Angular-dashboard/blob/master/screen/edite-category.png)


<a name="valid"></a>
## Validation des Formulaires 

> on a integré la validation des formulaire dans notre projet a l'aide du reactive formes et directive formes

![manage categories](https://github.com/ayoub-bani/Angular-dashboard/blob/master/screen/validation.png)
