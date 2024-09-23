
---

# HRnet

HRnet est une application interne utilisée pour créer et visualiser les employés d'une entreprise. Ce projet a été réalisé en convertissant plusieurs plugins jQuery en composants React pour moderniser l'application et améliorer les performances.

## Table des matières

1. [Présentation](#présentation)
2. [Installation](#installation)
3. [Utilisation](#utilisation)
4. [Composants convertis de jQuery à React](#composants-convertis-de-jquery-à-react)
5. [Structure du projet](#structure-du-projet)
6. [Auteurs](#auteurs)

---

## Présentation

L'application HRnet permet aux utilisateurs de créer des employés via un formulaire et d'afficher la liste des employés déjà enregistrés. 

- **Page principale** : Permet la création d'un employé via un formulaire contenant les informations de base de l'employé (prénom, nom, date de naissance, etc.).
- **Page de liste des employés** : Affiche les employés sous forme de tableau interactif (DataTable).

## Installation

1. **Cloner le projet** :

   ```bash
   git clone https://github.com/tonnomutilisateur/HRnet.git
   cd HRnet
   ```

2. **Installer les dépendances** :

   Avant de démarrer l'application, installe toutes les dépendances nécessaires via npm :

   ```bash
   npm install
   ```

3. **Lancer l'application** :

   Une fois les dépendances installées, démarre l'application avec la commande suivante :

   ```bash
   npm start
   ```

   L'application sera accessible sur `http://localhost:3000`.

## Utilisation

- **Créer un employé** : Accédez à la page principale, remplissez le formulaire, et cliquez sur "Save" pour enregistrer l'employé.
- **Voir la liste des employés** : Cliquez sur "View Employee List" pour accéder à la liste des employés déjà enregistrés.

## Composants convertis de jQuery à React

### 1. **DatePicker**

Le composant **DatePicker** est une conversion du plugin jQuery `datetimepicker`. Ce composant permet à l'utilisateur de sélectionner une date dans un format spécifique.

- **Fichier** : `src/components/DatePicker.js`
- **Props** :
  - `label` (string) : Le label affiché au-dessus du sélecteur de date.
  - `selectedDate` (Date) : La date actuellement sélectionnée.
  - `onChange` (function) : Fonction de callback qui met à jour la date sélectionnée.

- **Exemple d'utilisation** :

  ```jsx
  <CustomDatePicker
    label="Date of Birth"
    selectedDate={dateOfBirth}
    onChange={setDateOfBirth}
  />
  ```

### 2. **Dropdown**

Le composant **Dropdown** est une conversion d'un sélecteur jQuery. Il permet à l'utilisateur de sélectionner un élément dans une liste déroulante.

- **Fichier** : `src/components/Dropdown.js`
- **Props** :
  - `label` (string) : Le label affiché au-dessus du menu déroulant.
  - `options` (array) : Tableau contenant les options à afficher dans la liste déroulante.
  - `selectedValue` (string) : La valeur actuellement sélectionnée.
  - `onChange` (function) : Fonction de callback qui met à jour la valeur sélectionnée.

- **Exemple d'utilisation** :

  ```jsx
  <Dropdown
    label="Department"
    options={departments}
    selectedValue={department}
    onChange={setDepartment}
  />
  ```

### 3. **ConfirmationModal**

Le composant **ConfirmationModal** est une conversion du plugin jQuery `modal`. Ce composant affiche une fenêtre modale confirmant que l'employé a bien été créé.

- **Fichier** : `src/components/ConfirmationModal.js`
- **Props** :
  - `isOpen` (bool) : Définit si la modale est ouverte ou fermée.
  - `onClose` (function) : Fonction de callback appelée pour fermer la modale.

- **Exemple d'utilisation** :

  ```jsx
  <ConfirmationModal
    isOpen={isModalOpen}
    onClose={() => setIsModalOpen(false)}
  />
  ```

## Structure du projet

Le projet est structuré de manière à séparer les composants, les pages et les fichiers de styles :

```
HRnet/
│
├── src/
│   ├── components/        # Composants réutilisables
│   ├── pages/             # Pages principales de l'application
│   ├── App.js             # Composant principal de l'application
│   ├── App.css            # Styles généraux de l'application
│   └── index.js           # Point d'entrée de l'application
│
├── public/                # Fichiers publics (index.html, favicon, etc.)
│
└── package.json           # Dépendances et scripts npm
```

## Auteurs

- **Stéphane Cineas** : Développeur React et auteur de ce projet.

---

