const convertButton = document.querySelector(".convert-button")
const curryceSelect = document.querySelector(".curryce-select")

function convertValues() {
  const inputCurrecyValue = document.querySelector(".input-currecy").value
  const curryceValueToCovert = document.querySelector(".curryce-value-to-covert")
  const curryceValueToCovertd = document.querySelector(".curryce-value")



  const dolarToday = 5.2
  const euroToday = 6.2
  const libraToday = 6.8
  const bitcoinToday = 145000

  const convertdValue = inputCurrecyValue / dolarToday

  if (curryceSelect.value == "dolar") {
    curryceValueToCovertd.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"

    }).format(inputCurrecyValue / dolarToday)

  } if (curryceSelect.value == "euro") {
    curryceValueToCovertd.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputCurrecyValue / euroToday)

  
    }if (curryceSelect.value == "libra") {

      curryceValueToCovertd.innerHTML = new Intl.NumberFormat("GBP", {
        style: "currency",
        currency: "GBP"
      }).format(inputCurrecyValue / libraToday)

    }if (curryceSelect.value == "bitcoin") {

      const bitcoinValue = inputCurrecyValue / bitcoinToday
      curryceValueToCovertd.innerHTML = bitcoinValue.toFixed(6) + " BTC"

  }

  curryceValueToCovert.innerHTML = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL"
  }).format(inputCurrecyValue)


  console.log(convertdValue)
}

function changeCurrency() {
  const currencyName = document.getElementById("currency-name")
  const currencyImage = document.querySelector(".currency-img")





  if (curryceSelect.value == "dolar") {
    currencyName.innerHTML = "Dólar americano"
    currencyImage.src = "./assets/dolar.png"
  }

  if (curryceSelect.value == "euro") {
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./assets/euro.png"

  }
  if (curryceSelect.value == "libra") {
    currencyName.innerHTML = "Libra"
    currencyImage.src = "./assets/libra 1.png"
  }
    if (curryceSelect.value == "bitcoin") {
    currencyName.innerHTML = "Bitcoin"
    currencyImage.src = "./assets/bitcoin 1.png"
  }
  convertValues()

}

curryceSelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)