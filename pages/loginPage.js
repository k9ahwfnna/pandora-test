class LoginPage {
  constructor(page) {
    this.page           = page;
    this.url            = 'https://www.saucedemo.com/';
    this.usernameInput  = '#user-name';
    this.passwordInput  = '#password';
    this.loginButton    = '#login-button';
  }

  async goto() {
    await this.page.goto(this.url);
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForSelector(this.usernameInput, { timeout: 10000 });
  }

  async login(user, pass) {
    await this.page.waitForSelector(this.usernameInput, { timeout: 10000 });
    await this.page.fill(this.usernameInput, user);
    await this.page.fill(this.passwordInput, pass);
    await this.page.click(this.loginButton);
    await this.page.waitForLoadState('networkidle');
  }
}

module.exports = LoginPage;