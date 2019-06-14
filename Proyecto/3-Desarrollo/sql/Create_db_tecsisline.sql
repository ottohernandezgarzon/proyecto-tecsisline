    drop database if exists tecsisline;
  create database tecsisline character set utf8;
  use tecsisline;


  create table tipo_documento(
  id_documento int (1),
  siglas enum ('CC','CE','NIT')
  );

  create table direccion(
  id_direccion integer (15),
  direccion varchar (30),  
  codigo_postal int (6),
  UsuarioId_usuario int (10),
  UsuarioTipo_documendoId_documento int (1)
  );

  create table rol (
  id_rol int (1),
  rol varchar (20),
  privilegios int (1)
  );

  create table usuario(
  no_documento int (20),
  primer_nombre varchar (100),
  segundo_nombre varchar (100),
  primer_apellido varchar (100),
  segundo_apellido varchar (100),
  sexo set ('M','F'),
  foto_perfil blob,
  telefono int (10),
  correo varchar (50),
  contraseña varchar (50),
  RolId_rol int (1),
  Tipo_documentoId_documento int (10)
  );

  create table factura(
  id_factura int (10),
  fecha date,
  UsuarioNo_documento int (10),
  UsuarioTipo_documendoId_documento int (10),
  EnivioId_envio int (10),
  Manteminetoid_mantenimiento int (10)
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
  Citaid_cita int (10)
  );

  create table cita(
  id_cita int(10),
  fecha date,
  hora time,
  cita_cancelada bit(1)
  );

  create table producto(
  id_producto int (10),
  foto blob,
  nombre_producto varchar (50),
  serial_producto bigint (25),
  mac bigint (30),
  CategoriaId_categoria int (21),
  FacturaId_factura int (10),
  FacturaMantenimientoId_mantenimiento int (10)
  );

  create table categoria(
  id_categoria int(10),
  tipo_categoria varchar (30)
  );

  create table marca_producto(
  MarcaId_marca int (10),
  ProductoId_producto int (10),
  ProductoFacturaId_factura int (10),
  ProductoMantenimientoId_mantenimiento int (10)
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
  motivo text,
  fecha date,
  hora time
  );


  alter table usuario add primary key (no_documento, Tipo_documentoId_documento);
  alter table producto add primary key(id_producto,FacturaId_factura,FacturaMantenimientoId_mantenimiento);
  alter table categoria add primary key(id_categoria);
  alter table rol add primary key(id_rol);
  alter table cita add primary key (id_cita);
  alter table marca_producto add primary key(MarcaId_marca,ProductoId_producto,ProductoFacturaId_factura, ProductoMantenimientoId_mantenimiento);
  alter table factura add primary key (id_factura, Manteminetoid_mantenimiento);
  alter table mantenimiento add primary key (id_mantenimiento);
  alter table tipo_documento add primary key (id_documento);
  alter table servidor_web add primary key (id_servidor);
  alter table marca add primary key (id_marca);
  alter table direccion add primary key (Id_direccion);
  alter table error add primary key(id_error);
  alter table envio add primary key (id_envio);


  alter table usuario add constraint fk_usuario_tipo_documento foreign key(Tipo_documentoId_documento)references tipo_documento(id_documento); 
  alter table usuario add constraint fk_usuario_rol foreign key (RolId_rol) references rol(id_rol);
  alter table factura add constraint fk_factuara_usuario foreign key (UsuarioNo_documento, UsuarioTipo_documendoId_documento)references usuario(no_documento, Tipo_documentoId_documento);
  alter table factura add constraint fk_factuara_envion foreign key(EnivioId_envio)references envio(id_envio);
  alter table factura add constraint fk_factuara_mantenimiento foreign key (Manteminetoid_mantenimiento) references mantenimiento(id_mantenimiento);
  alter table mantenimiento add constraint fk_mantenimiento_cita foreign key (Citaid_cita) references cita(id_cita );
  alter table producto add constraint fk_producto_categoria foreign key(CategoriaId_categoria)references categoria(id_categoria) ;
  alter table producto add constraint fk_producto_factura foreign key (FacturaId_factura,FacturaMantenimientoId_mantenimiento)references factura(id_factura, Manteminetoid_mantenimiento); 
  alter table marca_producto add constraint fk_MarcaProducto_marca foreign key(MarcaId_marca)references marca(id_marca);
  alter table marca_producto add constraint fk_MarcaProducto_producto foreign key (ProductoId_producto,ProductoFacturaId_factura, ProductoMantenimientoId_mantenimiento) references producto(id_producto,FacturaId_factura, FacturaMantenimientoId_mantenimiento);
  alter table direccion add constraint fk_direccion_usuario foreign key (UsuarioId_usuario,UsuarioTipo_documendoId_documento) references usuario (no_documento, Tipo_documentoId_documento); 