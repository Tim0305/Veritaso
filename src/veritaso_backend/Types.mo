import Principal "mo:base/Principal";
module {
    public type Articulo = {
        autor: Principal; // ID de Internet Identity
        titulo: Text; // Titulo del articulo que se muestra en la lista
        resumen: Text; // Resumen del articulo que se muestra en la lista
        texto: Text; // Texto del articulo
        fechaCreacion: Text; // Fecha de creacion
        imagen: [Text]; // Lista de URL de las imagenes
    };
}