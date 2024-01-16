# api/mi_api.py

import json

def handler(req, res):
print("Test nico")
    if req.method == 'POST':
        # Obtiene los datos de la solicitud POST
        data = json.loads(req.body)

        # Realiza alguna lógica con los datos (puedes personalizar esto según tus necesidades)
        resultado = {"mensaje": "¡Solicitud POST recibida con éxito!", "datos": data}

        # Devuelve la respuesta en formato JSON
        res.status(200).json(resultado)
    else:
        res.status(405).json({"error": "Método no permitido"})
