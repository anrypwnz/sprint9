//TODO fix class
class UserInfo {
  constructor(name, job, avatar) {
    this.setUserInfo(name, job, avatar);
    this.updateUserInfo();

  }
  setUserInfo(name, job, avatar) {
    this.name = name;
    this.job = job;
    this.avatar = avatar;
  }

  updateUserInfo() {
    userInfoName.textContent = this.name;
    userInfoJob.textContent = this.job;
  }
}
