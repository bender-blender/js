let login = prompt("Введіть логін:");

if (login === "Admin") {
  let password = prompt("Введіть пароль:");

  if (password === null || password === "") {
    alert("Скасовано");
  } else {
    if (password === "Господар") {
      alert("Ласкаво просимо!");
    } else {
      alert("Неправильний пароль");
    }
  }

} else if (login === null || login === "") {
  alert("Скасовано");
} else {
  alert("Я вас не знаю");
}
