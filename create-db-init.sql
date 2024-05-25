CREATE DATABASE serv_admin
    DEFAULT CHARACTER SET = 'utf8mb4';
    USE serv_admin


    CREATE TABLE Cliente (
    ClienteID INT PRIMARY KEY,
    Nombre VARCHAR(255) NOT NULL,
    Dirección VARCHAR(255) NOT NULL,
    Teléfono VARCHAR(20),
    Email VARCHAR(255) NOT NULL
);

CREATE TABLE MarcaServidor (
    MarcaID INT PRIMARY KEY,
    Nombre VARCHAR(255) NOT NULL
);

CREATE TABLE Procesador (
    ProcesadorID INT PRIMARY KEY,
    Modelo VARCHAR(255) NOT NULL,
    Velocidad DECIMAL(5, 2) NOT NULL
);

CREATE TABLE TipoConector (
    ConectorID INT PRIMARY KEY,
    Tipo VARCHAR(255) NOT NULL
);

CREATE TABLE Contrato (
    ContratoID INT PRIMARY KEY,
    Tipo VARCHAR(255) NOT NULL,
    FechaInicio DATE NOT NULL,
    FechaFin DATE NOT NULL
);

CREATE TABLE Almacenamiento (
    AlmacenamientoID INT PRIMARY KEY,
    Tipo VARCHAR(255) NOT NULL,
    Capacidad INT NOT NULL
);

CREATE TABLE Sistemas_operativos (
    SistemaOperativoID INT PRIMARY KEY,
    Nombre VARCHAR(255) NOT NULL,
    Capacidad INT NOT NULL
);

CREATE TABLE memoria (
    MemoriaID INT PRIMARY KEY,
    Tipo VARCHAR(255) NOT NULL,
    Capacidad INT NOT NULL
);

CREATE TABLE Servidor (
    ServidorID INT PRIMARY KEY,
    Modelo VARCHAR(255) NOT NULL,
    MarcaID INT,
    ConsumoEnergeticoID INT,
    ProcesadorID INT,
    ConectorID INT,
    ClienteID INT,
    ContratoID INT,
    SistemaOperativoID INT,
    MemoriaID INT,
    FOREIGN KEY (MarcaID) REFERENCES MarcaServidor(MarcaID),
    FOREIGN KEY (ProcesadorID) REFERENCES Procesador(ProcesadorID),
    FOREIGN KEY (ConectorID) REFERENCES TipoConector(ConectorID),
    FOREIGN KEY (ClienteID) REFERENCES Cliente(ClienteID),
    FOREIGN KEY (ContratoID) REFERENCES Contrato(ContratoID),
    FOREIGN KEY (SistemaOperativoID) REFERENCES Sistemas_operativos(SistemaOperativoID),
    FOREIGN KEY (MemoriaID) REFERENCES Memoria(MemoriaID)
);

CREATE TABLE ServidorAlmacenamiento (
    ServidorID INT,
    AlmacenamientoID INT,
    PRIMARY KEY (ServidorID, AlmacenamientoID),
    FOREIGN KEY (ServidorID) REFERENCES Servidor(ServidorID),
    FOREIGN KEY (AlmacenamientoID) REFERENCES Almacenamiento(AlmacenamientoID)
);

USE serv_admin

CREATE PROCEDURE sp_create_cliente(IN nombre VARCHAR(255), IN direccion VARCHAR(255), IN telefono VARCHAR(20), IN email VARCHAR(255))
BEGIN
    INSERT INTO Cliente (Nombre, Dirección, Teléfono, Email) VALUES (nombre, direccion, telefono, email);
END

CREATE PROCEDURE sp_get_clientes()
BEGIN
    SELECT * FROM Cliente;
END

CREATE PROCEDURE sp_get_cliente_by_id(IN cliente_id INT)
BEGIN
    SELECT * FROM Cliente WHERE ClienteID = cliente_id;
END

CREATE PROCEDURE sp_update_cliente(IN cliente_id INT, IN nombre VARCHAR(255), IN direccion VARCHAR(255), IN telefono VARCHAR(20), IN email VARCHAR(255))
BEGIN
    UPDATE Cliente SET Nombre = nombre, Dirección = direccion, Teléfono = telefono, Email = email WHERE ClienteID = cliente_id;
END

CREATE PROCEDURE sp_delete_cliente(IN cliente_id INT)
BEGIN
    DELETE FROM Cliente WHERE ClienteID = cliente_id;
END


INSERT INTO Cliente (ClienteID, Nombre, Dirección, Teléfono, Email)
VALUES
    (6, 'Cliente A', 'Dirección A', '123456789', 'clienteA@example.com'),
    (7, 'Cliente B', 'Dirección B', '987654321', 'clienteB@example.com');

INSERT INTO MarcaServidor (MarcaID, Nombre)
VALUES
    (1, 'Marca A'),
    (2, 'Marca B');

INSERT INTO Procesador (ProcesadorID, Modelo, Velocidad)
VALUES
    (1, 'Intel i5', 2.5),
    (2, 'AMD Ryzen 5', 3.0);

INSERT INTO TipoConector (ConectorID, Tipo)
VALUES
    (1, 'SATA'),
    (2, 'NVMe');

INSERT INTO Contrato (ContratoID, Tipo, FechaInicio, FechaFin)
VALUES
    (1, 'Contrato A', '2024-01-01', '2024-12-31'),
    (2, 'Contrato B', '2024-02-01', '2024-11-30');

INSERT INTO Almacenamiento (AlmacenamientoID, Tipo, Capacidad)
VALUES
    (1, 'SSD', 256),
    (2, 'HDD', 1024);

    INSERT INTO Servidor (ServidorID, Modelo, MarcaID, ProcesadorID, ConectorID, ClienteID, ContratoID)
VALUES
    (1, 'Modelo A', 1, 1, 1, 4, 1),
    (2, 'Modelo B', 2, 2, 2, 5, 2);

    INSERT INTO ServidorAlmacenamiento (ServidorID, AlmacenamientoID)
VALUES
    (1, 1),
    (1, 2),
    (2, 1);

    SHOW TABLES LIKE 'sistema_operativos';

DESCRIBE sistemas_operativos;


    INSERT INTO sistemas_operativos (SistemaOperativoID, Nombre, Capacidad)
VALUES
    (1, 'Windows', 250),
    (2, 'Linux', 500),
    (3, 'MacOS', 1000);


DESCRIBE memoria;

INSERT INTO memoria (MemoriaID, Tipo, Capacidad)
VALUES
    (1, 'SRAM', 8),
    (2, 'DRAM', 8),
    (3, 'EDO', 12);



    INSERT INTO sistemas_operativos (SistemaOperativoID, Nombre, Capacidad)
VALUES
    (1, 'Windows', 250),
    (2, 'Linux', 500),
    (3, 'MacOS', 1000);

    SHOW TABLES;

    DESCRIBE cliente;

    SHOW CREATE TABLE servidoralmacenamiento;

    SELECT * FROM cliente;

    SELECT * FROM almacenamiento;

    SELECT * FROM contrato;

    SELECT * FROM servidor;