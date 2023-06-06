function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );

  console.assert(
    validarNombre("Matías") === "",
    "Validar nombre falló con un nombre valido",
  );
}

function probarValidarCiudad() {
    console.assert(
        validarCiudad("") === "Debe seleccionar 1 ciudad",
        "Validar ciudad no validó que ciudad no sea vació",
    );

    console.assert(
        validarCiudad("Bs. As.") === "",
        "Validar ciudad falló con una ciudad valida",
    );
}

function probarValidarDescripcionRegalo() {
    console.assert(
        validarDescripcionRegalo("") === "Este campo debe tener al menos 1 caracter",
        "Validar descripción regalo no validó que la descripción no sea vació",
    );

    console.assert(
        validarDescripcionRegalo("111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111") === "Este campo debe tener menos de 150 caracteres",
        "Validar descripción regalo no validó que la descripción del regalo sea menor a 150 caracteres",
    );

    console.assert(
        validarDescripcionRegalo("Para Navidad me gustaría que Boca gane la Copa Libertadores") === "",
        "Validar descripción regalo falló con una descripción valida",
    );
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();
