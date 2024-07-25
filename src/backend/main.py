import json
import keras
import sqlite3
import numpy as np
from flask_cors import CORS
from flask import Flask, Response, request

app = Flask(__name__)
model = keras.saving.load_model("model.keras")
CORS(app)


def database() -> sqlite3.Connection:
    return sqlite3.connect("database.sqlite")


@app.route("/")
def root():
    return Response(
        str(database().cursor().execute("SELECT COUNT(*) FROM Fires").fetchone()[0])
        + " Wildfires"
    )


@app.route("/year/<int:year>")
def get_wildfires_by_year(year: int):
    db = database()
    fires = db.execute(
        "SELECT FIRE_NAME, FIRE_YEAR, FIRE_SIZE, FIRE_SIZE_CLASS, DISCOVERY_DOY, CONT_DOY, STAT_CAUSE_DESCR, LONGITUDE, LATITUDE FROM Fires WHERE FIRE_YEAR=?",
        (year,),
    ).fetchall()

    count = db.execute(
        "SELECT STAT_CAUSE_DESCR, COUNT(*) FROM Fires WHERE FIRE_YEAR = ? GROUP BY STAT_CAUSE_DESCR",
        (year,),
    ).fetchall()

    return Response(json.dumps({"fires": fires, "count": count}))


@app.route("/predict", methods=["POST"])
def predict():
    CLASS_MAP = {0: "A", 1: "B", 2: "C", 3: "D", 4: "E", 5: "F", 6: "G"}

    data = request.json
    prediction = np.argmax(
        model.predict(
            [
                np.array([data["latitude"]]),
                np.array([data["longitude"]]),
                np.array([data["day"]]),
            ]
        )
    )
    prediction = CLASS_MAP[prediction]
    return Response(json.dumps({"prediction": prediction}))


if __name__ == "__main__":
    app.run(debug=True, port=5000)
