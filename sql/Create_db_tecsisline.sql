drop database if exists tecsisline;
create database tecsisline character set utf8;
use tecsisline;
create table tipo_documentos(
tipo_documento_id int (1) not null,
tipo_documento varchar(20),
createdAt datetime,
updatedAt datetime
);
 
insert into tipo_documentos(tipo_documento_id, tipo_documento,createdAt,updatedAt) 
values
(1, "Cedula de ciuadania",now(),now()),
(2,"Cedula extranjera",now(),now()),
(3,"Tarjeta de identidad",now(),now());

create table roles (
rol_id int (1) not null,
rol varchar (20),
createdAt datetime,
updatedAt datetime
);

insert into roles (rol_id,rol,createdAt,updatedAt)
values
(1,"Administrador",now(),now()),
(2,"empleado",now(),now()),
(3,"cliente", now(),now());

create table sexos(
sexo_id int(1) not null,
sexo varchar(10),
createdAt datetime,
updatedAt datetime
);

insert into sexos (sexo_id,sexo,createdAt,updatedAt)
values
(1,"Masculino",now(),now()),
(2,"Femenino",now(),now()),
(3,"Otro",now(),now()),
(4,"Indefinido",now(),now());

create table usuarios(
no_documento int (20) not null,
primer_nombre varchar (100),
segundo_nombre varchar (100),
primer_apellIdo varchar (100),
segundo_apellIdo varchar (100),
nombre_usuario varchar (100),
foto_perfil longblob,
formato_foto varchar(20),
telefono bigint ,
pais varchar(100),
correo varchar (50),
contraseña varchar (50),
rol_id int (1) not null,
sexo_id int (1) not null,
tipo_documento_id int (1) not null,
createdAt datetime,
updatedAt datetime
);
create table direcciones(
direccion_id integer not null,
direccion varchar (30),  
codigo_postal int (6),
no_documento int (20) not null,
createdAt datetime,
updatedAt datetime
);
create table productos(
producto_id int (10) not null,
foto_producto longblob,
formato_foto varchar(20),
nombre_producto varchar (50),
serial_producto bigint (25),
mac bigint (30),
valor_neto_producto int, 
valor_venta_producto int, 
categoria_id int (21)not null,
factura_id int (10) not null,
tipo_pago_id int (1) not null,
createdAt datetime,
updatedAt datetime
);

create table categorias(
categoria_id int(10) not null,
tipo_categoria varchar (30),
createdAt datetime,
updatedAt datetime
);

create table marca_producto(
marca_id int (10)not null,
producto_id int (10) not null,
factura_id int (10)not null,
tipo_pago_id int (1) not null,
createdAt datetime,
updatedAt datetime
);

create table marcas(
marca_id int (10) not null,
nombre_marca varchar (10),
createdAt datetime,
updatedAt datetime
);

create table efectivos(
efectivo_id int(7) not null,
numero_de_celular bigint,
tipo_pago_id int(1) not null,
createdAt datetime,
updatedAt datetime
);

create table tarjeta_credito(
tarjeta_credito_id int(10) not null,
titular_de_la_tarjeta varchar (40),
numero_de_tarjeta bigint,
fecha_de_vencimiento date,
cvv int,
tipo_Pago_id int(1) not null,
createdAt datetime,
updatedAt datetime
);

create table tipo_pago(
  tipo_pago_id int(1) not null,
  tipop_pago varchar(30),
  createdAt datetime,
updatedAt datetime
);

create table factura(
factura_id int (10) not null,
fecha date,
no_documento int (10)not null,
tipo_documendo_id int (10)not null,
tipo_pago_id int (1) not null,
createdAt datetime,
updatedAt datetime
);

create table servidor_web(
servidor_id int (10) not null,
createdAt datetime,
updatedAt datetime
);

create table errores(
error_id int (10) not null,
motivo text,
createdAt datetime,
updatedAt datetime
);


alter table usuarios add primary key (no_documento, tipo_documento_id,sexo_id);
alter table productos add primary key(producto_id,factura_id, tipo_pago_id);
alter table categorias add primary key(categoria_id);
alter table roles add primary key(rol_id);
alter table marca_producto add primary key(marca_id,producto_id,factura_id,tipo_pago_id);
alter table factura add primary key (factura_id,tipo_pago_id);
alter table tipo_documentos add primary key (tipo_documento_id);
alter table servIdor_web add primary key (servidor_id);
alter table sexos add primary key (sexo_id);
alter table marcas add primary key (marca_id);
alter table direcciones add primary key (direccion_id,no_documento);
alter table direcciones change direccion_id direccion_id int auto_increment;
alter table tipo_pago add primary key (tipo_pago_id);
alter table errores add primary key(error_id);
alter table efectivos add primary key (efectivo_id,tipo_pago_id);
alter table tarjeta_credito add primary key (tarjeta_credito_id,tipo_pago_id);


alter table usuarios add constraint fk_usuario_tipo_documento foreign key(tipo_documento_id)references tipo_documentos(tipo_documento_id); 
alter table usuarios add constraint fk_usuario_rol foreign key (rol_id) references roles(rol_id);
alter table usuarios add constraint fk_usuario_sexo foreign key (sexo_id) references sexos(sexo_id);
alter table factura add constraint fk_factuara_usuario foreign key (no_documento, tipo_documendo_id)references usuarios(no_documento, tipo_documento_id);
alter table factura add constraint fk_factuara_TipoPago foreign key (tipo_pago_id) references tipo_pago(tipo_pago_id);
alter table productos add constraint fk_producto_categoria foreign key(categoria_id)references categorias(categoria_id) ;
alter table productos add constraint fk_producto_factura foreign key (factura_id,tipo_pago_id)references factura(factura_id,tipo_pago_id); 
alter table marca_producto add constraint fk_MarcaProducto_marca foreign key(marca_id)references marcas(marca_id);
alter table marca_producto add constraint fk_MarcaProducto_producto foreign key (producto_id,factura_id, tipo_pago_id) references productos(producto_id,factura_id,tipo_pago_id);
alter table direcciones add constraint fk_direccion_usuario foreign key (no_documento) references usuarios (no_documento); 
alter table efectivos add constraint fk_Efectico_TipoPago foreign key (tipo_pago_id) references tipo_pago (tipo_pago_id); 
alter table tarjeta_credito add constraint fk_TarjetaCredito_TipoPago foreign key (tipo_pago_id) references tipo_pago (tipo_pago_id); 

SELECT * from  usuarios as usuario  inner join sexos as sexo on usuario.sexo_id = sexo.sexo_id inner join roles as rol on usuario.rol_id =rol.rol_id inner join tipo_documentos as tipoDocumento on usuario.tipo_documento_id=tipoDocumento.tipo_documento_id inner join direcciones as direction on usuario.no_documento = direction.no_documento;