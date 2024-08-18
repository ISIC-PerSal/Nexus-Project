import React from 'react'

const Chile = [
    {
        value: "1",
        label: (
            <div className="d-flex align-items-center">
                <img
                    src="https://regionesdechile.cl/wp-content/uploads/2023/08/bandera-region-de-antofagasta.jpg"
                    alt="Antofagasta"
                    style={{ width: "30px", height: "30px", marginRight: "8px" }}
                />
                Antofagasta
            </div>
        ),
    },
    {
        value: "2",
        label: (
            <div className="d-flex align-items-center">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGggwoQE4PTuwtCc5tRpjzB9pyEdhj6_cueA&"
                    alt=""
                    style={{ width: "30px", height: "30px", marginRight: "8px" }}
                />
                Arica y Parinacota
            </div>
        ),
    },
    {
        value: "3",
        label: (
            <div className="d-flex align-items-center">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Coat_of_arms_of_Atacama%2C_Chile.svg/1200px-Coat_of_arms_of_Atacama%2C_Chile.svg.png"
                    alt=""
                    style={{ width: "30px", height: "30px", marginRight: "8px" }}
                />
                Atacama
            </div>
        ),
    },
    {
        value: "4",
        label: (
            <div className="d-flex align-items-center">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPATrROy7VRVKf12brscy4H_qDzpZdaqUKeQ&s"
                    alt=""
                    style={{ width: "30px", height: "30px", marginRight: "8px" }}
                />
                Aysén
            </div>
        ),
    },
    {
        value: "5",
        label: (
            <div className="d-flex align-items-center">
                <img
                    src="data:image/png;base64,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"
                    alt=""
                    style={{ width: "30px", height: "30px", marginRight: "8px" }}
                />
                Biobío
            </div>
        ),
    },
    {
        value: "6",
        label: (
            <div className="d-flex align-items-center">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Escudo_de_Coquimbo.jpg"
                    alt="Coquimbo"
                    style={{ width: "30px", height: "30px", marginRight: "8px" }}
                />
                Coquimbo
            </div>
        ),
    },
    {
        value: "7",
        label: (
            <div className="d-flex align-items-center">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Coat_of_arms_of_La_Araucania%2C_Chile.svg/1200px-Coat_of_arms_of_La_Araucania%2C_Chile.svg.png"
                    alt="La Araucanía"
                    style={{ width: "30px", height: "30px", marginRight: "8px" }}
                />
                La Araucanía
            </div>
        ),
    },
    {
        value: "8",
        label: (
            <div className="d-flex align-items-center">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/59/Coat_of_arms_of_Los_Lagos_Region%2C_Chile.svg"
                    alt="Los Lagos"
                    style={{ width: "30px", height: "30px", marginRight: "8px" }}
                />
                Los Lagos
            </div>
        ),
    },
    {
        value: "9",
        label: (
            <div className="d-flex align-items-center">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Coat_of_arms_of_Los_R%C3%ADos%2C_Chile.svg/1200px-Coat_of_arms_of_Los_R%C3%ADos%2C_Chile.svg.png"
                    alt="Los Ríos"
                    style={{ width: "30px", height: "30px", marginRight: "8px" }}
                />
                Los Ríos
            </div>
        ),
    },
    {
        value: "10",
        label: (
            <div className="d-flex align-items-center">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Coat_of_Arms_of_Magallanes_Region.svg"
                    alt="Magallanes"
                    style={{ width: "30px", height: "30px", marginRight: "8px" }}
                />
                Magallanes
            </div>
        ),
    },
    {
        value: "11",
        label: (
            <div className="d-flex align-items-center">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Coat_of_arms_of_Maule_Region%2C_Chile.svg"
                    alt="Maule"
                    style={{ width: "30px", height: "30px", marginRight: "8px" }}
                />
                Maule
            </div>
        ),
    },
    {
        value: "12",
        label: (
            <div className="d-flex align-items-center">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Escudo_de_Santiago_%28Chile%29.svg"
                    alt="Metropolitana"
                    style={{ width: "30px", height: "30px", marginRight: "8px" }}
                />
                Metropolitana
            </div>
        ),
    },
    {
        value: "13",
        label: (
            <div className="d-flex align-items-center">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Coat_of_arms_of_O%27Higgins_Region%2C_Chile.svg/857px-Coat_of_arms_of_O%27Higgins_Region%2C_Chile.svg.png"
                    alt="O'Higgins"
                    style={{ width: "30px", height: "30px", marginRight: "8px" }}
                />
                O'Higgins
            </div>
        ),
    },
    {
        value: "14",
        label: (
            <div className="d-flex align-items-center">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Ied-V7rqG2nCD7iAqWnHhlWAFKQmCwklUg&s"
                    alt="Tarapacá"
                    style={{ width: "30px", height: "30px", marginRight: "8px" }}
                />
                Tarapacá
            </div>
        ),
    },
    {
        value: "15",
        label: (
            <div className="d-flex align-items-center">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Coat_of_arms_of_Valparaiso_Region%2C_Chile.svg/1306px-Coat_of_arms_of_Valparaiso_Region%2C_Chile.svg.png"
                    alt="Valparaíso"
                    style={{ width: "30px", height: "30px", marginRight: "8px" }}
                />
                Valparaíso
            </div>
        ),
    },
    {
        value: "16",
        label: (
            <div className="d-flex align-items-center">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/90/Coat_of_arms_of_%C3%91uble%2C_Chile.svg"
                    alt="Ñuble"
                    style={{ width: "30px", height: "30px", marginRight: "8px" }}
                />
                Ñuble
            </div>
        ),
    },
]

export default Chile