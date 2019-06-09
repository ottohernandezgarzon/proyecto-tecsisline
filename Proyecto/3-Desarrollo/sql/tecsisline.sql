drop database if exists tecsisline;
create database tecsisline;
use tecsisline;
create table tipo_documento(
id_documento int (5),
no_documento int (10),
siglas varchar (10)
);

create table direccion(
id_direccion integer (15),
direccion varchar (30),
codigo_postal varchar (30),
id_usuario integer (10),
id_rol integer (10),
id_documento integer (10)
);

create table rol (
id_rol int (1),
rol varchar (10),
privilegios int (1),
id_factura int (10),
id_envio int (10),
id_mantenimiento int (10)
);

create table usuario(
no_documento int (20),
primer_nombre varchar (100),
segundo_nombre varchar (100),
primer_apellido varchar (100),
segundo_apellido varchar (100),
telefono int (10),
correo varchar (50),
contraseña varchar (50),
id_rol varchar (1),
id_documento int (10)
);

create table factura(
id_factura int (10),
fecha date,
id_mantenimiento int (10),
no_documento int (10),
id_documento int (10),
id_envio int (10)
);

create table envio(
id_envio int (10),
numero_envio int (30),
fecha_envio date
);

create table mantenimiento(
id_mantenimiento int (10),
m_preventivo text,
m_correctivo text,
cambio_de_parte int (1),
descripcion text,
id_cita int (10)
);

create table cita(
id_cita int(10),
fecha date,
hora time,
cita_cancelada int (3)
);

create table producto(
id_producto int (10),
nombre_producto varchar (50),
serial_producto int (25),
mac int (30),
id_marca int (10),
id_categoria int (21),
id_factura int (10),
id_envio int (10),
id_mantenimiento int (10)
);

create table categoria(
id_categoria int(10),
tipo_categoria varchar (10)
);

create table marca_producto(
id_marca int (10),
foto blob,
id_producto int (10),
id_factura int (10),
id_envio int (10),
id_mantenimiento int (10)
);

create table marca(
id_marca int (10),
nombre_marca varchar (10)
);

create table servidor_web(
id_servidor int (10),
fecha date,
hora time
);

create table error(
id_error int (10),
motivo varchar (30),
fecha date,
hora time
);