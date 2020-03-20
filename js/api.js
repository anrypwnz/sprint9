//  Токен: 2badb77a-39cb-40c6-97af-74736d1f1f5a
// Идентификатор группы: cohort9



class Api {
  constructor(groupId, token) {
    this.baseUrl = `https://praktikum.tk/${groupId}`;
    this.token = token;
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: {
        authorization: this.token
      }
    })
      .then(res => res.json())
      .then(res => {
          console.log(res)
          console.log(userInfo)
          //userInfo.name = res.name
          //userInfo.job = res.about;
        //userInfo.setUserInfo(res.name, res.about, res.avatar);
        new UserInfo(res.name, res.about)
        userInfoAvatar.style.backgroundImage = `url(${res.avatar})`
        editName.value = userInfoName.textContent;
        editJob.value = userInfoJob.textContent;
      })
      .catch(err => console.log(err));
  }
  loadCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: {
        authorization: this.token
      }
    })
      .then(res => res.json())
      .then(res => {
        cardList.render(res);
      })
      .catch(err => console.log(err));
  }
  updateUserInfo(name, about) {
    return fetch("https://praktikum.tk/cohort9/users/me", {
      method: "PATCH",
      headers: {
        authorization: "2badb77a-39cb-40c6-97af-74736d1f1f5a",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
      .then(res => res.json())
      .catch(err => console.log(err));
  }
}



