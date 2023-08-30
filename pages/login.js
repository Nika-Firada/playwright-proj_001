exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.username_text = page.getByLabel("Username");
    this.password_text = page.getByLabel("Password");
    this.login_button = page.getByRole("button", { name: " Login" });
  }
  //   enterUsername() {}
  //   enterPassword() {}
  //   clickOnLogin() {}

  async gotoLoginPage(){
    await this.page.goto("https://the-internet.herokuapp.com/login");
  }
  
  async login(username, password) {
    await this.username_text.fill(username);
    await this.password_text.fill(password);
    await this.login_button.click();
  }
}
