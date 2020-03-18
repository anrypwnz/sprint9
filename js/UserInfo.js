class UserInfo {
  constructor(name, job) {
    this.setUserInfo(name, job);
    this.updateUserInfo();
  }
  setUserInfo(name, job) {
    this.name = name;
    this.job = job;
  }

  updateUserInfo() {
    userInfoName.textContent = this.name;
    userInfoJob.textContent = this.job;
  }
}
