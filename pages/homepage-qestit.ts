import {type Locator, type Page, expect} from '@playwright/test';

export class HomePage {
    //variables
    readonly page: Page;
    readonly cookiesButton: Locator;
    readonly burgerMenu: Locator;
    readonly carreersMenu: Locator;
    readonly jobSearchLink: Locator;
    

    //constructor
    constructor(page: Page) {
        this.page = page;
        this.cookiesButton = page.getByRole('button', { name: 'Accept' });
        this.burgerMenu = page.getByRole('button', { name: 'Menu' });
        this.carreersMenu = page.getByLabel('Mobile main navigation').getByText('Careers');
        this.jobSearchLink = page.getByRole('link', { name: 'Job Openings' });
    }

    //methods
    async clickCookiesButton() {
        await this.cookiesButton.click();
    }
    async clickBurgerMenu() {
        await this.burgerMenu.click();
    }
    async clickCareersMenu() {
        await this.carreersMenu.click();
    }
    async clickJobSearchLink() {
        await this.jobSearchLink.click();
    }
}

export default HomePage;