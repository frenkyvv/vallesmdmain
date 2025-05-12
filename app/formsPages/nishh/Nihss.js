'use client'
import React, { useState } from "react"
import "bulma/css/bulma.min.css"

const NihssCalculator = () => {
  const [eyeOpening, setEyeOpening] = useState(0)
  const [verbalResponse, setVerbalResponse] = useState(0)
  const [motorResponse, setMotorResponse] = useState(0)
  const [miradaConjugada, setMiradaConjugada] = useState(0)
  const [camposVisuales, setCamposVisuales] = useState(0)
  const [paresiaFacial, setParesiaFacial] = useState(0)
  const [paresiaBrazoD, setParesiaBrazoD] = useState(0)
  const [paresiaBrazoI, setParesiaBrazoI] = useState(0)
  const [paresiaPiernaD, setParesiaPiernaD] = useState(0)
  const [paresiaPiernaI, setParesiaPiernaI] = useState(0)
  const [dismetria, setDismetria] = useState(0)
  const [sensibilidad, setSensibilidad] = useState(0)
  const [lenguaje, setLenguaje] = useState(0)
  const [disartria, setDisartria] = useState(0)
  const [extincion, setExtincion] = useState(0)

  const handleSubmit = e => {
    e.preventDefault()
    const total =
      eyeOpening +
      verbalResponse +
      motorResponse +
      miradaConjugada +
      camposVisuales +
      paresiaFacial +
      paresiaBrazoD +
      paresiaBrazoI +
      paresiaPiernaD +
      paresiaPiernaI +
      dismetria +
      sensibilidad +
      lenguaje +
      disartria +
      extincion
    alert(`La puntuación total de la escala de NIHSS es: ${total}`)
  }

  return (
    <div className="box">
      <h1 className="title is-4 has-text-centered">Escala de NIHSS</h1>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">1. Alerta</label>
          <div className="control">
            <div className="select is-fullwidth">
              <select onChange={e => setEyeOpening(parseInt(e.target.value))}>
                <option value="0">Alerta con respuesta normal</option>
                <option value="1">
                  No alerta, pero responde a mínimos estímulos verbales
                </option>
                <option value="2">
                  No alerta, pero responde a estímulos repetidos o dolorosos
                </option>
                <option value="3">
                  No responde a estímulos dolorosos o sólo con movimientos
                  reflejo
                </option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">2. Mirada Conjugada</label>
          <div className="control">
            <div className="select is-fullwidth">
              <select
                onChange={e => setMiradaConjugada(parseInt(e.target.value))}
              >
                <option value="0">Normal</option>
                <option value="1">Parcialmente alterada</option>
                <option value="2">Completamente alterada</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">3. Campos Visuales</label>
          <div className="control">
            <div className="select is-fullwidth">
              <select
                onChange={e => setCamposVisuales(parseInt(e.target.value))}
              >
                <option value="0">Sin defecto</option>
                <option value="1">Defecto parcial</option>
                <option value="2">Hemianopsia completa</option>
                <option value="3">Ceguera bilateral</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">4. Paresia Facial</label>
          <div className="control">
            <div className="select is-fullwidth">
              <select
                onChange={e => setParesiaFacial(parseInt(e.target.value))}
              >
                <option value="0">Normal</option>
                <option value="1">Parcial</option>
                <option value="2">Completa</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">5a. Paresia del Brazo Derecho</label>
          <p className="help">
            (Primero el brazo no parético, levantar y extender el brazo 90°. Si
            el paciente está en decúbito, extender el brazo 45°)
          </p>
          <div className="control">
            <div className="select is-fullwidth">
              <select
                onChange={e => setParesiaBrazoD(parseInt(e.target.value))}
              >
                <option value="0">
                  Mantiene la posición durante 10 segundos, amputación o
                  inmovilización
                </option>
                <option value="1">
                  Claudica en menos de 10 segundos sin tocar la cama
                </option>
                <option value="2">
                  Claudica en menos de 10 segundos y la extremidad toca la cama
                </option>
                <option value="3">
                  Existe movimiento pero no alcanza la posición o cae
                  inmediatamente
                </option>
                <option value="4">Parálisis de la extremidad</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">5b. Paresia del Brazo Izquierdo</label>
          <p className="help">
            (Primero el brazo no parético, levantar y extender el brazo 90°. Si
            el paciente está en decúbito, extender el brazo 45°)
          </p>
          <div className="control">
            <div className="select is-fullwidth">
              <select
                onChange={e => setParesiaBrazoI(parseInt(e.target.value))}
              >
                <option value="0">
                  Mantiene la posición durante 10 segundos, amputación o
                  inmovilización
                </option>
                <option value="1">
                  Claudica en menos de 10 segundos sin tocar la cama
                </option>
                <option value="2">
                  Claudica en menos de 10 segundos y la extremidad toca la cama
                </option>
                <option value="3">
                  Existe movimiento pero no alcanza la posición o cae
                  inmediatamente
                </option>
                <option value="4">Parálisis de la extremidad</option>
              </select>
            </div>
          </div>
        </div>
                <div className="field">
          <label className="label">6a. Paresia de la Pierna Derecha</label>
          <p className="help">
            (Primero la pierna no parética. Levantar la pierna extendida a 30°)
          </p>
          <div className="control">
            <div className="select is-fullwidth">
              <select
                onChange={e => setParesiaPiernaD(parseInt(e.target.value))}
              >
                <option value="0">
                  Mantiene la posición durante 5 segundos, amputación proximal o
                  inmovilización
                </option>
                <option value="1">
                  Claudica en menos de 5 segundos sin tocar la cama
                </option>
                <option value="2">
                  Claudica en menos de 5 segundos y la extremidad toca la cama
                </option>
                <option value="3">
                  Existe movimiento pero no alcanza la posición o cae
                  inmediatamente
                </option>
                <option value="4">Parálisis de la extremidad</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">6b. Paresia de la Pierna Izquierda</label>
          <p className="help">
            (Primero la pierna no parética. Levantar la pierna extendida a 30°)
          </p>
          <div className="control">
            <div className="select is-fullwidth">
              <select
                onChange={e => setParesiaPiernaI(parseInt(e.target.value))}
              >
                <option value="0">
                  Mantiene la posición durante 5 segundos, amputación proximal o
                  inmovilización
                </option>
                <option value="1">
                  Claudica en menos de 5 segundos sin tocar la cama
                </option>
                <option value="2">
                  Claudica en menos de 5 segundos y la extremidad toca la cama
                </option>
                <option value="3">
                  Existe movimiento pero no alcanza la posición o cae
                  inmediatamente
                </option>
                <option value="4">Parálisis de la extremidad</option>
              </select>
            </div>
          </div>
        </div>
                <div className="field">
          <label className="label">7. Dismetría (Ataxia: descoordinación en el movimiento)</label>
          <p className="help">
            (Dedo-nariz y talón-rodilla, realizar con los ojos abiertos)
          </p>
          <div className="control">
            <div className="select is-fullwidth">
              <select onChange={e => setDismetria(parseInt(e.target.value))}>
                <option value="0">
                  Ausente, amputación, déficit motor o fusión de la articulación
                </option>
                <option value="1">Ataxia en una extremidad</option>
                <option value="2">Ataxia en dos extremidades</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">8. Sensibilidad</label>
          <p className="help">
            (Con aguja explorar la cara, los brazos, el tronco, el abdomen y las piernas 
            (no manos ni pies). En paciente obnubilado evaluar la retirada al estímulo doloroso)
          </p>
          <div className="control">
            <div className="select is-fullwidth">
              <select onChange={e => setSensibilidad(parseInt(e.target.value))}>
                <option value="0">Normal</option>
                <option value="1">Pérdida parcial de sensibilidad</option>
                <option value="2">Pérdida completa de sensibilidad</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">9. Lenguaje</label>
          <p className="help">
            (Describir un dibujo o leer una lista de palabras y frases. 
            En paciente mudo o IOT explorar según su escritura)
          </p>
          <div className="control">
            <div className="select is-fullwidth">
              <select onChange={e => setLenguaje(parseInt(e.target.value))}>
                <option value="0">Normal</option>
                <option value="1">Afasia leve o moderada (se puede entender)</option>
                <option value="2">Afasia grave (no se puede entender)</option>
                <option value="3">Comprensión nula o en coma</option>
              </select>
            </div>
          </div>
        </div>
                <div className="field">
          <label className="label">10. Disartria</label>
          <p className="help">(Valorar solo la articulación)</p>
          <div className="control">
            <div className="select is-fullwidth">
              <select onChange={e => setDisartria(parseInt(e.target.value))}>
                <option value="0">Normal o IOT</option>
                <option value="1">
                  Leve o moderada (se logra entender)
                </option>
                <option value="2">Grave, ininteligible o mudo</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">11. Extinción</label>
          <p className="help">
            (<strong>Extinción:</strong> en caso de estímulos bilaterales
            simultáneos, el paciente no es capaz de percibir en el lado
            contralateral a la lesión. <strong>Negligencia:</strong> el paciente
            es incapaz de orientarse o responder ante un estímulo en el lado
            contralateral a la lesión. <strong>Inatención:</strong> el paciente
            ignora los estímulos en el lado contralateral a la lesión.)
          </p>
          <div className="control">
            <div className="select is-fullwidth">
              <select onChange={e => setExtincion(parseInt(e.target.value))}>
                <option value="0">Sin alteraciones</option>
                <option value="1">
                  Inatención o extinción en una modalidad (visual, táctil,
                  espacial o corporal)
                </option>
                <option value="2">
                  Inatención o extinción en más de una modalidad. No reconoce su
                  propia mano o sólo reconoce una parte del espacio
                </option>
              </select>
            </div>
          </div>
        </div>


        <div className="field">
          <div className="control has-text-centered">
            <button type="submit" className="button is-link is-medium">
              Calcular puntuación
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default NihssCalculator