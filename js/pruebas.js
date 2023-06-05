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
}

function probarValidarCiudad() {
    console.assert(
        validarCiudad("") === "Debe seleccionar 1 ciudad",
        "Validar ciudad no validó que ciudad no sea vació",
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
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();
