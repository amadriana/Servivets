import DataTable from "react-data-table-component";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCategoria } from "../../context/categoriaContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt, faEye, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import ConfirmarInactivarJugador from "./ConfirmarInactivarJugador.jsx";
import FormularioEditarJugador from "./FormularioEditarJugador.jsx";
import ModalJugador from "./ModalJugador.jsx";
import "../../styles/jugadores/TablaJugadores.css";

function TablaJugadores() {
  const [records, setRecords] = useState([]);
  const [filteredRecords, setFilteredRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRows, setSelectedRows] = useState({ selectedRows: [] });
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedJugador, setSelectedJugador] = useState(null);
  const { getCategoria } = useCategoria();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4444/jugador/");
        const jugadores = await Promise.all(response.data.map(async (item) => {
          let categoria = "Sin Categoría"; // Default value
          try {
            const categoriaData = await getCategoria(item.categoria);
            categoria = `${categoriaData.categoria[0].sexo} ${categoriaData.categoria[0].nombre}`;
          } catch (error) {
            console.error("Error fetching categoria data:", error);
          }
          return {
            ...item,
            categoria,
            tipo_documento: item.usuarios.tipo_documento,
            cedula: item.usuarios.cedula,
            nombres: item.usuarios.nombres,
            apellidos: item.usuarios.apellidos,
            correo: item.usuarios.correo,
            telefono: item.usuarios.telefono,
            estado: item.usuarios.estado,
          };
        }));
        setRecords(jugadores);
        setFilteredRecords(jugadores);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = records.filter(record =>
      record.nombres.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.apellidos.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.cedula.toString().includes(searchTerm)
    );
    setFilteredRecords(filtered);
  }, [searchTerm, records]);

  const columns = [
    { name: "Tipo de documento", selector: (row) => row.tipo_documento, sortable: true },
    { name: "Documento", selector: (row) => row.cedula, sortable: true },
    { name: "Nombres", selector: (row) => row.nombres, sortable: true },
    { name: "Apellidos", selector: (row) => row.apellidos, sortable: true },
    { name: "Correo", selector: (row) => row.correo, sortable: true },
    { name: "Teléfono", selector: (row) => row.telefono, sortable: true },
    { name: "Categoría", selector: (row) => row.categoria, sortable: true },
    { name: "Estado", selector: (row) => row.estado, sortable: true },
  ];

  const customStyles = {
    headCells: {
      style: {
        fontSize: "20px",
        fontWeight: "bold",
        backgroundColor: "#f4f4f4",
      },
    },
    rows: {
      style: {
        fontSize: "16px",
      },
    },
    table: {
      style: {
        borderRadius: "10px",
        overflow: "hidden",
        width: 1400, // Ajusta el ancho de la tabla
      },
    },
  };

  const handleDeleteClick = () => {
    if (selectedRows.selectedRows.length === 0) {
      alert("Por favor, seleccione un jugador para desactivar.");
    } else {
      setShowModal(true);
    }
  };

  const handleConfirmDelete = async () => {
    try {
      const idToDelete = selectedRows.selectedRows[0].cedula;
      const result = await inactivarJugador(idToDelete);
      setShowModal(false);
      if (result) {
        // Actualizar el estado local de records sin recargar la página
        setRecords(records.map(record =>
          record.cedula === idToDelete ? { ...record, estado: "inactivo" } : record
        ));
        setFilteredRecords(filteredRecords.map(record =>
          record.cedula === idToDelete ? { ...record, estado: "inactivo" } : record
        ));
      }
    } catch (error) {
      console.error("Error al inactivar el jugador:", error);
    }
  };

  const inactivarJugador = async (id) => {
    try {
      const response = await axios.get(`http://localhost:4444/jugador/${id}`);
      const jugador = response.data;
      await axios.put(`http://localhost:4444/jugador/${id}`, { estado: "inactivo" });
      return true;
    } catch (error) {
      console.error("Error al inactivar el jugador:", error);
      return false;
    }
  };

  const handleEditClick = () => {
    if (selectedRows.selectedRows.length === 0) {
      alert("Por favor, seleccione un jugador para editar.");
    } else {
      const id = selectedRows.selectedRows[0].cedula;
      const jugador = records.find((record) => record.cedula === id);
      setSelectedJugador(jugador);
      setShowEditModal(true);
    }
  };

  const handleCloseEditModal = (shouldReload = false) => {
    setShowEditModal(false);
    if (shouldReload) {
      location.reload();
    }
  };

  const handleViewClick = () => {
    if (selectedRows.selectedRows.length === 0) {
      alert("Por favor, seleccione un jugador para ver.");
      return;
    }
    const id = selectedRows.selectedRows[0].cedula;
    navigate(`/verJugador/${id}`);
  };

  return (
    <div>
      <div className="top-bar-jugadores">
        <div className="search-bar-jugadores">
          <FontAwesomeIcon icon={faSearch} size="2xl" className="search-icon-jugadores" />
          <input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input-jugadores"
          />
          <div className="clear-search-jugadores-circle" onClick={() => setSearchTerm("")}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>

        <div className="acciones-jugador_desdeAdmin">
          <button onClick={handleEditClick} className="editar-jugador_desdeAdmin btn-jugador">
            <FontAwesomeIcon className="svg-jugador" icon={faEdit} size="2x" />
          </button>
          <button onClick={handleDeleteClick} className="eliminar-jugador_desdeAdmin btn-jugador">
            <FontAwesomeIcon className="svg-jugador" icon={faTrashAlt} size="2x" />
          </button>
          <button onClick={() => handleViewClick()} className="visualizar-jugador_desdeAdmin btn-jugador">
            <FontAwesomeIcon className="svg-jugador" icon={faEye} size="2x" />
          </button>
        </div>
      </div>

      <div id="modal-root"></div>
      <ConfirmarInactivarJugador
        mostrar={showModal}
        onHide={() => setShowModal(false)}
        onConfirm={handleConfirmDelete}
      />

      {showEditModal && (
        <ModalJugador show={showEditModal} handleCloseEditModal={handleCloseEditModal}>
          <FormularioEditarJugador initialData={selectedJugador.cedula} handleCloseEditModal={handleCloseEditModal} />
        </ModalJugador>
      )}
      <div className="Latabla-jugador_desdeAdmin">
        <DataTable
          columns={columns}
          data={filteredRecords}
          selectableRows
          selectableRowsSingle
          pagination
          paginationPerPage={4}
          onSelectedRowsChange={(state) => setSelectedRows(state)}
          fixedHeader
          progressPending={loading}
          customStyles={customStyles}
        />
      </div>
    </div>
  );
}

export default TablaJugadores;
