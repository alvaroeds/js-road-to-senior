CREATE TABLE tiendas (
    id VARCHAR(50) PRIMARY KEY,
    packaging_cost DECIMAL(10, 2),
    social_network JSONB,
    id_url VARCHAR(255),
    schedule JSONB,
    local_direction VARCHAR(255),
    description TEXT,
    packaging_cost_on_pick_up BOOLEAN,
    delivery_cost DECIMAL(10, 2),
    packaging_cost_on_delivery BOOLEAN,
    profile_image VARCHAR(255),
    name VARCHAR(255),
    banner_url VARCHAR(255),
    services_available JSONB,
    allow_all_address_orders BOOLEAN,
    delivery_type VARCHAR(50)
);

CREATE TABLE telefonos_tienda (
    tienda_id VARCHAR(50) REFERENCES tiendas(id),
    country_code VARCHAR(10),
    phone_number VARCHAR(20),
    PRIMARY KEY (tienda_id, phone_number)
);

CREATE TABLE zonas_entrega (
    tienda_id VARCHAR(50) REFERENCES tiendas(id),
    cost DECIMAL(10, 2),
    name VARCHAR(100),
    active BOOLEAN,
    uuid UUID PRIMARY KEY
);

CREATE TABLE metodos_pago (
    tienda_id VARCHAR(50) REFERENCES tiendas(id),
    isActive BOOLEAN,
    runtimeType VARCHAR(50),
    method VARCHAR(50),
    uuid UUID
);

CREATE TABLE categorias (
    tienda_id VARCHAR(50) REFERENCES tiendas(id),
    uuid UUID PRIMARY KEY,
    name VARCHAR(255),
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    state VARCHAR(50),
    isVisible BOOLEAN,
    schedule JSONB
);

CREATE TABLE productos (
    categoria_id UUID REFERENCES categorias(uuid),
    uuid UUID PRIMARY KEY,
    name VARCHAR(255),
    description TEXT,
    price DECIMAL(10, 2),
    hasPackagingCost BOOLEAN,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    state VARCHAR(50),
    isVisible BOOLEAN
);

CREATE TABLE modificadores (
    tienda_id VARCHAR(50) REFERENCES tiendas(id),
    type VARCHAR(50), -- Puede ser 'chooseForAmount', 'multipleSelection', 'oneSelection'
    uuid UUID PRIMARY KEY,
    name VARCHAR(255),
    minimumQuantity INT,
    maximumQuantity INT,
    isRequired BOOLEAN
);

CREATE TABLE opciones_modificadores (
    modificador_uuid UUID REFERENCES modificadores(uuid),
    uuid UUID PRIMARY KEY,
    name VARCHAR(255),
    price DECIMAL(10, 2),
    limit INT,
    isAvailable BOOLEAN
);
