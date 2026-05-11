import photosArr from "./data/photos"
import PhotoHolder from "./components/PhotoHolder"
import PhotoModal from "./components/PhotoModal"
import Controls from "./components/Controls";
import { useState } from "react";

function App() {
  const photosPag = photosArr.slice (0,8);
  const [StartIndex, setStartIndex] = 
  let [showModal, setShowModal] = useState(false)
  let [selectedImgObj, setSelectedImgObj] = useState(null);

  // ================================================================
  // Esta callback se llama cuando el usuario selecciona una foto
  function onImgClick(imgObj) {
    console.log('[App:onImgClick]', imgObj)

    // 1. actualizar la variable que contiene la foto seleccionada
    //    (para mostrarla en el modal)
    setSelectedImgObj(imgObj)

    // 2. Mostrar el modal
    //    --> Esto no funciona: showModal = true
    setShowModal(true)
  }
  // ================================================================
  // Callback que se llamara cuando se haga click sobre el boton X. 
  function onButton () {
    //Actualizaremos la variable cuando se haga click sobre X. 
    setShowModal (false)
  }

  return (
    //Mostramos el modal según el valor de la variable showModal usando el operador ternario.
    //PhotoModal, pasamos props.
    <>
    { showModal ? <PhotoModal imgObj={selectedImgObj} onButtonCallback={onButton} /> : null }

    <div className="container">
      { photosPag.map((el, idx) => {
        //Photoholder, toma la función onImgClick, guardala y cuando pase algo aqui, llamame. 
        return <PhotoHolder key={idx} imgObj={el} onImgClickCallback={onImgClick} />
      })}
      <Controls/>
    </div>
    </>
  )
}

export default App




{/*function App() {
  let [showModal, setShowModal] = useState(false)
  let [selectedImgObj, setSelectedImgObj] = useState(null);

  // ================================================================
  // Esta callback se llama cuando el usuario selecciona una foto
  function onImgClick(imgObj) {
    console.log('[App:onImgClick]', imgObj)

    // 1. actualizar la variable que contiene la foto seleccionada
    //    (para mostrarla en el modal)
    setSelectedImgObj(imgObj)

    // 2. Mostrar el modal
    //    --> Esto no funciona: showModal = true
    setShowModal(true)
  }
  // ================================================================
  // Callback que se llamara cuando se haga click sobre el boton X. 
  function onButton () {
    //Actualizaremos la variable cuando se haga click sobre X. 
    setShowModal (false)
  }

  return (
    //Mostramos el modal según el valor de la variable showModal usando el operador ternario.
    //PhotoModal, pasamos props.
    <>
    { showModal ? <PhotoModal imgObj={selectedImgObj} onButtonCallback={onButton} /> : null }

    <div className="container">
      { photosArr.map((el, idx) => {
        //Photoholder, toma la función onImgClick, guardala y cuando pase algo aqui, llamame. 
        return <PhotoHolder key={idx} imgObj={el} onImgClickCallback={onImgClick} />
      })}
    </div>
    </>
  )
}*/}
