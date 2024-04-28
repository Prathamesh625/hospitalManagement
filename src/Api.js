import axios from "axios";
import { useActionData } from "react-router";

const baseUrl = 'http://localhost:7600/api/v1'


export const CreateUser = async (username,password) => {

    const response = await axios.post(`${baseUrl}/create/user`, {

        username: username,

        password: password
        
    })

    return response;

}


//   signing in user api call

export const SignInUser = async (username , password) => {

    const response = await axios.post(`${baseUrl}/find/user`, {
      
        username: username,
        
        password: password,
    
    });
    
  return response;
};



export const CreateNewPatient = async (patient , bed) => {

    const { name, age, contact, address } = patient;
   
 
    
    console.log(patient , bed)
    
    

    const response = await axios.post(`${baseUrl}/create/patient`, {
      
        patient_name: name,
        age: age,
        contact: contact,
        address: address,
        room_no: bed.room,
        bed_no: bed.bed

  });

  return response;
};


export const GetPatientsList = async () => {
    const response = await axios.get(`${baseUrl}/get/all/patient`);
    return response;
}


export const FindPatient = async (patient_id) => {
    
    const response = await axios.get(`${baseUrl}/find/patient?patient_id=${patient_id}`)
    return response;


}





export const addPrescription = async (medicine,time ,patient_id) => {

    const response = await axios.post(`${baseUrl}/add/prescription`, {
        
        patient_id:patient_id,

        medicine: medicine,

        time: time
    
  });

  return response;
};




// get all rooms


export const getRooms = async (hospital_id) => {
  const response = await axios.get(
    `${baseUrl}/get/all/rooms?hospital_id=${hospital_id}`
  );
  return response;
};

export const getSingleRoom = async (hospital_id , room) => {
  const response = await axios.get(
    `${baseUrl}/get/single/room?hospital_id=${hospital_id}&room_no=${room}`
  );
  return response;
};


export const getPrescription = async (hospital_id,time) => {
  const response = await axios.get(
    `${baseUrl}/find/prescription/with/time?hospital_id=${hospital_id}&time=${time}`
  );
  return response;
};


export const getAllPrescription = async () => {
  
  const response = await axios.get(
    `${baseUrl}/get/all/prescription`
  );
  return response;
};