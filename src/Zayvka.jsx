import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Image, Button } from 'react-bootstrap';
import mesto from './mesto.png'; // Убедитесь, что путь к изображению указан правильно
import './Zayvka.css'; // Импортируйте CSS файл

function Zayvka() {
    const [image, setImage] = useState(null);
    const [phone, setPhone] = useState('');
    const [longitude, setLongitude] = useState('');
    const [latitude, setLatitude] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setLongitude(longitude.toFixed(4));
            setLatitude(latitude.toFixed(4));
        });
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!image) {
            console.error('Файл изображения не выбран');
            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onloadend = async () => {
            const base64Image = reader.result.split(',')[1]; // Извлекаем base64-строку из Data URL

            const applicationData = {
                photo: base64Image,
                phone_number: phone,
                longitude: parseFloat(longitude),
                latitude: parseFloat(latitude),
                description: description
            };

            try {
                const response = await axios.post('http://localhost:8000/applications/', applicationData, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                console.log('Заявка успешно отправлена:', response.data);
            } catch (error) {
                console.error('Ошибка при отправке заявки:', error);
            }
        };
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
    };

    return (
        <div className="form-container">
            <Form onSubmit={handleSubmit} style={{ width: '450px' }}>
                <h2 className="form-header">Заявка</h2>
                <Form.Group controlId="image">
                    <Form.Label>Загрузить фотографию</Form.Label>
                    <Form.Control type="file" accept=".jpg, .jpeg, .png" onChange={handleImageChange} />
                </Form.Group>
                {image && (
                    <div style={{ textAlign: 'center', margin: '20px 0' }}>
                        <Image src={URL.createObjectURL(image)} fluid style={{ maxWidth: '50px', height: 'auto' }} />
                    </div>
                )}

                <Form.Group controlId="Phone">
                    <Form.Label>Номер телефона</Form.Label>
                    <Form.Control type="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="longitude">
                    <Form.Label>Долгота</Form.Label>
                    <Form.Control type="text" value={longitude} readOnly className="location-border" />
                </Form.Group>

                <Form.Group controlId="latitude">
                    <Form.Label>Широта</Form.Label>
                    <Form.Control type="text" value={latitude} readOnly className="location-border" />
                </Form.Group>

                <Form.Group controlId="description">
                    <Form.Label>Описание</Form.Label>
                    <Form.Control as="textarea" rows={5} value={description} onChange={(e) => setDescription(e.target.value)} />
                </Form.Group>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <Button 
                        variant="primary" 
                        type="submit"
                        className="custom-button"
                    >
                        Отправить заявку
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default Zayvka;
