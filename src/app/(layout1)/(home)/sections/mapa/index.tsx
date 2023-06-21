"use client";
import Leaflet from "leaflet";
import * as ReactLeaflet from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./style.scss";
export default function Mapa() {
  const { MapContainer, TileLayer, Marker, Popup } = ReactLeaflet;
  const iconPerson = new Leaflet.Icon({
    iconUrl: "ponto-rv.webp",
    className: "-ml-5 -mt-14",
  });
  return (
    <div className="mapa">
      <div className="md:flex shadow-lg rounded-2xl">
        <div className="md:w-2/3 h-72 md:h-auto ">
          <MapContainer
            className="rounded-t-2xl md:rounded-tr-none md:rounded-l-2xl w-full h-full "
            center={[-15.799878262188335, -47.86432401661777]}
            zoom={16}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={[-15.799878262188335, -47.86432401661777]}
              icon={iconPerson}
            >
              <Popup>
                <p className="title-popup">Câmara dos Deputados</p>
                <p className="text-popup">
                  Palácio do Congresso Nacional - Praça dos Três Poderes
                  Brasília - DF - Brasil - CEP 70160-900
                </p>
                {/* <p className="text-popup">curtidas: <strong>{items.likes}</strong></p> */}
              </Popup>
            </Marker>
          </MapContainer>
        </div>

        <div className="bg-vermelho-1 py-10 sm:py-20 md:py-36 md:w-1/3 rounded-b-2xl md:rounded-bl-none md:rounded-r-2xl px-14">
          <p className="text-base text-white mb-5">
            <strong>
              Câmara dos Deputados - Palácio do Congresso Nacional - Praça dos
              Três Poderes Brasília - DF - Brasil - CEP 70160-900
            </strong>
          </p>
          <p className="text-base text-white">
            <strong>(61) 3322.9999</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
