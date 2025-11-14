# TP1 – Introduction à Playwright

## Description du Projet
Premier TP de découverte du framework **Playwright** pour les tests End-to-End (E2E). Ce projet permet de se familiariser avec les bases de Playwright : sélecteurs, interactions, assertions et navigation.

## Objectifs Réalisés
✅ Installation et configuration de Playwright  
✅ Écriture de tests E2E de base  
✅ Maîtrise des sélecteurs CSS et texte  
✅ Interactions avec les éléments (click, fill, select)  
✅ Assertions sur les éléments et le contenu  
✅ Navigation entre les pages  

## Concepts Abordés

### 1. Sélecteurs Playwright
- Sélecteurs CSS classiques : `page.locator('.class')`, `page.locator('#id')`
- Sélecteurs par texte : `page.locator('text=Connexion')`
- Sélecteurs par rôle : `page.getByRole('button')`
- Sélecteurs par placeholder : `page.getByPlaceholder('Email')`

### 2. Interactions
- **Navigation** : `page.goto(url)`
- **Clics** : `page.click()`, `element.click()`
- **Saisie de texte** : `page.fill()`, `page.type()`
- **Sélection** : `page.selectOption()`
- **Checkbox/Radio** : `page.check()`, `page.uncheck()`

### 3. Assertions
- **Visibilité** : `expect(element).toBeVisible()`
- **Contenu texte** : `expect(element).toContainText('...')`
- **Valeur** : `expect(element).toHaveValue('...')`
- **URL** : `expect(page).toHaveURL('...')`
- **Attributs** : `expect(element).toHaveAttribute('class', '...')`

## Technologies
- **Playwright** (dernière version)
- **TypeScript**
- **Node.js**

## Commandes Utiles

```powershell
# Installer les dépendances
npm install

# Exécuter tous les tests
npx playwright test

# Exécuter avec interface graphique
npx playwright test --headed

# Mode debug
npx playwright test --debug

# Rapport HTML
npx playwright show-report
