
document.addEventListener("DOMContentLoaded", function () {
  const root = document.getElementById("root");
  root.innerHTML = `
    <div style="font-family:sans-serif;padding:20px;max-width:600px;margin:auto;text-align:center;">
      <h1 style="color:#7e22ce">Adriana Nails 💅</h1>
      <p>Tu belleza, tu momento</p>

      <form id="formularioCita" style="margin-top:20px;text-align:left;">
        <label>Nombre:<br/><input type="text" id="nombre" required class="input"/></label><br/><br/>
        <label>Servicio:<br/>
          <select id="servicio" class="input">
            <option>Uñas</option>
            <option>Pestañas</option>
            <option>Manicure</option>
            <option>Pedicure</option>
          </select>
        </label><br/><br/>
        <label>Fecha:<br/><input type="date" id="fecha" required class="input"/></label><br/><br/>
        <label>Hora:<br/><input type="time" id="hora" required class="input"/></label><br/><br/>
        <label>Notas:<br/><textarea id="notas" class="input"></textarea></label><br/><br/>
        <button type="submit" style="background:#7e22ce;color:white;padding:10px 20px;border:none;border-radius:5px;">Agendar</button>
      </form>

      <div id="mensaje" style="margin-top:20px;"></div>

      <style>
        .input {
          width: 100%;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
      </style>
    </div>
  `;

  const citas = [];

  document.getElementById("formularioCita").addEventListener("submit", function (e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const servicio = document.getElementById("servicio").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const notas = document.getElementById("notas").value;

    const citaExistente = citas.find(c => c.fecha === fecha && c.hora === hora);
    if (citaExistente) {
      document.getElementById("mensaje").innerHTML = "<p style='color:red;'>Esa fecha y hora ya están ocupadas. Intenta otra.</p>";
      return;
    }

    citas.push({ nombre, servicio, fecha, hora, notas });

    const mensaje = \`Hola \${nombre}! Tienes una cita para \${servicio} el día \${fecha} a las \${hora} en Adriana Nails. ¡Te esperamos!\`;
    const linkWA = \`https://wa.me/?text=\${encodeURIComponent(mensaje)}\`;

    window.open(linkWA, "_blank");
    document.getElementById("mensaje").innerHTML = "<p style='color:green;'>¡Tu cita ha sido agendada y enviada por WhatsApp!</p>";
    document.getElementById("formularioCita").reset();
  });
});
