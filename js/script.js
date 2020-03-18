(function() {
  const cardForm = document.forms.new;
        editProfileForm = document.forms.profile;
        editName = editProfileForm.elements.personName;
        editJob = editProfileForm.elements.personJob;
        userInfoName = document.querySelector(".user-info__name");
        userInfoJob = document.querySelector(".user-info__job");
        createCard = (...args) => new Card(...args);
        checkProfile = new FormValidator(editProfileForm.elements);
        checkCardForm = new FormValidator(cardForm.elements);
        listPlace = document.querySelector(".places-list");
        cardList = new CardList(listPlace, createCard);
        bigPicture = document.querySelector(".big-picture");
        bigPictureContent = document.querySelector(".big-picture__content");
        bigImage = document.querySelector(".big-picture__image");
        rootPlace = document.querySelector(".root");
        windowForm = rootPlace.querySelector(".popup");
        windowFormEdit = rootPlace.querySelector(".popup-edit");
        popupContentEdit = windowFormEdit.querySelector(".popup__content");
        popupContent = windowForm.querySelector(".popup__content");
        popupToggle = new Popup();
        
  cardList.render(initialCards);
  document
    .querySelector(".user-info__button")
    .addEventListener("mousedown", function() {
      popupToggle.open(windowForm);
    });
  document
    .querySelector(".user-edit__button")
    .addEventListener("mousedown", function() {
      popupToggle.open(windowFormEdit);
    });
  windowFormEdit
    .querySelector(".popup__close")
    .addEventListener("mousedown", function() {
      popupToggle.close(windowFormEdit);
    });
  windowForm
    .querySelector(".popup__close")
    .addEventListener("mousedown", function() {
      popupToggle.close(windowForm);
    });

  windowForm.addEventListener("submit", function(e) {
    e.preventDefault();
    cardList.addCard(
      cardForm.elements.name.value,
      cardForm.elements.link.value
    );
    cardForm.elements.name.value = "";
    cardForm.elements.link.value = "";
    popupToggle.close(windowForm);
  });

  cardForm.addEventListener("input", function() {
    if (
      cardForm.elements[0].value.length == 0 ||
      cardForm.elements[1].value.length == 0
    ) {
      cardForm.submit.classList.remove("popup__button_active");
      cardForm.submit.setAttribute("disabled", "disabled");
    }
  });

  //Функции закрытия окна по клику вне его
  windowForm.addEventListener("mousedown", function(event) {
    if (event.target.closest(".popup__content") != popupContent) {
      popupToggle.close(windowForm);
    }
  });

  windowFormEdit.addEventListener("mousedown", function(event) {
    if (event.target.closest(".popup__content") != popupContentEdit) {
      popupToggle.close(windowFormEdit);
    }
  });

  //Функция закрытия окна по escape
  document.addEventListener("keydown", function(event) {
    const key = event.key;
    if (key == "Escape") {
      popupToggle.close(windowFormEdit);
      popupToggle.close(windowForm);
    }
  });

  // Увеличение изображений
  listPlace.addEventListener("click", function(e) {
    const imagePath = event.target.style.backgroundImage
      .slice(4, -1)
      .replace(/["']/g, "");
    if (imagePath != "") bigPicture.classList.add("big-picture_active");
    bigImage.setAttribute("src", imagePath);
  });

  // Функция закрытия большой картинки
  function closeBigPicture() {
    bigPicture.classList.remove("big-picture_active");
  }

  // Функция закрытия большой картинки по клику вне её
  bigPicture.addEventListener("click", function(event) {
    if (event.target.closest(".big-picture__content") != bigPictureContent) {
      closeBigPicture();
    }
  });

  document.addEventListener("mousedown", function(event) {
    if (event.target.closest(".big-picture__close")) closeBigPicture();
  });

  editProfileForm.addEventListener("submit", function(event) {
    event.preventDefault();
    new UserInfo(editName.value, editJob.value);
    popupToggle.close(windowFormEdit);
  });
  editName.value = userInfoName.textContent;
  editJob.value = userInfoJob.textContent;
})();
