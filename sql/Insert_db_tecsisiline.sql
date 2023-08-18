
insert into tipo_documento values 
(1,'CC'),
(2,'CE'),
(3,'NIT');
insert into rol values
(1,'Administrador',1 ),
(2,'Empleado',2 ),
(3,'Clientes',3 );
insert into servidor_web values
(1,'2010-01-01','00:00:00'),
(2,'2011-03-01','23:45:25'),
(3,'2018-09-01','06:50:05'),
(4,'2019-12-01','10:30:11');
insert into error values
(1,'conexion no existe','2012-12-12','23:59:00'),
(2,'puerto no existe','2013-06-30','44:33:22'),
(3,'Falla inesperada','2015-09-20','00:59:11'),
(4,'interupcion por favor reconetando','2017-01-12','23:10:11'),
(5,'Base de datos no existe','2019-09-12','15:37:06');
insert into usuario values
(1, 'Omar', 'Stiven', 'Hernández', 'Garzón','M',' ', 0123456789,'osheranndezgarzon@gmail.com','wq45re78',1,1),
(2, 'Edwuar', 'Angel', 'Gutierrez', 'Velasquez','M',' ', 1547366221,'eagutierresvelasquez@gmail.com','wq45re78',2,2),
(3, 'Alveiro', 'Miguel', 'Fernandez', 'Beltan','M',' ', 456984987, 'amfernandezbeltran@gmail.com','wq45re78',3,3),
(4, 'Fernei', 'Sebastian', 'Herrera', 'Duarte','M',' ', 484685124,'fsherrerabeltran@gmail.com','wq45re78',1,1),
(5, 'Jhonathan', 'Walther', 'Mendoza', 'Duques','M',' ', 445731459,'jwmendozaduque@gmail.com','wq45re78',2,2),
(6, 'Enrique', 'Anderson', 'Bermudez', 'Cordoba','M',' ', 458712340,'eabermudezcordoba@gmail.com','wq45re78',3,3),
(7, 'Jeyson', ' ', 'Güitrago', 'Guerrero','M',' ', 124570393,'jguitragoguerrero@gmail.com','wq45re78',1,1),
(8, 'Daniela', 'Zulay', 'Chimpaque', 'Sinfuentes','F',' ', 145268420,'dzchimpaquesinfuentes@gmail.com','wq45re78',2,2),
(9, 'Daina', 'Marcela', 'Ruiz', 'Henao','F',' ', 126575617,'dmriuzhenao@gmail.com','wq45re78',3,3),
(10, 'Lorena', 'Angie', 'Garcia', 'Retavisca','F',' ', 964987344,'lagarciaretavisca@gmail.com','wq45re78',1,1),
(11, 'Andrea', 'Mery', 'Ferrero', 'Ospina','F',' ', 558128936,'amferreroospina@gmail.com','wq45re78',2,2),
(12, 'Lizeth', 'Lina', 'Muñes', 'Chacon','F',' ', 784554457,'llmuñeschacon@gmail.com','wq45re78',3,3),
(13, 'Maria', 'Jennyfer', 'Osorio', 'Mendez','F',' ', 489627264,'mjosoriomendez@gmail.com','wq45re78',1,1),
(14, 'Margarita', 'Mariana', 'Lopez', 'Gonzalez','F',' ', 698498718,'mmlopezgonzales@gmail.com','wq45re78',2,2),
(15, 'Rosa', 'Angelica', 'Cespedes', 'Buitrago','F',' ', 17578142,'racespedesbuitrago@gmail.com','wq45re78',3,3);
insert into direccion values
(1,'Cra. 58 #45-102',123456,1,1),
(2,'Cl. 12 #102-05',132456,2,2),
(3,'Cl. 58 sur #03-45',879140,3,3),
(4,'Cra. 20 sur #28-75',987182,1,1),
(5,'Cl. 58 #47-21',321825,2,2),
(6,'Cra. 87 #54-65',987435,3,3),
(7,'Cra. 91 sur #87-33',489774,1,1),
(8,'Cra. 2 #37-98',789468,2,2),
(9,'Cl. 35 #52-28',456987,3,3),
(10,'Cra. sur 8 #44-88',987132,1,1),
(11,'Cl. 30 #45-20',978945,2,2),
(12,'Cra 25 sur #78-44',354798,3,3),
(13,'Cl 82 #65-98',687578,1,1),
(14,'Cra 14 sur #58-32',256987,2,2),
(15,'Cl. 53 #98-70',123456,3,3);
insert into envio values 
(0,0,'0000-00-00'),
(1,132456798,'2008-04-03'),
(2,987452788,'2010-07-13'),
(3,987321582,'2013-09-13'),
(4,365487254,'2014-11-02'),
(5,584575454,'2015-01-30'),
(6,123546789,'2017-10-02');
insert into cita values 
(1,'2008-04-14','09:01:01',1 ),
(2,'2010-08-29','11:10:59',0 ),
(3,'2015-10-27','16:31:22',1 ),
(4,'2016-07-17','21:09:49',1 ),
(5,'2017-05-31','01:01:01',0 ),
(6,'2018-06-15','20:11:11',1 ),
(0,'0000-00-00','00:00:00',0 );
insert into mantenimiento values
(6,'Limpieza completa','',2,'Se manipula torre, mouse, teclado, monitor',1),
(5,'','Se remplaza fuente',2,'Daño por sobre vortalje',2),
(4,'Activacion de clave windows', '',2,'Se ayuda al cliente con este tipo de prosceso',3),
(3,'','Se arregla la maquinario del disco duro',2,'Daño por golpe acidental ',4),
(2,'Se instala antivirus','',2,'Se vende antivirus',5),
(1,'Se instala sistema operatico Windows 10v1903 ','Se arma computadora para diseño grafico en 3D',2,' ',6),
(0,'No aplica','No aplica',2,'No aplica',0);
insert into tipo_pago  values 
(1,"Efectivo"),
(2,"tarjeta de credito");
insert into factura values 
(1,'2009-07-27',1,1,1,1,2),
(2,'2009-09-23',2,2,1,2,2),
(3,'2010-04-24',3,3,2,3,2),
(4,'2011-03-30',4,1,1,4,1),
(5,'2011-02-28',5,2,1,5,1),
(6,'2012-05-06',6,3,3,6,1),
(7,'2012-01-16',7,1,1,0,1),
(8,'2012-12-17',8,2,1,0,1),
(9,'2013-01-18',9,3,4,0,1),
(10,'2013-05-06',10,1,1,0,1),
(11,'2014-07-30',11,2,1,0,1),
(12,'2015-08-01',12,3,4,0,2),
(13,'2016-12-25',13,1,1,0,1),
(14,'2018-11-23',14,2,1,0,2),
(15,'2019-09-19',15,3,5,0,2);
insert into tarjeta_credito values
(1,'Omar Stiven Hernández Garzón',45613287916,"2013-12-02",8714,2), 
(2,'Edwuar Angel Gutierrez Velasquez',29567674659,"2014-08-05",7820,2), 
(3,'Alveiro Miguel Fernandez Beltan',98712651768,"2016-03-02",2045,2), 
(4,'Rosa Angelica Cespedes Buitrago',89716978547,"2017-11-30",0365,2), 
(5,'Margarita Mariana Lopez Gonzalez',79865498710,"2015-10-04",1589,2), 
(6,'Lizeth Lina Muñes Chacon',54678615132,"2019-09-21",7825,2); 
insert into efectivo values
(1,3215287812,1),
(2,3114658796,1),
(3,3126548714,1),
(4,3194785654,1),
(5,3154894264,1),
(6,3036547865,1),
(7,3156987845,1),
(8,3228456123,1),
(9,3006549874,1);
insert into categoria values
(1,'Dispositivos audio'),
(2,'Dispositivos Toucho'),
(3,'Dispositivos manuales'),
(4,'Dispositivos redes'),
(5,'Dispositivos escitorio'),
(6,'Dispositivos moviles'),
(7,'Tipo de cables');
insert into producto values
(1,' ','audifonos',1123456789,879123879,6000,13999,1,8,1,0),
(2,' ','pantalla tactil',987312978,3124653124,650000,999999,2,9,1,0), 
(3,' ','teclado ',4678654913,312645312,12350,25000,3,10,1,0),
(4,' ','Switch Router',1234875487,127824554,35000,49999,4,11,1,0),
(5,' ','Torre Gamer ',1323126541,1464618,1200000,1699999,5,12,2,0),
(6,' ','pc portatil',3326565256,8723879,900000,1500000,6,13,1,0),
(7,' ','vga',1123456789,87912381,5000,8999,7,14,2,0),
(8,' ','mouse',132876458768,32132654,10000,14999,3,15,2,0);
insert into marca values 
(1,'Lenovo'),
(2,'HP'),
(3,'Dell'),
(4,'Acer'),
(5,'Asus'),
(6,'Touchiba'),
(7,'Avio'),
(8,'Lenovo');
insert into marca_producto values
(1,1,8,1,0), 
(2,2,9,1,0),
(3,3,10,1,0),
(4,4,11,1,0),
(5,5,12,2,0),
(6,6,13,1,0),
(7,7,14,2,0),
(8,8,15,2,0);