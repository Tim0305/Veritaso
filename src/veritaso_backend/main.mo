import HashMap "mo:base/HashMap";
import Text "mo:base/Text";
import Nat "mo:base/Nat";
import Debug "mo:base/Debug";
import Array "mo:base/Array";
import Types "Types";

actor {
  // 2. Variable estable para generar IDs únicos
  stable var articuloId: Nat = 0;

  // 3. HashMap para almacenar los artículos, usando Texto como clave
  let articulos = HashMap.HashMap<Text, Types.Articulo>(0, Text.equal, Text.hash);

  // 4. Función privada para generar ID en formato Texto
  private func generateArticuloId(): Text {
    articuloId += 1;
    return Nat.toText(articuloId);
  };

  // 5. Crear un artículo
  public func createArticulo(
    titulo: Text,
    resumen: Text,
    texto: Text,
    fechaCreacion: Text,
  ) : async Text {

    let id = generateArticuloId();
    let newArticulo: Types.Articulo = {
      id;
      titulo; 
      resumen; 
      texto; 
      fechaCreacion; 
    };

    //Debug.print(generateFechaActual());

    articulos.put(id, newArticulo);

    return id; // Retornamos el ID para referencia
  };

  // 6. Obtener un artículo por ID (clave)
  public query func getArticulo(key: Text): async ?Types.Articulo {
    return articulos.get(key);
  };

  // 7. Obtener todos los artículos
  public query func getArticulos(): async [Types.Articulo] {
    var articulosArray : [Types.Articulo] = [];
    for (articulo in articulos.vals())
      articulosArray := Array.append(articulosArray, [articulo]);
    return articulosArray;
  };

  // 8. Actualizar un artículo (versión completa: sobrescribe todos los campos)
  public func updateArticulo(
    id: Text,
    titulo: Text,
    resumen: Text,
    texto: Text,
    fechaCreacion: Text,
  ) : async Bool {
    switch (articulos.get(id)) {
      case null {
        Debug.print("No se encontró el artículo con ID: " # id);
        return false;
      };
      case (?_) {
        let updatedArticulo: Types.Articulo = {
          id;
          titulo; 
          resumen; 
          texto; 
          fechaCreacion; 
        };
        articulos.put(id, updatedArticulo);
        Debug.print("Artículo actualizado con ID: " # id);
        return true;
      };
    };
  };

  // 9. Eliminar un artículo
  public func deleteArticulo(key: Text): async Bool {
  switch (articulos.get(key)) {
    case null {
      Debug.print("No se encontró el artículo con ID: " # key);
      return false;
    };
    case (?_) {
      ignore articulos.remove(key);
      Debug.print("Artículo eliminado con ID: " # key);
      return true;
    };
  };
};
};
