export default function handler(req, res) {
    if (req.method === 'GET') {
      // Lógica para obtener todos los usuarios
      const users = [
        { id: 1, name: 'Usuario 1' },
        { id: 2, name: 'Usuario 2' },
        { id: 3, name: 'Usuario 3' }
      ];
  
      res.status(200).json(users);
    } else if (req.method === 'POST') {
      // Lógica para crear un nuevo usuario
      const newUser = req.body; // Obtener los datos del nuevo usuario enviados en la solicitud
  
      // ... tu lógica para crear un nuevo usuario
  
      res.status(201).json(newUser);
    } else {
      res.status(405).end(); // Método no permitido
    }
  }
  