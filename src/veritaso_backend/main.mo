import HashMap "mo:base/HashMap";
import Text "mo:base/Text";
import Nat "mo:base/Nat";
import Debug "mo:base/Debug";
import Iter "mo:base/Iter";
import Types "Types";
import DateTime "mo:datetime/DateTime";

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
    title: Text,
    summary: Text,
    text: Text,
    date: Text,
    image: Text
  ) : async Text {
    let newArticulo: Types.Articulo = {
      title; 
      summary; 
      text; 
      date; 
      image;
    };

    //Debug.print(generateFechaActual());

    let key = generateArticuloId();
    articulos.put(key, newArticulo);

    return key; // Retornamos el ID para referencia
  };

  // 6. Obtener un artículo por ID (clave)
  public query func getArticulo(key: Text): async ?Types.Articulo {
    return articulos.get(key);
  };

  // 7. Obtener todos los artículos
  public query func getArticulos(): async [(Text, Types.Articulo)] {
    let articulosIter: Iter.Iter<(Text, Types.Articulo)> = articulos.entries();
    return Iter.toArray(articulosIter);
  };

  // 8. Actualizar un artículo (versión completa: sobrescribe todos los campos)
  public func updateArticulo(
    key: Text,
    title: Text,
    summary: Text,
    text: Text,
    date: Text,
    image: Text
  ) : async Bool {
    switch (articulos.get(key)) {
      case null {
        Debug.print("No se encontró el artículo con ID: " # key);
        return false;
      };
      case (?_) {
        let updatedArticulo: Types.Articulo = {
          title; 
          summary; 
          text; 
          date; 
          image;
        };
        articulos.put(key, updatedArticulo);
        Debug.print("Artículo actualizado con ID: " # key);
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
