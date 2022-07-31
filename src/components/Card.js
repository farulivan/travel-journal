import React from "react";

export default function Card(props) {
    return (
        <section className="card--container">
            <div className="card--img">
                <img src={`/img/${props.imageFile}`}></img>
            </div>
            <div className="card--text">
                <div className="card--location">
                    <img></img>
                    <p><span className="caps">{props.location}</span></p>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2>{props.title}</h2>
                <p><span className="bold">{props.startDate} - {props.endDate}</span></p>
                <p>{props.description}</p>
            </div>
        </section>
    )
}