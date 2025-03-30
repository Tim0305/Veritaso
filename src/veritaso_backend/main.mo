import HashMap "mo:base/HashMap";
import Text "mo:base/Text";
import List "mo:base/List";
import Types "Types";
import Time "mo:base/Time";
import Int "mo:base/Int";

actor {
  // Base de datos de artículos
  let articulos = HashMap.HashMap<Text, Types.Articulo>(0, Text.equal, Text.hash);

  public func obtenerFechaActual(): Text {
    let tiempoActual = Time.now();
    let segundos = tiempoActual / 1000000000;

    // Obtener fecha y hora en formato UTC
    let anio = 1970 + (segundos / 3153600);
    let mes = (segundos / 2_592_000) % 12 + 1; // 2,592,000 segundos en un mes (aprox)
    let dia = (segundos / 86_400) % 30 + 1; // 86,400 segundos en un día

    // Formatear la fecha como texto
    return Text.concat(
      Int.toText(anio) # "-" # 
      (if (mes < 10) "0" else "") # Int.toText(mes) # "-" # 
      (if (dia < 10) "0" else "") # Int.toText(dia)
    );
    return "";
  }

  // Insertar artículo
  public func addArticulo(articulo: Types.Articulo) : async () {
    Debug.print("Artículo agregado: " # articulo.id);
  };
};