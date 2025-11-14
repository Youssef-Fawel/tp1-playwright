# TP1 – Introduction à Playwright

## Description du Projet
Premier TP de découverte du framework **Playwright** pour les tests End-to-End (E2E). Ce projet permet de se familiariser avec les principes de base des tests E2E, l'installation de Playwright, et l'utilisation du mode enregistrement Codegen.

## Objectifs Réalisés
✅ Installation et configuration de Playwright  
✅ Compréhension des tests End-to-End  
✅ Écriture de tests E2E de base sur TodoMVC  
✅ Maîtrise des sélecteurs Playwright (CSS, texte, rôle, label, placeholder)  
✅ Utilisation du mode Record (Codegen) pour générer du code automatiquement  
✅ Refactorisation et nettoyage du code généré  
✅ Exécution et interprétation des tests automatisés  

## Concepts Abordés

### 1. Tests E2E (End-to-End)
Un test E2E vérifie le bon fonctionnement complet d'un parcours utilisateur dans une application, depuis l'interface jusqu'aux interactions serveur. L'objectif est de garantir que toutes les couches du système fonctionnent ensemble.

### 2. Pourquoi Playwright ?
Framework développé par Microsoft permettant de :
- Piloter les navigateurs Chromium, Firefox et WebKit
- Effectuer des tests rapides, fiables et parallélisés
- Bénéficier d'un mode record (Codegen) et support TypeScript natif

### 3. Sélecteurs Playwright

| Type | Exemple | Description |
|------|---------|-------------|
| **CSS** | `page.locator('button.submit')` | Sélecteur CSS standard |
| **Text** | `page.getByText('Se connecter')` | Recherche par texte visible |
| **Role (ARIA)** | `page.getByRole('button', { name: 'Envoyer' })` | Par rôle d'accessibilité |
| **Label** | `page.getByLabel('Email')` | Associe un champ à son label |
| **Placeholder** | `page.getByPlaceholder('Mot de passe')` | Par placeholder du champ |
| **Test ID** | `page.getByTestId('user-card')` | Attribut `data-testid` |

**Bonnes pratiques** :
- Privilégier `getByRole` et `getByLabel` (plus robustes et accessibles)
- Éviter les sélecteurs CSS ou XPath trop complexes
- Ajouter des `data-testid` dans le code source pour cibler des éléments spécifiques

### 4. Mode Record (Codegen)
Outil d'enregistrement automatique permettant de :
- Générer du code TypeScript en temps réel pendant la navigation
- Capturer automatiquement les clics, saisies et assertions
- Accélérer la création de tests

**Workflow** : Enregistrement → Copie du code → Refactorisation → Exécution

### 5. Interactions et Assertions
- **Navigation** : `page.goto(url)`
- **Clics** : `page.click()`, `element.click()`
- **Saisie** : `page.fill()`, `page.type()`
- **Assertions** : `expect(element).toBeVisible()`, `expect(element).toContainText()`

## Tests Réalisés

### Test 1 : Ajouter une tâche TODO
- Navigation vers TodoMVC
- Ajout d'une tâche "Implémenter un test E2E"
- Vérification de la visibilité de la tâche

### Test 2 : Scénario enregistré avec Codegen
- Utilisation de Codegen pour enregistrer les interactions
- Génération automatique du code
- Refactorisation pour améliorer la qualité

### Test 3 : Gestion multiple de tâches (Exercice)
- Ajout de deux tâches : "Acheter du pain" et "Aller courir"
- Suppression de "Acheter du pain"
- Vérification que "Aller courir" reste visible et "Acheter du pain" a disparu

## Commandes

```powershell
# Installer Playwright
npm init playwright@latest

# Exécuter tous les tests
npx playwright test

# Exécuter un test spécifique
npx playwright test tests/todo.spec.ts

# Mode visible (headed)
npx playwright test tests/todo.spec.ts --headed

# Filtrer par navigateur
npx playwright test tests/todo.spec.ts --headed --project=chromium

# Mode Record (Codegen)
npx playwright codegen https://demo.playwright.dev/todomvc

# Consulter le rapport HTML
npx playwright show-report

# Mode debug
npx playwright test --debug
