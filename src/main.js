// send data to db 
import { post } from 'axios';

const sendDataToDatabase = async (data) => {
  try {
    const response = await post('http://your-api-url.com/db', data);
    console.log('Data sent successfully:', response.data);
  } catch (error) {
    console.error('Error sending data to database:', error);
  }
};

// Пример данных для отправки
const data = {
  name: 'John Doe',
  age: 30,
  email: 'john.doe@example.com'
};

sendDataToDatabase(data);