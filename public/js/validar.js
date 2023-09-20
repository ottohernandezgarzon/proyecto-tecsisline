const d = document;

export default function valid() {
  // const $form = d.forms.formRegistrar;
  const $form = d.getElementById("formRegistrar");

  if ($form) {
    d.addEventListener("keyup", (e) => {
      let $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern,
        dataValid = $input.nextElementSibling.nextElementSibling.dataset,
        data_error = "El campo obligatorio esta vació";
      const $pattern = new RegExp(pattern);
      if ($input.value === "" && $input.required === true) {
        d.getElementById($input.name).classList.add("invalid") +
          (dataValid.error = data_error);
      } else if (pattern && $input.value !== "") {
        let dataError = "No puede llevar números ni espacios";
        return !$pattern.exec($input.value)
          ? d.getElementById($input.name).classList.add("invalid") +
          (dataValid.error = dataError)
          : d.getElementById($input.name).classList.replace("invalid", "valid");
      }
    })

    d.addEventListener("focusout", (e) => {
      let $input = e.target,
        $select = d.querySelector("select#tipoDocumento"),
        dataErrorSelect = d.getElementById("tipoDocumento").labels[0]
          .nextElementSibling,
        dataErrorInput = $input.nextElementSibling.nextElementSibling;
      if ($input.name === "documento") {
        return $select.value === ""
          ? d.getElementById("tipoDocumento").classList.add("invalid") +
          d.getElementById("documento").classList.add("invalid") +
          ($input.value = "") +
          (dataErrorSelect.textContent = dataErrorSelect.dataset.error) +
          (dataErrorInput.dataset.error =
            dataErrorSelect.dataset.error + " en tipo documento") +
          d
            .getElementById("tipoDocumento")
            .labels[0].classList.add("error") +
          dataErrorSelect.classList.add("error") +
          d
            .querySelector("input.select-dropdown")
            .classList.add("invalid")
          : d
            .getElementById("tipoDocumento")
            .classList.replace("invalid", "valid") +
          (dataErrorSelect.textContent =
            dataErrorSelect.dataset.success) +
          d
            .getElementById("documento")
            .classList.replace("invalid", "valid") +
          dataErrorInput.dataset.success +
          d
            .getElementById("tipoDocumento")
            .labels[0].classList.replace("error", "check") +
          dataErrorSelect.classList.replace("error", "check") +
          d
            .querySelector("input.select-dropdown")
            .classList.replace("invalid", "valid");
      }
    });
  }

  d.addEventListener("focusout", e => {
    let $password = d.getElementById("password"),
      $confirm = d.getElementById("contraPassword"),
      $input = e.target,
      dataValid = d.getElementById("contraPassword").nextElementSibling.nextElementSibling.dataset,
      dataError = "No coincide la contraseña o campo esta vació",
      dataSuccess = "Coincide la contraseña";
    if ($input.name === "contraPassword") {
      return $input.value === $password.value
        ? d.getElementById($input.id).classList.replace("invalid", "valid") +
        (dataValid.success = dataSuccess)
        : d.getElementById($input.id).classList.add("invalid") +
        (dataValid.error = dataError);
    }
  })
  d.addEventListener("keyup", e => {
    let $password = d.getElementById("password"),
      $confirm = d.getElementById("contraPassword"),
      $input = e.target,
      dataValid = d.getElementById("contraPassword").nextElementSibling.nextElementSibling.dataset,
      dataError = "No coincide la contraseña o campo vació",
      dataSuccess = "Coincide la contraseña";
    if ($input.name === "password" && $confirm.value !== "") {
      return $confirm.value === $input.value
        ? $confirm.classList.replace("invalid", "valid") +
        (dataValid.success = dataSuccess + " bf")
        : $confirm.classList.add("invalid") +
        (dataValid.error = dataError);
    }
  })

  d.addEventListener("click", (e) => {
    let $btn = d.querySelector("button.btn"),
      validData = d.querySelectorAll("input.valid[required]");
    if (validData.length === 6) {
      $btn.removeAttribute("disabled");
    }
  });

  if (d.querySelectorAll("input[type=hidden]") && d.querySelector("input[type=hidden]").value !== "") return val()
  function val() {
    const VALIDAR = d.getElementById("error").value
    M.toast({
      html: VALIDAR,
      classes: "red",
    });
  }
} 