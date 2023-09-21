import axios from "axios";


// const params = {
//     headers:{
//         Authorization "bearer " + ProcessingInstruction.env.REACT_APP_STRIPE_APP_KEY,
//     },
// };

export const fetchDataFromApi = async () => {
    try {
        const { data } = await axios.get(
            process.env.REACT_APP_DEV_URL + URL,
            // parms
             );
             return data;
    } catch (error) {
        console.log(error)
        return error;
    }




};
