use tecsisline;

-- Reporte de ventas
SELECT m.nombre_marca, c.tipo_categoria, p.nombre_producto, valorNeto_producto, p.valorVenta_producto, tp.Nombre_TipoPago FROM marca m, producto p,tipo_pago tp right join categoria c on c.Id_categoria where p.Id_producto=c.Id_categoria and p.Id_producto= m.Id_marca and p.FacturaTipo_Pago_Id_tipo_pago=tp.Id_tipo_pago;

-- Productos mas vendidos por cliente
SELECT  u.primer_nombre, u.primer_apellIdo, p.nombre_producto, p.valorVenta_producto, r.rol FROM  usuario u,producto p, rol r join factura f on f.UsuarioNo_documento WHERE f.UsuarioNo_documento=u.no_documento and p.FacturaId_factura =f.Id_factura and u.RolId_rol= r.Id_rol  and  r.Id_rol=3 ;

-- Tipo de pago preferido por los clientes 

-- Categoria mas vendida 
select c.tipo_categoria from categoria c inner join producto p on c.Id_categoria= p.Id_producto where p.valorVenta_producto in (select max(p.valorVenta_producto)from producto p);

-- Numeros de usuarios registrados
select count(*) as Catidas_usuarion from usuario;

-- Producto mas vendidos
select p.nombre_producto from categoria c inner join producto p on c.Id_categoria= p.Id_producto where p.valorVenta_producto in (select max(p.valorVenta_producto)from producto p);

-- Inventario 
SELECT m.nombre_marca Marca, c.tipo_categoria Categoria, p.nombre_producto Tipo_de_producto, valorNeto_producto Valor_de_provedor FROM marca m, producto p right join categoria c on c.Id_categoria where p.Id_producto=c.Id_categoria and p.Id_producto= m.Id_marca;

-- Los usuario con mas compras

-- Los usuario con mas compras con mayor valor

-- Usuarios con tipo de documentos  diferente a Cedula ciudadania 
select u.no_documento, u.primer_nombre, u.primer_apellIdo, td.siglas Tipo_de_documento from usuario u inner join tipo_documento td on u.Tipo_documentoId_documento=td.Id_documento where td.siglas <> "CC";

-- Factura 
SELECT m.nombre_marca, c.tipo_categoria, p.nombre_producto, valorNeto_producto, p.valorVenta_producto FROM marca m, producto p right join categoria c on c.Id_categoria where p.Id_producto=c.Id_categoria and p.Id_producto= m.Id_marca ;