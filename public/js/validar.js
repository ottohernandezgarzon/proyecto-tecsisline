const d = document;

export default function valid() {
	const $form = d.getElementById("form-registrar");

	if ($form) {
		d.addEventListener("keyup", (e) => {
			let input = e.target,
				pattern = input.pattern || input.dataset.pattern,
				dataError = input.nextSibling.nextSibling.dataset;
			const $pattern = new RegExp(pattern);
			console.log(dataError);
			if (pattern && input.value !== "") {
				return !$pattern.exec(input.value)
					? d.getElementById(input.name).classList.add("invalid") +
							(dataError.error = "No puede llevar números ni espacios ")
					: d.getElementById(input.name).classList.replace("invalid", "valid");
			}
			if (input.name === "contraPassword") {
				let password = d.getElementById("password"),
					confirm = d.getElementById("contraPassword");
				return confirm.value === password.value
					? d.getElementById(input.name).classList.replace("invalid", "valid") +
							(dataError.success = "Coincide la contraseña")
					: d.getElementById(input.name).classList.add("invalid") +
							(dataError.error = "No coincide la contraseña");
			}
		});

		d.addEventListener("focusout", (e) => {
			let $input = e.target,
				$select = d.querySelector("select#tipoDocumento"),
				dataErrorSelect =
					d.getElementById("tipoDocumento").labels[0].nextSibling,
				dataErrorInput = $input.nextSibling.nextSibling;
			if ($input.name == "documento")
				if ($select)
					return $select.value == ""
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
		});
	}

	d.addEventListener("click", (e) => {
		let $btn = d.querySelector("button.btn"),
			validData = d.querySelectorAll("input.valid[required]");
		if (validData.length === 6) {
			$btn.removeAttribute("disabled");
		}
	});
} 
