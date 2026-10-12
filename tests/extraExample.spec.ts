import {test, expect, page} from '@playwright/test';
import { HomePage } from '../pages/homepage-qestit';

//variables
const URL = 'https://www.qestit.com/en/';
let homePage: HomePage;

test.beforeEach(async ({ page }) => {
    //ARRANGE
    await page.goto(URL);
    homePage = new HomePage(page);
    await homePage.clickCookiesButton();
});

//test de recherche des postes sur le site en anglais de QESTIT
test.describe('QESTIT website career', () => {
    // test pour vérifier le titre de la page d'accueil
    test ('has title', async ({ page }) => {
            await expect(page).toHaveTitle(/Qestit/i);
    });

    // test pour vérifier le lien "Career" et la page de recherche d'emploi
    test('career link', async ({ page }) => {
        //ACT
        await homePage.clickBurgerMenu();
        await homePage.clickCareersMenu();
        await homePage.clickJobSearchLink();
        //ASSERT
        await expect(page).toHaveURL(/.*careers/);
    });
});