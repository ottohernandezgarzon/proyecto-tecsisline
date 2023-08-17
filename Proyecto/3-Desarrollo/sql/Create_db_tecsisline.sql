drop database if exists tecsisline;
create database tecsisline character set utf8;
use tecsisline;


create table tipo_documento(
Id_documento int (1),
siglas enum ('CC','CE','NIT')
);

create table direccion(
Id_direccion integer (15),
direccion varchar (30),  
codigo_postal int (6),
UsuarioId_usuario int (10),
UsuarioTipo_documendoId_documento int (1)
);

create table rol (
Id_rol int (1),
rol varchar (20),
privilegios int (1)
);

create table usuario(
no_documento int (20),
primer_nombre varchar (100),
segundo_nombre varchar (100),
primer_apellIdo varchar (100),
segundo_apellIdo varchar (100),
sexo set ('M','F'),
foto_perfil blob,
telefono int (10),
correo varchar (50),
contraseña varchar (50),
RolId_rol int (1),
Tipo_documentoId_documento int (10)
);

create table envio(
Id_envio int (10),
numero_envio int (30),
fecha_envio date
);

create table mantenimiento(
Id_mantenimiento int (10),
m_preventivo text,
m_correctivo text,
cambio_de_parte int (1),
descripcion text,
CitaId_cita int (10)
);

create table cita(
Id_cita int(10),
fecha date,
hora time,
cita_cancelada bit(1)
);

create table producto(
Id_producto int (10),
foto blob,
nombre_producto varchar (50),
serial_producto bigint (25),
mac bigint (30),
valorNeto_producto int, 
valorVenta_producto int, 
CategoriaId_categoria int (21),
FacturaId_factura int (10),
FacturaTipo_Pago_Id_tipo_pago int (1),
FacturaMantenimientoId_mantenimiento int (10)
);

create table categoria(
Id_categoria int(10),
tipo_categoria varchar (30)
);

create table marca_producto(
MarcaId_marca int (10),
ProductoId_producto int (10),
ProductoFacturaId_factura int (10),
ProductoTipo_Pago_Id_tipo_pago int (1),
ProductoMantenimientoId_mantenimiento int (10)
);

create table marca(
Id_marca int (10),
nombre_marca varchar (10)
);

create table efectivo(
Id_Efectivo int(7),
Numero_de_celular bigint,
Tipo_Pago_Id_tipo_pago int(1)
);

create table tarjeta_credito(
Id_tarjeta_credito int(10),
titular_de_la_tarjeta varchar (40),
numero_de_tarjeta bigint,
Fecha_de_vencimiento date,
CVV int,
Tipo_Pago_Id_tipo_pago int(1)
);

create table tipo_pago(
  Id_tipo_pago int(1),
  Nombre_TipoPago varchar(30)
);

create table factura(
Id_factura int (10),
fecha date,
UsuarioNo_documento int (10),
UsuarioTipo_documendoId_documento int (10),
EnivioId_envio int (10),
ManteminetoId_mantenimiento int (10),
Tipo_Pago_Id_tipo_pago int (1)
);

create table servIdor_web(
Id_servIdor int (10),
fecha date,
hora time
);

create table error(
Id_error int (10),
motivo text,
fecha date,
hora time
);


alter table usuario add primary key (no_documento, Tipo_documentoId_documento);
alter table producto add primary key(Id_producto,FacturaId_factura, FacturaTipo_Pago_Id_tipo_pago, FacturaMantenimientoId_mantenimiento);
alter table categoria add primary key(Id_categoria);
alter table rol add primary key(Id_rol);
alter table cita add primary key (Id_cita);
alter table marca_producto add primary key(MarcaId_marca,ProductoId_producto,ProductoFacturaId_factura,ProductoTipo_Pago_Id_tipo_pago, ProductoMantenimientoId_mantenimiento);
alter table factura add primary key (Id_factura, ManteminetoId_mantenimiento, Tipo_Pago_Id_tipo_pago);
alter table mantenimiento add primary key (Id_mantenimiento);
alter table tipo_documento add primary key (Id_documento);
alter table servIdor_web add primary key (Id_servIdor);
alter table marca add primary key (Id_marca);
alter table direccion add primary key (Id_direccion);
alter table tipo_pago add primary key (Id_tipo_pago);
alter table error add primary key(Id_error);
alter table envio add primary key (Id_envio);
alter table efectivo add primary key (Id_Efectivo,Tipo_Pago_Id_tipo_pago);
alter table tarjeta_credito add primary key (Id_tarjeta_credito,Tipo_Pago_Id_tipo_pago);


alter table usuario add constraint fk_usuario_tipo_documento foreign key(Tipo_documentoId_documento)references tipo_documento(Id_documento); 
alter table usuario add constraint fk_usuario_rol foreign key (RolId_rol) references rol(Id_rol);
alter table factura add constraint fk_factuara_usuario foreign key (UsuarioNo_documento, UsuarioTipo_documendoId_documento)references usuario(no_documento, Tipo_documentoId_documento);
alter table factura add constraint fk_factuara_envion foreign key(EnivioId_envio)references envio(Id_envio);
alter table factura add constraint fk_factuara_mantenimiento foreign key (ManteminetoId_mantenimiento) references mantenimiento(Id_mantenimiento);
alter table factura add constraint fk_factuara_TipoPago foreign key (Tipo_Pago_Id_tipo_pago) references tipo_pago(Id_tipo_pago);
alter table mantenimiento add constraint fk_mantenimiento_cita foreign key (CitaId_cita) references cita(Id_cita );
alter table producto add constraint fk_producto_categoria foreign key(CategoriaId_categoria)references categoria(Id_categoria) ;
alter table producto add constraint fk_producto_factura foreign key (FacturaId_factura,FacturaMantenimientoId_mantenimiento,FacturaTipo_Pago_Id_tipo_pago)references factura(Id_factura,ManteminetoId_mantenimiento,Tipo_Pago_Id_tipo_pago); 
alter table marca_producto add constraint fk_MarcaProducto_marca foreign key(MarcaId_marca)references marca(Id_marca);
alter table marca_producto add constraint fk_MarcaProducto_producto foreign key (ProductoId_producto,ProductoFacturaId_factura, ProductoTipo_Pago_Id_tipo_pago,ProductoMantenimientoId_mantenimiento) references producto(Id_producto,FacturaId_factura,FacturaTipo_Pago_Id_tipo_pago, FacturaMantenimientoId_mantenimiento);
alter table direccion add constraint fk_direccion_usuario foreign key (UsuarioId_usuario,UsuarioTipo_documendoId_documento) references usuario (no_documento, Tipo_documentoId_documento); 
alter table efectivo add constraint fk_Efectico_TipoPago foreign key (Tipo_Pago_Id_tipo_pago) references tipo_pago (Id_tipo_pago); 
alter table tarjeta_credito add constraint fk_TarjetaCredito_TipoPago foreign key (Tipo_Pago_Id_tipo_pago) references tipo_pago (Id_tipo_pago); 