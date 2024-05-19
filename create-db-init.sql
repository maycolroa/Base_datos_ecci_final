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